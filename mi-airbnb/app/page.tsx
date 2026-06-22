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

  const popularSections = useMemo(() => {
    const baseSections = [
      { title: "Alojamientos populares en Buenos Aires", offset: 0 },
      { title: "Alojamientos populares en Rio de Janeiro", offset: 2 },
      { title: "Alojamientos populares en Barcelona", offset: 4 },
    ];

    if (filteredRooms.length === 0) {
      return baseSections.map((section) => ({ ...section, rooms: [] as Accommodation[] }));
    }

    const buildSevenRooms = (offset: number) =>
      Array.from({ length: 7 }, (_, index) => {
        const roomIndex = (index + offset) % filteredRooms.length;
        return filteredRooms[roomIndex];
      });

    return baseSections.map((section) => ({
      title: section.title,
      offset: section.offset,
      rooms: buildSevenRooms(section.offset),
    }));
  }, [filteredRooms]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
      <HeaderNav searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="mx-auto max-w-[1700px] px-4 py-9 md:px-10">
        <section className="space-y-5">
          {popularSections.map((section) => (
            <div key={section.title} className="space-y-5">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl leading-tight font-extrabold text-zinc-900 md:text-[41px]">
                  {section.title}
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
                <AccommodationGrid rooms={section.rooms} />
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
