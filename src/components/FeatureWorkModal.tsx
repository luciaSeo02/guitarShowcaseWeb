import type { FeaturedWorkItem } from "../data/featuredWork";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  item: FeaturedWorkItem;
  onClose: () => void;
}

export default function FeatureWorkModal({ item, onClose }: Props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 md:p-0">
      <button
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="relative w-full md:max-w-xl max-h-[90vh] bg-neutral-900 rounded-2xl overflow-y-auto shadow-2xl flex flex-col md:flex-row">
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl md:text-2xl font-serif">
                {t(item.titleKey)}
              </h3>
              <button
                onClick={onClose}
                className="text-neutral-400 text-2xl hover:text-white transition"
              >
                ✕
              </button>
            </div>

            <div className="flex-shrink-0 md:flex-1 md:max-h-[80vh] p-4 md:p-6">
              <img
                src={item.images[0]}
                alt={item.titleKey}
                className="w-full h-auto max-h-[60vh] object-contain rounded-md"
              />
            </div>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed mb-1">
              {t(item.descriptionKey)}
            </p>

            {item.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto py-2">
                {item.images.slice(1).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    className="h-24 md:h-32 w-auto object-cover rounded-md flex-shrink-0"
                  />
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() =>
              navigate("/custom-order", {
                state: {
                  service: "Custom Build",
                  reference: t(item.titleKey),
                  description: t(item.descriptionKey),
                },
              })
            }
            className="mt-6 w-full md:w-auto bg-amber-700 hover:bg-amber-600 transition py-3 md:py-4 px-4 md:px-6 text-xs md:text-sm tracking-widest uppercase cursor-pointer rounded-md shadow-md hover:shadow-lg"
          >
            {t("featureWork.requestButton")}
          </button>
        </div>
      </div>
    </div>
  );
}
