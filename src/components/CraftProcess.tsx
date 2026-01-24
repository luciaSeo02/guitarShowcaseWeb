import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    label: "Idea",
    description:
      "We start by understanding your vision, references and purpose of the piece.",
  },
  {
    number: "2",
    label: "Design",
    description:
      "Materials, measurements and visual details are defined before building.",
  },
  {
    number: "3",
    label: "Construction",
    description:
      "Carefully handcrafted using traditional techniques and modern tools.",
  },
  {
    number: "4",
    label: "Delivery",
    description:
      "Final adjustments, quality check and safe delivery of the finished work.",
  },
];

export default function CraftProcess() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

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
    <section ref={sectionRef} className="py-12">
      <h2 className=" px-4 text-2xl font-serif mb-8">Craft Process</h2>

      <div className="relative px-4">
        <div className="absolute top-7 left-4 right-4 h-px bg-neutral-700" />

        <div className="flex justify-between text-center">
          {steps.map((step) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              className="flex flex-col items-center gap-3 w-full cursor-pointer"
            >
              <div
                className={`relative z-10 h-14 w-14 rounded-full flex items-center justify-center font-semibold transition
                  ${
                    activeStep === step.number
                      ? "bg-amber-700 text-white scale-110 shadow-lg shadow-amber-700/30"
                      : "bg-neutral-800 text-neutral-400"
                  }`}
              >
                {step.number}
              </div>
              <span className="text-xs tracking-widest uppercase opacity-80">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {current && (
          <div className="mt-8 px-6 text-center">
            <p
              key={activeStep}
              className="text-sm leading-relaxed opacity-90 animate-fadeIn"
            >
              {current.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
