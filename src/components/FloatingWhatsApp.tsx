import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STORE_INFO } from '../data/jewelryData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shanti Silver Chandrapur! I am visiting your website and have a query about your silver jewelry collection.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Subtle contextual luxury tooltip */}
      {showTooltip && (
        <div className="relative max-w-xs bg-[#0B1411]/95 backdrop-blur-md border border-white/20 p-3 shadow-2xl animate-fade-in hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-zinc-400 hover:text-white p-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="text-[11px] font-semibold text-white tracking-wide mb-0.5">
            Shanti Silver Atelier
          </div>
          <p className="text-[11px] text-zinc-300 leading-tight">
            Chat with our Chandrapur team for designs, pricing &amp; custom silver work.
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1B322A] via-[#10241E] to-[#0A1612] border border-white/30 text-white rounded-full shadow-2xl shadow-black/80 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer hover:border-white/60 hover:shadow-[0_0_25px_rgba(226,232,240,0.3)]"
        aria-label="Chat on WhatsApp with Shanti Silver"
      >
        <span className="sr-only">Chat with Shanti Silver on WhatsApp</span>
        <MessageCircle className="w-6 h-6 text-[#E2E8F0] group-hover:text-white transition-colors" />

        {/* Outer ambient pulse ring */}
        <span className="absolute -inset-1 rounded-full border border-white/20 opacity-40 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};
