import { useState } from "react";

function CreateMemorial() {
  const [form, setForm] = useState({
    name: "",
    birth: "",
    death: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="min-h-screen px-6 py-20 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#F7F3EE" }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="https://w0.peakpx.com/wallpaper/704/547/HD-wallpaper-puesta-de-sol-sol-paz-playa-oceano.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        />
      </div>

      {/* Overlay balanceado (clave) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3EE]/70 to-[#F7F3EE]/90 backdrop-blur-sm" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-tight text-[#2d2a26]">
            Crear memorial
          </h1>

          <div className="mx-auto my-6 h-px w-12 bg-[#7d6e5b]/40" />

          <p className="text-[#5c5246] text-sm">
            Completa la información para crear un espacio único y eterno.
          </p>
        </div>

        {/* Formulario */}
        <div className="border border-[#7d6e5b]/20 p-8 space-y-6 bg-white/40 backdrop-blur-md rounded-sm">
          {/* Nombre */}
          <div>
            <label className="text-xs uppercase tracking-widest text-[#7d6e5b]">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full mt-2 bg-transparent border-b border-[#7d6e5b]/30 focus:outline-none py-2 text-[#2d2a26]"
            />
          </div>

          {/* Fechas */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-[#7d6e5b]">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                name="birth"
                onChange={handleChange}
                className="w-full mt-2 bg-transparent border-b border-[#7d6e5b]/30 focus:outline-none py-2 text-[#2d2a26]"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-[#7d6e5b]">
                Fecha de fallecimiento
              </label>
              <input
                type="date"
                name="death"
                onChange={handleChange}
                className="w-full mt-2 bg-transparent border-b border-[#7d6e5b]/30 focus:outline-none py-2 text-[#2d2a26]"
              />
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label className="text-xs uppercase tracking-widest text-[#7d6e5b]">
              Historia / descripción
            </label>
            <textarea
              name="description"
              rows="4"
              onChange={handleChange}
              className="w-full mt-2 bg-transparent border-b border-[#7d6e5b]/30 focus:outline-none py-2 resize-none text-[#2d2a26]"
            />
          </div>

          {/* Botón */}
          <div className="pt-6 text-center">
            <button className="bg-[#2d2a26] text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#7d6e5b] transition">
              Crear memorial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateMemorial;
