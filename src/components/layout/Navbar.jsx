import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-tight">
          Memorial
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="hover:text-gray-300 transition">
            Inicio
          </Link>

          <Link to="/create" className="hover:text-gray-300 transition">
            Crear Memorial
          </Link>

          <Link to="/admin" className="hover:text-gray-300 transition">
            Admin
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/create"
          className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
        >
          Crear ahora
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
