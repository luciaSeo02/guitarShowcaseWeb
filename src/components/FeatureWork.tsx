import { useState, useRef } from "react";
import { featuredWork } from "../data/featuredWork";
import FeatureWorkModal from "./FeatureWorkModal";
import type { FeaturedWorkItem } from "../data/featuredWork";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeatureWork() {
  const [selectedItem, setSelectedItem] = useState<FeaturedWorkItem | null>(
    null,
  );
  const { t } = useTranslation();

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-12">
      <h2 className="px-4 md:px-0 text-2xl md:text-3xl font-serif mb-6 max-w-7xl mx-auto">
        {t("featureWork.title")}
      </h2>

      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-neutral-800/80 hover:bg-neutral-700 p-3 rounded-full backdrop-blur cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-neutral-800/80 hover:bg-neutral-700 p-3 rounded-full backdrop-blur cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden px-4 md:px-12 scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {featuredWork.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="w-[260px] flex-shrink-0 snap-start bg-neutral-800 rounded-lg overflow-hidden text-left transition hover:scale-[1.02] cursor-pointer"
            >
              <div className="aspect-[3/4]">
                <img
                  src={item.coverImage}
                  alt={t(item.titleKey)}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                  {t(item.categoryKey)}
                </p>
                <h3 className="text-sm tracking-wide">{t(item.titleKey)}</h3>
              </div>
            </button>
          ))}
        </div>
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
