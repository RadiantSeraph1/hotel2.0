import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { hotel } from "@/lib/content/hotel-content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand focus-ring" href="/">
            <Image src={hotel.logo} alt={hotel.name} width={228} height={221} priority />
            <span>
              {hotel.shortName}
              <small>Golden Gift Palace Hotel</small>
            </span>
          </Link>
          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link className="focus-ring" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="button button-primary focus-ring" href="/booking">
            <CalendarDays size={18} aria-hidden="true" />
            Book
          </Link>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Image className="footer-logo" src={hotel.logoMark} alt={hotel.name} width={120} height={116} />
            <h2>{hotel.name}</h2>
            <p>{hotel.description}</p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>{hotel.location}</p>
            <p>{hotel.phone}</p>
            <p>{hotel.email}</p>
          </div>
          <div>
            <h2>Explore</h2>
            {navItems.map((item) => (
              <p key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </p>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
