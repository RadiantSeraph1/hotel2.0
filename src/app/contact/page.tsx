import Link from "next/link";
import { SiteShell } from "@/components/public/site-shell";
import { hotel } from "@/lib/content/hotel-content";

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Contact</p>
            <h1>Contact {hotel.shortName}</h1>
            <p>Reach Golden Gift Palace Hotel for booking requests, amenities, events, and guest questions.</p>
          </div>
        </section>
        <section className="section">
          <div className="container booking-grid">
            <div className="card">
              <h3>Hotel contact</h3>
              <p>{hotel.location}</p>
              <p>{hotel.phone}</p>
              <p>{hotel.email}</p>
              <Link className="button button-primary focus-ring" href="/booking">Request booking</Link>
            </div>
            <div className="card">
              <h3>Booking portal</h3>
              <p>The original site links rooms to a separate booking portal. The new app also includes a native booking request system.</p>
              <Link className="button button-outline focus-ring" href={hotel.bookingDomain}>Open booking portal</Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
