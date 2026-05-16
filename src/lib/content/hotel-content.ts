export type Room = {
  slug: string;
  name: string;
  rate: string;
  summary: string;
  amenities: string[];
  image: string;
};

export type Amenity = {
  title: string;
  description: string;
  image: string;
};

export type Review = {
  id: string;
  guestName: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  status: "published" | "hidden";
};

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
};

export type GalleryItem = {
  title: string;
  image: string;
};

export const hotel = {
  name: "Golden Gift Palace Hotel",
  shortName: "Gift B Golden",
  location: "Tarkwa - Western Region",
  email: "booking@giftbgolden.com",
  phone: "+233 53 883 0832",
  bookingDomain: "https://booking.giftbgolden.com",
  description:
    "Golden Gift Palace Hotel is a 50-bed ultra-modern 4-star hotel built to serve Tarkwa and guests who want high-end comfort without travelling back to Accra or Takoradi.",
};

export const stats = [
  { value: "50", label: "Hotel beds" },
  { value: "4", label: "Star positioning" },
  { value: "3", label: "Core amenities" },
  { value: "1", label: "Tarkwa destination" },
];

export const rooms: Room[] = [
  {
    slug: "deluxe-ground-floor",
    name: "Deluxe Ground Floor",
    rate: "GHS 600 / night",
    summary: "Comfortable ground-floor room for business and leisure guests.",
    amenities: ["Digital satellite TV", "Wi-Fi", "Tea and coffee", "Shower"],
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/22.jpeg",
  },
  {
    slug: "standard-room",
    name: "Standard Room",
    rate: "Request rate",
    summary: "Modern standard accommodation for short stays in Tarkwa.",
    amenities: ["Queen bed", "Wi-Fi", "Safety box", "Mini bar"],
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/13.jpeg",
  },
  {
    slug: "executive-suite",
    name: "Executive Suite",
    rate: "Request rate",
    summary: "Suite option for guests who need more room and privacy.",
    amenities: ["King bed", "Kitchenette", "Mini bar", "Work area"],
    image: "https://giftbgolden.com/wp-content/uploads/2025/12/l5-800x600.jpeg",
  },
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    rate: "Request rate",
    summary: "Top room category for premium stays and executive visits.",
    amenities: ["Second bedroom option", "Kitchenette", "Satellite TV", "Wi-Fi"],
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/p4.jpeg",
  },
];

export const amenities: Amenity[] = [
  {
    title: "Bar & Restaurants",
    description:
      "Local and continental dishes with guest-selected drinks in a relaxed hotel setting.",
    image: "https://giftbgolden.com/wp-content/uploads/2025/12/l5-800x600.jpeg",
  },
  {
    title: "Pool",
    description: "An infinity-edge pool for refreshing, relaxing, and rejuvenating stays.",
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/13.jpeg",
  },
  {
    title: "Casino",
    description: "Casino games and recreational entertainment for guests.",
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/p4.jpeg",
  },
  {
    title: "Conference Rooms",
    description: "Meeting spaces for business crews, events, and group sessions.",
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/22.jpeg",
  },
  {
    title: "Fitness Gym",
    description: "Fitness and wellness support for in-house guests.",
    image: "https://giftbgolden.com/wp-content/uploads/2025/12/l5-800x600.jpeg",
  },
  {
    title: "Shuttle Services",
    description: "Transport support for guests and arranged hotel movements.",
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/p4.jpeg",
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Golden Gift Palace exterior",
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/p4.jpeg",
  },
  {
    title: "Deluxe guest room",
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/22.jpeg",
  },
  {
    title: "Hotel lounge",
    image: "https://giftbgolden.com/wp-content/uploads/2025/12/l5-800x600.jpeg",
  },
  {
    title: "Poolside leisure",
    image: "https://giftbgolden.com/wp-content/uploads/2024/10/13.jpeg",
  },
];

export const reviews: Review[] = [
  {
    id: "review-business",
    guestName: "Nana Yeboah",
    location: "Accra",
    rating: 5,
    quote:
      "A strong addition to Tarkwa. The room felt modern and the restaurant made the business stay easier.",
    status: "published",
  },
  {
    id: "review-weekend",
    guestName: "Afia Mensah",
    location: "Takoradi",
    rating: 5,
    quote:
      "The pool and restaurant gave us the weekend break we wanted without leaving Tarkwa.",
    status: "published",
  },
  {
    id: "review-meeting",
    guestName: "Kojo Asare",
    location: "Kumasi",
    rating: 4,
    quote:
      "Good setup for meetings and team travel, with rooms and food service in one place.",
    status: "published",
  },
];

export const news: NewsItem[] = [
  {
    slug: "best-guest-houses-in-tarkwa",
    title: "Best Guest Houses in Tarkwa and Prices",
    date: "March 31, 2026",
    author: "giftbgolden",
    excerpt:
      "Tarkwa offers a wide range of accommodation options for travelers, workers, and visitors.",
  },
  {
    slug: "how-big-is-tarkwa",
    title: "How Big Is Tarkwa? Population, Size & Growth Explained",
    date: "March 30, 2026",
    author: "giftbgolden",
    excerpt:
      "Tarkwa is one of the largest and most important towns in the Western Region of Ghana.",
  },
  {
    slug: "communities-in-tarkwa",
    title: "Communities in Tarkwa - Full List of Areas and Neighborhoods",
    date: "March 30, 2026",
    author: "giftbgolden",
    excerpt:
      "A guide to communities and neighborhoods around Tarkwa in the Western Region.",
  },
  {
    slug: "book-hotel-online",
    title: "How to Book a Hotel in Tarkwa Online",
    date: "March 27, 2026",
    author: "giftbgolden",
    excerpt:
      "Booking a hotel online is now the easiest and most efficient way to plan a stay.",
  },
];
