import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Hotel, LogOut } from "lucide-react";
import { hotel } from "@/lib/content/hotel-content";

const bookingNav = [
  { href: "/booking/rooms", label: "Rooms" },
  { href: "/booking/my-bookings", label: "My Bookings" },
];

export function BookingShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="booking-portal">
      <header className="booking-header">
        <Link className="booking-brand focus-ring" href="/booking/rooms">
          <Image src={hotel.logo} alt={hotel.name} width={228} height={221} priority />
          <span>
            Gift B
            <small>Golden Palace</small>
          </span>
        </Link>
        <nav className="booking-nav" aria-label="Booking portal navigation">
          {bookingNav.map((item) => (
            <Link className="focus-ring" href={item.href} key={item.href}>
              {item.label === "My Bookings" ? <Hotel size={16} aria-hidden="true" /> : null}
              {item.label}
            </Link>
          ))}
          <Link className="booking-user focus-ring" href="/booking/login">
            Guest Account
          </Link>
          <Link className="button button-outline focus-ring" href="/">
            <LogOut size={16} aria-hidden="true" />
            Exit
          </Link>
        </nav>
      </header>
      {children}
      <footer className="booking-footer">
        <CalendarDays size={16} aria-hidden="true" />
        Booking requests are confirmed by Golden Gift Palace staff before payment or arrival.
      </footer>
    </div>
  );
}
