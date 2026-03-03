import { useState } from "react";
import { featuredWork } from "../data/featuredWork";
import FeatureWorkModal from "./FeatureWorkModal";
import type { FeaturedWorkItem } from "../data/featuredWork";
import { useTranslation } from "react-i18next";

export default function FeatureWork() {
  const [selectedItem, setSelectedItem] = useState<FeaturedWorkItem | null>(
    null,
  );
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <h2 className="px-4 md:px-0 text-2xl md:text-3xl font-serif mb-6 max-w-7xl mx-auto">
        {t("featureWork.title")}
      </h2>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible px-4 md:px-0 scrollbar-hide max-w-7xl mx-auto">
        {featuredWork.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="min-w-[260px] md:min-w-0 bg-neutral-800 rounded-lg overflow-hidden text-left transition hover:scale-[1.02] cursor-pointer"
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

      {selectedItem && (
        <FeatureWorkModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
