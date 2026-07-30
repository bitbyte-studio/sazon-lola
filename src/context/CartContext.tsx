import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { CartItem, MenuItem } from '../types';

interface CartContextValue {
  cartItems: CartItem[];
  cartItemIds: string[];
  totalItemCount: number;
  isCartOpen: boolean;
  isReservationOpen: boolean;
  selectedDish: MenuItem | null;
  setIsCartOpen: (open: boolean) => void;
  setIsReservationOpen: (open: boolean) => void;
  setSelectedDish: (item: MenuItem | null) => void;
  handleAddToCart: (item: MenuItem, specialNote?: string, quantity?: number) => void;
  handleUpdateQuantity: (itemId: string, delta: number) => void;
  handleRemoveItem: (itemId: string) => void;
  handleClearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('lola_cart_items');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  useEffect(() => {
    localStorage.setItem('lola_cart_items', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item: MenuItem, specialNote?: string, quantity = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (ci) => ci.menuItem.id === item.id && ci.specialNote === specialNote
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prev, { menuItem: item, quantity, specialNote }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) =>
          ci.menuItem.id === itemId
            ? { ...ci, quantity: ci.quantity + delta }
            : ci
        )
        .filter((ci) => ci.quantity > 0)
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.menuItem.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalItemCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemIds: cartItems.map((c) => c.menuItem.id),
        totalItemCount,
        isCartOpen,
        isReservationOpen,
        selectedDish,
        setIsCartOpen,
        setIsReservationOpen,
        setSelectedDish,
        handleAddToCart,
        handleUpdateQuantity,
        handleRemoveItem,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
}
