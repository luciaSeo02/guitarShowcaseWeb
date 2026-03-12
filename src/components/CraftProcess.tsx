import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const steps = [
  { number: "1" },
  { number: "2" },
  { number: "3" },
  { number: "4" },
];

export default function CraftProcess() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      if (rect.top < viewHeight * 0.7 && rect.bottom > viewHeight * 0.3) {
        setActiveStep((prev) => prev ?? "1");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = steps.find((s) => s.number === activeStep);

  return (
    <section ref={sectionRef} className="py-12 md:py-20">
      <h2 className="px-4 md:px-0 text-2xl md:text-3xl font-serif mb-12 max-w-7xl mx-auto">
        {t("craftProcess.title")}
      </h2>

      <div className="relative px-4 md:px-0 max-w-6xl mx-auto">
        <div className="absolute top-7 left-4 right-4 md:left-0 md:right-0 h-px bg-neutral-700">
          <motion.div
            className="h-px bg-amber-700 origin-left"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: activeStep ? Number(activeStep) / steps.length : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="flex justify-between md:justify-center md:gap-24 text-center">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              className="flex flex-col items-center gap-3 w-full cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Number(step.number) * 0.1 }}
            >
              <div
                className={`relative z-10 h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center font-semibold transition-all duration-300
        ${
          activeStep === step.number
            ? "bg-amber-700 text-white scale-110 shadow-lg shadow-amber-700/30"
            : "bg-neutral-800 text-neutral-400 hover:scale-105 hover:bg-neutral-700"
        }`}
              >
                {step.number}
              </div>
              <span className="text-xs tracking-widest uppercase opacity-80 transition-colors duration-300 group-hover:text-amber-400">
                {t(`craftProcess.steps.${step.number}.label`)}
              </span>
            </motion.div>
          ))}
        </div>

        {current && (
          <motion.div
            key={activeStep}
            className="mt-10 px-6 md:px-0 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              {t(`craftProcess.steps.${current.number}.description`)}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
