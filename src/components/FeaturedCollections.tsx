import React, { useState } from 'react';
import { ArrowUpRight, Check, Eye, X, Shield, Sparkles } from 'lucide-react';
import { PRODUCTS, STORE_INFO, Product } from '../data/jewelryData';

interface FeaturedCollectionsProps {
  onOpenBooking: () => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'rings', label: 'Silver Rings' },
    { id: 'necklaces', label: 'Designer Necklaces' },
    { id: 'bridal', label: 'Bridal Silver Collection' },
    { id: 'bracelets', label: 'Modern Bracelets & Ornaments' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === activeCategory);

  const handleWhatsAppInquiry = (product: Product) => {
    const text = encodeURIComponent(
      `Hello Shanti Silver, I am interested in inquiring about the "${product.name}" (${product.purity}, ${product.estimatedPrice}) from your Chandrapur boutique collection. Please share more photos and availability.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="collections" className="py-20 bg-[#080D0B] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
              Curated Sterling &amp; Diamond Crafts
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
              Featured Collections
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Each creation is sculpted in pure 925 hallmarked sterling silver, refined with platinum luster and precision-set diamond accents.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#E2E8F0] text-[#0B1411] border-[#E2E8F0] font-semibold shadow-md shadow-white/5'
                  : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-[#0E1A16] border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Product Media */}
              <div className="relative aspect-[4/3] bg-[#14231E] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to styled SVG if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex flex-col items-center justify-center p-6 text-center text-zinc-400 bg-[#121A16]';
                      fallback.innerHTML = `<span class="text-xs uppercase tracking-widest text-[#CBD5E1]">${product.categoryLabel}</span><span class="text-sm font-serif text-white mt-1">${product.name}</span>`;
                      target.parentElement.appendChild(fallback);
                    }
                  }}
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A16] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Top Subtle Tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] uppercase tracking-wider text-zinc-300">
                  <span className="bg-[#0B1411]/80 backdrop-blur-sm px-2.5 py-1 border border-white/10 text-white font-medium">
                    {product.purity}
                  </span>
                  {product.highlightTag && (
                    <span className="bg-[#0B1411]/80 backdrop-blur-sm px-2.5 py-1 border border-white/10 text-[#CBD5E1]">
                      {product.highlightTag}
                    </span>
                  )}
                </div>

                {/* Quick View Button on Hover */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#0B1411]/90 hover:bg-black text-white p-2.5 border border-white/20 shadow-lg flex items-center gap-1.5 text-xs tracking-wider cursor-pointer"
                  title="Quick view details"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Details</span>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 uppercase tracking-widest mb-1.5">
                    <span>{product.categoryLabel}</span>
                    <span className="font-mono text-zinc-400">{product.approxWeight}</span>
                  </div>

                  <h3 className="text-xl font-serif text-white group-hover:text-[#E2E8F0] transition-colors mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between pt-4 border-t border-white/10 mb-5">
                    <span className="text-xs uppercase tracking-wider text-zinc-400">Indicative Price</span>
                    <span className="text-lg font-serif font-medium text-white">{product.estimatedPrice}</span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleWhatsAppInquiry(product)}
                      className="py-2.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-[#0B1411] bg-[#E2E8F0] hover:bg-white transition-colors text-center flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Inquire WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="py-2.5 px-3 text-[11px] font-medium uppercase tracking-wider text-zinc-300 border border-white/15 hover:border-white/40 hover:text-white transition-colors text-center cursor-pointer"
                    >
                      View Specs
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Order Atelier Callout */}
        <div className="mt-16 bg-[#0E1A16] border border-white/15 p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#CBD5E1] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Jewelry Atelier Chandrapur</span>
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">
              Bring Your Dream Design to Life in Pure 925 Silver
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Have a reference photo or special occasion? Our master silversmiths create custom bridal chokers, engraved anniversary bands, and spiritual silver puja idols tailored to your weight and budget.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0B1411] bg-white hover:bg-zinc-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-lg"
          >
            Request Custom Design
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0B1411] border border-white/20 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 border border-white/10 hover:border-white/30 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] bg-[#14231E] border border-white/10 overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-zinc-400 mb-1">
                  {selectedProduct.categoryLabel} · {selectedProduct.purity}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
                  {selectedProduct.name}
                </h3>
                <p className="text-xl font-serif text-[#CBD5E1] mb-4">
                  {selectedProduct.estimatedPrice} <span className="text-xs font-sans text-zinc-400 font-normal">Approx. (Subject to current silver rates)</span>
                </p>

                <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="space-y-2 mb-6 text-xs text-zinc-300">
                  <div className="font-semibold text-white uppercase tracking-wider mb-2">Specifications &amp; Hallmarks:</div>
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#CBD5E1]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#CBD5E1]" />
                    <span>Approx Weight: {selectedProduct.approxWeight} (Certified Scale)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      handleWhatsAppInquiry(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-3 text-xs font-semibold uppercase tracking-widest text-[#0B1411] bg-[#E2E8F0] hover:bg-white text-center transition-colors cursor-pointer"
                  >
                    Inquire on WhatsApp
                  </button>

                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      onOpenBooking();
                    }}
                    className="flex-1 py-3 text-xs font-medium uppercase tracking-wider text-zinc-200 border border-white/20 hover:border-white/40 text-center transition-colors cursor-pointer"
                  >
                    Book Store Viewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
