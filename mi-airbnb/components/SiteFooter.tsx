import Link from "next/link";

export function SiteFooter() {
  const asistenciaLinks = [
    "Centro de ayuda",
    "Recibe ayuda con un problema de seguridad",
    "AirCover",
    "Seguro de viaje",
    "Antidiscriminación",
    "Apoyo para discapacitados",
    "Opciones de cancelación",
    "Problemas en el vecindario",
  ];

  const anfitrionLinks = [
    "Pon tu espacio en Airbnb",
    "Ofrece tu experiencia en Airbnb",
    "Ofrece tu servicio en Airbnb",
    "AirCover para anfitriones",
    "Recursos para anfitrionar",
    "Foro comunitario",
    "Anfitriona con responsabilidad",
    "Únete a una clase gratuita sobre anfitrionar",
    "Buscar un coanfitrión",
    "Recomienda a un anfitrión",
  ];

  const airbnbLinks = [
    "Novedades de mayo de 2026",
    "Sala de prensa",
    "Carreras",
    "Inversionistas",
    "Tarjetas de regalo",
    "Espacios en Airbnb.org",
  ];

  return (
    <footer className="mt-auto w-full border-t border-zinc-200 bg-[#f7f7f7]">
      <div className="mx-auto w-full max-w-[1700px] px-4 py-8 text-[14px] text-zinc-700 md:px-10 md:py-10">
        <section className="grid gap-8 border-b border-zinc-200 pb-8 md:grid-cols-3 md:gap-12 md:pb-10">
          <div className="space-y-3">
            <h3 className="text-[18px] font-bold text-zinc-900">Asistencia</h3>
            <ul className="space-y-2">
              {asistenciaLinks.map((item) => (
                <li key={item}>
                  <Link href="/#" className="text-[15px] hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[18px] font-bold text-zinc-900">Modo anfitrión</h3>
            <ul className="space-y-2">
              {anfitrionLinks.map((item) => (
                <li key={item}>
                  <Link href="/#" className="text-[15px] hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[18px] font-bold text-zinc-900">Airbnb</h3>
            <ul className="space-y-2">
              {airbnbLinks.map((item) => (
                <li key={item}>
                  <Link href="/#" className="text-[15px] hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-5 flex flex-col gap-3 md:mt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span>© 2026 Airbnb, Inc.</span>
            <span aria-hidden="true">·</span>
            <Link href="/#privacidad" className="font-medium hover:underline">
              Privacidad
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/#terminos" className="font-medium hover:underline">
              Términos
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <span className="inline-flex items-center gap-1 font-semibold">🌐 Español</span>
            <span className="font-semibold">$U UYU</span>
            <div className="flex items-center gap-3 text-[18px] text-zinc-800">
              <button type="button" aria-label="Facebook" className="hover:opacity-70">
                f
              </button>
              <button type="button" aria-label="X" className="hover:opacity-70">
                X
              </button>
              <button type="button" aria-label="Instagram" className="hover:opacity-70">
                ◉
              </button>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
