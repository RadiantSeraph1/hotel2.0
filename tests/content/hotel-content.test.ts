import { describe, expect, it } from "vitest";
import { amenities, hotel, news, reviews, rooms, stats } from "../../src/lib/content/hotel-content";

describe("Gift B Golden content", () => {
  it("keeps original hotel identity and contact details", () => {
    expect(hotel.name).toBe("Golden Gift Palace Hotel");
    expect(hotel.email).toBe("booking@giftbgolden.com");
    expect(hotel.phone).toBe("+233 53 883 0832");
    expect(stats[0]).toEqual({ value: "50", label: "Hotel beds" });
  });

  it("includes original amenities, room categories, news, and reviews", () => {
    expect(amenities.map((amenity) => amenity.title)).toContain("Bar & Restaurants");
    expect(amenities.map((amenity) => amenity.title)).toContain("Pool");
    expect(amenities.map((amenity) => amenity.title)).toContain("Casino");
    expect(rooms.length).toBeGreaterThanOrEqual(4);
    expect(news).toHaveLength(4);
    expect(reviews.filter((review) => review.status === "published")).toHaveLength(3);
  });
});
