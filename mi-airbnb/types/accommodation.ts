export type Category =
  | "Playa"
  | "Mansiones"
  | "Tendencias"
  | "Cabanas"
  | "Campo"
  | "Piscinas";

export type SortOrder = "price-asc" | "price-desc";

export interface HostInfo {
  name: string;
  yearsHosting: number;
  avatarLabel: string;
}

export interface Accommodation {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  category: Category;
  imageUrl: string;
  gallery: string[];
  host: HostInfo;
  amenities: string[];
}
