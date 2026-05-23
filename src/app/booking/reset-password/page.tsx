import Link from "next/link";
import { BookingShell } from "@/components/booking/booking-shell";

export default function ResetPasswordPage() {
  return (
    <BookingShell>
      <main className="booking-simple-page">
        <section className="card booking-account-card">
          <p className="eyebrow">Reset Password</p>
          <h1>Recover your booking account</h1>
          <p>Enter the email address used for your booking account. Staff can also help recover a booking by phone number.</p>
          <form className="form">
            <label>
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>
            <Link className="button button-primary focus-ring" href="/booking/login">
              Send Reset Link
            </Link>
          </form>
        </section>
      </main>
    </BookingShell>
  );
}
