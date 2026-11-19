export type MenuFilterCategory =
  | "All"
  | "Signature"
  | "Coffee"
  | "Matcha"
  | "Drinks & Tea"
  | "Pastry & Bites"
  | "Kitchen";

export interface FeaturedDrink {
  id: string;
  name: string;
  category: "Coffee" | "Matcha" | "Signature";
  subtitle: string;
  description: string;
  tastingNotes: string;
  price: string;
  image: string;
  imageAlt: string;
}

export interface MenuItem {
  name: string;
  detail?: string;
  priceHot?: string;
  priceCold?: string;
  price?: string;
  isSignature?: boolean;
}

export interface MenuGroup {
  id: string;
  title: string;
  filterCategory: Exclude<MenuFilterCategory, "All" | "Signature">;
  hasHotCold?: boolean;
  items: MenuItem[];
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
    id: "dipkop-kopi-susu-gula-aren",
    name: "DIPKOP (Kopi Susu Gula Aren)",
    category: "Signature",
    subtitle: "#1 Kopi Susu Gula Aren di Depok",
    description:
      "Our signature house espresso paired with creamy milk and rich Indonesian palm sugar—balanced, smooth, and crafted to be your daily ritual.",
    tastingNotes: "Caramelized Palm Sugar · Roasted Espresso · Velvety Milk",
    price: "25K",
    image: "/images/menu-signature.jpg",
    imageAlt:
      "DIPKOP signature iced Kopi Susu Gula Aren and layered house beverage",
  },
  {
    id: "signature-matcha-latte",
    name: "Signature Matcha Latte",
    category: "Matcha",
    subtitle: "Ceremonial Grade Uji Matcha",
    description:
      "First-harvest ceremonial matcha whisked to order for a vibrant jade microfoam, paired with chilled milk—or explore Coconut, Strawberry, and Butterscotch variations.",
    tastingNotes: "Umami · Sweet Grass · Creamy Finish",
    price: "32K",
    image: "/images/menu-matcha.jpg",
    imageAlt:
      "Ceremonial Uji matcha latte in a handcrafted stoneware bowl with a bamboo whisk",
  },
  {
    id: "manual-brew-aceh-gayo",
    name: "Manual Brew — Aceh Gayo",
    category: "Coffee",
    subtitle: "Single-Origin Indonesian Pour Over",
    description:
      "Hand-brewed Aceh Gayo beans served hot or over ice, highlighting clean Indonesian highland terroir, gentle spice, and lingering sweetness.",
    tastingNotes: "Highland Spice · Dark Honey · Clean Finish",
    price: "25K (Hot / Cold)",
    image: "/images/menu-coffee.jpg",
    imageAlt:
      "Single-origin Aceh Gayo pour-over coffee served in a fluted glass carafe and ceramic cup",
  },
];

