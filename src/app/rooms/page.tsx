import { RoomCards, SectionHeading } from "@/components/public/sections";
import { SiteShell } from "@/components/public/site-shell";
import { hotel, rooms } from "@/lib/content/hotel-content";

export default function RoomsPage() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Rooms</p>
            <h1>Rooms at {hotel.shortName}</h1>
            <p>Browse the main room categories and send a booking request for your dates.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Room categories" title="Choose the right stay" />
            <RoomCards rooms={rooms} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
