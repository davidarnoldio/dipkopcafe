export type MenuCategory = "Coffee" | "Matcha" | "Signature";

export interface FeaturedDrink {
  id: string;
  name: string;
  category: MenuCategory;
  subtitle: string;
  description: string;
  tastingNotes: string;
  pricePlaceholder: string;
  image: string;
  imageAlt: string;
}

export interface LedgerDrink {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  pricePlaceholder: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  issueNumber: string;
  aspect: "portrait" | "landscape" | "square";
}

export const FEATURED_DRINKS: FeaturedDrink[] = [
  {
    id: "dipkop-dirty-matcha",
    name: "Dipkop Dirty Matcha",
    category: "Signature",
    subtitle: "Layered Espresso & First-Harvest Uji",
    description:
      "Velvety ceremonial matcha whisked to order, poured over chilled oat milk and crowned with a double ristretto of our house Indonesian espresso.",
    tastingNotes: "Umami · Roasted Cacao · Oat Cream",
    pricePlaceholder: "IDR 48K (Sample)",
    image: "/images/menu-signature.jpg",
    imageAlt:
      "Iced Dipkop Dirty Matcha with espresso cascading over oat milk and ceremonial matcha",
  },
  {
    id: "ceremonial-uji-matcha",
    name: "Ceremonial Uji Matcha",
    category: "Matcha",
    subtitle: "Hand-Whisked in Stoneware",
    description:
      "Stone-milled first-harvest Uji cultivar whisked with a bamboo chasen at 75°C for a naturally sweet, lingering jade microfoam.",
    tastingNotes: "Sweet Grass · Sea Breeze · Silky Finish",
    pricePlaceholder: "IDR 45K (Sample)",
    image: "/images/menu-matcha.jpg",
    imageAlt:
      "Ceremonial Uji matcha in a dark stoneware chawan bowl with a bamboo whisk",
  },
  {
    id: "archipelago-pour-over",
    name: "Archipelago Pour Over",
    category: "Coffee",
    subtitle: "Single-Origin Indonesian Filter",
    description:
      "Rotating micro-lots from Aceh Gayo, West Java, and Flores Bajawa—hand-brewed to highlight bright terroir and clean aromatic sweetness.",
    tastingNotes: "Tamarind · Dark Honey · Spice",
    pricePlaceholder: "IDR 42K (Sample)",
    image: "/images/menu-coffee.jpg",
    imageAlt:
      "Single-origin Indonesian pour-over coffee served in a fluted glass carafe and ceramic cup",
  },
];

export const MENU_LEDGER: LedgerDrink[] = [
  {
    id: "gula-aren-kopi",
    name: "Kopi Susu Dipkop",
    category: "Signature",
    description:
      "Double house espresso, organic Javanese palm sugar reduction, and cold-textured milk.",
    pricePlaceholder: "IDR 38K (Sample)",
  },
  {
    id: "pandan-matcha-cloud",
    name: "Pandan Matcha Cloud",
    category: "Signature",
    description:
      "Iced Uji matcha layered beneath aromatic house-infused pandan cream foam.",
    pricePlaceholder: "IDR 48K (Sample)",
  },
  {
    id: "espresso-botanical-tonic",
    name: "Botanical Espresso Tonic",
    category: "Signature",
    description:
      "Bright washed-process espresso over dry quinine tonic, kaffir lime leaf, and rosemary.",
    pricePlaceholder: "IDR 44K (Sample)",
  },
  {
    id: "iced-matcha-oat",
    name: "Iced Matcha Oat Latte",
    category: "Matcha",
    description:
      "Pure ceremonial Uji matcha poured over chilled barista oat milk with zero refined sugar.",
    pricePlaceholder: "IDR 44K (Sample)",
  },
  {
    id: "hojicha-roasted-latte",
    name: "Kyoto Hojicha Latte",
    category: "Matcha",
    description:
      "Slow-roasted green tea leaves steamed with velvety milk for a warm, nutty caramel profile.",
    pricePlaceholder: "IDR 42K (Sample)",
  },
  {
    id: "flat-white",
    name: "House Flat White",
    category: "Coffee",
    description:
      "18g Indonesian-blend double espresso paired with glossy microfoam in warm stoneware.",
    pricePlaceholder: "IDR 36K (Sample)",
  },
  {
    id: "cold-brew-reserve",
    name: "18-Hour Cold Brew Reserve",
    category: "Coffee",
    description:
      "Slow-steeped West Java beans served over a hand-cut crystal ice sphere.",
    pricePlaceholder: "IDR 40K (Sample)",
  },
  {
    id: "americano-long-black",
    name: "Long Black",
    category: "Coffee",
    description:
      "Double espresso pulled directly over 92°C filtered spring water to preserve crema.",
    pricePlaceholder: "IDR 32K (Sample)",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    src: "/images/brand-story.jpg",
    alt: "Morning sunlight across DIPKOP's dark teakwood espresso and matcha bar",
    caption: "Morning light across the teakwood bar",
    issueNumber: "No. 01",
    aspect: "landscape",
  },
  {
    id: "gal-2",
    src: "/images/gallery-pour.jpg",
    alt: "Velvety microfoam milk poured into golden espresso in a ceramic cup",
    caption: "Microfoam poured into warm stoneware",
    issueNumber: "No. 02",
    aspect: "portrait",
  },
  {
    id: "gal-3",
    src: "/images/experience-space.jpg",
    alt: "Quiet botanical corner with rattan seating and sunlit tropical leaves",
    caption: "The botanical corner after noon",
    issueNumber: "No. 03",
    aspect: "portrait",
  },
  {
    id: "gal-4",
    src: "/images/experience-craft.jpg",
    alt: "Barista pouring hot water from a matte black gooseneck kettle into a V60 dripper",
    caption: "Measured pour, 92°C bloom",
    issueNumber: "No. 04",
    aspect: "square",
  },
  {
    id: "gal-5",
    src: "/images/menu-matcha.jpg",
    alt: "Hand-whisked ceremonial matcha in a dark clay bowl",
    caption: "First-harvest Uji, whisked to order",
    issueNumber: "No. 05",
    aspect: "landscape",
  },
];

export const LOCATION_INFO = {
  brandName: "DIPKOP Coffee & Matcha",
  addressLine1: "Jl. Kemang Raya No. — (Editable Address)",
  addressLine2: "Jakarta Selatan, Indonesia",
  neighborhoodNote: "Tucked behind a quiet botanical courtyard — placeholder location",
  hours: [
    { days: "Monday – Friday", time: "07:30 – 21:00 WIB (Placeholder)" },
    { days: "Saturday – Sunday", time: "08:00 – 22:00 WIB (Placeholder)" },
  ],
  instagramHandle: "@dipkop.id",
  instagramUrl: "https://instagram.com",
  mapsUrl: "https://maps.google.com/?q=Kemang+Jakarta+Selatan",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Kemang,+South+Jakarta&output=embed",
};
