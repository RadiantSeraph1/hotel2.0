import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const pages = [
  "https://giftbgolden.com/",
  "https://giftbgolden.com/amenities/",
  "https://giftbgolden.com/gallery/",
  "https://giftbgolden.com/contact/",
  "https://giftbgolden.com/about-us/",
];

const outDir = path.join(process.cwd(), "public", "imported", "giftbgolden");
const manifestPath = path.join(process.cwd(), "src", "lib", "assets", "imported-assets.ts");

function absoluteUrl(src, base) {
  return new URL(src, base).toString();
}

function filenameFromUrl(url, index, contentType) {
  const parsed = new URL(url);
  const extFromType = contentType?.includes("png")
    ? ".png"
    : contentType?.includes("webp")
      ? ".webp"
      : contentType?.includes("svg")
        ? ".svg"
        : ".jpg";
  const raw = path.basename(parsed.pathname) || `asset-${index}${extFromType}`;
  const safe = raw.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
  const ext = path.extname(safe) ? "" : extFromType;
  const hash = crypto.createHash("sha1").update(url).digest("hex").slice(0, 10);
  return `${String(index).padStart(2, "0")}-${path.basename(safe, path.extname(safe))}-${hash}${path.extname(safe) || ext}`;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  await mkdir(path.dirname(manifestPath), { recursive: true });

  const urls = new Map();
  for (const page of pages) {
    try {
      const html = await fetch(page).then((res) => res.text());
      for (const match of html.matchAll(/<(?:img|source)[^>]+(?:src|data-src|data-lazy-src)=["']([^"']+)["']/gi)) {
        const src = match[1];
        if (!src || src.startsWith("data:")) continue;
        const url = absoluteUrl(src, page);
        if (/\.(png|jpe?g|webp|gif|svg)(\?|$)/i.test(url)) {
          const current = urls.get(url) ?? { sourcePages: new Set() };
          current.sourcePages.add(page);
          urls.set(url, current);
        }
      }
    } catch (error) {
      console.warn(`Skipped ${page}: ${error.message}`);
    }
  }

  const records = [];
  let index = 1;
  for (const [url, metadata] of urls) {
    const response = await fetch(url).catch(() => null);
    if (!response?.ok) continue;
    const contentType = response.headers.get("content-type") ?? "application/octet-stream";
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 500) continue;
    const filename = filenameFromUrl(url, index, contentType);
    await writeFile(path.join(outDir, filename), bytes);
    records.push({
      id: path.basename(filename, path.extname(filename)),
      src: `/imported/giftbgolden/${filename}`,
      originalUrl: url,
      sourcePages: Array.from(metadata.sourcePages),
      contentType,
      byteLength: bytes.length,
    });
    index += 1;
  }

  await writeFile(
    manifestPath,
    `export const importedGiftBGoldenAssets = ${JSON.stringify(records, null, 2)} as const;\n`,
  );
  console.log(`Imported ${records.length} assets`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
