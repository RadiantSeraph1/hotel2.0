import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Gift Palace Hotel | Tarkwa",
  description:
    "Golden Gift Palace Hotel in Tarkwa with rooms, amenities, gallery, reviews, news, and booking requests.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
