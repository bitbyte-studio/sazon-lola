import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { HistoriaSection } from '../components/HistoriaSection';
import { UbicacionSection } from '../components/UbicacionSection';
import { useCart } from '../context/CartContext';

export function HomePage() {
  const {
    cartItemIds,
    handleAddToCart,
    setSelectedDish,
    setIsCartOpen,
    setIsReservationOpen,
  } = useCart();

  return (
    <main>
      <Hero
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <MenuSection
        onAddToCart={handleAddToCart}
        onSelectDish={setSelectedDish}
        cartItemIds={cartItemIds}
      />
      <HistoriaSection />
      <UbicacionSection />
    </main>
  );
}
