import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { HistoriaSection } from './components/HistoriaSection';
import { UbicacionSection } from './components/UbicacionSection';
import { Footer } from './components/Footer';
import { MobileFab } from './components/MobileFab';
import { WhatsAppCartDrawer } from './components/WhatsAppCartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { CartItem, MenuItem } from './types';

export default function App() {
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
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { menuItem: item, quantity, specialNote }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.menuItem.id === itemId) {
            return { ...ci, quantity: ci.quantity + delta };
          }
          return ci;
        })
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
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1c1b1b] font-body-md selection:bg-[#0f5238] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Menu Section */}
      <MenuSection
        onAddToCart={handleAddToCart}
        onSelectDish={(item) => setSelectedDish(item)}
        cartItemIds={cartItems.map((c) => c.menuItem.id)}
      />

      {/* About Section */}
      <HistoriaSection />

      {/* Location Section */}
      <UbicacionSection />

      {/* Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Mobile WhatsApp + Cart Floating Action Button */}
      <MobileFab
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* WhatsApp Interactive Order Drawer */}
      <WhatsAppCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Dish Detail Modal */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
