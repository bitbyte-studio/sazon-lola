import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';

interface MobileFabProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileFab: React.FC<MobileFabProps> = ({ cartCount, onOpenCart }) => {
  return (
    <div className="md:hidden fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* If items in cart, show order button right above WhatsApp FAB */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="rounded-full w-12 h-12 bg-[#0f5238] text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all relative border-2 border-white"
          aria-label="Abrir carrito de compras"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#a33d23] text-white text-[11px] font-bold shadow-xs">
            {cartCount}
          </span>
        </button>
      )}

      {/* WhatsApp FAB matching HTML prompt */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full w-14 h-14 bg-[#a33d23] text-white shadow-xl shadow-[#a33d23]/30 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all active:scale-90 duration-150 animate-pulse-subtle"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only font-label-sm text-xs">WhatsApp</span>
      </a>
    </div>
  );
};
