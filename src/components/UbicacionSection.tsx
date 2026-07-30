import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Navigation,
  CheckCircle2,
} from 'lucide-react';
import { UBICACION_MAPA_URL } from '../data/menuData';

export const UbicacionSection: React.FC = () => {
  const [showHours, setShowHours] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('Calle 23 #456, e/ G y H, Vedado — La Habana, Cuba');
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <section id="ubicacion" className="py-16 bg-[#fcf9f8] px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="font-headline-lg text-3xl md:text-4xl text-[#0f5238] font-bold mb-3">
          Ubicación
        </h2>

        {/* Address row matching HTML prompt */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6 text-[#404943] font-body-md text-base">
          <MapPin className="w-5 h-5 text-[#0f5238] flex-shrink-0" />
          <p className="font-medium">Calle 23 #456, e/ G y H, Vedado — La Habana, Cuba</p>
          <button
            onClick={handleCopyAddress}
            className="ml-2 px-2.5 py-1 rounded text-xs border border-[#bfc9c1] hover:bg-[#eae7e7] text-[#0f5238] flex items-center gap-1 transition-colors"
            title="Copiar dirección"
          >
            {copiedAddress ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0f5238]" />
                Copiado
              </>
            ) : (
              'Copiar'
            )}
          </button>
        </div>

        {/* Interactive Styled Map visualization */}
        <div className="w-full h-72 md:h-80 bg-[#eae7e7] rounded-xl overflow-hidden relative shadow-sm mb-8 border border-[#bfc9c1]/40 group">
          {/* Havana Street Map Background Representation */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90"
            style={{
              backgroundImage: `url("${UBICACION_MAPA_URL}")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f5238]/80 via-[#0f5238]/30 to-transparent" />

          {/* Interactive Map Pin & Card */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-md text-[#1c1b1b] px-6 py-4 rounded-xl shadow-xl border border-white/50 max-w-sm text-center animate-pulse-subtle">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#0f5238] text-white flex items-center justify-center shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-headline-md font-bold text-lg text-[#0f5238]">
                La Sazón de Lola
              </h3>
              <p className="text-xs text-[#404943] mb-3">
                En el corazón de La Rampa, Vedado, a pasos del Malecón Habanero.
              </p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://maps.google.com/?q=La+Habana+Cuba+Vedado+Calle+23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0f5238] text-white font-label-sm text-xs hover:bg-[#2d6a4f] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Bottom right hours badge */}
          <div className="absolute bottom-3 right-3 bg-[#1c1b1b]/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#b1f0ce]" />
            <span>Abierto hoy hasta las 10:00 PM</span>
          </div>
        </div>

        {/* Contact buttons matching HTML prompt */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+5352345678"
            className="w-12 h-12 rounded-full bg-[#2d6a4f] text-[#a8e7c5] flex items-center justify-center hover:bg-[#0f5238] hover:text-white transition-all shadow-sm"
            title="Llamar a La Sazón de Lola"
            aria-label="Llamar por teléfono"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="mailto:reservas@lasazondelola.cu"
            className="w-12 h-12 rounded-full bg-[#2d6a4f] text-[#a8e7c5] flex items-center justify-center hover:bg-[#0f5238] hover:text-white transition-all shadow-sm"
            title="Enviar correo"
            aria-label="Enviar correo electrónico"
          >
            <Mail className="w-5 h-5" />
          </a>

          <button
            onClick={() => setShowHours(!showHours)}
            className="px-4 py-3 rounded-full bg-[#f0eded] text-[#0f5238] font-label-sm text-xs hover:bg-[#eae7e7] transition-colors flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            {showHours ? 'Ocultar Horarios' : 'Ver Horarios de Apertura'}
          </button>
        </div>

        {/* Expandable Hours Table */}
        {showHours && (
          <div className="mt-6 max-w-md mx-auto bg-white rounded-xl p-5 border border-[#bfc9c1]/30 shadow-sm text-left animate-fadeIn">
            <h4 className="font-headline-md font-bold text-base text-[#0f5238] mb-3 text-center">
              Horario Habitual del Restaurante
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-[#f0eded] pb-1.5">
                <span className="font-medium text-[#1c1b1b]">Lunes a Viernes</span>
                <span className="font-label-price text-[#0f5238]">11:00 AM — 10:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#f0eded] pb-1.5">
                <span className="font-medium text-[#1c1b1b]">Sábados</span>
                <span className="font-label-price text-[#0f5238]">11:00 AM — 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#404943]">Domingos</span>
                <span className="font-label-price text-[#a33d23]">Cerrado (Almuerzo familiar)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
