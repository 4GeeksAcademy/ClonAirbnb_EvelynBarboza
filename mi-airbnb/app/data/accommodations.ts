import type { Accommodation, Category } from "@/types/accommodation";

export const categories: Category[] = [
  "Playa",
  "Mansiones",
  "Tendencias",
  "Cabanas",
  "Campo",
  "Piscinas",
];

export const accommodations: Accommodation[] = [
  {
    id: "1",
    title: "Apartamento en Palermo Soho",
    location: "Buenos Aires, Argentina",
    pricePerNight: 95,
    rating: 4.92,
    reviews: 132,
    category: "Tendencias",
    imageUrl: "https://picsum.photos/seed/room1/900/600",
    gallery: [
      "https://picsum.photos/seed/room1a/1200/800",
      "https://picsum.photos/seed/room1b/1200/800",
      "https://picsum.photos/seed/room1c/1200/800",
    ],
    host: {
      name: "Camila",
      yearsHosting: 4,
      avatarLabel: "C",
    },
    amenities: ["Wifi", "Cocina", "Aire acondicionado", "Ascensor"],
  },
  {
    id: "2",
    title: "Casa frente al mar",
    location: "Punta del Este, Uruguay",
    pricePerNight: 220,
    rating: 4.97,
    reviews: 88,
    category: "Playa",
    imageUrl: "https://picsum.photos/seed/room2/900/600",
    gallery: [
      "https://picsum.photos/seed/room2a/1200/800",
      "https://picsum.photos/seed/room2b/1200/800",
      "https://picsum.photos/seed/room2c/1200/800",
    ],
    host: {
      name: "Lucia",
      yearsHosting: 6,
      avatarLabel: "L",
    },
    amenities: ["Vista al mar", "Parrilla", "Piscina", "Estacionamiento"],
  },
  {
    id: "3",
    title: "Cabana de montana",
    location: "Bariloche, Argentina",
    pricePerNight: 140,
    rating: 4.85,
    reviews: 57,
    category: "Cabanas",
    imageUrl: "https://picsum.photos/seed/room3/900/600",
    gallery: [
      "https://picsum.photos/seed/room3a/1200/800",
      "https://picsum.photos/seed/room3b/1200/800",
      "https://picsum.photos/seed/room3c/1200/800",
    ],
    host: {
      name: "Santiago",
      yearsHosting: 3,
      avatarLabel: "S",
    },
    amenities: ["Chimenea", "Vista a la montana", "Cocina", "Patio"],
  },
  {
    id: "4",
    title: "Mansion con jardin",
    location: "Madrid, Espana",
    pricePerNight: 380,
    rating: 4.9,
    reviews: 44,
    category: "Mansiones",
    imageUrl: "https://picsum.photos/seed/room4/900/600",
    gallery: [
      "https://picsum.photos/seed/room4a/1200/800",
      "https://picsum.photos/seed/room4b/1200/800",
      "https://picsum.photos/seed/room4c/1200/800",
    ],
    host: {
      name: "Adrian",
      yearsHosting: 8,
      avatarLabel: "A",
    },
    amenities: ["Jardin", "Piscina", "Cine en casa", "Gym"],
  },
  {
    id: "5",
    title: "Casa rural entre vinedos",
    location: "Mendoza, Argentina",
    pricePerNight: 170,
    rating: 4.88,
    reviews: 63,
    category: "Campo",
    imageUrl: "https://picsum.photos/seed/room5/900/600",
    gallery: [
      "https://picsum.photos/seed/room5a/1200/800",
      "https://picsum.photos/seed/room5b/1200/800",
      "https://picsum.photos/seed/room5c/1200/800",
    ],
    host: {
      name: "Mora",
      yearsHosting: 5,
      avatarLabel: "M",
    },
    amenities: ["Desayuno", "Fogon", "Bicicletas", "Wifi"],
  },
  {
    id: "6",
    title: "Loft con piscina urbana",
    location: "Santiago, Chile",
    pricePerNight: 125,
    rating: 4.78,
    reviews: 96,
    category: "Piscinas",
    imageUrl: "https://picsum.photos/seed/room6/900/600",
    gallery: [
      "https://picsum.photos/seed/room6a/1200/800",
      "https://picsum.photos/seed/room6b/1200/800",
      "https://picsum.photos/seed/room6c/1200/800",
    ],
    host: {
      name: "Nicolas",
      yearsHosting: 2,
      avatarLabel: "N",
    },
    amenities: ["Piscina", "Wifi", "Cowork", "Gimnasio"],
  },
];

export const getAccommodationById = (id: string): Accommodation | undefined =>
  accommodations.find((room) => room.id === id);
