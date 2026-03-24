import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-marfil-100/90 font-sans backdrop-blur-md border-b border-piedra-500/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-xl font-light tracking-tight text-piedra-900">
            Memorial
          </span>
          <span className="text-[10px] font-light tracking-widest2 uppercase text-piedra-500/60">
            Preserva su memoria
          </span>
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-10 md:flex">
          {[
            { to: "/", label: "Inicio" },
            { to: "/create", label: "Crear memorial" },
            { to: "/admin", label: "Admin" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative text-[12px] font-light tracking-widest uppercase transition-colors duration-200"
              style={{
                color: isActive(to) ? "#2E2A25" : "rgba(46,42,37,0.45)",
              }}
            >
              {label}
              {isActive(to) && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-piedra-500/40" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/create"
          className="inline-block bg-piedra-900 px-6 py-2.5 text-[11px] font-normal tracking-widest2 uppercase text-marfil-100 transition-colors duration-300 hover:bg-piedra-500"
        >
          Crear memorial
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
