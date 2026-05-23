import Image from "next/image";
import Link from "next/link";
import { hotel } from "@/lib/content/hotel-content";

export default function BookingLoginPage() {
  return (
    <main className="booking-auth-page">
      <section className="booking-auth-card">
        <div className="booking-auth-brand">
          <Image src={hotel.logo} alt={hotel.name} width={228} height={221} priority />
          <div>
            <span>Gift B</span>
            <strong>Golden Palace</strong>
          </div>
        </div>
        <h1>HMS Booking</h1>
        <div className="booking-auth-tabs" aria-label="Account actions">
          <Link className="active focus-ring" href="/booking/login">
            Sign In
          </Link>
          <Link className="focus-ring" href="/booking/register">
            Create Account
          </Link>
          <Link className="focus-ring" href="/booking/reset-password">
            Reset Password
          </Link>
        </div>
        <form className="booking-auth-form">
          <label>
            Email Address
            <input type="email" placeholder="your email address" />
          </label>
          <label>
            Password
            <input type="password" placeholder="password" />
          </label>
          <Link className="button button-primary focus-ring" href="/booking/rooms">
            Sign In
          </Link>
        </form>
        <p>
          Guests can continue without an account and still receive email, SMS, and WhatsApp
          confirmation after staff review.
        </p>
      </section>
    </main>
  );
}
