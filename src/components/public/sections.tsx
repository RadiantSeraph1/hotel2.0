import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import type { Amenity, NewsItem, Review, Room } from "@/lib/content/hotel-content";

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function RoomCards({ rooms }: { rooms: Room[] }) {
  return (
    <div className="grid-3">
      {rooms.map((room) => (
        <article className="card media-card" key={room.slug}>
          <Image className="media-image" src={room.image} alt={room.name} width={800} height={600} />
          <p className="eyebrow">{room.rate}</p>
          <h3>{room.name}</h3>
          <p>{room.summary}</p>
          <p>{room.amenities.join(" - ")}</p>
          <Link className="button button-outline focus-ring" href={`/booking?room=${room.slug}`}>
            Request room
          </Link>
        </article>
      ))}
    </div>
  );
}

export function AmenityCards({ amenities }: { amenities: Amenity[] }) {
  return (
    <div className="grid-3">
      {amenities.map((amenity) => (
        <article className="card media-card" key={amenity.title}>
          <Image className="media-image" src={amenity.image} alt={amenity.title} width={800} height={600} />
          <h3>{amenity.title}</h3>
          <p>{amenity.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ReviewCards({ reviews }: { reviews: Review[] }) {
  return (
    <div className="grid-3">
      {reviews.map((review) => (
        <article className="card" key={review.id}>
          <div style={{ display: "flex", gap: 4, color: "var(--brand)" }}>
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} size={17} fill={index < review.rating ? "currentColor" : "none"} />
            ))}
          </div>
          <h3>{review.guestName}</h3>
          <p>{review.location}</p>
          <p>&quot;{review.quote}&quot;</p>
        </article>
      ))}
    </div>
  );
}

export function NewsCards({ news }: { news: NewsItem[] }) {
  return (
    <div className="grid-3">
      {news.map((item) => (
        <article className="card" key={item.slug}>
          <p className="eyebrow">
            {item.date} - {item.author}
          </p>
          <h3>{item.title}</h3>
          <p>{item.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
