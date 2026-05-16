import { Resend } from "resend";
import type { StoredBookingRequest } from "./booking-repository";
import { hotel, rooms } from "@/lib/content/hotel-content";

type NotificationChannel = "customer-email" | "hotel-email" | "sms" | "whatsapp";

type NotificationResult = {
  channel: NotificationChannel;
  sent: boolean;
  reason?: string;
};

function roomName(roomSlug: string) {
  return rooms.find((room) => room.slug === roomSlug)?.name ?? roomSlug;
}

function confirmationText(booking: StoredBookingRequest) {
  return `Hello ${booking.guestName}, your booking request ${booking.id} for ${roomName(booking.roomSlug)} at ${hotel.name} has been received. We will confirm availability shortly.`;
}

async function sendCustomerEmail(booking: StoredBookingRequest): Promise<NotificationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from || !booking.email) {
    return { channel: "customer-email", sent: false, reason: "Resend is not configured" };
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to: booking.email,
    subject: `${hotel.name} booking request received`,
    html: `<p>Hello ${booking.guestName},</p><p>Your booking request <strong>${booking.id}</strong> for <strong>${roomName(booking.roomSlug)}</strong> has been received.</p><p>Arrival: ${booking.arrivalDate}<br/>Departure: ${booking.departureDate}</p><p>We will confirm availability shortly.</p>`,
  });

  return { channel: "customer-email", sent: true };
}

async function sendHotelEmail(booking: StoredBookingRequest): Promise<NotificationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.HOTEL_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) {
    return { channel: "hotel-email", sent: false, reason: "Hotel email is not configured" };
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to,
    subject: `New booking request ${booking.id}`,
    html: `<p><strong>${booking.guestName}</strong> requested ${roomName(booking.roomSlug)}.</p><p>Email: ${booking.email}<br/>Phone: ${booking.phone}<br/>Guests: ${booking.guests}</p><p>Arrival: ${booking.arrivalDate}<br/>Departure: ${booking.departureDate}</p><p>${booking.notes ?? ""}</p>`,
  });

  return { channel: "hotel-email", sent: true };
}

async function sendMnotifySms(booking: StoredBookingRequest): Promise<NotificationResult> {
  const apiKey = process.env.MNOTIFY_API_KEY;
  const sender = process.env.MNOTIFY_SENDER_ID ?? "GiftBGolden";

  if (!apiKey) {
    return { channel: "sms", sent: false, reason: "Mnotify is not configured" };
  }

  const response = await fetch(`https://api.mnotify.com/api/sms/quick?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      recipient: [booking.phone],
      sender,
      message: confirmationText(booking),
      is_schedule: false,
      schedule_date: "",
    }),
  });

  if (!response.ok) {
    return { channel: "sms", sent: false, reason: `Mnotify returned ${response.status}` };
  }

  return { channel: "sms", sent: true };
}

async function sendBirdWhatsapp(booking: StoredBookingRequest): Promise<NotificationResult> {
  const accessKey = process.env.BIRD_ACCESS_KEY;
  const workspaceId = process.env.BIRD_WORKSPACE_ID;
  const channelId = process.env.BIRD_CHANNEL_ID;

  if (!accessKey || !workspaceId || !channelId) {
    return { channel: "whatsapp", sent: false, reason: "Bird WhatsApp is not configured" };
  }

  const response = await fetch(`https://api.bird.com/workspaces/${workspaceId}/channels/${channelId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `AccessKey ${accessKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      receiver: { contacts: [{ identifierValue: booking.phone }] },
      body: { type: "text", text: { text: confirmationText(booking) } },
    }),
  });

  if (!response.ok) {
    return { channel: "whatsapp", sent: false, reason: `Bird returned ${response.status}` };
  }

  return { channel: "whatsapp", sent: true };
}

async function captureNotification(
  channel: NotificationChannel,
  task: () => Promise<NotificationResult>,
) {
  try {
    return await task();
  } catch (error) {
    return {
      channel,
      sent: false,
      reason: error instanceof Error ? error.message : "Notification failed",
    } satisfies NotificationResult;
  }
}

export async function sendBookingNotifications(booking: StoredBookingRequest) {
  return Promise.all([
    captureNotification("customer-email", () => sendCustomerEmail(booking)),
    captureNotification("hotel-email", () => sendHotelEmail(booking)),
    captureNotification("sms", () => sendMnotifySms(booking)),
    captureNotification("whatsapp", () => sendBirdWhatsapp(booking)),
  ]);
}
