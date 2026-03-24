function Funcionalidades() {
  const features = [
    {
      numero: "01",
      titulo: "Galería de fotos",
      descripcion:
        "Guarda y muestra momentos especiales en una galería organizada.",
    },
    {
      numero: "02",
      titulo: "Videos",
      descripcion: "Comparte recuerdos en video y revive momentos únicos.",
    },
    {
      numero: "03",
      titulo: "Música significativa",
      descripcion: "Añade canciones que representen su vida y su historia.",
    },
    {
      numero: "04",
      titulo: "Historia de vida",
      descripcion:
        "Escribe su historia y deja un legado para futuras generaciones.",
    },
    {
      numero: "05",
      titulo: "Mensajes y dedicatorias",
      descripcion: "Familiares y amigos pueden dejar palabras y recuerdos.",
    },
    {
      numero: "06",
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
        <div className="grid gap-px border border-piedra-500/15 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.numero}
              className="flex flex-col items-center border-b border-r border-piedra-500/15 px-8 py-10 last:border-b-0"
            >
              {/* Número */}
              <span className="select-none font-display text-[48px] font-light leading-none text-piedra-500/40">
                {feature.numero}
              </span>

              {/* Línea vertical decorativa */}
              <div className="my-4 h-6 w-px bg-piedra-500/25" />

              {/* Título */}
              <h3 className="font-display text-lg font-light tracking-tight text-piedra-900">
                {feature.titulo}
              </h3>

              {/* Descripción */}
              <p className="mt-2 !text-center text-sm font-light leading-relaxed tracking-wide text-piedra-700">
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
