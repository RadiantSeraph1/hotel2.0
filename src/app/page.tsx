import Link from "next/link";
import { AmenityCards, NewsCards, ReviewCards, RoomCards, SectionHeading } from "@/components/public/sections";
import { SiteShell } from "@/components/public/site-shell";
import { amenities, hotel, news, reviews, rooms, stats } from "@/lib/content/hotel-content";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">{hotel.location}</p>
            <h1>{hotel.name}</h1>
            <p>{hotel.description}</p>
            <div className="hero-actions">
              <Link className="button button-primary focus-ring" href="/booking">
                Request booking
              </Link>
              <Link className="button button-outline focus-ring" href="/rooms">
                View rooms
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid-4">
            {stats.map((stat) => (
              <div className="card stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <SectionHeading
              eyebrow="Rooms"
              title="Rooms and suites for Tarkwa stays"
              copy="Start with the known room categories from the original site and send a request for availability."
            />
            <RoomCards rooms={rooms.slice(0, 3)} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Amenities"
              title="Dining, pool, casino, meetings, and wellness"
              copy="Golden Gift Palace Hotel combines room stays with hospitality services guests expect from an ultra-modern hotel."
            />
            <AmenityCards amenities={amenities.slice(0, 6)} />
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <SectionHeading
              eyebrow="Guest reviews"
              title="Guest notes from the palace"
              copy="Reviews are CMS-ready content and can later be replaced with real customer feedback."
            />
            <ReviewCards reviews={reviews.filter((review) => review.status === "published")} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="News & Events" title="Latest from Gift B Golden" />
            <NewsCards news={news.slice(0, 3)} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
