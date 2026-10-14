import React, { useState } from 'react';
import { X, Calendar, Phone, Sparkles, Send, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/jewelryData';

interface BespokeConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BespokeConsultationModal: React.FC<BespokeConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Bespoke Bridal Silver Set');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:30 AM - 01:00 PM');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Shanti Silver Chandrapur!\n` +
      `I would like to book a Private Appointment:\n` +
      `• Guest Name: ${name}\n` +
      `• Mobile: ${phone}\n` +
      `• Focus: ${service}\n` +
      `• Preferred Date: ${date || 'Earliest available'}\n` +
      `• Time Slot: ${timeSlot}\n` +
      `• Details: ${notes || 'Looking forward to viewing in Chandrapur boutique.'}`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0B1411] border border-white/20 shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 border border-white/10 hover:border-white/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#CBD5E1] mb-2 font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Private In-Store Consultation</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
          Book an Appointment at Shanti Silver
        </h3>
        <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
          Enjoy dedicated one-on-one attention with our silversmith consultants at our Bazar Ward boutique in Chandrapur.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-name" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Your Full Name</label>
              <input
                id="modal-name"
                type="text"
                required
                placeholder="e.g. Priya Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Phone Number</label>
              <input
                id="modal-phone"
                type="tel"
                required
                placeholder="e.g. 090288 30299"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="modal-service" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Consultation Category</label>
            <select
              id="modal-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
            >
              <option value="Bespoke Bridal Silver Set">Bespoke Bridal Silver Set</option>
              <option value="Silver Diamond Rings & Bands">Silver Diamond Rings &amp; Bands</option>
              <option value="Designer Filigree Neckpieces">Designer Filigree Neckpieces</option>
              <option value="Modern Cuffs & Daily Wear">Modern Cuffs &amp; Daily Wear</option>
              <option value="Temple Jewelry & Silver Artifacts">Temple Jewelry &amp; Silver Artifacts</option>
              <option value="Custom Silversmith Crafting">Custom Silversmith Crafting</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-date" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Preferred Date</label>
              <input
                id="modal-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="modal-timeslot" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Preferred Time</label>
              <select
                id="modal-timeslot"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="11:00 AM - 01:00 PM">Morning: 11:00 AM - 01:00 PM</option>
                <option value="02:00 PM - 04:00 PM">Afternoon: 02:00 PM - 04:00 PM</option>
                <option value="04:30 PM - 07:30 PM">Evening: 04:30 PM - 07:30 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="modal-notes" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Additional Notes</label>
            <input
              id="modal-notes"
              type="text"
              placeholder="e.g. Inquiring for wedding trousseau or ring size 14"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0B1411] bg-gradient-to-r from-white via-[#E2E8F0] to-[#CBD5E1] hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Confirm Appointment via WhatsApp</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#CBD5E1]" />
            <span>Store Location: Girnar Chowk Rd, opp. Jain Sweet Mart, Chandrapur</span>
          </div>
        </form>
      </div>
    </div>
  );
};
