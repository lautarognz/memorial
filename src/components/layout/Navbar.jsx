import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `relative transition ${
      location.pathname === path
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Branding */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-white tracking-tight">
            Memorial
          </span>
          <span className="text-xs text-gray-400">Preserva su memoria</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className={linkStyle("/")}>
            Inicio
            {location.pathname === "/" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"></span>
            )}
          </Link>

          <Link to="/create" className={linkStyle("/create")}>
            Crear Memorial
            {location.pathname === "/create" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"></span>
            )}
          </Link>

          <Link to="/admin" className={linkStyle("/admin")}>
            Admin
            {location.pathname === "/admin" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"></span>
            )}
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/create"
          className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-black bg-white rounded-xl overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition"></span>
          <span className="relative">Crear memorial</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
