import React, { useState } from 'react';
import { Heart, Sparkles, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { LOLA_PORTRAIT_URL } from '../data/menuData';

export const HistoriaSection: React.FC = () => {
  const [showTraditions, setShowTraditions] = useState(false);

  return (
    <section
      id="historia"
      className="py-16 bg-[#f6f3f2] px-4 md:px-6 overflow-hidden border-y border-[#bfc9c1]/20"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image column */}
        <div className="w-full md:w-1/2 relative group">
          <div className="relative overflow-hidden rounded-xl shadow-lg border border-[#bfc9c1]/30">
            <img
              alt="Portrait of Lola in a rustic kitchen"
              className="w-full h-[450px] sm:h-[500px] object-cover group-hover:scale-102 transition-transform duration-700"
              src={LOLA_PORTRAIT_URL}
              loading="lazy"
            />
            {/* Soft bottom vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
              <span className="flex items-center gap-1.5 bg-[#0f5238]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <Heart className="w-3.5 h-3.5 text-[#ffb4a2]" />
                Cocina Familiar · Desde 1984
              </span>
              <span className="bg-[#a33d23]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                La Habana, Cuba
              </span>
            </div>
          </div>
        </div>

        {/* Content column matching HTML prompt */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f5238]/10 text-[#0f5238] font-label-sm text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Tradición Criolla
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#0f5238] font-bold mb-3">
              La Historia
            </h2>
          </div>

          <p className="font-body-lg text-base md:text-lg text-[#404943] leading-relaxed">
            Nuestra cocina nació de las manos de la abuela de Lola, quien nos enseñó que el
            secreto de un buen plato está en el tiempo y el cariño. Hoy, mantenemos vivas esas
            recetas tradicionales, usando ingredientes frescos y el inconfundible sazón criollo.
          </p>

          <blockquote className="font-headline-md text-2xl md:text-3xl text-[#a33d23] italic border-l-4 border-[#a33d23] pl-4 py-1">
            "Cada plato, un abrazo de casa"
          </blockquote>

          {/* Interactive Traditions toggle */}
          <div className="pt-2">
            <button
              onClick={() => setShowTraditions(!showTraditions)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#0f5238] text-[#0f5238] hover:bg-[#0f5238] hover:text-white font-label-sm text-xs sm:text-sm font-semibold transition-all"
            >
              <BookOpen className="w-4 h-4" />
              {showTraditions ? 'Ocultar los pilares de nuestra cocina' : 'Conocer nuestros 3 pilares criollos'}
            </button>

            {showTraditions && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white border border-[#bfc9c1]/30 animate-fadeIn">
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#0f5238]/10 text-[#0f5238] flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="font-headline-md text-sm font-bold text-[#1c1b1b]">
                    Cocina Lenta
                  </h4>
                  <p className="text-xs text-[#404943]">
                    Marinado por 24 horas y cocción lenta sin atajos.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#a33d23]/10 text-[#a33d23] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-headline-md text-sm font-bold text-[#1c1b1b]">
                    Mojo Fresco
                  </h4>
                  <p className="text-xs text-[#404943]">
                    Naranjas agrias exprimidas a mano cada mañana.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#0f5238]/10 text-[#0f5238] flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h4 className="font-headline-md text-sm font-bold text-[#1c1b1b]">
                    Calor de Hogar
                  </h4>
                  <p className="text-xs text-[#404943]">
                    Porciones abundantes y sazón con alma familiar.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
