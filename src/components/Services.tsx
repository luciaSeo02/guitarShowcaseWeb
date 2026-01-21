export default function Services() {
  return (
    <section className="py-16">
      <h2 className="px-4 text-2xl font-serif mb-8">Services</h2>
      <div className="flex justify-around px-4 text-center">
        {[
          { title: "Custom Builds", icon: "🎸" },
          { title: "Restoration", icon: "🎻" },
          { title: "Metal Figures", icon: "🔥" },
        ].map((service) => (
          <button
            key={service.title}
            className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition"
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
    </section>
  );
}
