export default function CraftProcess() {
  const steps = [
    { number: "1", label: "Idea" },
    { number: "2", label: "Design" },
    { number: "3", label: "Construction" },
    { number: "4", label: "Delivery" },
  ];
  return (
    <section className="py-16">
      <h2 className=" px-4 text-2xl font-serif mb-8">Craft Process</h2>

      <div className="relative px-4">
        <div className="absolute top-7 left-4 right-4 h-px bg-neutral-700" />

        <div className="flex justify-between text-center">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center gap-3 w-full"
            >
              <div className="relative z-10 h-14 w-14 rounded-full bg-amber-700 text-white flex items-center justify-center font-semibold">
                {step.number}
              </div>
              <span className="text-xs tracking-widest uppercase opacity-80">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
