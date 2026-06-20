"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAccommodationById } from "@/app/data/accommodations";
import { DetailTopNav } from "@/components/DetailTopNav";
import { LoadingState } from "@/components/LoadingState";
import { ReservationCard } from "@/components/ReservationCard";
import { RoomGallery } from "@/components/RoomGallery";
import type { Accommodation } from "@/types/accommodation";

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();
  const roomId = params.id;

  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState<Accommodation | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const selectedRoom = getAccommodationById(roomId);
      setRoom(selectedRoom ?? null);
      setLoading(false);
    }, 900);

    return () => window.clearTimeout(timeoutId);
  }, [roomId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
        <DetailTopNav />
        <main className="mx-auto max-w-[1240px] px-4 py-8 md:px-8">
          <LoadingState label="Cargando detalle de la habitacion..." />
        </main>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
        <DetailTopNav />
        <main className="mx-auto max-w-3xl space-y-4 px-4 py-8 text-center md:px-8">
          <p className="text-lg font-semibold text-zinc-800">No encontramos esta habitacion.</p>
          <Link
            href="/catalog"
            className="inline-flex rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700"
          >
            Volver al catalogo
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
      <DetailTopNav />

      <main className="mx-auto max-w-[1240px] space-y-7 px-4 py-7 md:px-8 md:py-8">
        <section className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-[43px] leading-[1.08] font-extrabold text-zinc-900">
            {room.title} · {Math.min(4, Math.max(2, Math.round(room.reviews / 30)))} personas
          </h1>

          <div className="flex items-center gap-5 text-[16px] font-semibold text-zinc-700">
            <button type="button" className="inline-flex items-center gap-2 underline underline-offset-2">
              ↥ Compartir
            </button>
            <button type="button" className="inline-flex items-center gap-2 underline underline-offset-2">
              ♡ Guardar
            </button>
          </div>
        </section>

        <RoomGallery images={room.gallery} title={room.title} />

        <section className="grid gap-8 md:grid-cols-[1.7fr_1fr]">
          <div className="space-y-6">
            <article className="space-y-2 border-b border-zinc-200 pb-6">
              <h2 className="text-[43px] leading-[1.08] font-extrabold text-zinc-900">
                Alojamiento entero: alojamiento en {room.location}
              </h2>
              <p className="text-[37px] leading-10 font-medium text-zinc-700">
                {Math.max(2, Math.min(5, Math.round(room.reviews / 20)))} huéspedes · 1 habitación · 2 camas · 1 baño
              </p>
              <p className="text-[34px] leading-9 font-semibold text-zinc-800">
                ★ {room.rating.toFixed(1)} · {room.reviews} reseñas
              </p>
            </article>

            <article className="space-y-3 border-b border-zinc-200 pb-6">
              <h3 className="text-[34px] leading-9 font-bold text-zinc-900">Anfitrión</h3>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-lg font-bold text-rose-500">
                  {room.host.avatarLabel}
                </div>
                <div>
                  <p className="text-[31px] leading-8 font-semibold text-zinc-800">{room.host.name}</p>
                  <p className="text-[26px] leading-7 text-zinc-500">
                    {room.host.yearsHosting} años como anfitrión
                  </p>
                </div>
              </div>
            </article>

            <article className="space-y-4">
              <h3 className="text-[34px] leading-9 font-bold text-zinc-900">Servicios</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-[23px] leading-6 font-medium text-zinc-700"
                  >
                    {amenity}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div>
            <ReservationCard pricePerNight={room.pricePerNight} />
          </div>
        </section>
      </main>
    </div>
  );
}
