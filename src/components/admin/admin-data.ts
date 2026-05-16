import { amenities, news, reviews, rooms } from "@/lib/content/hotel-content";
import type { BookingStatus } from "@/lib/bookings/booking-repository";

export const seededBookings = [
  {
    id: "GBG-1001",
    guestName: "Ama Mensah",
    roomName: "Executive Suite",
    status: "new" as BookingStatus,
    arrivalDate: "2026-07-04",
    departureDate: "2026-07-07",
    guests: 2,
    phone: "+233 53 000 0000",
  },
  {
    id: "GBG-1000",
    guestName: "Kojo Asare",
    roomName: "Deluxe Ground Floor",
    status: "approved" as BookingStatus,
    arrivalDate: "2026-06-20",
    departureDate: "2026-06-22",
    guests: 1,
    phone: "+233 24 000 0000",
  },
];

export const adminContentCounts = {
  rooms: rooms.length,
  amenities: amenities.length,
  reviews: reviews.length,
  news: news.length,
};
