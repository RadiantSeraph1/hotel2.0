import { AdminShell } from "@/components/admin/admin-shell";
import { adminContentCounts, seededBookings } from "@/components/admin/admin-data";

export default function AdminDashboard() {
  return (
    <AdminShell
      title="Dashboard"
      description="Operational view for Gift B Golden bookings, CMS content, and launch readiness."
    >
      <div className="grid-4">
        <div className="card stat"><strong>{seededBookings.length}</strong><span>Booking requests</span></div>
        <div className="card stat"><strong>{adminContentCounts.rooms}</strong><span>Rooms</span></div>
        <div className="card stat"><strong>{adminContentCounts.amenities}</strong><span>Amenities</span></div>
        <div className="card stat"><strong>{adminContentCounts.news}</strong><span>News posts</span></div>
      </div>
    </AdminShell>
  );
}
