# Gift B Golden Hotel Redesign Design

Date: 2026-05-16

## Goal

Build a separate Next.js project for `https://giftbgolden.com/` in `C:\Users\nanak\Documents\gift-b-golden`, connected to `https://github.com/RadiantSeraph1/hotel2.0.git`. The new site should preserve the original Golden Gift Palace Hotel content, pull usable images/logo assets, improve the UI/UX, and include a booking request system with admin visibility.

## Public Site

Pages:

- Home
- Rooms
- Amenities
- Gallery
- News & Events
- Reviews
- Contact
- Booking

Core content from the original site:

- Brand: Golden Gift Palace Hotel.
- Positioning: 50-bed ultra-modern 4-star hotel in Tarkwa, Western Region.
- Contact: `booking@giftbgolden.com`, `+233 53 883 0832`, Tarkwa - Western Region.
- Amenities: Bar & Restaurants, Pool, Casino.
- Existing booking domain can remain a secondary outbound link, but the new site must include its own booking request form.
- News/events content should be represented as editable article cards.

## Booking System

The booking flow is request-based:

- Customer submits name, email, phone, room type, arrival/departure dates, guests, and special requests.
- App validates and stores the request.
- Customer sees a request-received confirmation.
- Admin dashboard lists booking requests and statuses: `new`, `contacted`, `approved`, `declined`, `cancelled`.
- Notification providers can be added later behind wrappers; the first MVP must not hard-code secrets.

## CMS/Admin

Admin routes should include:

- Dashboard
- Booking Requests
- Rooms
- Amenities
- Gallery
- Reviews
- News
- Settings

The first version can use seed/mock admin data, but the schema and code should be ready to connect to Supabase.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase-ready schema and service client boundary
- Zod for booking validation
- Vitest for tests
- Playwright for local route verification

## Asset Import

Pull usable logo and image assets from the current Gift B Golden website and store them under `public/imported/giftbgolden`. Generate a source metadata manifest in `src/lib/assets/imported-assets.ts`.

## Verification

Required before completion:

- `npm.cmd test`
- `npm.cmd run lint`
- `npm.cmd run build`
- Local route checks for home, booking, admin bookings, amenities, gallery, reviews, news
