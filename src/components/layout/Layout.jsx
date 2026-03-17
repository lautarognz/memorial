import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Contenido */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
