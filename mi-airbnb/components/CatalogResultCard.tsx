import Link from "next/link";
import type { Accommodation } from "@/types/accommodation";

interface CatalogResultCardProps {
  room: Accommodation;
}

const roomMetaById: Record<string, { details: string; rooms: string; discount?: number }> = {
  "1": {
    details: "Blackbird Bariloche, Guemes, Amplio y luminoso",
    rooms: "1 habitacion · 3 camas · 2 banos",
    discount: 12,
  },
  "2": {
    details: "Centro Bariloche | Vista al Cerro Otto",
    rooms: "1 habitacion · 1 cama matrimonial · 1,5 banos",
    discount: 8,
  },
  "3": {
    details: "Ladera sur, vistas abiertas al lago",
    rooms: "2 habitaciones · 4 camas · 2 banos",
  },
  "4": {
    details: "Acceso rapido al centro y al lago",
    rooms: "2 habitaciones · 3 camas · 2 banos",
    discount: 10,
  },
  "5": {
    details: "Cabana rodeada de bosque nativo",
    rooms: "1 habitacion · 2 camas · 1 bano",
  },
  "6": {
    details: "A pasos de restaurantes y comercio local",
    rooms: "1 habitacion · 2 camas · 1 bano",
    discount: 6,
  },
};

export function CatalogResultCard({ room }: CatalogResultCardProps) {
  const cardHref = `/rooms/${room.id}`;
  const meta = roomMetaById[room.id] ?? {
    details: room.location,
    rooms: "1 habitacion · 2 camas · 1 bano",
  };

  const totalPrice = Math.round(room.pricePerNight * 7 * 57);
  const originalPrice = meta.discount
    ? Math.round(totalPrice * (1 + meta.discount / 100))
    : undefined;

  return (
    <Link href={cardHref} className="group block">
      <article className="space-y-3">
        <div
          className="relative h-[268px] w-full overflow-hidden rounded-3xl bg-zinc-200 bg-cover bg-center"
          style={{ backgroundImage: `url(${room.imageUrl})` }}
          role="img"
          aria-label={room.title}
        >
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
            <span className="rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-zinc-700">
              🏆 Favorito entre huespedes
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-black/25 text-base text-white">
              ♡
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 text-[16px] leading-5 font-bold text-zinc-900">{room.title}</h3>
            <p className="shrink-0 pt-0.5 text-[14px] leading-5 font-semibold text-zinc-700">
              ★ {room.rating.toFixed(2)} ({room.reviews})
            </p>
          </div>

          <p className="line-clamp-1 text-[14px] leading-5 text-zinc-600">{meta.details}</p>
          <p className="text-[14px] leading-5 text-zinc-600">{meta.rooms}</p>

          <div className="pt-1">
            <p className="text-[15px] leading-6 text-zinc-700">
              {originalPrice ? <span className="mr-2 line-through opacity-55">${originalPrice} UYU</span> : null}
              <span className="font-bold">${totalPrice} UYU</span>
              <span className="font-normal"> por 7 noches</span>
            </p>
            <span className="mt-1 inline-flex rounded-lg bg-zinc-100 px-2 py-1 text-[12px] font-semibold text-zinc-600">
              Cancelacion gratuita
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
