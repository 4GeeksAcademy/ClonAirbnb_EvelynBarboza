import Link from "next/link";

export function DetailTopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between gap-4 px-4 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-rose-500">
          <span className="text-[17px] leading-none font-black">A</span>
          <span className="text-[20px] leading-none font-extrabold">airbnb</span>
        </Link>

        <div className="hidden min-w-[620px] items-center rounded-full border border-zinc-300 bg-white px-4 py-2 shadow-sm md:flex">
          <span className="mr-2 text-[20px]">🏠</span>
          <p className="border-r border-zinc-200 pr-4 text-[16px] font-semibold text-zinc-700">
            En cualquier lugar del mundo
          </p>
          <p className="border-r border-zinc-200 px-4 text-[16px] font-semibold text-zinc-700">
            Cualquier fecha
          </p>
          <p className="px-4 text-[16px] font-semibold text-zinc-700">¿Cuántos?</p>
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
            className="hidden text-[18px] font-bold text-zinc-700 md:inline-flex"
            aria-label="Conviertete en anfitrion"
          >
            Conviértete en anfitrión
          </button>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full bg-zinc-100 text-[18px]"
            aria-label="Idioma"
          >
            🌐
          </button>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full bg-zinc-100 text-[18px]"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
