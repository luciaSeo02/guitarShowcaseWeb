export default function FeatureWork() {
  return (
    <section className="py-16">
      <h2 className="px-4 text-2xl font-serif mb-8">Feature Work</h2>

      <div className="flex gap-6 overflow-x-auto px-4 scrollbar-hide">
        {[
          "Electric Guitar",
          "Restoration",
          "Metal Sculpture",
          "Guitar Detail",
        ].map((title) => (
          <div
            key={title}
            className="min-w-65 bg-neutral-800 rounded-lg overflow-hidden"
          >
            <div className="aspect-3/4 bg-neutral-700" />
            <h3 className="p-4 text-sm tracking-wide">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
