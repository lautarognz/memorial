import { Link } from "react-router-dom";

function CTA() {
  return (
    <section
      className="relative overflow-hidden px-6 py-32 font-sans text-center"
      style={{ backgroundColor: "#1C1813" }}
    >
      {/* Imagen de fondo sutil */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600"
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.06 }}
        />
      </div>

      {/* Textura de grano */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.4,
        }}
      />

      {/* Luz central sutil */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(200,184,154,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Marco decorativo */}
      <div
        className="pointer-events-none absolute inset-x-10 inset-y-8 hidden md:block"
        style={{ border: "1px solid rgba(200,184,154,0.08)" }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Línea decorativa superior */}
        <div
          className="mx-auto !mb-10 h-16 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(200,184,154,0.3))",
          }}
        />

        {/* Cita emotiva */}
        <p
          className="!mb-8 w-full !text-center font-display text-lg italic"
          style={{ color: "rgba(200,184,154,0.5)" }}
        >
          "El amor no muere cuando alguien se va,
          <br />
          vive en cada recuerdo que dejaron."
        </p>

        {/* Divisor */}
        <div
          className="mx-auto !mb-8 h-px w-8"
          style={{ background: "rgba(200,184,154,0.2)" }}
        />

        {/* Eyebrow */}
        <p
          className="!mb-8 flex items-center justify-center gap-4 text-[11px] font-light tracking-widest3 uppercase"
          style={{ color: "rgba(200,184,154,0.5)" }}
        >
          <span
            className="block h-px w-10"
            style={{ background: "rgba(200,184,154,0.2)" }}
          />
          Memorial digital
          <span
            className="block h-px w-10"
            style={{ background: "rgba(200,184,154,0.2)" }}
          />
        </p>

        {/* Título */}
        <h2
          className="font-display font-light leading-[1.15] tracking-tight"
          style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#F7F3EE" }}
        >
          Mantén viva su historia{" "}
          <em style={{ color: "rgba(200,184,154,0.85)" }}>para siempre</em>
        </h2>

        {/* Divisor */}
        <div
          className="mx-auto my-8 h-px w-12"
          style={{ background: "rgba(200,184,154,0.25)" }}
        />

        {/* Subtítulo */}
        <p
          className="!mb-16 w-full !text-center text-base font-light leading-relaxed tracking-wide"
          style={{ color: "rgba(247,243,238,0.45)" }}
        >
          Crea un memorial digital y comparte recuerdos con quienes más
          importan.
        </p>

        {/* Botón */}
        <Link
          to="/create"
          className="inline-block px-10 py-4 text-[12px] font-normal tracking-widest2 uppercase transition-all duration-300"
          style={{ background: "#F7F3EE", color: "#1C1813" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(200,184,154,0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#F7F3EE";
          }}
        >
          Crear memorial ahora
        </Link>

        {/* Texto secundario */}
        <p
          className="!mt-10 w-full !text-center text-[11px] font-light tracking-widest uppercase"
          style={{ color: "rgba(247,243,238,0.2)" }}
        >
          Sin complicaciones · Disponible en cualquier momento
        </p>

        {/* Línea decorativa inferior */}
        <div
          className="mx-auto mt-12 h-16 w-px"
          style={{
            background:
              "linear-gradient(to top, transparent, rgba(200,184,154,0.3))",
          }}
        />
      </div>
    </section>
  );
}

export default CTA;
