import Link from "next/link";
import { BookingShell } from "@/components/booking/booking-shell";

const sampleBookings = [
  {
    id: "GBG-DEMO-1001",
    room: "Superior",
    dates: "Pending selected dates",
    status: "Awaiting confirmation",
  },
];

export default function MyBookingsPage() {
  return (
    <BookingShell>
      <main className="booking-simple-page">
        <section className="booking-account-card">
          <p className="eyebrow">My Bookings</p>
          <h1>Track your stay requests</h1>
          <p>After a customer submits a booking request, this screen can show live Supabase booking status by email or account.</p>
          <div className="booking-status-list">
            {sampleBookings.map((booking) => (
              <article className="card" key={booking.id}>
                <strong>{booking.id}</strong>
                <h2>{booking.room}</h2>
                <p>{booking.dates}</p>
                <span>{booking.status}</span>
              </article>
            ))}
          </div>
          <Link className="button button-primary focus-ring" href="/booking/rooms">
            Find another room
          </Link>
        </section>
      </main>
    </BookingShell>
  );
}
