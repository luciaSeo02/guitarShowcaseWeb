import { useState } from "react";
import { featuredWork } from "../data/featuredWork";
import FeatureWorkModal from "./FeatureWorkModal";
import type { FeaturedWorkItem } from "../data/featuredWork";

export default function FeatureWork() {
  const [selectedItem, setSelectedItem] = useState<FeaturedWorkItem | null>(
    null,
  );

  return (
    <section className="py-12">
      <h2 className="px-4 text-2xl font-serif mb-6">Feature Work</h2>

      <div className="flex gap-6 overflow-x-auto px-4 scrollbar-hide">
        {featuredWork.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="min-w-[260px] bg-neutral-800 rounded-lg overflow-hidden text-left"
          >
            <div className="aspect-[3/4]">
              <img
                src={item.coverImage}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                {item.category}
              </p>
              <h3 className="text-sm tracking-wide">{item.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {selectedItem && (
        <FeatureWorkModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
