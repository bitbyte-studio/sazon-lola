import React, { useState } from 'react';
import { X, Plus, Minus, Check, Clock, Flame, HeartHandshake, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, specialNote?: string, quantity?: number) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [specialNote, setSpecialNote] = useState('');
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, specialNote.trim() || undefined, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#fcf9f8] text-[#1c1b1b] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#bfc9c1]/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#1c1b1b] flex items-center justify-center shadow-md transition-all"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#eae7e7]">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#a33d23] text-white uppercase tracking-wider mb-2">
                {item.category}
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                {item.name}
              </h2>
            </div>
            <span className="font-label-price text-2xl font-bold text-white bg-[#1c1b1b]/70 px-3 py-1 rounded-lg backdrop-blur-xs">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Quick info row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#404943] border-b border-[#eae7e7] pb-4">
            {item.prepTime && (
              <span className="flex items-center gap-1.5 bg-[#f0eded] px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-[#0f5238]" />
                Tiempo: {item.prepTime}
              </span>
            )}
            {item.calories && (
              <span className="flex items-center gap-1.5 bg-[#f0eded] px-3 py-1.5 rounded-full">
                <Flame className="w-3.5 h-3.5 text-[#a33d23]" />
                {item.calories}
              </span>
            )}
            {item.featured && (
              <span className="flex items-center gap-1.5 bg-[#b1f0ce]/50 text-[#0f5238] px-3 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Especialidad de la Casa
              </span>
            )}
          </div>

          {/* Description */}
          <div>
            <p className="font-body-lg text-base text-[#1c1b1b] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Grandmother Lola's Story Note */}
          {item.grandmotherNote && (
            <div className="bg-[#f6f3f2] border-l-4 border-[#0f5238] p-4 rounded-r-lg">
              <div className="flex items-center gap-2 text-[#0f5238] font-semibold text-xs mb-1 uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>El Secreto de la Abuela Lola</span>
              </div>
              <p className="font-headline-md text-sm italic text-[#404943] leading-relaxed">
                "{item.grandmotherNote}"
              </p>
            </div>
          )}

          {/* Ingredients list */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#404943] mb-3">
                Ingredientes frescos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.ingredients.map((ing, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#1c1b1b]">
                    <span className="w-4 h-4 rounded-full bg-[#0f5238]/10 text-[#0f5238] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special note textarea */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#404943] mb-1.5">
              Nota especial de cocina (Opcional)
            </label>
            <input
              type="text"
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              placeholder="Ej: Sin cebolla morada, extra crujiente, etc."
              className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#bfc9c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5238] transition-all"
            />
          </div>

          {/* Quantity selector + Add CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#eae7e7]">
            <div className="flex items-center gap-3 bg-[#f0eded] p-1.5 rounded-lg">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-md bg-white text-[#1c1b1b] flex items-center justify-center shadow-xs hover:bg-[#eae7e7] transition-colors"
                aria-label="Disminuir cantidad"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-label-price font-bold text-base w-6 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-md bg-white text-[#1c1b1b] flex items-center justify-center shadow-xs hover:bg-[#eae7e7] transition-colors"
                aria-label="Aumentar cantidad"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={added}
              className={`w-full sm:w-auto flex-1 px-6 py-3.5 rounded-lg font-label-sm text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-md ${
                added
                  ? 'bg-[#0f5238] text-white'
                  : 'bg-[#a33d23] hover:opacity-90 text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5 text-[#b1f0ce]" />
                  <span>¡Plato agregado al pedido!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Agregar al Pedido · ${(item.price * quantity).toFixed(2)}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
