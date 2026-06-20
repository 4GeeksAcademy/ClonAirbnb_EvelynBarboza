"use client";

import { useEffect, useMemo, useState } from "react";
import { AccommodationGrid } from "@/components/AccommodationGrid";
import { HeaderNav } from "@/components/HeaderNav";
import { LoadingState } from "@/components/LoadingState";
import { accommodations } from "@/app/data/accommodations";
import type { Accommodation } from "@/types/accommodation";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState<Accommodation[]>([]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setRooms(accommodations);
      setLoading(false);
    }, 900);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const filteredRooms = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return rooms.filter((room) => room.title.toLowerCase().includes(normalizedSearch));
  }, [rooms, searchTerm]);

  const firstSectionRooms = useMemo(() => {
    if (filteredRooms.length === 0) {
      return [];
    }

    const sevenRooms = [...filteredRooms];

    let index = 0;
    while (sevenRooms.length < 7) {
      sevenRooms.push(filteredRooms[index % filteredRooms.length]);
      index += 1;
    }

    return sevenRooms.slice(0, 7);
  }, [filteredRooms]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
      <HeaderNav searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="mx-auto max-w-[1700px] px-4 py-9 md:px-10">
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h1 className="text-[40px] leading-tight font-extrabold text-zinc-900 md:text-[41px]">
              Alojamientos populares en Buenos Aires
            </h1>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                className="grid h-12 w-12 place-items-center rounded-full bg-zinc-100 text-[26px] text-zinc-400"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                type="button"
                className="grid h-12 w-12 place-items-center rounded-full bg-zinc-100 text-[26px] text-zinc-700"
                aria-label="Siguiente"
              >
                ›
              </button>
            </div>
          </div>

          {loading ? (
            <LoadingState label="Buscando alojamientos para ti..." />
          ) : (
            <AccommodationGrid rooms={firstSectionRooms} />
          )}
        </section>
      </main>
    </div>
  );
}
