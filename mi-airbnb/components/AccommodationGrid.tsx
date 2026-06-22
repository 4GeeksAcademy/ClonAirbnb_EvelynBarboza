import type { Accommodation } from "@/types/accommodation";
import { AccommodationCard } from "@/components/AccommodationCard";

interface AccommodationGridProps {
  rooms: Accommodation[];
}

export function AccommodationGrid({ rooms }: AccommodationGridProps) {
  if (rooms.length === 0) {
    return (
      <p className="rounded-3xl border border-dashed border-zinc-300 p-8 text-center text-[26px] text-zinc-500">
        No se encontraron alojamientos con los filtros actuales.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7">
      {rooms.map((room, index) => (
        <AccommodationCard key={`${room.id}-${index}`} room={room} />
      ))}
    </div>
  );
}
