import type {
  Banner,
  BlogPost,
  Category,
  DealTile,
  PatternCategory,
  Product,
  SearchProduct,
} from "./types";

/* Shared catalogue data used by the storefront UI. */

export const products: Product[] = [
  { id: 1, name: "Denim Backpack", price: 20.55, image: "/assets/images/gradient/product/1.jpg", sale: false, badge: null },
  { id: 2, name: "Black Belt", price: 3.6, image: "/assets/images/gradient/product/2.jpg", sale: true, badge: "new" },
  { id: 3, name: "Men's Snapback Cap", price: 5.0, image: "/assets/images/gradient/product/3.jpg", sale: false, badge: null },
  { id: 4, name: "Men's Sneaker Retro Shoes", price: 100.5, image: "/assets/images/gradient/product/4.jpg", sale: true, badge: "new" },
  { id: 5, name: "3-Stripes Terry Hoodie", price: 60.8, image: "/assets/images/gradient/product/5.jpg", sale: true, badge: "new" },
  { id: 6, name: "Foot Pease Socks", price: 10.8, image: "/assets/images/gradient/product/6.jpg", sale: false, badge: null },
  { id: 7, name: "Eastpak shoulder bag", price: 36.3, image: "/assets/images/gradient/product/7.jpg", sale: true, badge: "new" },
  { id: 8, name: "Woven Track Jacket", price: 99.9, image: "/assets/images/gradient/product/8.jpg", sale: false, badge: null },
  { id: 9, name: "Slipped Men's Wallet", price: 15.0, image: "/assets/images/gradient/product/9.jpg", sale: true, badge: "new" },
  { id: 10, name: "Casual Printed Cotton Short", price: 6.0, image: "/assets/images/gradient/product/10.jpg", sale: false, badge: null },
];

export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const productBySlug = (slug: string): Product => {
  const found = products.find((product) => slugify(product.name) === slug || String(product.id) === slug);
  return found ?? products[0];
};

export const gradientCategories: Category[] = [
  { name: "Top wear", image: "/assets/images/fashion/category/1.png" },
  { name: "dresses", image: "/assets/images/fashion/category/4.png" },
  { name: "bottom", image: "/assets/images/fashion/category/3.png" },
  { name: "inner/sleep", image: "/assets/images/fashion/category/2.png" },
  { name: "footwear", image: "/assets/images/fashion/category/5.png" },
  { name: "sports/active", image: "/assets/images/fashion/category/6.png" },
];

export const patternCategories: PatternCategory[] = [
  { name: "Top wear", image: "/assets/images/fashion/category/8.png", bg: "bg1" },
  { name: "dresses", image: "/assets/images/fashion/category/9.png", bg: "bg2" },
  { name: "bottom", image: "/assets/images/fashion/category/10.png", bg: "bg3" },
  { name: "inner/sleep", image: "/assets/images/fashion/category/11.png", bg: "bg4" },
  { name: "footwear", image: "/assets/images/fashion/category/12.png", bg: "bg5" },
  { name: "sports/active", image: "/assets/images/fashion/category/13.png", bg: "bg6" },
];

export const collectionBanners: Banner[] = [
  { image: "/assets/images/gradient/banner/4.jpg", off: "save 30%", title: "men" },
  { image: "/assets/images/gradient/banner/5.jpg", off: "save 60%", title: "women" },
];

export const smallBanners: Banner[] = [
  { image: "/assets/images/gradient/banner/1.jpg", off: "10% off", title: "speaker" },
  { image: "/assets/images/gradient/banner/2.jpg", off: "10% off", title: "earplug" },
  { image: "/assets/images/gradient/banner/3.jpg", off: "50% off", title: "best deal" },
];

export const dealTiles: DealTile[] = [
  { image: "/assets/images/gradient/deal-bg/1.jpg", lines: ["40%", "60%", "off"] },
  { image: "/assets/images/gradient/deal-bg/2.jpg", lines: ["Flat", "60%", "off"] },
  { image: "/assets/images/gradient/deal-bg/6.jpg", lines: ["free", "Ship.", "zone"] },
  { image: "/assets/images/gradient/deal-bg/3.jpg", lines: ["Buy 1", "Get 1", "Free"] },
  { image: "/assets/images/gradient/deal-bg/4.jpg", lines: ["upto", "40%", "off"] },
  { image: "/assets/images/gradient/deal-bg/5.jpg", lines: ["Min", "20%", "off"] },
];

export const blogPosts: BlogPost[] = [
  { image: "/assets/images/gradient/blog/1.jpg", date: "25 January 2024", title: "Lorem ipsum dolor sit consectetur adipiscing elit," },
  { image: "/assets/images/gradient/blog/2.jpg", date: "25 January 2024", title: "Lorem ipsum dolor sit consectetur adipiscing elit," },
  { image: "/assets/images/gradient/blog/3.jpg", date: "25 January 2024", title: "Lorem ipsum dolor sit consectetur adipiscing elit," },
  { image: "/assets/images/gradient/blog/4.jpg", date: "25 January 2024", title: "Lorem ipsum dolor sit consectetur adipiscing elit," },
];

export const instagramImages: string[] = [
  "/assets/images/gradient/instagram/1.jpg",
  "/assets/images/gradient/instagram/2.jpg",
  "/assets/images/gradient/instagram/3.jpg",
  "/assets/images/gradient/instagram/4.jpg",
  "/assets/images/gradient/instagram/5.jpg",
  "/assets/images/gradient/instagram/6.jpg",
  "/assets/images/gradient/instagram/7.jpg",
  "/assets/images/gradient/instagram/3.jpg",
  "/assets/images/gradient/instagram/5.jpg",
];

export const searchProducts: SearchProduct[] = [
  { name: "Glamour Gaze", sub: "Boyfriend Shirts", price: "2.79", oldPrice: "3.00", image: "/assets/images/fashion-1/product/1.jpg", rating: "2.5" },
  { name: "Velvet Vogue", sub: "Slim Fit Jeans", price: "12.40", oldPrice: "14.00", image: "/assets/images/fashion-1/product/11.jpg", rating: "6.5" },
  { name: "Urban Chic", sub: "Classic Jacket", price: "7.84", oldPrice: "9.50", image: "/assets/images/fashion-1/product/12.jpg", rating: "4.0" },
  { name: "Couture Edge", sub: "Cami Tank Top", price: "6.74", oldPrice: "8.00", image: "/assets/images/fashion-1/product/13.jpg", rating: "3.5" },
];