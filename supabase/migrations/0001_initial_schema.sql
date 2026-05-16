create extension if not exists "pgcrypto";

create table if not exists public.rooms (
  slug text primary key,
  name text not null,
  rate text not null,
  summary text not null,
  amenities text[] not null default '{}',
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.amenities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  icon text,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  location text not null,
  rating integer not null check (rating between 1 and 5),
  quote text not null,
  status text not null default 'published' check (status in ('published', 'hidden')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.news (
  slug text primary key,
  title text not null,
  published_at date not null,
  author text not null,
  excerpt text not null,
  body text,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.booking_requests (
  id text primary key default ('GBG-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 10))),
  guest_name text not null,
  email text not null,
  phone text not null,
  room_slug text not null,
  arrival_date date not null,
  departure_date date not null,
  guests integer not null check (guests > 0),
  notes text,
  status text not null default 'new' check (status in ('new', 'contacted', 'approved', 'declined', 'cancelled')),
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists booking_requests_status_idx on public.booking_requests (status);
create index if not exists booking_requests_submitted_at_idx on public.booking_requests (submitted_at desc);
