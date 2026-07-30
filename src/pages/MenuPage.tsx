import { MenuSection } from '../components/MenuSection';
import { useCart } from '../context/CartContext';

export function MenuPage() {
  const { cartItemIds, handleAddToCart, setSelectedDish } = useCart();

  return (
    <main className="pt-20">
      <MenuSection
        onAddToCart={handleAddToCart}
        onSelectDish={setSelectedDish}
        cartItemIds={cartItemIds}
      />
    </main>
  );
}
