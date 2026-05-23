"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

export function AvailabilitySearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [checkIn, setCheckIn] = useState(searchParams.get("checkIn") ?? "");
  const [checkOut, setCheckOut] = useState(searchParams.get("checkOut") ?? "");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    router.push(`/booking/rooms${params.toString() ? `?${params}` : ""}`);
  }

  return (
    <form className="availability-search" onSubmit={submit}>
      <label>
        Check In
        <input value={checkIn} onChange={(event) => setCheckIn(event.target.value)} type="date" />
      </label>
      <label>
        Check Out
        <input value={checkOut} onChange={(event) => setCheckOut(event.target.value)} type="date" />
      </label>
      <button className="button button-primary focus-ring">Check Availability</button>
    </form>
  );
}
