import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  ShoppingBag,
  Utensils,
  MapPin,
  Clock,
} from 'lucide-react';
import { CartItem } from '../types';

interface WhatsAppCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const WhatsAppCartDrawer: React.FC<WhatsAppCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'recoger' | 'mesa'>('recoger');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );

  const handleSendWhatsAppOrder = () => {
    if (items.length === 0) return;

    const itemsText = items
      .map(
        (i) =>
          `• ${i.quantity}x ${i.menuItem.name} ($${(i.menuItem.price * i.quantity).toFixed(
            2
          )})${i.specialNote ? ` [Nota: ${i.specialNote}]` : ''}`
      )
      .join('\n');

    const typeText =
      orderType === 'recoger' ? '🥡 Para recoger en el local' : '🍽️ Para comer en mesa';

    const message = `* ¡Hola, La Sazón de Lola! Quisiera realizar este pedido:*
    
${itemsText}

*Total:* $${totalAmount.toFixed(2)}
*Modalidad:* ${typeText}
${customerName ? `*Nombre:* ${customerName}` : ''}
${customerPhone ? `*Teléfono:* ${customerPhone}` : ''}
${generalNotes ? `*Observaciones:* ${generalNotes}` : ''}

¡Muchas gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#fcf9f8] text-[#1c1b1b] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#bfc9c1]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-[#eae7e7] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#0f5238]" />
            <h2 className="font-headline-md text-xl font-bold text-[#0f5238]">
              Su Pedido Criollo
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f0eded] text-[#404943] hover:bg-[#eae7e7] flex items-center justify-center transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body - Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f0eded] text-[#0f5238] flex items-center justify-center">
                <Utensils className="w-8 h-8 opacity-60" />
              </div>
              <h3 className="font-headline-md text-lg font-semibold text-[#1c1b1b] mb-2">
                Su carrito está vacío
              </h3>
              <p className="font-body-md text-sm text-[#404943] mb-6">
                Explore nuestro menú criollo y agregue croquetas, lechón asado o un refrescante
                mojito.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#0f5238] text-white rounded-lg font-label-sm text-xs font-semibold hover:bg-[#2d6a4f] transition-all"
              >
                Ver el Menú
              </button>
            </div>
          ) : (
            <>
              {/* Order mode switch */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404943] mb-2">
                  Modalidad de pedido
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('recoger')}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                      orderType === 'recoger'
                        ? 'bg-[#0f5238] text-white border-[#0f5238] shadow-xs'
                        : 'bg-white text-[#404943] border-[#bfc9c1]/60 hover:bg-[#f0eded]'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Para Recoger
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('mesa')}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                      orderType === 'mesa'
                        ? 'bg-[#0f5238] text-white border-[#0f5238] shadow-xs'
                        : 'bg-white text-[#404943] border-[#bfc9c1]/60 hover:bg-[#f0eded]'
                    }`}
                  >
                    <Utensils className="w-3.5 h-3.5" />
                    Comer en Mesa
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#404943]">
                    Platos seleccionados ({items.length})
                  </span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-[#a33d23] hover:underline"
                  >
                    Vaciar todo
                  </button>
                </div>

                {items.map((cartItem) => (
                  <div
                    key={cartItem.menuItem.id}
                    className="flex gap-3.5 p-3 rounded-lg bg-white border border-[#bfc9c1]/30 shadow-xs"
                  >
                    <img
                      src={cartItem.menuItem.imageUrl}
                      alt={cartItem.menuItem.name}
                      className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-headline-md text-sm font-bold text-[#1c1b1b] truncate">
                          {cartItem.menuItem.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(cartItem.menuItem.id)}
                          className="text-[#bfc9c1] hover:text-[#a33d23] transition-colors"
                          aria-label="Eliminar plato"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span className="font-label-price text-sm font-bold text-[#a33d23]">
                          ${(cartItem.menuItem.price * cartItem.quantity).toFixed(2)}
                        </span>

                        <div className="flex items-center gap-1.5 bg-[#f0eded] px-1.5 py-1 rounded">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.menuItem.id, -1)}
                            className="w-6 h-6 rounded bg-white text-[#1c1b1b] flex items-center justify-center shadow-2xs hover:bg-[#eae7e7]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-label-price text-xs font-bold w-4 text-center">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.menuItem.id, 1)}
                            className="w-6 h-6 rounded bg-white text-[#1c1b1b] flex items-center justify-center shadow-2xs hover:bg-[#eae7e7]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {cartItem.specialNote && (
                        <p className="mt-1 text-[11px] text-[#404943] bg-[#f6f3f2] px-2 py-0.5 rounded italic truncate">
                          Nota: {cartItem.specialNote}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer quick fields */}
              <div className="space-y-3 pt-3 border-t border-[#eae7e7]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#404943]">
                  Datos de Contacto (Opcional)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Su nombre"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#bfc9c1]/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
                  />
                  <input
                    type="tel"
                    placeholder="Su teléfono"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#bfc9c1]/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="¿Alguna instrucción general o alergia?"
                  value={generalNotes}
                  onChange={(e) => setGeneralNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#bfc9c1]/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
                />
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#eae7e7] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-body-md text-sm text-[#404943]">Total estimado:</span>
              <span className="font-label-price text-2xl font-bold text-[#a33d23]">
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full py-3.5 bg-[#a33d23] hover:opacity-90 text-white rounded-lg font-label-sm text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#a33d23]/25"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Pedir por WhatsApp 🟢</span>
            </button>
            <p className="text-[11px] text-[#404943] text-center">
              Al hacer clic, se abrirá un chat directo con nuestro restaurante en La Habana.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
