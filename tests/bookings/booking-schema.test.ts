import { describe, expect, it } from "vitest";
import { bookingRequestSchema } from "../../src/lib/bookings/booking-schema";

const validBooking = {
  guestName: "Ama Mensah",
  email: "ama@example.com",
  phone: "+233538830832",
  roomSlug: "standard-room",
  arrivalDate: "2026-07-01",
  departureDate: "2026-07-03",
  guests: 2,
  notes: "Late check-in",
};

describe("bookingRequestSchema", () => {
  it("accepts valid booking requests", () => {
    expect(bookingRequestSchema.safeParse(validBooking).success).toBe(true);
  });

  it("rejects missing required fields and invalid date ranges", () => {
    const parsed = bookingRequestSchema.safeParse({
      ...validBooking,
      guestName: "",
      email: "wrong",
      departureDate: "2026-06-30",
    });

    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      expect(errors.guestName?.[0]).toBe("Guest name is required");
      expect(errors.email?.[0]).toBe("A valid email is required");
      expect(errors.departureDate?.[0]).toBe("Departure date must be after arrival date");
    }
  });
});
