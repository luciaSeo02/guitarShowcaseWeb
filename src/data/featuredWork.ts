export interface FeaturedWorkItem {
  id: string;
  titleKey: string;
  categoryKey: string;
  descriptionKey: string;
  coverImage: string;
  images: string[];
}

export const featuredWork: FeaturedWorkItem[] = [
  {
    id: "electric-guitar",
    titleKey: "featured.electric.title",
    categoryKey: "featured.electric.category",
    descriptionKey: "featured.electric.description",
    coverImage: "/images/electric-guitar.png",
    images: ["/images/electric-guitar.png"],
  },
  {
    id: "restoration",
    titleKey: "featured.restoration.title",
    categoryKey: "featured.restoration.category",
    descriptionKey: "featured.restoration.description",
    coverImage: "/images/restauration-guitar.png",
    images: ["/images/restauration-guitar.png"],
  },
  {
    id: "metal-sculpture",
    titleKey: "featured.metal.title",
    categoryKey: "featured.metal.category",
    descriptionKey: "featured.metal.description",
    coverImage: "/images/metal-figure.png",
    images: ["/images/metal-figure.png"],
  },
];
