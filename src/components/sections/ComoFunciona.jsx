function ComoFunciona() {
  const pasos = [
    {
      numero: "01",
      titulo: "Crea el memorial",
      descripcion:
        "Agrega fotos, historias y momentos importantes en un solo lugar.",
    },
    {
      numero: "02",
      titulo: "Genera el QR",
      descripcion:
        "Obtén un código único para compartir o colocar físicamente.",
    },
    {
      numero: "03",
      titulo: "Comparte recuerdos",
      descripcion:
        "Familiares pueden acceder, dejar mensajes y recordar juntos.",
    },
  ];

  return (
    <section className="bg-marfil-200 px-6 py-28 font-sans">
      <div className="mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <p className="mb-6 flex items-center justify-center gap-4 text-[11px] font-light tracking-widest3 text-piedra-500/80 uppercase">
          <span className="block h-px w-10 bg-piedra-500/30" />
          Proceso
          <span className="block h-px w-10 bg-piedra-500/30" />
        </p>

        {/* Título */}
        <h2 className="font-display !text-[clamp(1.5rem,3.5vw,2.5rem)] font-light leading-tight tracking-tight text-piedra-900">
          Cómo <em className="italic text-piedra-500/90">funciona</em>
        </h2>

        {/* Divisor */}
        <div className="mx-auto my-8 h-px w-12 bg-piedra-500/35" />

        {/* Subtítulo */}
        <p className="mb-20 px-16 !text-center text-base font-light leading-relaxed tracking-wide text-piedra-700">
          Un proceso simple para preservar recuerdos y compartirlos con quienes
          más importan.
        </p>

        {/* Pasos */}
        <div className="grid gap-px md:grid-cols-3">
          {pasos.map((paso, index) => (
            <div
              key={paso.numero}
              className="relative flex flex-col items-center px-10 py-12"
            >
              {/* Línea separadora entre cards */}
              {index < pasos.length - 1 && (
                <div className="absolute right-0 top-1/4 hidden h-1/2 w-px bg-piedra-500/15 md:block" />
              )}

              {/* Número */}
              <span className="select-none font-display text-[64px] font-light leading-none text-piedra-500/40">
                {paso.numero}
              </span>

              {/* Línea vertical decorativa */}
              <div className="my-5 h-8 w-px bg-piedra-500/25" />

              {/* Título */}
              <h3 className="font-display text-xl font-light tracking-tight text-piedra-900">
                {paso.titulo}
              </h3>

              {/* Descripción */}
              <p className="mt-3 !text-center text-sm font-light leading-relaxed tracking-wide text-piedra-700">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
