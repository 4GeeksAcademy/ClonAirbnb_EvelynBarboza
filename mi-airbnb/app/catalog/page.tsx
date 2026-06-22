"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AccommodationCard } from "@/components/AccommodationCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { accommodations } from "@/app/data/accommodations";
import type { SortOrder } from "@/types/accommodation";

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("price-asc");
  const filters = [
    "Filtros",
    "Estacionamiento gratuito",
    "Lavadora",
    "Cancelacion gratuita",
    "Cocina",
    "Wifi",
    "Mas de 1 bano",
    "Aire acondicionado",
    "Calefaccion",
    "Televisor",
    "Se permiten mascotas",
  ];

  const sortedRooms = useMemo(() => {
    const rooms = [...accommodations];

    rooms.sort((a, b) => {
      if (sortOrder === "price-asc") {
        return a.pricePerNight - b.pricePerNight;
      }

      return b.pricePerNight - a.pricePerNight;
    });

    return rooms;
  }, [sortOrder]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-[#f7f7f7]">
        <div className="mx-auto flex max-w-[1700px] items-center justify-between gap-5 px-4 py-4 md:px-10">
          <Link href="/" className="flex items-center gap-2 text-rose-500">
            <span className="text-[16px] leading-none font-black md:text-[17px]">A</span>
            <span className="text-[18px] leading-none font-extrabold md:text-[20px]">airbnb</span>
          </Link>

          <div className="hidden min-w-[620px] items-center rounded-full border border-zinc-300 bg-white px-4 py-2 shadow-sm md:flex">
            <span className="mr-2 text-[20px]">🏠</span>
            <p className="border-r border-zinc-200 pr-4 text-[16px] font-semibold text-zinc-700">
              Alojamientos en San Carlos de Bariloche
            </p>
            <p className="border-r border-zinc-200 px-4 text-[16px] font-semibold text-zinc-700">
              25 de oct – 1 de nov
            </p>
            <p className="px-4 text-[16px] font-semibold text-zinc-700">2 huespedes</p>
            <button
              type="button"
              className="ml-auto grid h-10 w-10 place-items-center rounded-full bg-rose-500 text-[19px] text-white"
              aria-label="Buscar"
            >
              ⌕
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden text-[16px] font-bold text-zinc-700 md:inline-flex md:text-[18px]"
              aria-label="Conviertete en anfitrion"
            >
              Conviertete en anfitrion
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-zinc-200 text-[16px] md:h-12 md:w-12 md:text-[18px]"
              aria-label="Idioma"
            >
              🌐
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-zinc-200 text-[16px] md:h-12 md:w-12 md:text-[18px]"
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-[1700px] overflow-x-auto px-4 pb-4 md:px-10">
          <div className="flex min-w-max items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-[14px] font-medium text-zinc-700"
              >
                {filter}
              </button>
            ))}
            <label htmlFor="sort" className="sr-only">
              Ordenar por
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as SortOrder)}
              className="ml-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-[14px] font-medium text-zinc-700"
            >
              <option value="price-asc">Precio ascendente</option>
              <option value="price-desc">Precio descendente</option>
            </select>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1700px] px-4 py-6 md:px-10 md:py-8">
        <section className="grid gap-6 md:grid-cols-2 md:h-[calc(100vh-186px)]">
          <div className="space-y-6 md:overflow-y-auto md:pr-3">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="text-2xl leading-tight font-extrabold text-zinc-900 md:text-[43px] md:leading-[1.05]">
                Mas de {sortedRooms.length} alojamientos en San Carlos de Bariloche
              </h1>

              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-700 md:text-[15px]">
                <span className="text-[20px]">🏷️</span>
                Los precios incluyen todas las tarifas
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {sortedRooms.map((room) => (
                <AccommodationCard key={room.id} room={room} mode="catalog" />
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-0 md:h-full">
            <MapPlaceholder />
          </div>
        </section>
      </main>
    </div>
  );
}
