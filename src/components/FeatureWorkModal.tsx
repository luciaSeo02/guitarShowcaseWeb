import type { FeaturedWorkItem } from "../data/featuredWork";

interface Props {
  item: FeaturedWorkItem;
  onClose: () => void;
}

export default function FeatureWorkModal({ item, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-end">
      <button
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative w-full max-h-[90vh] bg-neutral-900 rounded-t-2xl overflow-y-auto">
        <div className="p-4 flex justify-between items-center">
          <h3 className="text-lg font-serif">{item.title}</h3>
          <button onClick={onClose} className="text-neutral-400 text-xl">
            ✕
          </button>
        </div>
        <div className="aspect-[3/4]">
          <img
            src={item.images[0]}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4 space-y-4">
          <p className="text-sm text-neutral-300">{item.description}</p>
          {item.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto">
              {item.images.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="h-32 w-24 object-cover rounded-md"
                />
              ))}
            </div>
          )}

          <button className="w-full bg-amber-700 py-3 text-xs tracking-widest-uppercase">
            Request a custom one
          </button>
        </div>
      </div>
    </div>
  );
}
