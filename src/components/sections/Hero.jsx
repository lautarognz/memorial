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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 font-sans"
      style={{ backgroundColor: "#F7F3EE" }}
    >
      {/* Foto de fondo sutil */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1600"
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.07 }}
        />
      </div>

      {/* Textura de grano sutil */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.4,
        }}
      />

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
          className="mb-8 w-full px-20 !text-center text-lg font-light leading-relaxed tracking-wide text-piedra-900/70"
        >
          Crea un espacio único y eterno. Comparte fotos, historias y recuerdos
          accesibles mediante código QR.
        </p>

        {/* Cita emotiva */}
        <p
          data-reveal
          className="mb-12 w-full px-24 !text-center font-display text-lg italic"
          style={{ color: "rgba(125,110,91,0.75)" }}
        >
          "Los que amamos nunca se van del todo,
          <br />
          viven en los recuerdos que dejan."
        </p>

        {/* Botones */}
        <div
          data-reveal
          className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-10"
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
        <div
          data-reveal
          className="mt-20 grid grid-cols-3 divide-x divide-piedra-500/15 border border-piedra-500/15"
        >
          {[
            {
              icon: "❤",
              label: "Recuerdos",
              desc: "Fotos, historias y momentos que perduran",
            },
            {
              icon: "♪",
              label: "Música",
              desc: "Las canciones que marcaron su vida",
            },
            {
              icon: "💬",
              label: "Mensajes",
              desc: "Palabras de quienes lo recuerdan",
            },
          ].map(({ icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 px-6 py-8"
            >
              <span
                className="font-display text-2xl"
                style={{ color: "rgba(125,110,91,0.8)" }}
              >
                {icon}
              </span>
              <span className="text-[11px] font-normal tracking-widest2 uppercase text-piedra-900">
                {label}
              </span>
              <span className="text-[12px] font-light leading-relaxed tracking-wide text-piedra-700">
                {desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
