import { useState } from "react";
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

  const [activeImage, setActiveImage] = useState(item.images[0]);

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
                src={activeImage}
                alt=""
                className="w-full h-auto max-h-[50vh] object-contain rounded-md"
              />

              {item.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto">
                  {item.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      onClick={() => setActiveImage(img)}
                      className={`h-20 w-auto object-cover rounded-md cursor-pointer border transition
                    ${
                      activeImage === img
                        ? "border-amber-500 opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <p className="text-sm md:text-base text-neutral-300 leading-relaxed mb-1">
              {" "}
              {t(item.descriptionKey)}{" "}
            </p>
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
            className="mt-6 bg-amber-700 hover:bg-amber-600 transition py-3 px-6 text-xs tracking-widest uppercase cursor-pointer rounded-md"
          >
            {t("featureWork.requestButton")}
          </button>
        </div>
      </div>
    </div>
  );
}
