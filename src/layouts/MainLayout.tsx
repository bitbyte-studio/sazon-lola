import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MobileFab } from '../components/MobileFab';
import { WhatsAppCartDrawer } from '../components/WhatsAppCartDrawer';
import { ReservationModal } from '../components/ReservationModal';
import { DishDetailModal } from '../components/DishDetailModal';
import { ScrollToTop } from '../components/ScrollToTop';
import { useCart } from '../context/CartContext';

export function MainLayout() {
  const {
    cartItems,
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
  } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1c1b1b] font-body-md selection:bg-[#0f5238] selection:text-white">
      <ScrollToTop />

      <Navbar
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <Outlet />

      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <MobileFab
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <WhatsAppCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
