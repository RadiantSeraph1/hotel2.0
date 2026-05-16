import { AdminShell } from "@/components/admin/admin-shell";
import { seededBookings } from "@/components/admin/admin-data";

export default function AdminBookingsPage() {
  return (
    <AdminShell
      title="Booking Requests"
      description="Review native booking requests before approval, decline, or customer contact."
    >
      <div className="card">
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["ID", "Guest", "Room", "Dates", "Guests", "Status", "Phone"].map((heading) => (
                  <th key={heading} style={{ textAlign: "left", padding: 12 }}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {seededBookings.map((booking) => (
                <tr key={booking.id}>
                  <td style={{ padding: 12 }}>{booking.id}</td>
                  <td style={{ padding: 12 }}>{booking.guestName}</td>
                  <td style={{ padding: 12 }}>{booking.roomName}</td>
                  <td style={{ padding: 12 }}>{booking.arrivalDate} to {booking.departureDate}</td>
                  <td style={{ padding: 12 }}>{booking.guests}</td>
                  <td style={{ padding: 12 }}>{booking.status}</td>
                  <td style={{ padding: 12 }}>{booking.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
