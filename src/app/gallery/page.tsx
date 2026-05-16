import Image from "next/image";
import { SectionHeading } from "@/components/public/sections";
import { SiteShell } from "@/components/public/site-shell";
import { gallery } from "@/lib/content/hotel-content";

export default function GalleryPage() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Gallery</p>
            <h1>Hotel spaces to showcase</h1>
            <p>Imported visual references from the current Gift B Golden website for rooms, guest spaces, and amenities.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Media library" title="Rooms, amenities, and guest spaces" />
            <div className="grid-4">
              {gallery.map((item) => (
                <div className="card media-card" key={item.title}>
                  <Image className="media-image" src={item.image} alt={item.title} width={800} height={600} />
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
