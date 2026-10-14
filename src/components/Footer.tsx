import React from 'react';
import { ArrowUp, Instagram, Facebook, Phone, MessageCircle, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/jewelryData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shanti Silver, I am contacting you through your Chandrapur boutique website.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#050807] text-zinc-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Ethos */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              className="text-2xl font-serif tracking-wider font-semibold text-white block"
            >
              Shanti Silver
            </a>
            <p className="text-zinc-300 text-sm max-w-md font-light leading-relaxed">
              Chandrapur&apos;s distinguished atelier for 100% certified 925 sterling silver jewelry. From heritage bridal chokers to minimalist daily wear, our pieces honor timeless craftsmanship.
            </p>
            <div className="text-xs text-zinc-400">
              BIS Hallmark Certified · Pure 925 Silver Assay Standard
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-medium mb-3">
              Quick Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home Showcase</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">Silver &amp; Diamond Collections</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About &amp; 925 Hallmark Purity</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Chandrapur Store Location</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Book Consultation</a>
              </li>
            </ul>
          </div>

          {/* Chandrapur Store Coordinates */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-medium mb-3">
              Chandrapur Boutique
            </div>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CBD5E1] shrink-0 mt-0.5" />
                <span className="text-zinc-300">
                  Girnar Chowk Rd, opposite Jain sweet mart, Bazar Ward, Chandrapur, Maharashtra 442402
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CBD5E1] shrink-0" />
                <a href={`tel:${STORE_INFO.phoneRaw}`} className="text-white hover:text-zinc-200">
                  {STORE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#CBD5E1] shrink-0" />
                <button
                  onClick={handleWhatsApp}
                  className="text-white hover:text-zinc-200 underline underline-offset-4 cursor-pointer text-left"
                >
                  Direct WhatsApp Chat
                </button>
              </div>
              <div className="pt-2 text-zinc-400">
                Open Daily: 10:30 AM – 8:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-3">
            <span>&copy; {new Date().getFullYear()} Shanti Silver, Chandrapur. All rights reserved.</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Handcrafted in India</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-4"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
