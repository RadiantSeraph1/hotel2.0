import { AdminShell } from "@/components/admin/admin-shell";
import { ReviewCards } from "@/components/public/sections";
import { reviews } from "@/lib/content/hotel-content";

export default function AdminReviewsPage() {
  return (
    <AdminShell title="Reviews" description="Manage guest review visibility and quotes.">
      <ReviewCards reviews={reviews} />
    </AdminShell>
  );
}
