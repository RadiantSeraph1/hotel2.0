"use client";

import { useState, type FormEvent } from "react";
import type { Room } from "@/lib/content/hotel-content";

type Props = {
  rooms: Room[];
  selectedRoom?: string;
};

type BookingResponse = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

function formValue(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

export function BookingForm({ rooms, selectedRoom = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "failed">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    setErrors({});

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        guestName: formValue(form, "guestName"),
        email: formValue(form, "email"),
        phone: formValue(form, "phone"),
        roomSlug: formValue(form, "roomSlug"),
        arrivalDate: formValue(form, "arrivalDate"),
        departureDate: formValue(form, "departureDate"),
        guests: Number(formValue(form, "guests") || "1"),
        notes: formValue(form, "notes") || undefined,
      }),
    });
    const result = (await response.json()) as BookingResponse;

    if (!response.ok || !result.ok) {
      setStatus("failed");
      setErrors(result.errors ?? {});
      setMessage(result.message ?? "Please check the form and try again.");
      return;
    }

    setStatus("sent");
    setMessage(result.message ?? "Booking request received.");
    event.currentTarget.reset();
  }

  const fieldError = (key: string) => errors[key]?.[0] ? <span className="error">{errors[key]?.[0]}</span> : null;

  return (
    <form className="form card" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Full name
          <input name="guestName" required />
          {fieldError("guestName")}
        </label>
        <label>
          Email
          <input name="email" type="email" required />
          {fieldError("email")}
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required />
          {fieldError("phone")}
        </label>
        <label>
          Room
          <select name="roomSlug" defaultValue={selectedRoom} required>
            <option value="" disabled>Select a room</option>
            {rooms.map((room) => (
              <option value={room.slug} key={room.slug}>{room.name}</option>
            ))}
          </select>
          {fieldError("roomSlug")}
        </label>
        <label>
          Arrival
          <input name="arrivalDate" type="date" required />
          {fieldError("arrivalDate")}
        </label>
        <label>
          Departure
          <input name="departureDate" type="date" required />
          {fieldError("departureDate")}
        </label>
        <label>
          Guests
          <input name="guests" type="number" min="1" defaultValue="1" required />
          {fieldError("guests")}
        </label>
      </div>
      <label>
        Special requests
        <textarea name="notes" rows={5} />
      </label>
      <button className="button button-primary focus-ring" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit booking request"}
      </button>
      {message ? <p className={status === "sent" ? "success" : "error"}>{message}</p> : null}
    </form>
  );
}
