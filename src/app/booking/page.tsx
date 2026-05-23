import { BookingForm } from "@/components/public/booking-form";
import { SectionHeading } from "@/components/public/sections";
import { SiteShell } from "@/components/public/site-shell";
import { hotel, rooms } from "@/lib/content/hotel-content";

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ room?: string }>;
}) {
  const { room } = await searchParams;

  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Booking request</p>
            <h1>Request availability</h1>
            <p>Submit your stay details. Staff will confirm availability before the request becomes a booking.</p>
          </div>
        </section>
        <section className="section">
          <div className="container booking-grid">
            <div>
              <SectionHeading eyebrow="Stay details" title="Send a booking request" />
              <BookingForm rooms={rooms} selectedRoom={room ?? ""} />
            </div>
            <aside className="card">
              <h3>Need help?</h3>
              <p>{hotel.phone}</p>
              <p>{hotel.email}</p>
              <p className="form-help">You can also use the existing booking portal as a fallback: {hotel.bookingDomain}</p>
              <a className="button button-outline focus-ring" href="/booking/login">
                Open booking portal
              </a>
            </aside>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
