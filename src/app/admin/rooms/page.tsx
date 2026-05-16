import { AdminShell } from "@/components/admin/admin-shell";
import { RoomCards } from "@/components/public/sections";
import { rooms } from "@/lib/content/hotel-content";

export default function AdminRoomsPage() {
  return (
    <AdminShell title="Rooms" description="Seeded room content ready for CMS editing.">
      <RoomCards rooms={rooms} />
    </AdminShell>
  );
}
