export function MapPlaceholder() {
  return (
    <section className="relative h-[420px] overflow-hidden rounded-3xl border border-zinc-200 bg-[#d4e5c3] md:h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(151,190,131,0.8),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(119,166,96,0.55),transparent_35%),linear-gradient(140deg,#c9deb1_0%,#d6e8bf_35%,#aacfe4_36%,#9ec8de_100%)]" />

      <div className="absolute right-4 top-4 flex flex-col gap-2">
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full bg-white text-xl font-bold text-zinc-700 shadow"
          aria-label="Expandir mapa"
        >
          ↗
        </button>
        <div className="overflow-hidden rounded-2xl bg-white shadow">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border-b border-zinc-200 text-[26px] text-zinc-700"
            aria-label="Acercar"
          >
            +
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center text-[30px] leading-none text-zinc-700"
            aria-label="Alejar"
          >
            −
          </button>
        </div>
      </div>

      <span className="absolute left-[18%] top-[33%] rounded-full bg-white px-3 py-1 text-sm font-bold text-zinc-800 shadow">
        $U 25,271 UYU
      </span>
      <span className="absolute left-[48%] top-[56%] rounded-full bg-white px-3 py-1 text-sm font-bold text-zinc-800 shadow">
        $U 19,562 UYU
      </span>
      <span className="absolute left-[39%] top-[70%] rounded-full bg-zinc-900 px-3 py-1 text-sm font-bold text-white shadow">
        $U 11,900 UYU
      </span>
      <span className="absolute left-[63%] top-[63%] rounded-full bg-white px-3 py-1 text-sm font-bold text-zinc-800 shadow">
        $U 15,397 UYU
      </span>
    </section>
  );
}
