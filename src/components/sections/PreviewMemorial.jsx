import { Link } from "react-router-dom";

function PreviewMemorial() {
  return (
    <section className="bg-marfil-100 px-6 py-28 font-sans">
      <div className="mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <p className="mb-6 flex items-center justify-center gap-4 text-[11px] font-light tracking-widest3 text-piedra-500/80 uppercase">
          <span className="block h-px w-10 bg-piedra-500/30" />
          Ejemplo real
          <span className="block h-px w-10 bg-piedra-500/30" />
        </p>

        {/* Título */}
        <h2 className="font-display !text-[clamp(1.5rem,3.5vw,2.5rem)] font-light leading-tight tracking-tight text-piedra-900">
          Así se verá <em className="italic text-piedra-500/90">un memorial</em>
        </h2>

        {/* Divisor */}
        <div className="mx-auto my-8 h-px w-12 bg-piedra-500/35" />

        {/* Subtítulo */}
        <p className="!mb-16 px-16 !text-center text-base font-light leading-relaxed tracking-wide text-piedra-700">
          Un espacio elegante donde los recuerdos viven para siempre.
        </p>

        {/* Card */}
        <div className="mx-auto w-full max-w-sm overflow-hidden border border-piedra-500/20">
          {/* Imagen */}
          <div className="relative h-72 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="memorial"
              className="h-full w-full object-cover"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-marfil-100/60 to-transparent" />
          </div>

          {/* Contenido */}
          <div className="border-t border-piedra-500/15 bg-marfil-100 px-8 py-8 text-center">
            {/* Línea decorativa */}
            <div className="mx-auto mb-5 h-px w-8 bg-piedra-500/30" />

            <h3 className="font-display text-2xl font-light tracking-tight text-piedra-900">
              María González
            </h3>

            <p className="!mt-2 !text-center text-[11px] font-light tracking-widest2 text-piedra-500/70 uppercase">
              1950 — 2023
            </p>

            <p className="!mt-5 !text-center text-sm font-light leading-relaxed tracking-wide text-piedra-700">
              Una vida llena de amor, recuerdos y momentos inolvidables
              compartidos con su familia.
            </p>

            <div className="mx-auto !mt-6 h-px w-8 bg-piedra-500/20" />

            <Link
              to="/memorial/demo"
              className="!mt-6 inline-block px-8 py-3 text-[11px] font-normal tracking-widest2 uppercase text-marfil-100 bg-piedra-900 transition-colors duration-300 hover:bg-piedra-500"
            >
              Ver memorial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviewMemorial;
