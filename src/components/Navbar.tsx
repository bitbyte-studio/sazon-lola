import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu as MenuIcon, X, ShoppingBag, Calendar } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f5238]/95 text-white border-[#0f5238]/80 shadow-md backdrop-blur-md'
          : 'bg-[#fcf9f8]/90 text-[#1c1b1b] border-[#bfc9c1]/30 shadow-sm backdrop-blur-md'
      }`}
    >
      <div className="flex justify-between items-center h-20 px-4 md:px-6 max-w-[1200px] mx-auto">
        {/* Logo */}
        <a
          href="#"
          className={`font-headline-md text-2xl italic transition-colors ${
            isScrolled ? 'text-white' : 'text-[#0f5238]'
          }`}
        >
          La Sazón de Lola
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#menu"
            className={`font-body-md text-base transition-colors hover:opacity-80 ${
              isScrolled ? 'text-white hover:text-[#b1f0ce]' : 'text-[#1c1b1b] hover:text-[#0f5238]'
            }`}
          >
            Menú
          </a>
          <a
            href="#historia"
            className={`font-body-md text-base transition-colors hover:opacity-80 ${
              isScrolled ? 'text-white hover:text-[#b1f0ce]' : 'text-[#1c1b1b] hover:text-[#0f5238]'
            }`}
          >
            Historia
          </a>
          <a
            href="#ubicacion"
            className={`font-body-md text-base transition-colors hover:opacity-80 ${
              isScrolled ? 'text-white hover:text-[#b1f0ce]' : 'text-[#1c1b1b] hover:text-[#0f5238]'
            }`}
          >
            Ubicación
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Reservation Button */}
          <button
            onClick={onOpenReservation}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-label-sm text-xs transition-all ${
              isScrolled
                ? 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                : 'border border-[#0f5238] text-[#0f5238] hover:bg-[#0f5238] hover:text-white'
            }`}
            title="Reservar Mesa"
          >
            <Calendar className="w-3.5 h-3.5" />
            Reservar
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-label-sm text-xs transition-all ${
              cartCount > 0
                ? 'bg-[#a33d23] text-white shadow-md hover:opacity-90 animate-pulse-subtle'
                : isScrolled
                ? 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                : 'bg-[#f0eded] text-[#404943] hover:bg-[#eae7e7]'
            }`}
            title="Ver pedido"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Pedido
            {cartCount > 0 && (
              <span className="ml-1 inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[11px] font-bold bg-white text-[#a33d23]">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-[#0f5238] text-white rounded-lg font-label-sm text-xs hover:opacity-90 transition-opacity shadow-sm"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>

        {/* Mobile menu trigger + cart icon */}
        <div className="flex items-center gap-2 md:hidden">
          {cartCount > 0 && (
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg bg-[#a33d23] text-white"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#a33d23]">
                {cartCount}
              </span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${isScrolled ? 'text-white' : 'text-[#0f5238]'}`}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f8] text-[#1c1b1b] border-t border-[#bfc9c1]/30 px-4 py-5 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-4">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="font-body-md text-base py-2 border-b border-[#eae7e7] text-[#1c1b1b]"
            >
              Menú
            </a>
            <a
              href="#historia"
              onClick={() => setMobileMenuOpen(false)}
              className="font-body-md text-base py-2 border-b border-[#eae7e7] text-[#1c1b1b]"
            >
              Historia
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileMenuOpen(false)}
              className="font-body-md text-base py-2 border-b border-[#eae7e7] text-[#1c1b1b]"
            >
              Ubicación
            </a>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#0f5238] text-[#0f5238] font-label-sm text-sm"
              >
                <Calendar className="w-4 h-4" />
                Reservar Mesa
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#a33d23] text-white font-label-sm text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Ver Pedido ({cartCount})
              </button>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0f5238] text-white font-label-sm text-sm"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
