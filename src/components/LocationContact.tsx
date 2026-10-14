import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Calendar, Send, Check } from 'lucide-react';
import { STORE_INFO } from '../data/jewelryData';

interface LocationContactProps {
  onOpenBooking: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceInterest: 'Bridal Silver Jewelry',
    preferredDate: '',
    notes: '',
  });
  const [formSent, setFormSent] = useState(false);

  // Compute live open status (Open Daily 10:30 AM to 8:00 PM)
  const isStoreCurrentlyOpen = () => {
    try {
      const now = new Date();
      // IST is UTC+5:30
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 5.5 * 3600000);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;
      const openMinutes = 10 * 60 + 30; // 10:30 AM
      const closeMinutes = 20 * 60; // 8:00 PM
      return totalMinutes >= openMinutes && totalMinutes < closeMinutes;
    } catch {
      return true;
    }
  };

  const isOpen = isStoreCurrentlyOpen();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Shanti Silver Chandrapur!\n` +
      `New In-Store Consultation Request:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Interest: ${formData.serviceInterest}\n` +
      `• Preferred Date: ${formData.preferredDate || 'Earliest available'}\n` +
      `• Note: ${formData.notes || 'Looking forward to viewing your collection'}`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="location" className="py-20 bg-[#080D0B] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#CBD5E1] mb-2 font-medium">
              Visit our Flagship Boutique
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
              Location &amp; Store Hours
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border ${
                isOpen
                  ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30'
                  : 'border-zinc-500/40 text-zinc-300 bg-zinc-900/30'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400' : 'bg-zinc-400'}`} />
              {isOpen ? 'Open Now · Closes at 8:00 PM' : 'Opens Tomorrow at 10:30 AM'}
            </span>
          </div>
        </div>

        {/* Grid: Store Information & Booking Form on Left, Map & Visuals on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Coordinates & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0E1A16] border border-white/10 p-6 sm:p-8 space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#14231E] border border-white/10 text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#CBD5E1]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Store Address</div>
                  <p className="text-sm font-medium text-white leading-relaxed">
                    Girnar Chowk Rd, opposite Jain sweet mart, Bazar Ward, Chandrapur, Maharashtra 442402
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Landmark: Directly opposite Jain Sweet Mart at Girnar Chowk
                  </p>
                </div>
              </div>

              {/* Phone & Direct Calling */}
              <div className="flex items-start gap-4 pt-6 border-t border-white/10">
                <div className="p-3 bg-[#14231E] border border-white/10 text-white shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#CBD5E1]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Phone &amp; Orders</div>
                  <a
                    href={`tel:${STORE_INFO.phoneRaw}`}
                    className="text-xl font-serif text-white hover:text-[#CBD5E1] transition-colors block"
                  >
                    {STORE_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-400 mt-0.5">Available for voice calls &amp; inquiries</p>
                </div>
              </div>

              {/* Store Hours */}
              <div className="flex items-start gap-4 pt-6 border-t border-white/10">
                <div className="p-3 bg-[#14231E] border border-white/10 text-white shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#CBD5E1]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Operating Hours</div>
                  <p className="text-sm font-medium text-white">
                    {STORE_INFO.hoursText}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Monday to Sunday: 10:30 AM – 8:00 PM
                  </p>
                </div>
              </div>

              {/* Action Buttons for Navigation & Calling */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#0B1411] bg-[#E2E8F0] hover:bg-white text-center transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>

                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-white/50 text-center transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#CBD5E1]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* In-Store VIP Consultation Notice */}
            <div className="bg-[#0E1A16] border border-white/10 p-6 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#CBD5E1] font-medium">Bespoke Bridal Appointments</div>
                <div className="text-sm font-serif text-white">Dedicated private viewing lounge in Chandrapur</div>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B1411] bg-[#CBD5E1] hover:bg-white transition-colors whitespace-nowrap cursor-pointer"
              >
                Book VIP Visit
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Map + In-Store Query Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Google Map Placeholder / Interactive Frame */}
            <div className="bg-[#0E1A16] border border-white/15 overflow-hidden">
              <div className="p-4 bg-[#14231E] border-b border-white/10 flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#CBD5E1]" />
                  <span>Chandrapur Boutique Coordinates (Girnar Chowk Rd)</span>
                </span>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CBD5E1] hover:text-white uppercase tracking-wider underline underline-offset-2"
                >
                  Open in Google Maps
                </a>
              </div>

              {/* Embedded Google Map view */}
              <div className="relative w-full h-[320px] bg-[#121A16]">
                <iframe
                  title="Shanti Silver Chandrapur Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(STORE_INFO.googleMapsEmbedQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  className="filter grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500 w-full h-full"
                />

                {/* Map Floating Badge */}
                <div className="absolute bottom-4 left-4 p-3 bg-[#0B1411]/90 backdrop-blur-md border border-white/20 text-xs text-white max-w-xs shadow-xl">
                  <div className="font-serif font-semibold text-sm">Shanti Silver</div>
                  <div className="text-zinc-300 text-[11px] mt-0.5">Opposite Jain sweet mart, Girnar Chowk Rd</div>
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#CBD5E1] hover:text-white mt-2 font-medium"
                  >
                    <span>Get Navigation Route</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick In-Store Consultation Form */}
            <div id="contact" className="bg-[#0E1A16] border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-serif text-white">Book an In-Store Consultation</h3>
                  <p className="text-xs text-zinc-400">Reserve time with our master silversmiths for bridal or custom designs.</p>
                </div>
                <Calendar className="w-5 h-5 text-[#CBD5E1]" />
              </div>

              {formSent ? (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Thank you! Your appointment request has been opened in WhatsApp with our store team.</span>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="customer-name" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Your Name</label>
                      <input
                        id="customer-name"
                        type="text"
                        required
                        placeholder="e.g. Nayan Kamble"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-phone" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Contact Number</label>
                      <input
                        id="customer-phone"
                        type="tel"
                        required
                        placeholder="e.g. 090288 30299"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="jewelry-interest" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Collection of Interest</label>
                      <select
                        id="jewelry-interest"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
                      >
                        <option value="Bridal Silver Jewelry">Bridal Silver Jewelry</option>
                        <option value="Silver Rings & Solitaires">Silver Rings &amp; Solitaires</option>
                        <option value="Designer Necklaces">Designer Necklaces</option>
                        <option value="Modern Bracelets & Cuffs">Modern Bracelets &amp; Cuffs</option>
                        <option value="Custom Bespoke Design">Custom Bespoke Design</option>
                        <option value="Silver Pooja Artifacts">Silver Pooja Artifacts</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferred-date" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Preferred Date</label>
                      <input
                        id="preferred-date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="consultation-notes" className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Special Preferences (Optional)</label>
                    <textarea
                      id="consultation-notes"
                      rows={2}
                      placeholder="e.g. Looking for light-weight bridal set or oxidized ring design..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#080D0B] border border-white/15 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold uppercase tracking-widest text-[#0B1411] bg-gradient-to-r from-white via-[#E2E8F0] to-[#CBD5E1] hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm Consultation via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
