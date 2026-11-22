export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sale: boolean;
  badge: string | null;
}

export interface Category {
  name: string;
  image: string;
}

export interface PatternCategory extends Category {
  bg: string;
}

export interface Banner {
  image: string;
  off: string;
  title: string;
}

export interface DealTile {
  image: string;
  lines: string[];
}

export interface BlogPost {
  image: string;
  date: string;
  title: string;
}

export interface SearchProduct {
  name: string;
  sub: string;
  price: string;
  oldPrice: string;
  image: string;
  rating: string;
}

export interface PageMeta {
  title: string;
  bodyClass: string;
  file: string;
}

export interface CartItem {
  key: string;
  name: string;
  price: number;
  qty: number;
  image: string;
  editable: boolean;
}