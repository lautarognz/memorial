function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">Memorial</h2>
          <p className="mt-3 text-sm text-gray-400">
            Preserva y comparte los recuerdos de quienes ya no están. Un
            memorial digital accesible mediante código QR.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-medium mb-3">Explorar</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Inicio</li>
            <li className="hover:text-white cursor-pointer">Crear Memorial</li>
            <li className="hover:text-white cursor-pointer">Memoriales</li>
            <li className="hover:text-white cursor-pointer">Contacto</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-medium mb-3">Contacto</h3>
          <p className="text-sm text-gray-400">
            Para consultas sobre memoriales digitales o soporte.
          </p>
          <p className="mt-2 text-sm">contacto@memorial.com</p>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © 2026 Memorial — Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;
