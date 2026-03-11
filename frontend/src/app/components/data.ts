import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'fish' | 'aquarium' | 'equipment';
  isOnSale?: boolean;
  originalPrice?: number;
  subCategory: 'tropical' | 'freshwater' | 'marine' | 'tank' | 'filter' | 'lighting' | 'food';
  waterType: 'fresh' | 'salt';
  image: string;
  description: string;
  stock: number;
  rating: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pesce Combattente (Betta)',
    price: 15.90,
    category: 'fish',
    isOnSale: true,
    originalPrice: 19.90,
    subCategory: 'freshwater',
    waterType: 'fresh',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&q=80',
    description: 'Elegante e colorato, perfetto per piccoli acquari.',
    stock: 12,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Pesce Pagliaccio (Nemo)',
    price: 24.50,
    category: 'fish',
    subCategory: 'marine',
    waterType: 'salt',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80',
    description: 'Il re degli acquari marini, simbolo della barriera corallina.',
    stock: 8,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Acquario Nano Cube 30L',
    price: 89.00,
    category: 'aquarium',
    isOnSale: true,
    originalPrice: 109.00,
    subCategory: 'tank',
    waterType: 'fresh',
    image: 'https://images.unsplash.com/photo-1542345647781-7c1c1350f7fb?w=500&q=80',
    description: 'Design moderno e compatto, ideale per gamberetti e piante.',
    stock: 5,
    rating: 4.5
  },
  {
    id: '4',
    name: 'Filtro Esterno Professionale',
    price: 120.00,
    category: 'equipment',
    subCategory: 'filter',
    waterType: 'fresh',
    image: 'https://images.unsplash.com/photo-1763889107827-8e7d7960d68a?w=500&q=80',
    description: 'Silenzioso ed efficiente per acquari fino a 200 litri.',
    stock: 10,
    rating: 4.7
  },
  {
    id: '5',
    name: 'Neon Tetra (Cardinale)',
    price: 2.50,
    category: 'fish',
    subCategory: 'tropical',
    waterType: 'fresh',
    image: 'https://images.unsplash.com/photo-1744366071536-7c0c536962a0?w=500&q=80',
    description: 'Pesce di branco vivace e dai colori brillanti.',
    stock: 50,
    rating: 4.6
  },
  {
    id: '6',
    name: 'Plafoniera LED Full Spectrum',
    price: 75.00,
    category: 'equipment',
    subCategory: 'lighting',
    waterType: 'fresh',
    image: 'https://images.unsplash.com/photo-1524704659674-3272b3d1bb24?w=500&q=80',
    description: 'Ottimizza la crescita delle piante e esalta i colori dei pesci.',
    stock: 15,
    rating: 4.8
  },
  {
    id: '7',
    name: 'Mangime Premium in Granuli',
    price: 12.90,
    category: 'equipment',
    subCategory: 'food',
    waterType: 'fresh',
    image: 'https://images.unsplash.com/photo-1601439678777-b2b3c5646232?w=500&q=80',
    description: 'Nutrizione completa ed equilibrata per tutti i pesci tropicali.',
    stock: 100,
    rating: 4.9
  },
  {
    id: '8',
    name: 'Acquario Marino Completo 120L',
    price: 450.00,
    category: 'aquarium',
    subCategory: 'tank',
    waterType: 'salt',
    image: 'https://images.unsplash.com/photo-1541093226300-cb535389658b?w=500&q=80',
    description: 'Set completo per iniziare la tua avventura marina.',
    stock: 3,
    rating: 5.0
  }
];
