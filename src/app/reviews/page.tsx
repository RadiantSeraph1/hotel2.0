import { ReviewCards, SectionHeading } from "@/components/public/sections";
import { SiteShell } from "@/components/public/site-shell";
import { reviews } from "@/lib/content/hotel-content";

export default function ReviewsPage() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Reviews</p>
            <h1>Guest reviews</h1>
            <p>Published feedback for room comfort, food, meetings, and leisure stays.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Published reviews" title="What guests say" />
            <ReviewCards reviews={reviews.filter((review) => review.status === "published")} />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
