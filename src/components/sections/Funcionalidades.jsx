const IconGaleria = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="17"
      height="13"
      rx="1.5"
      stroke="#7D6E5B"
      strokeWidth="1.2"
    />
    <rect
      x="10"
      y="8"
      width="17"
      height="13"
      rx="1.5"
      stroke="#7D6E5B"
      strokeWidth="1.2"
      strokeOpacity="0.5"
    />
    <circle cx="6" cy="6.5" r="1.5" fill="#7D6E5B" fillOpacity="0.6" />
    <path
      d="M1 11l4-3.5 3.5 3 3-2.5 5.5 5"
      stroke="#7D6E5B"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconVideo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="#7D6E5B"
      strokeWidth="1.2"
    />
    <path
      d="M19 10l7-4v12l-7-4V10z"
      stroke="#7D6E5B"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMusica = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 22V8l14-3v14"
      stroke="#7D6E5B"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="22" r="3" stroke="#7D6E5B" strokeWidth="1.2" />
    <circle cx="22" cy="19" r="3" stroke="#7D6E5B" strokeWidth="1.2" />
  </svg>
);

const IconHistoria = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 3h14a2 2 0 012 2v18a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
      stroke="#7D6E5B"
      strokeWidth="1.2"
    />
    <path
      d="M8 9h10M8 13h10M8 17h6"
      stroke="#7D6E5B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M17 1v4M11 1v4"
      stroke="#7D6E5B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const IconMensaje = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2H8l-5 4V5z"
      stroke="#7D6E5B"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M9 10h10M9 14h6"
      stroke="#7D6E5B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const IconQR = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="10"
      height="10"
      rx="1"
      stroke="#7D6E5B"
      strokeWidth="1.2"
    />
    <rect
      x="16"
      y="2"
      width="10"
      height="10"
      rx="1"
      stroke="#7D6E5B"
      strokeWidth="1.2"
    />
    <rect
      x="2"
      y="16"
      width="10"
      height="10"
      rx="1"
      stroke="#7D6E5B"
      strokeWidth="1.2"
    />
    <rect x="5" y="5" width="4" height="4" fill="#7D6E5B" fillOpacity="0.5" />
    <rect x="19" y="5" width="4" height="4" fill="#7D6E5B" fillOpacity="0.5" />
    <rect x="5" y="19" width="4" height="4" fill="#7D6E5B" fillOpacity="0.5" />
    <path
      d="M16 16h4v4h-4zM20 20h6M20 16v6"
      stroke="#7D6E5B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

function Funcionalidades() {
  const features = [
    {
      icono: <IconGaleria />,
      titulo: "Galería de fotos",
      descripcion:
        "Guarda y muestra momentos especiales en una galería organizada.",
    },
    {
      icono: <IconVideo />,
      titulo: "Videos",
      descripcion: "Comparte recuerdos en video y revive momentos únicos.",
    },
    {
      icono: <IconMusica />,
      titulo: "Música significativa",
      descripcion: "Añade canciones que representen su vida y su historia.",
    },
    {
      icono: <IconHistoria />,
      titulo: "Historia de vida",
      descripcion:
        "Escribe su historia y deja un legado para futuras generaciones.",
    },
    {
      icono: <IconMensaje />,
      titulo: "Mensajes y dedicatorias",
      descripcion: "Familiares y amigos pueden dejar palabras y recuerdos.",
    },
    {
      icono: <IconQR />,
      titulo: "Acceso mediante QR",
      descripcion: "Accede fácilmente al memorial escaneando un código QR.",
    },
  ];

  return (
    <section className="bg-marfil-100 px-6 py-28 font-sans">
      <div className="mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <p className="mb-6 flex items-center justify-center gap-4 text-[11px] font-light tracking-widest3 text-piedra-500/80 uppercase">
          <span className="block h-px w-10 bg-piedra-500/30" />
          Funcionalidades
          <span className="block h-px w-10 bg-piedra-500/30" />
        </p>

        {/* Título */}
        <h2 className="font-display !text-[clamp(1.5rem,3.5vw,2.5rem)] font-light leading-tight tracking-tight text-piedra-900">
          Todo lo que incluye{" "}
          <em className="italic text-piedra-500/90">tu memorial</em>
        </h2>

        {/* Divisor */}
        <div className="mx-auto my-8 h-px w-12 bg-piedra-500/35" />

        {/* Subtítulo */}
        <p className="mb-20 px-16 !text-center text-base font-light leading-relaxed tracking-wide text-piedra-700">
          Un espacio digital completo para recordar, compartir y mantener viva
          la historia.
        </p>

        {/* Grid */}
        <div className="grid border border-piedra-500/15 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {features.map((feature, index) => (
            <div
              key={feature.titulo}
              className="group flex flex-col items-center border-b border-r border-piedra-500/15 px-8 py-10 transition-colors duration-300 hover:bg-marfil-200/50"
            >
              {/* Icono con fondo sutil */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center border border-piedra-500/20 bg-marfil-200/60 transition-colors duration-300 group-hover:border-piedra-500/40 group-hover:bg-marfil-200">
                {feature.icono}
              </div>

              {/* Título */}
              <h3 className="font-display text-lg font-light tracking-tight text-piedra-900">
                {feature.titulo}
              </h3>

              {/* Línea decorativa */}
              <div className="my-3 h-px w-6 bg-piedra-500/25" />

              {/* Descripción */}
              <p className="!text-center text-sm font-light leading-relaxed tracking-wide text-piedra-700">
                {feature.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Funcionalidades;
