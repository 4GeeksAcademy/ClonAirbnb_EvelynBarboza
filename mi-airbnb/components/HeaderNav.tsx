import Link from "next/link";
import { SearchInput } from "@/components/SearchInput";

interface HeaderNavProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function HeaderNav({ searchTerm, onSearchChange }: HeaderNavProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1700px] px-4 pb-4 pt-5 md:px-10 md:pb-4 md:pt-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-rose-500">
            <span className="text-[17px] leading-none font-black">A</span>
            <span className="text-[20px] leading-none font-extrabold">airbnb</span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            <button
              type="button"
              className="flex items-center gap-2 border-b-[3px] border-zinc-900 px-1 pb-3 pt-1"
            >
              <span className="text-[20px]">🧭</span>
              <span className="text-[18px] font-bold text-zinc-800">Todo</span>
            </button>

            <Link href="/catalog" className="flex items-center gap-2 pb-3 pt-1 text-zinc-600">
              <span className="text-[20px]">🏠</span>
              <span className="text-[18px] font-bold">Alojamientos</span>
            </Link>

            <button type="button" className="flex items-center gap-2 pb-3 pt-1 text-zinc-600">
              <span className="text-[20px]">🎈</span>
              <span className="text-[18px] font-bold">Experiencias</span>
            </button>

            <button type="button" className="flex items-center gap-2 pb-3 pt-1 text-zinc-600">
              <span className="text-[20px]">🛎️</span>
              <span className="text-[18px] font-bold">Servicios</span>
            </button>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              className="hidden text-[18px] font-bold text-zinc-700 md:inline-flex"
              aria-label="Conviertete en anfitrion"
            >
              Conviertete en anfitrion
            </button>

            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full bg-zinc-200 text-zinc-700"
              aria-label="Idioma"
            >
              <span className="text-[18px]">🌐</span>
            </button>

            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full bg-zinc-200 text-zinc-700"
              aria-label="Menu"
            >
              <span className="text-[18px]">☰</span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-[980px] rounded-full border border-zinc-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] md:mt-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr_auto]">
            <div className="px-8 py-3 md:border-r md:border-zinc-200">
              <p className="text-[15px] font-extrabold leading-none text-zinc-900">Dónde</p>
              <SearchInput
                value={searchTerm}
                onChange={onSearchChange}
                placeholder="Explora destinos"
              />
            </div>

            <div className="hidden px-8 py-3 md:block md:border-r md:border-zinc-200">
              <p className="text-[15px] font-extrabold leading-none text-zinc-900">Fechas</p>
              <p className="mt-1 text-[16px] font-normal text-zinc-500">Agrega fechas</p>
            </div>

            <div className="hidden px-8 py-3 md:block">
              <p className="text-[15px] font-extrabold leading-none text-zinc-900">Quién</p>
              <p className="mt-1 text-[16px] font-normal text-zinc-500">¿Cuántos?</p>
            </div>

            <div className="flex items-center justify-end px-3 py-3">
              <Link
                href="/catalog"
                className="grid h-12 w-12 place-items-center rounded-full bg-rose-500 text-white transition hover:bg-rose-600"
              >
                <span className="text-[19px]">⌕</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
