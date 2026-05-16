import type { BookingRequestInput } from "./booking-schema";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type BookingStatus = "new" | "contacted" | "approved" | "declined" | "cancelled";

export type StoredBookingRequest = BookingRequestInput & {
  id: string;
  status: BookingStatus;
  submittedAt: string;
};

export async function createBookingRequest(
  input: BookingRequestInput,
): Promise<StoredBookingRequest> {
  const fallbackBooking: StoredBookingRequest = {
    ...input,
    id: `GBG-${Date.now()}`,
    status: "new",
    submittedAt: new Date().toISOString(),
  };

  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return fallbackBooking;
  }

  const { data, error } = await supabase
    .from("booking_requests")
    .insert({
      guest_name: input.guestName,
      email: input.email,
      phone: input.phone,
      room_slug: input.roomSlug,
      arrival_date: input.arrivalDate,
      departure_date: input.departureDate,
      guests: input.guests,
      notes: input.notes ?? null,
      status: "new",
    })
    .select("id,status,submitted_at")
    .single();

  if (error || !data) {
    console.error("Failed to persist booking request", error);
    return fallbackBooking;
  }

  return {
    ...input,
    id: data.id,
    status: data.status as BookingStatus,
    submittedAt: data.submitted_at,
  };
}
