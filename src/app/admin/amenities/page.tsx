import { AdminShell } from "@/components/admin/admin-shell";
import { AmenityCards } from "@/components/public/sections";
import { amenities } from "@/lib/content/hotel-content";

export default function AdminAmenitiesPage() {
  return (
    <AdminShell title="Amenities" description="Manage amenities shown on the public site.">
      <AmenityCards amenities={amenities} />
    </AdminShell>
  );
}
