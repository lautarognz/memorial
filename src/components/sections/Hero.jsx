import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll("[data-reveal]");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.9s ease ${i * 0.15}s, transform 0.9s ease ${i * 0.15}s`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 80);
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-marfil-100 px-6 py-20 font-sans"
    >
      {/* Línea decorativa superior */}
      <div className="absolute left-1/2 top-12 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-piedra-500/30" />

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-12 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-t from-transparent to-piedra-500/30" />

      {/* Contenido central */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <p
          data-reveal
          className="mb-9 flex items-center justify-center gap-4 text-[11px] font-light tracking-widest3 text-piedra-500/80 uppercase"
        >
          <span className="block h-px w-10 bg-piedra-500/30" />
          Memorial digital
          <span className="block h-px w-10 bg-piedra-500/30" />
        </p>

        {/* Título */}
        <h1
          data-reveal
          className="font-display text-display-lg font-light leading-[1.2] tracking-tight text-piedra-900"
        >
          Preserva la memoria
          <br />
          de <em className="italic text-piedra-500/90">quienes amas</em>
        </h1>

        {/* Divisor */}
        <div data-reveal className="mx-auto my-8 h-px w-12 bg-piedra-500/35" />

        {/* Subtítulo */}
        <p
          data-reveal
          className="mx-auto mb-12 max-w-md text-base font-light leading-relaxed tracking-wide text-piedra-900/55"
        >
          Crea un espacio único y eterno. Comparte fotos, historias y recuerdos
          accesibles mediante código QR.
        </p>

        {/* Botones */}
        <div
          data-reveal
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/create"
            className="bg-piedra-900 px-9 py-3.5 text-[12px] font-normal tracking-widest2 uppercase text-marfil-100 transition-colors duration-300 hover:bg-piedra-500"
          >
            Crear memorial
          </Link>

          <button className="relative px-9 py-3.5 text-[12px] font-light tracking-widest2 uppercase text-piedra-900/50 transition-colors duration-300 after:absolute after:bottom-2.5 after:left-9 after:right-9 after:h-px after:bg-piedra-900/20 after:transition-colors hover:text-piedra-900/90 hover:after:bg-piedra-900/50">
            Ver ejemplo
          </button>
        </div>

        {/* Features */}
        <div data-reveal className="mt-20 flex justify-center gap-14">
          {[
            { icon: "❤", label: "Recuerdos" },
            { icon: "⬜", label: "Fotos" },
            { icon: "♪", label: "Música" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center border border-piedra-500/25 text-sm">
                {icon}
              </div>
              <span className="text-[10px] font-light tracking-widest2 uppercase text-piedra-900/40">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
