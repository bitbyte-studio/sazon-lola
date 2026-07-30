import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('14:00');
  const [guests, setGuests] = useState(2);
  const [area, setArea] = useState<'terraza' | 'salon'>('terraza');
  const [notes, setNotes] = useState('');
  const [confirmedCode, setConfirmedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Por favor ingrese su nombre y teléfono de contacto para la reserva.');
      return;
    }
    const code = 'LOLA-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmedCode(code);
  };

  const handleSendToWhatsApp = () => {
    const text = `*🗓️ Solicitud de Reserva — La Sazón de Lola*
    
*Código:* ${confirmedCode}
*Nombre:* ${name}
*Teléfono:* ${phone}
*Fecha:* ${date}
*Hora:* ${time}
*Comensales:* ${guests} personas
*Área:* ${area === 'terraza' ? '🌿 Terraza tropical' : '🏛️ Salón Colonial'}
${notes ? `*Notas especiales:* ${notes}` : ''}

¡Quedo a la espera de su confirmación!`;

    const url = `https://wa.me/1234567890?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#fcf9f8] text-[#1c1b1b] rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#bfc9c1]/30 relative p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f0eded] text-[#404943] hover:bg-[#eae7e7] flex items-center justify-center transition-colors"
          aria-label="Cerrar modal de reserva"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedCode ? (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#b1f0ce] text-[#0f5238] flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-headline-lg text-2xl font-bold text-[#0f5238]">
              ¡Reserva Pre-confirmada!
            </h3>
            <p className="font-body-md text-sm text-[#404943] max-w-sm mx-auto">
              Hemos guardado su solicitud para <strong>{guests} personas</strong> el día{' '}
              <strong>{date}</strong> a las <strong>{time}</strong> en nuestra{' '}
              {area === 'terraza' ? 'Terraza tropical' : 'Salón Colonial'}.
            </p>

            <div className="bg-white border border-[#bfc9c1]/40 rounded-xl p-4 my-4">
              <span className="text-xs text-[#404943] uppercase tracking-wider font-semibold block">
                Código de Reserva
              </span>
              <span className="font-label-price text-2xl font-bold text-[#a33d23]">
                {confirmedCode}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleSendToWhatsApp}
                className="flex-1 py-3 bg-[#a33d23] hover:opacity-90 text-white rounded-lg font-label-sm text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Confirmar por WhatsApp 🟢
              </button>
              <button
                onClick={() => {
                  setConfirmedCode(null);
                  onClose();
                }}
                className="px-6 py-3 border border-[#0f5238] text-[#0f5238] rounded-lg font-label-sm text-sm font-semibold hover:bg-[#0f5238] hover:text-white transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-[#0f5238]" />
              <h2 className="font-headline-md text-2xl font-bold text-[#0f5238]">
                Reservar Mesa
              </h2>
            </div>
            <p className="font-body-md text-sm text-[#404943] mb-6">
              Asegure su mesa en La Sazón de Lola para disfrutar de nuestra cocina criolla familiar.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404943] mb-1">
                    Su nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Carlos Rodríguez"
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#bfc9c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404943] mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+53 5 123-4567"
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#bfc9c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404943] mb-1">
                    Fecha *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#bfc9c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404943] mb-1">
                    Hora *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#bfc9c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:30">8:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#404943] mb-1">
                    Comensales *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#bfc9c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'persona' : 'personas'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404943] mb-1">
                  Área preferida
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setArea('terraza')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      area === 'terraza'
                        ? 'bg-[#0f5238] text-white border-[#0f5238]'
                        : 'bg-white text-[#404943] border-[#bfc9c1]'
                    }`}
                  >
                    🌿 Terraza Tropical
                  </button>
                  <button
                    type="button"
                    onClick={() => setArea('salon')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      area === 'salon'
                        ? 'bg-[#0f5238] text-white border-[#0f5238]'
                        : 'bg-white text-[#404943] border-[#bfc9c1]'
                    }`}
                  >
                    🏛️ Salón Colonial
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#404943] mb-1">
                  Observaciones adicionales
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Cumpleaños, silla de bebé, cerca de la ventana..."
                  className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#bfc9c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5238]"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg border border-[#bfc9c1] text-[#404943] font-label-sm text-sm hover:bg-[#eae7e7] transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#0f5238] hover:bg-[#2d6a4f] text-white rounded-lg font-label-sm text-sm font-semibold transition-all shadow-md"
                >
                  Solicitar Reserva
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
