import Link from "next/link";
import { BookingShell } from "@/components/booking/booking-shell";

export default function RegisterPage() {
  return (
    <BookingShell>
      <main className="booking-simple-page">
        <section className="card booking-account-card">
          <p className="eyebrow">Create Account</p>
          <h1>Create your booking account</h1>
          <form className="form">
            <label>
              Full name
              <input placeholder="Your full name" />
            </label>
            <label>
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Phone number
              <input type="tel" placeholder="+233..." />
            </label>
            <label>
              Password
              <input type="password" placeholder="Choose a password" />
            </label>
            <Link className="button button-primary focus-ring" href="/booking/rooms">
              Create Account
            </Link>
          </form>
        </section>
      </main>
    </BookingShell>
  );
}
