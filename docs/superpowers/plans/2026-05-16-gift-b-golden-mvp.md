# Gift B Golden MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first Gift B Golden hotel website and booking CMS MVP in a separate repo.

**Architecture:** One Next.js App Router project. Public content and admin seed data live in typed modules. Booking validation and persistence are isolated under `src/lib/bookings`. Imported source-site assets live under `public/imported/giftbgolden` with a generated manifest.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Zod, Supabase-ready schema, Vitest, Playwright.

---

## Tasks

1. Scaffold Next.js, config, env template, tests, lint.
2. Import source website assets and generate manifest.
3. Add typed content model for hotel, rooms, amenities, reviews, news, gallery.
4. Add booking validation, repository fallback, API route, and tests.
5. Build public pages and booking form.
6. Build admin CMS shell and booking dashboard.
7. Add Supabase migration for future real database connection.
8. Verify, commit, and push to `origin/main`.