export const MENU_GROUPS: MenuGroup[] = [
  {
    id: "classic-coffee",
    title: "Classic Coffee",
    filterCategory: "Coffee",
    hasHotCold: true,
    items: [
      { name: "Americano", priceHot: "18K", priceCold: "20K" },
      { name: "Cappuccino", priceHot: "25K", priceCold: "27K" },
      { name: "Cafe Latte", priceHot: "24K", priceCold: "26K" },
      { name: "Vanilla Latte", priceHot: "25K", priceCold: "27K" },
      { name: "Affogato", priceCold: "23K" },
      {
        name: "DIPKOP (Kopi Susu Gula Aren)",
        priceCold: "25K",
        isSignature: true,
      },
    ],
  },
  {
    id: "manual-brew",
    title: "Manual Brew",
    filterCategory: "Coffee",
    hasHotCold: true,
    items: [{ name: "Aceh Gayo", priceHot: "25K", priceCold: "25K" }],
  },
  {
    id: "ceremonial-matcha",
    title: "Ceremonial Matcha",
    filterCategory: "Matcha",
    items: [
      { name: "Regular Matcha Latte", price: "29K" },
      { name: "Signature Matcha Latte", price: "32K", isSignature: true },
      { name: "Coconut Matcha", price: "35K" },
      { name: "Strawberry Matcha Latte", price: "35K", isSignature: true },
      { name: "Butterscotch Matcha Latte", price: "32K" },
    ],
  },
  {
    id: "favorit-gen-z",
    title: "Favorit Gen-Z",
    filterCategory: "Coffee",
    items: [
      { name: "Peach Americano", price: "25K" },
      { name: "Pistachio Mont Blanc", price: "35K", isSignature: true },
      { name: "Strawberrycano", price: "28K" },
      { name: "Tiramisu Latte", price: "32K", isSignature: true },
      { name: "Butterscotch Latte", price: "29K" },
    ],
  },
  {
    id: "refresher",
    title: "Refresher",
    filterCategory: "Drinks & Tea",
    items: [
      { name: "Strawberry Yakult Soda", price: "22K" },
      { name: "Peach Yakult Soda", price: "22K" },
      { name: "Lychee Yakult Soda", price: "22K" },
    ],
  },
  {
    id: "iced-tea",
    title: "Iced Tea",
    filterCategory: "Drinks & Tea",
    items: [
      { name: "Iced Black Tea", price: "15K" },
      { name: "Iced Peach Tea", price: "17K" },
      { name: "Iced Lychee Tea", price: "17K", isSignature: true },
    ],
  },
  {
    id: "pastry",
    title: "Pastry",
    filterCategory: "Pastry & Bites",
    items: [
      { name: "Salt Bread", price: "15K", isSignature: true },
      { name: "Cheese Salt Bread", price: "15K" },
      { name: "Chocolate Pain Suisse", price: "15K" },
      { name: "Red Velvet Pain Suisse", price: "15K" },
      { name: "Croissant", price: "15K" },
      { name: "Canele", price: "15K" },
    ],
  },
  {
    id: "appetiser",
    title: "Appetiser",
    filterCategory: "Pastry & Bites",
    items: [
      { name: "Mixed Platter", price: "20K", isSignature: true },
      { name: "Kentang Goreng", price: "17K" },
      { name: "Cireng Bumbu Rujak", price: "15K" },
      { name: "Chicken Wings khas Swedia", price: "28K", isSignature: true },
      { name: "Tahu Cabe Garam", price: "15K" },
    ],
  },
  {
    id: "main-course",
    title: "Main Course",
    filterCategory: "Kitchen",
    items: [
      {
        name: "Salted Egg Chicken Rice khas Singapore",
        detail: "Resep autentik ala Singapura, creamy, gurih, bukan saus premix instan",
        price: "45K",
        isSignature: true,
      },
      { name: "Black Pepper Chicken Rice", price: "38K" },
      {
        name: "Nasi Ayam Serundeng",
        detail: "Sambal Matah / Bawang / Cabe Ijo",
        price: "33K",
        isSignature: true,
      },
      { name: "Nasi Goreng Spesial", price: "28K" },
      { name: "Indomie Goreng", price: "15K" },
      {
        name: "Indomie Rebus",
        detail: "Kari Ayam / Soto Mie / Ayam Bawang",
        price: "15K",
      },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    filterCategory: "Pastry & Bites",
    items: [
      { name: "Pisang Bakar Coklat Keju", price: "20K" },
      { name: "Pisang Goreng Coklat Keju", price: "20K" },
      { name: "Burnt Cheesecake", price: "30K", isSignature: true },
      {
        name: "Callebaut Cookie Bomb",
        detail: "with Ice Cream",
        price: "45K",
        isSignature: true,
      },
    ],
  },
];

export const MENU_ADDONS = [
  { name: "Oatside", price: "+5K" },
  { name: "Extra Shot", price: "+6K" },
  { name: "Ice Cream", price: "+5K" },
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
  addressLine1: "Jl. Kembang Beji No. 56",
  addressLine2: "Beji, Kota Depok, Jawa Barat",
  neighborhoodNote: "No Pork, No Lard · Tersedia di GoFood",
  hours: [
    { days: "Monday – Friday", time: "08:00 – 22:00 WIB (Placeholder)" },
    { days: "Saturday – Sunday", time: "08:00 – 23:00 WIB (Placeholder)" },
  ],
  instagramHandle: "@dipkop.id",
  instagramUrl: "https://instagram.com/dipkop.id",
  mapsUrl: "https://maps.google.com/?q=Jl.+Kembang+Beji+No.+56,+Depok",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Jl.+Kembang+Beji+No.+56,+Depok&output=embed",
};
