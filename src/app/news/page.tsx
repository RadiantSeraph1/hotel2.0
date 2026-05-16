import { NewsCards, SectionHeading } from "@/components/public/sections";
import { SiteShell } from "@/components/public/site-shell";
import { news } from "@/lib/content/hotel-content";

export default function NewsPage() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">News & Events</p>
            <h1>Hotel news and Tarkwa guides</h1>
            <p>Article cards based on the original site&apos;s news and events section.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Articles" title="Latest posts" />
            <NewsCards news={news} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
