import { notFound } from "next/navigation";
import { Baby, Building2, Users } from "lucide-react";
import { BookingShell } from "@/components/booking/booking-shell";
import { RoomGallery } from "@/components/booking/room-gallery";
import { BookingForm } from "@/components/public/booking-form";
import { rooms } from "@/lib/content/hotel-content";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function BookingRoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = rooms.find((candidate) => candidate.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <BookingShell>
      <main className="booking-detail-page">
        <RoomGallery images={room.gallery} title={room.name} />
        <section className="booking-detail-grid">
          <div>
            <h1>{room.name}</h1>
            <div className="booking-capacity">
              <span>
                <Users size={17} aria-hidden="true" />
                Up to {room.adults} adults
              </span>
              <span>
                <Baby size={17} aria-hidden="true" />
                {room.children} children
              </span>
              <span>
                <Building2 size={17} aria-hidden="true" />
                Max {room.maxGuests} guests
              </span>
            </div>
            <p className="booking-room-description">{room.description}</p>
            <div className="booking-pricing">
              <p className="eyebrow">Pricing</p>
              {room.prices.map((price) => (
                <div className="booking-price-row" key={`${price.label}-${price.amount}`}>
                  <span>{price.label}</span>
                  <strong>{price.amount}</strong>
                </div>
              ))}
            </div>
          </div>
          <aside>
            <div className="card booking-side-card">
              <h2>Book This Room</h2>
              <BookingForm rooms={rooms} selectedRoom={room.slug} compact />
            </div>
          </aside>
        </section>
      </main>
    </BookingShell>
  );
}
