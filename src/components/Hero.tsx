import React from 'react';
import { ArrowUpRight, MessageCircle, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/jewelryData';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shanti Silver, I am inquiring about your handcrafted silver jewelry and custom bridal collections in Chandrapur.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-white/10">
      {/* Background: Cinematic High-Fashion Portrait of Graceful Indian Bride in 925 Silver Jewelry */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/src/assets/images/hero_woman_portrait_1791963630250.jpg"
          />
          <img
            src="/src/assets/images/hero_bridal_silver_cinematic_1791964382813.jpg"
            alt="Graceful Indian woman wearing exquisite 925 sterling silver bridal jewelry, choker, and earrings"
            className="w-full h-full object-cover object-center lg:object-[80%_center] scale-100 hover:scale-102 transition-transform duration-1000 ease-out"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </picture>

        {/* Sophisticated Multi-Layer Scrim Overlays for Pure Text Contrast & Luxury Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060A08] via-[#09110E]/95 lg:via-[#09110E]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1411] via-transparent to-[#0B1411]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,transparent_0%,rgba(6,10,8,0.7)_100%)] pointer-events-none" />
      </div>

      {/* Hero Foreground Content - Snug top spacing directly underneath Shanti Silver */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-6 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Top-Border Style Luxury Kicker - Pulled snug underneath navbar */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-300 font-medium mb-3 sm:mb-4 pb-1.5 border-b border-white/20">
            <span className="text-[#E2E8F0] font-semibold">HAUTE SILVERSMITHING</span>
            <span aria-hidden="true" className="text-zinc-500">|</span>
            <span>BAZAR WARD, CHANDRAPUR</span>
            <span aria-hidden="true" className="text-zinc-500">|</span>
            <span className="text-[#CBD5E1]">925 BIS CERTIFIED</span>
          </div>

          {/* Large & Prominent Luxury Serif Headline - Tight clean gap */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-[1.08] tracking-tight mb-3 sm:mb-4 text-balance drop-shadow-lg">
            Timeless Elegance in Every Detail
          </h1>

          {/* Compressed, Spacious & High-Impact Tagline */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-200 font-light leading-relaxed mb-6 sm:mb-8 max-w-xl text-balance drop-shadow-md">
            Exquisite 925 sterling silver hallmarked heirlooms &amp; custom bridal jewelry, hand-forged in Chandrapur.
          </p>

          {/* Sleek Call to Actions Aligned at the Lower Bounds */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {/* Primary CTA: White / Metallic Silver Gradient Button */}
            <a
              href="#collections"
              className="group relative px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B1411] bg-gradient-to-r from-white via-[#E5E7EB] to-[#CBD5E1] hover:from-white hover:to-white rounded-none border border-white text-center transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.22)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] active:scale-[0.98] cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>EXPLORE COLLECTIONS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            {/* Secondary CTA: Translucent Bordered WhatsApp Ghost Button */}
            <button
              onClick={handleWhatsApp}
              className="px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#F1F5F9] border border-white/30 hover:border-white/80 bg-white/5 hover:bg-white/15 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5 rounded-none shadow-sm hover:shadow-[0_0_25px_rgba(203,213,225,0.35)] cursor-pointer active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-[#CBD5E1]" />
              <span>DIRECT WHATSAPP QUERY</span>
            </button>
          </div>

          {/* Subtle Trust Attributes */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] sm:text-xs text-zinc-300/90 font-light">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CBD5E1]" />
              <span>100% Certified 925 Hallmark</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#CBD5E1]" />
              <span>Bespoke Bridal Atelier</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#CBD5E1]" />
              <span>Opposite Jain Sweet Mart</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
