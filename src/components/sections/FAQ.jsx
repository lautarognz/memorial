import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo funciona el código QR?",
      answer:
        "Cada memorial genera un código QR único. Al escanearlo, se accede directamente a la página del memorial desde cualquier dispositivo.",
    },
    {
      question: "¿Puedo editar el memorial después de crearlo?",
      answer:
        "Sí, puedes actualizar la información, agregar fotos, videos y modificar el contenido en cualquier momento.",
    },
    {
      question: "¿Es necesario pagar para crear un memorial?",
      answer:
        "Puedes comenzar de forma sencilla y luego acceder a funciones más avanzadas según tus necesidades.",
    },
    {
      question: "¿Quién puede ver el memorial?",
      answer:
        "Puedes compartir el acceso con quien desees mediante el enlace o el código QR.",
    },
    {
      question: "¿Se pueden dejar mensajes o dedicatorias?",
      answer:
        "Sí, familiares y amigos pueden dejar mensajes para recordar y compartir momentos.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-marfil-100 px-6 py-28 font-sans">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center">
          <p className="mb-6 flex items-center justify-center gap-4 text-[11px] font-light tracking-widest3 text-piedra-500/80 uppercase">
            <span className="block h-px w-10 bg-piedra-500/30" />
            Preguntas frecuentes
            <span className="block h-px w-10 bg-piedra-500/30" />
          </p>

          <h2 className="font-display !text-[clamp(1.5rem,3.5vw,2.5rem)] font-light leading-tight tracking-tight text-piedra-900">
            Resolvemos tus <em className="italic text-piedra-500/90">dudas</em>
          </h2>

          <div className="mx-auto my-8 h-px w-12 bg-piedra-500/35" />

          <p className="!mb-16 px-8 !text-center text-base font-light leading-relaxed tracking-wide text-piedra-700">
            Todo lo que necesitás saber sobre el memorial digital.
          </p>
        </div>

        {/* Acordeón */}
        <div className="divide-y divide-piedra-500/10 border-y border-piedra-500/10">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-2 py-5 text-left transition-colors duration-200"
              >
                <span className="font-display text-base font-light tracking-tight text-piedra-700">
                  {faq.question}
                </span>
                <span
                  className="ml-6 flex-shrink-0 text-xl font-light text-piedra-500/50 transition-transform duration-300"
                  style={{
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? "200px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="!mb-5 !text-left px-2 text-sm font-light leading-relaxed tracking-wide text-piedra-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
