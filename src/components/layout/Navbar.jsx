import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">
        Memorial
      </Link>

      <div className="flex gap-4">
        <Link to="/create">Crear Memorial</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
