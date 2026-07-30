export type MenuCategory = 'todos' | 'entradas' | 'fuertes' | 'postres' | 'bebidas';

export interface MenuItem {
  id: string;
  name: string;
  category: 'entradas' | 'fuertes' | 'postres' | 'bebidas';
  description: string;
  price: number;
  imageUrl: string;
  featured?: boolean;
  tags?: string[];
  grandmotherNote?: string;
  ingredients?: string[];
  calories?: string;
  prepTime?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialNote?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: 'terraza' | 'salon' | 'barra';
  notes?: string;
}
