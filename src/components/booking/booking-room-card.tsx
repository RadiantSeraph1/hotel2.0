import Image from "next/image";
import Link from "next/link";
import { Baby, Building2, Users } from "lucide-react";
import type { Room } from "@/lib/content/hotel-content";

export function BookingRoomCard({ room }: { room: Room }) {
  return (
    <article className="booking-room-card">
      <div className="booking-room-image">
        <Image src={room.image} alt={room.name} width={900} height={620} />
        <span>{room.maxGuests} guests max</span>
      </div>
      <div className="booking-room-body">
        <div className="booking-room-rate">
          <p className="eyebrow">Best available rate</p>
          <div>
            <strong>{room.rate}</strong>
            <small>Includes standard stay amenities</small>
          </div>
        </div>
        <h2>{room.name}</h2>
        <div className="booking-pills">
          <span>
            <Users size={15} aria-hidden="true" />
            {room.adults} adults
          </span>
          <span>
            <Baby size={15} aria-hidden="true" />
            {room.children} children
          </span>
          <span>
            <Building2 size={15} aria-hidden="true" />
            {room.maxGuests} guests max
          </span>
        </div>
        <p>{room.summary}</p>
        <div className="booking-room-meta">
          <strong>Instant confirmation request</strong>
          <strong>Flexible check-in support</strong>
        </div>
        <Link className="button button-outline focus-ring" href={`/booking/rooms/${room.slug}`}>
          View Details
        </Link>
      </div>
    </article>
  );
}
