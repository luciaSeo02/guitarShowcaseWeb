import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "custom",
    title: "Custom Builds",
    icon: "🎸",
    description:
      "Fully handcrafted guitars designed and built to match your sound and style.",
  },
  {
    id: "restoration",
    title: "Restoration",
    icon: "🎻",
    description:
      "Careful restoration of vintage and damaged instruments, respecting their history.",
  },
  {
    id: "metal",
    title: "Metal Figures",
    icon: "🔥",
    description:
      "Unique metal sculptures and decorative pieces forged by hand.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const current = services.find((s) => s.id === activeService);

  const detailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleCkickOutside(e: MouseEvent) {
      if (detailRef.current && !detailRef.current.contains(e.target as Node)) {
        setActiveService(null);
      }
    }

    if (activeService) {
      document.addEventListener("mousedown", handleCkickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleCkickOutside);
    };
  }, [activeService]);

  return (
    <section className="py-8">
      <h2 className="px-4 text-2xl font-serif mb-6">Services</h2>
      <div className="flex justify-around px-4 text-center">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() =>
              setActiveService(activeService === service.id ? null : service.id)
            }
            className={`flex flex-col items-center gap-3 transition ${activeService === service.id ? "opacity-100" : "opacity-60"}`}
          >
            <div className="h-14 w-14 rounded-full bg-neutral-800 flex items-center justify-center text-xl">
              {service.icon}
            </div>
            <span className="text-xs tracking-widest uppercase">
              {service.title}
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div ref={detailRef} className="mt-6 px-4">
          <div className="bg-neutral-800/60 rounded-lg p-4 text-sm leading-relaxed">
            <p className="mb-4">{current.description}</p>
            <button className="text-xs tracking-widest uppercase text-amber-500">
              Request Service
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
