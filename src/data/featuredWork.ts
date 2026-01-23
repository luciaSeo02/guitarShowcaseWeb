export interface FeaturedWorkItem {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
  description: string;
}

export const featuredWork: FeaturedWorkItem[] = [
  {
    id: "electric-guitar",
    title: "Electric Guitar",
    category: "Custom Build",
    coverImage: "/images/feature-electric.jpg",
    images: [
      "/images/feature-electric-1.jpg",
      "/images/feature-electric-2.jpg",
    ],
    description:
      "Handcrafted electric guitar with walnut body and vintage-inspired sound.",
  },
  {
    id: "restoration",
    title: "Guitar Restoration",
    category: "Restoration",
    coverImage: "/images/feature-restoration.jpg",
    images: [
      "/images/feature-restoration-1.jpg",
      "/images/feature-restoration-2.jpg",
    ],
    description:
      "Full restoration of classic guitars, preserving character and sound.",
  },
  {
    id: "metal-sculpture",
    title: "Metal Sculpture",
    category: "Metal Art",
    coverImage: "/images/feature-metal.jpg",
    images: ["/images/feature-metal-1.jpg"],
    description:
      "Handmade metal figures created from recycled and forged materials.",
  },
];
