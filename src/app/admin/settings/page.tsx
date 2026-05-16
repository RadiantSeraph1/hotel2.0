import { AdminShell } from "@/components/admin/admin-shell";
import { hotel } from "@/lib/content/hotel-content";

export default function AdminSettingsPage() {
  return (
    <AdminShell title="Settings" description="Hotel contact and launch configuration.">
      <div className="card">
        <h3>{hotel.name}</h3>
        <p>{hotel.location}</p>
        <p>{hotel.phone}</p>
        <p>{hotel.email}</p>
        <p>Supabase and notification provider keys belong in environment variables.</p>
      </div>
    </AdminShell>
  );
}
