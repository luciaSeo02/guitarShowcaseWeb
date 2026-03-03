import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Guitar, Wrench, Flame } from "lucide-react";

const services = [
  {
    id: "custom",
    icon: Guitar,
  },
  {
    id: "restoration",
    icon: Wrench,
  },
  {
    id: "metal",
    icon: Flame,
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const current = services.find((s) => s.id === activeService);

  const detailRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  const { t } = useTranslation();

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
    <section className="py-8 md:py-16">
      <h2 className="px-4 md:px-0 text-2xl md:text-3xl font-serif mb-8 max-w-7xl mx-auto">
        {t("services.title")}
      </h2>
      <div className="flex md:justify-center md:gap-20 justify-around px-4 md:px-0 text-center max-w-5xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <button
              key={service.id}
              onClick={() =>
                setActiveService(
                  activeService === service.id ? null : service.id,
                )
              }
              className={`flex flex-col items-center gap-3 transition ${
                activeService === service.id ? "opacity-100" : "opacity-60"
              }`}
            >
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-neutral-800 flex items-center justify-center transition">
                <Icon className="w-6 h-6 text-amber-500" />
              </div>

              <span className="text-xs tracking-widest uppercase">
                {t(`services.${service.id}.title`)}
              </span>
            </button>
          );
        })}
      </div>

      {current && (
        <div ref={detailRef} className="mt-8 px-4 md:px-0 max-w-3xl mx-auto">
          <div className="bg-neutral-800/60 rounded-lg p-6 md:p-8 text-sm md:text-base leading-relaxed">
            <p className="mb-4">{t(`services.${current.id}.description`)}</p>
            <button
              onClick={() =>
                navigate("/custom-order", {
                  state: { service: t(`services.${current.id}.title`) },
                })
              }
              className="text-xs tracking-widest uppercase text-amber-500"
            >
              {t("services.requestButton")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
