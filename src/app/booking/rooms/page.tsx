import Image from "next/image";
import { Suspense } from "react";
import { AvailabilitySearch } from "@/components/booking/availability-search";
import { BookingRoomCard } from "@/components/booking/booking-room-card";
import { BookingShell } from "@/components/booking/booking-shell";
import { hotel, rooms } from "@/lib/content/hotel-content";

export default function BookingRoomsPage() {
  return (
    <BookingShell>
      <main>
        <section className="booking-room-hero">
          <Image src={hotel.logoMark} alt={hotel.name} width={120} height={116} priority />
          <h1>Find Your Perfect Room</h1>
          <p>Experience the best hospitality any hotel can offer in Tarkwa.</p>
          <Suspense fallback={<div className="availability-search-placeholder" />}>
            <AvailabilitySearch />
          </Suspense>
        </section>
        <section className="booking-room-list">
          <div className="booking-room-grid">
            {rooms.map((room) => (
              <BookingRoomCard room={room} key={room.slug} />
            ))}
          </div>
        </section>
      </main>
    </BookingShell>
  );
}
