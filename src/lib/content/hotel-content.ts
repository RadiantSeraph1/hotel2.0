export type Room = {
  slug: string;
  name: string;
  rate: string;
  summary: string;
  amenities: string[];
  image: string;
  gallery: string[];
  adults: number;
  children: number;
  maxGuests: number;
  description: string;
  prices: Array<{
    label: string;
    amount: string;
  }>;
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
  logo: "/images/gift-b-golden/logo-full.png",
  logoMark: "/images/gift-b-golden/logo-mark.png",
  heroImage: "/images/gift-b-golden/hotel-hero.jpeg",
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
    image: "/images/gift-b-golden/hotel-room-1.jpeg",
    gallery: [
      "/images/gift-b-golden/hotel-room-1.jpeg",
      "/images/gift-b-golden/hotel-amenity-2.jpeg",
    ],
    adults: 2,
    children: 2,
    maxGuests: 4,
    description:
      "The Deluxe Ground Floor room is designed for guests who want easy access, comfort, and a calm stay. It includes a cozy bed, clean bathroom, in-room essentials, Wi-Fi, and a practical layout for short business or leisure visits.",
    prices: [
      { label: "Best available rate", amount: "GHS 600/night" },
      { label: "Flexible check-in", amount: "Request rate" },
    ],
  },
  {
    slug: "standard-room",
    name: "Superior",
    rate: "Request rate",
    summary: "Enhanced comfort, modern styling, and standard stay amenities.",
    amenities: ["Queen bed", "Wi-Fi", "Safety box", "Mini bar"],
    image: "/images/gift-b-golden/hotel-room-2.jpeg",
    gallery: [
      "/images/gift-b-golden/hotel-room-2.jpeg",
      "/images/gift-b-golden/hotel-room-1.jpeg",
    ],
    adults: 2,
    children: 2,
    maxGuests: 4,
    description:
      "The Superior room gives guests a warmer, more spacious stay with modern furnishing, air conditioning, fast Wi-Fi, a flat-screen TV, and thoughtful details for business and leisure travelers.",
    prices: [
      { label: "Default", amount: "GHS 1,000/night" },
      { label: "Weekend rate", amount: "GHS 827/night" },
      { label: "Promo rate", amount: "GHS 661/night" },
    ],
  },
  {
    slug: "executive-suite",
    name: "Executive",
    rate: "Request rate",
    summary: "Suite option for guests who need more room and privacy.",
    amenities: ["King bed", "Kitchenette", "Mini bar", "Work area"],
    image: "/images/gift-b-golden/hotel-amenity-1.jpeg",
    gallery: [
      "/images/gift-b-golden/hotel-amenity-1.jpeg",
      "/images/gift-b-golden/hotel-room-2.jpeg",
    ],
    adults: 2,
    children: 2,
    maxGuests: 4,
    description:
      "The Executive room adds premium in-room space for guests who need more privacy, comfort, and work-ready amenities during their Tarkwa stay.",
    prices: [
      { label: "Best available rate", amount: "Pricing on request" },
      { label: "Corporate stay", amount: "Request rate" },
    ],
  },
  {
    slug: "presidential-suite",
    name: "VIP",
    rate: "Request rate",
    summary: "Top room category for premium stays and executive visits.",
    amenities: ["Second bedroom option", "Kitchenette", "Satellite TV", "Wi-Fi"],
    image: "/images/gift-b-golden/hotel-hero.jpeg",
    gallery: [
      "/images/gift-b-golden/hotel-hero.jpeg",
      "/images/gift-b-golden/hotel-amenity-3.jpeg",
    ],
    adults: 3,
    children: 3,
    maxGuests: 6,
    description:
      "The VIP room is the premium option for executive visits, private stays, and guests who want the most spacious accommodation profile at Golden Gift Palace Hotel.",
    prices: [
      { label: "Best available rate", amount: "Pricing on request" },
      { label: "Executive package", amount: "Request rate" },
    ],
  },
];

export const amenities: Amenity[] = [
  {
    title: "Bar & Restaurants",
    description:
      "Local and continental dishes with guest-selected drinks in a relaxed hotel setting.",
    image: "/images/gift-b-golden/hotel-amenity-1.jpeg",
  },
  {
    title: "Pool",
    description: "An infinity-edge pool for refreshing, relaxing, and rejuvenating stays.",
    image: "/images/gift-b-golden/hotel-amenity-2.jpeg",
  },
  {
    title: "Casino",
    description: "Casino games and recreational entertainment for guests.",
    image: "/images/gift-b-golden/hotel-amenity-3.jpeg",
  },
  {
    title: "Conference Rooms",
    description: "Meeting spaces for business crews, events, and group sessions.",
    image: "/images/gift-b-golden/hotel-room-1.jpeg",
  },
  {
    title: "Fitness Gym",
    description: "Fitness and wellness support for in-house guests.",
    image: "/images/gift-b-golden/hotel-amenity-1.jpeg",
  },
  {
    title: "Shuttle Services",
    description: "Transport support for guests and arranged hotel movements.",
    image: "/images/gift-b-golden/hotel-hero.jpeg",
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "Golden Gift Palace exterior",
    image: "/images/gift-b-golden/hotel-hero.jpeg",
  },
  {
    title: "Deluxe guest room",
    image: "/images/gift-b-golden/hotel-room-1.jpeg",
  },
  {
    title: "Hotel lounge",
    image: "/images/gift-b-golden/hotel-room-2.jpeg",
  },
  {
    title: "Poolside leisure",
    image: "/images/gift-b-golden/hotel-amenity-2.jpeg",
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
