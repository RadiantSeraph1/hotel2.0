import { NextResponse } from "next/server";
import { bookingRequestSchema } from "@/lib/bookings/booking-schema";
import { createBookingRequest } from "@/lib/bookings/booking-repository";
import { sendBookingNotifications } from "@/lib/bookings/booking-notifications";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = bookingRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const booking = await createBookingRequest(parsed.data);
  const notifications = await sendBookingNotifications(booking);

  return NextResponse.json({
    ok: true,
    bookingId: booking.id,
    notifications,
    message:
      "Your booking request has been received. Golden Gift Palace Hotel will confirm availability shortly.",
  });
}
