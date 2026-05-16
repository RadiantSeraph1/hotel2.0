import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/bookings", label: "Booking Requests" },
  { href: "/admin/rooms", label: "Rooms" },
  { href: "/admin/amenities", label: "Amenities" },
  { href: "/admin/reviews", label: "Reviews" },
  { href: "/admin/news", label: "News" },
  { href: "/admin/settings", label: "Settings" },
];

export function AdminShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f5ec" }}>
      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", minHeight: "100vh" }}>
        <aside style={{ background: "#24180a", color: "#fff", padding: 24 }}>
          <p className="eyebrow">Gift B Golden</p>
          <h1>CMS Admin</h1>
          <nav style={{ display: "grid", gap: 8, marginTop: 24 }}>
            {navItems.map((item) => (
              <Link className="focus-ring" href={item.href} key={item.href} style={{ padding: 12, borderRadius: 8, color: "#fff" }}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section>
          <header style={{ borderBottom: "1px solid var(--line)", background: "#fff", padding: 28 }}>
            <p className="eyebrow">Staff workspace</p>
            <h2 style={{ margin: 0, color: "var(--brand-dark)", fontSize: 36 }}>{title}</h2>
            <p style={{ color: "var(--muted)" }}>{description}</p>
          </header>
          <div style={{ padding: 28 }}>{children}</div>
        </section>
      </div>
    </main>
  );
}
