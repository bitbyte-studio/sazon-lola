import React from 'react';
import { ChevronDown, Calendar, Sparkles } from 'lucide-react';
import { HERO_IMAGE_URL } from '../data/menuData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background with Dark Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/45 z-10" />
        <img
          alt="Hero background of a beautiful Cuban setting"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
          src={HERO_IMAGE_URL}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-4 md:px-6 max-w-[1200px] mx-auto animate-fadeIn">
        {/* Subtle Heritage Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-medium text-white/95">
          <Sparkles className="w-3.5 h-3.5 text-[#ffb4a2]" />
          <span>Auténtica Receta Cubana · Vedado, La Habana</span>
        </div>

        <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-6xl mb-3 drop-shadow-lg font-bold tracking-tight">
          La Sazón de Lola
        </h1>
        <p className="font-body-lg text-lg sm:text-xl md:text-2xl mb-4 drop-shadow-md text-white/95 max-w-2xl mx-auto">
          Comida criolla como la de casa
        </p>
        <p className="font-label-sm text-xs sm:text-sm text-[#f6f3f2] mb-8 drop-shadow-md opacity-90 uppercase tracking-widest font-semibold">
          Lun–Sáb · 11am–10pm
        </p>

        {/* CTA Buttons matching HTML design */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#menu"
            className="w-full sm:w-auto px-10 py-3.5 border-2 border-white text-white rounded-lg font-label-sm text-sm font-semibold hover:bg-white hover:text-[#0f5238] transition-all text-center shadow-sm"
          >
            Ver Menú
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#a33d23] text-white rounded-lg font-label-sm text-sm font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 text-center shadow-xl shadow-[#a33d23]/30 animate-pulse-subtle"
          >
            Pedir por WhatsApp 🟢
          </a>
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#0f5238]/90 backdrop-blur-sm text-white rounded-lg font-label-sm text-sm font-semibold hover:bg-[#0f5238] transition-all flex items-center justify-center gap-2 text-center border border-white/20"
          >
            <Calendar className="w-4 h-4 text-[#b1f0ce]" />
            Reservar Mesa
          </button>
        </div>
      </div>

      {/* Down Arrow indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce-slow">
        <a href="#menu" aria-label="Ir a sección de menú">
          <ChevronDown className="w-8 h-8 drop-shadow-md" />
        </a>
      </div>
    </section>
  );
};
