import Image from "next/image";
import Link from "next/link";
import type { Accommodation } from "@/types/accommodation";

interface AccommodationCardProps {
  room: Accommodation;
  href?: string;
  showLocation?: boolean;
  mode?: "home" | "catalog";
}

export function AccommodationCard({
  room,
  href,
  showLocation = true,
  mode = "home",
}: AccommodationCardProps) {
  const cardHref = href ?? `/rooms/${room.id}`;
  const isCatalog = mode === "catalog";

  return (
    <Link href={cardHref} className="group block">
      <article className="space-y-3">
        <div className="relative h-[225px] w-full overflow-hidden rounded-3xl bg-zinc-200 transition duration-300 group-hover:brightness-95">
          <Image
            src={room.imageUrl}
            alt={room.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
            <span className="rounded-2xl bg-white/95 px-3 py-2 text-[12px] leading-3 font-bold text-zinc-700 shadow-sm">
              Favorito entre
              <br />
              huespedes
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-black/25 text-white">
              ♡
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="line-clamp-2 text-[16px] leading-5 font-bold text-zinc-900">{room.title}</h3>

          <p className="text-[14px] leading-5 text-zinc-500">
            ${Math.round(room.pricePerNight * 57)} UYU por {isCatalog ? "7" : "2"} noches ·
          </p>

          <div className="flex items-center gap-1 text-[14px] font-medium text-zinc-600">
            <span>★</span>
            <span>{room.rating.toFixed(2)}</span>
          </div>

          {showLocation ? <p className="text-[14px] leading-5 text-zinc-600">{room.location}</p> : null}
        </div>
      </article>
    </Link>
  );
}
