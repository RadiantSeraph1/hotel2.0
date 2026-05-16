import { AdminShell } from "@/components/admin/admin-shell";
import { NewsCards } from "@/components/public/sections";
import { news } from "@/lib/content/hotel-content";

export default function AdminNewsPage() {
  return (
    <AdminShell title="News" description="Manage Gift B Golden news and Tarkwa guides.">
      <NewsCards news={news} />
    </AdminShell>
  );
}
