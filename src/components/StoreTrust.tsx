import React from 'react';
import { Star, ShieldCheck, Gem, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, STORE_HIGHLIGHTS } from '../data/jewelryData';

export const StoreTrust: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0B1411] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
            Purity, Precision &amp; Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white mb-4">
            The Shanti Silver Standard
          </h2>
          <p className="text-sm text-zinc-300 font-normal leading-relaxed">
            Chandrapur&apos;s premier destination for certified fine silver. We blend age-old Indian silversmithing with modern precision engineering.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STORE_HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="bg-[#0E1A16] border border-white/10 p-6 flex flex-col justify-between hover:border-white/25 transition-colors group"
            >
              <div>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#CBD5E1] mb-5 group-hover:border-white/40 transition-colors">
                  {index === 0 && <ShieldCheck className="w-5 h-5" />}
                  {index === 1 && <Gem className="w-5 h-5" />}
                  {index === 2 && <Award className="w-5 h-5" />}
                  {index === 3 && <Sparkles className="w-5 h-5" />}
                </div>

                <h3 className="text-lg font-serif text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center text-[11px] text-[#CBD5E1] uppercase tracking-wider font-medium">
                <span>Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* 5.0 Star Rating Trust Banner & Chandrapur Testimonials */}
        <div className="bg-[#0E1A16] border border-white/15 p-8 lg:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-8 border-b border-white/10 mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-zinc-200">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>
                <span className="text-xl font-serif font-semibold text-white ml-2">5.0 / 5.0</span>
              </div>
              <h3 className="text-2xl font-serif text-white">
                Loved by Chandrapur Families &amp; Connoisseurs
              </h3>
            </div>

            <div className="text-left lg:text-right">
              <div className="text-xs uppercase tracking-widest text-zinc-400">Verified Google Reviews</div>
              <div className="text-sm text-zinc-300 font-medium">140+ Authenticated Customer Ratings</div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#080D0B] border border-white/10 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex text-zinc-200 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-300 italic leading-relaxed mb-6 font-serif">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm font-serif font-medium text-white">{t.author}</div>
                  <div className="text-[11px] text-zinc-400">{t.locality}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#CBD5E1] mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#CBD5E1]" />
                    <span>Verified: {t.verifiedPurchase}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Purity & Hallmark Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080D0B] border border-white/10 p-8 lg:p-10">
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
            <div className="text-xs uppercase tracking-widest text-[#CBD5E1] mb-2 font-medium">
              Assay &amp; Hallmarking
            </div>
            <h3 className="text-2xl font-serif text-white mb-3">
              Understanding 925 Hallmark Silver
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Fine silver in its pure form (99.9%) is naturally too malleable for durable jewelry. Sterling Silver 925 contains precisely 92.5% pure silver with 7.5% strengthening alloys, finished with anti-tarnish rhodium.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 border border-white/10 bg-[#0E1A16]">
              <div className="text-2xl font-serif text-white mb-1">92.5%</div>
              <div className="text-xs font-medium text-[#CBD5E1] uppercase tracking-wider mb-2">Pure Silver Assay</div>
              <p className="text-[11px] text-zinc-400">Strictly tested in government certified assay laboratories.</p>
            </div>

            <div className="p-4 border border-white/10 bg-[#0E1A16]">
              <div className="text-2xl font-serif text-white mb-1">BIS Stamped</div>
              <div className="text-xs font-medium text-[#CBD5E1] uppercase tracking-wider mb-2">Authenticity Laser Seal</div>
              <p className="text-[11px] text-zinc-400">Each ornament bears the distinct triangular BIS hallmark mark.</p>
            </div>

            <div className="p-4 border border-white/10 bg-[#0E1A16]">
              <div className="text-2xl font-serif text-white mb-1">Rhodium</div>
              <div className="text-xs font-medium text-[#CBD5E1] uppercase tracking-wider mb-2">Platinum Luster Shield</div>
              <p className="text-[11px] text-zinc-400">Electroplated to resist oxidation and maintain high shine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
