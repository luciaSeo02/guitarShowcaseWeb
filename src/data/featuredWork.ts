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
    coverImage: "/images/feature-electric.jpg",
    images: [
      "/images/feature-electric-1.jpg",
      "/images/feature-electric-2.jpg",
    ],
  },
  {
    id: "restoration",
    titleKey: "featured.restoration.title",
    categoryKey: "featured.restoration.category",
    descriptionKey: "featured.restoration.description",
    coverImage: "/images/feature-restoration.jpg",
    images: [
      "/images/feature-restoration-1.jpg",
      "/images/feature-restoration-2.jpg",
    ],
  },
  {
    id: "metal-sculpture",
    titleKey: "featured.metal.title",
    categoryKey: "featured.metal.category",
    descriptionKey: "featured.metal.description",
    coverImage: "/images/feature-metal.jpg",
    images: ["/images/feature-metal-1.jpg"],
  },
];
