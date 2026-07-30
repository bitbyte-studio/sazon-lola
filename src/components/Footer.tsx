import React from 'react';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenCart }) => {
  return (
    <footer className="w-full py-12 mt-20 bg-[#e5e2e1] border-t border-[#bfc9c1]/40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-[1200px] mx-auto">
        {/* Column 1 */}
        <div className="flex flex-col gap-3">
          <span className="font-headline-md text-2xl font-bold text-[#0f5238]">
            La Sazón de Lola
          </span>
          <p className="font-body-md text-base text-[#404943]">
            Auténtica Cocina Cubana.
          </p>
          <p className="font-label-sm text-xs text-[#404943]">
            © {new Date().getFullYear()} La Sazón de Lola. Todos los derechos reservados.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <a
            className="font-body-md text-base text-[#404943] hover:text-[#a33d23] hover:underline transition-all focus:ring-2 focus:ring-[#0f5238] outline-none"
            href="#menu"
          >
            Menú
          </a>
          <a
            className="font-body-md text-base text-[#404943] hover:text-[#a33d23] hover:underline transition-all focus:ring-2 focus:ring-[#0f5238] outline-none"
            href="#historia"
          >
            Historia
          </a>
          <a
            className="font-body-md text-base text-[#404943] hover:text-[#a33d23] hover:underline transition-all focus:ring-2 focus:ring-[#0f5238] outline-none"
            href="#ubicacion"
          >
            Ubicación
          </a>
          <button
            onClick={onOpenReservation}
            className="font-body-md text-base text-[#404943] hover:text-[#a33d23] hover:underline transition-all text-left focus:ring-2 focus:ring-[#0f5238] outline-none"
          >
            Reservar Mesa
          </button>
          <button
            onClick={onOpenCart}
            className="font-body-md text-base text-[#404943] hover:text-[#a33d23] hover:underline transition-all text-left focus:ring-2 focus:ring-[#0f5238] outline-none"
          >
            Ver Pedido en Línea
          </button>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 md:items-end">
          <a
            className="font-label-sm text-xs text-[#404943] hover:text-[#a33d23] hover:underline transition-all focus:ring-2 focus:ring-[#0f5238] outline-none"
            href="#privacidad"
            onClick={(e) => {
              e.preventDefault();
              alert('La Sazón de Lola respeta su privacidad y no comparte datos personales.');
            }}
          >
            Privacidad
          </a>
          <a
            className="font-label-sm text-xs text-[#404943] hover:text-[#a33d23] hover:underline transition-all focus:ring-2 focus:ring-[#0f5238] outline-none"
            href="mailto:contacto@lasazondelola.cu"
          >
            Contacto
          </a>
          <p className="font-label-sm text-xs text-[#404943] mt-3">
            Diseño por Bit &amp; Byte Studio
          </p>
        </div>
      </div>
    </footer>
  );
};
