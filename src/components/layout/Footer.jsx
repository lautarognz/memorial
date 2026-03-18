import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/80 backdrop-blur-lg text-gray-300">
      {/* ✨ Línea glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />

      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Memorial
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Preserva y comparte los recuerdos de quienes ya no están. Un espacio
            digital para mantener viva su historia.
          </p>

          <p className="mt-4 text-xs text-gray-500 italic">
            “Recordar es mantener viva la memoria.”
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-medium mb-4">Explorar</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/create" className="hover:text-white transition">
                Crear Memorial
              </Link>
            </li>

            <li>
              <Link to="/memorial/demo" className="hover:text-white transition">
                Ver ejemplo
              </Link>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-white font-medium mb-4">Comenzar</h3>

          <p className="text-sm text-gray-400">
            Crea un memorial digital y comparte su historia con el mundo.
          </p>

          <Link
            to="/create"
            className="inline-block mt-4 px-5 py-2 text-sm font-medium text-black bg-white rounded-xl hover:bg-gray-200 transition"
          >
            Crear memorial
          </Link>

          <p className="mt-6 text-xs text-gray-500">contacto@memorial.com</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-500">
        © 2026 Memorial — Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;
