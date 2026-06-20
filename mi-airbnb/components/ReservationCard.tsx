"use client";

import { useState } from "react";

interface ReservationCardProps {
  pricePerNight: number;
  minGuests?: number;
  maxGuests?: number;
}

export function ReservationCard({
  pricePerNight,
  minGuests = 1,
  maxGuests = 8,
}: ReservationCardProps) {
  const [guests, setGuests] = useState(minGuests);

  const decrementGuests = () => {
    setGuests((currentGuests) => Math.max(minGuests, currentGuests - 1));
  };

  const incrementGuests = () => {
    setGuests((currentGuests) => Math.min(maxGuests, currentGuests + 1));
  };

  return (
    <aside className="space-y-4 md:sticky md:top-24">
      <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
        <span className="text-[22px] text-rose-500">⏰</span>
        <p className="text-[20px] leading-6 font-semibold text-zinc-700">
          ¡Date prisa! Solo quedan 3 horas para reservar
        </p>
      </div>

      <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <p className="text-[42px] leading-[1.05] font-extrabold text-zinc-900">
          ${Math.round(pricePerNight * 7 * 57)} UYU
          <span className="ml-2 text-[17px] font-semibold text-zinc-600">por 7 noches</span>
        </p>

        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-600">Huespedes</p>
          <div className="flex items-center justify-between rounded-xl border border-zinc-200 p-2">
            <button
              type="button"
              onClick={decrementGuests}
              className="rounded-full border border-zinc-300 px-3 py-1 text-sm font-semibold text-zinc-700 disabled:opacity-50"
              disabled={guests === minGuests}
            >
              -
            </button>
            <p className="text-sm font-semibold text-zinc-800">{guests}</p>
            <button
              type="button"
              onClick={incrementGuests}
              className="rounded-full border border-zinc-300 px-3 py-1 text-sm font-semibold text-zinc-700 disabled:opacity-50"
              disabled={guests === maxGuests}
            >
              +
            </button>
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
        >
          Reservar
        </button>
      </div>
    </aside>
  );
}
