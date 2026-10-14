import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/jewelryData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'About Us', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shanti Silver, I would like to inquire about your fine silver jewelry collections in Chandrapur.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B1411]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-xl shadow-black/40'
            : 'bg-[#0B1411]/90 backdrop-blur-sm border-b border-white/5 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-6">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="text-2xl lg:text-3xl font-serif tracking-wider font-semibold text-white hover:text-[#E2E8F0] transition-colors whitespace-nowrap shrink-0"
          >
            Shanti Silver
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#CBD5E1] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#0B1411] bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1] rounded-none border border-white hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(226,232,240,0.35)] whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-2 rounded focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B1411]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-white/10">
          <div className="flex flex-col space-y-6">
            <div className="text-xs uppercase tracking-widest text-zinc-400 border-b border-white/10 pb-2">
              Chandrapur Fine Silver Atelier
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-white hover:text-zinc-300 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0B1411] bg-[#E2E8F0] hover:bg-white text-center transition-colors shadow-lg shadow-white/5"
            >
              Book Appointment
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full py-3 text-xs font-medium uppercase tracking-wider text-zinc-200 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#CBD5E1]" />
              WhatsApp Store Query
            </button>
          </div>
        </div>
      )}
    </>
  );
};
