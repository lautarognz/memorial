import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 overflow-hidden">
        {/* Imagen */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501973801540-537f08ccae7b"
            alt="background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Overlay oscuro + blur */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2" />

        {/* Contenido */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Preserva la memoria de quienes amas
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl mx-auto">
            Crea un memorial digital accesible mediante código QR. Comparte
            fotos, historias y recuerdos en un espacio único y eterno.
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/create"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Crear memorial
            </Link>

            <button className="border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Ver ejemplo
            </button>
          </div>

          {/* Iconos */}
          <div className="mt-12 flex justify-center gap-8 text-gray-400">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">❤️</span>
              <span className="text-sm">Recuerdos</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">🖼️</span>
              <span className="text-sm">Fotos</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">🎵</span>
              <span className="text-sm">Música</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 overflow-hidden">
        {/* MISMA imagen que el hero */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501973801540-537f08ccae7b"
            alt="background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Cómo funciona
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Un proceso simple para preservar recuerdos y compartirlos con
            quienes más importan.
          </p>

          {/* Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-white font-semibold text-lg">
                Crea el memorial
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Agrega fotos, historias y momentos importantes en un solo lugar.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-white font-semibold text-lg">Genera el QR</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Obtén un código único para compartir o colocar físicamente.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-white font-semibold text-lg">
                Comparte recuerdos
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                Familiares pueden acceder, dejar mensajes y recordar juntos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
