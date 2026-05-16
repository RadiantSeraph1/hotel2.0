import { AmenityCards, SectionHeading } from "@/components/public/sections";
import { SiteShell } from "@/components/public/site-shell";
import { amenities } from "@/lib/content/hotel-content";

export default function AmenitiesPage() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Amenities</p>
            <h1>Hotel services beyond the room</h1>
            <p>Bar and restaurants, infinity pool, casino, conference rooms, gym, and shuttle services.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="What guests can use" title="Amenities from the original hotel site" />
            <AmenityCards amenities={amenities} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
