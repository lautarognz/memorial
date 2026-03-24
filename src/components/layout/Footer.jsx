import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="font-sans" style={{ backgroundColor: "#1C1813" }}>
      {/* Contenido principal */}
      <div className="mx-auto max-w-5xl px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col">
          <Link to="/" className="flex flex-col leading-tight">
            <span
              className="font-display text-xl font-light tracking-tight"
              style={{ color: "#F7F3EE" }}
            >
              Memorial
            </span>
            <span
              className="text-[10px] font-light tracking-widest2 uppercase"
              style={{ color: "rgba(200,184,154,0.5)" }}
            >
              Preserva su memoria
            </span>
          </Link>

          <p
            className="!mt-6 !text-left text-sm font-light leading-relaxed tracking-wide"
            style={{ color: "rgba(247,243,238,0.4)" }}
          >
            Preserva y comparte los recuerdos de quienes ya no están. Un espacio
            digital para mantener viva su historia.
          </p>

          <p
            className="!mt-5 !text-left font-display text-sm italic"
            style={{ color: "rgba(200,184,154,0.5)" }}
          >
            "Recordar es mantener viva la memoria."
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col">
          <p
            className="!mb-6 !text-left text-[10px] font-light tracking-widest3 uppercase"
            style={{ color: "rgba(200,184,154,0.5)" }}
          >
            Explorar
          </p>

          <ul className="flex flex-col gap-3">
            {[
              { to: "/", label: "Inicio" },
              { to: "/create", label: "Crear memorial" },
              { to: "/memorial/demo", label: "Ver ejemplo" },
              { to: "#", label: "Contacto" },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-[12px] font-light tracking-wide transition-colors duration-200"
                  style={{ color: "rgba(247,243,238,0.35)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(247,243,238,0.8)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(247,243,238,0.35)")
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col">
          <p
            className="!mb-6 !text-left text-[10px] font-light tracking-widest3 uppercase"
            style={{ color: "rgba(200,184,154,0.5)" }}
          >
            Comenzar
          </p>

          <p
            className="!mb-8 !text-left text-sm font-light leading-relaxed tracking-wide"
            style={{ color: "rgba(247,243,238,0.4)" }}
          >
            Crea un memorial digital y comparte su historia con el mundo.
          </p>

          <Link
            to="/create"
            className="inline-block self-start px-7 py-3 text-[11px] font-normal tracking-widest2 uppercase transition-colors duration-300"
            style={{ background: "#F7F3EE", color: "#1C1813" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(200,184,154,0.9)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.background = "#F7F3EE")}
          >
            Crear memorial
          </Link>

          <p
            className="!mt-8 !text-left text-[11px] font-light tracking-wide"
            style={{ color: "rgba(247,243,238,0.2)" }}
          >
            contacto@memorial.com
          </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div
        className="border-t px-6 py-5 text-center"
        style={{ borderColor: "rgba(200,184,154,0.08)" }}
      >
        <p
          className="!text-center text-[10px] font-light tracking-widest uppercase"
          style={{ color: "rgba(247,243,238,0.2)" }}
        >
          © 2026 Memorial — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
