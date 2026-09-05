import React from 'react';

const TESTIMONIALS = [
  {
    quote: "ENZONE GROUP delivers on time and the product quality has been consistent since day one. That reliability is what keeps us reordering every quarter.",
    name: "Ashraf K.",
    role: "Distribution partner, Malappuram"
  },
  {
    quote: "I joined as an intern and was given real responsibility early. Two years on, I manage a full product line — this is a place that actually invests in people.",
    name: "Fathima N.",
    role: "Team member, since 2023"
  },
  {
    quote: "Their herbal and household range sells itself once customers try it. Support from the ENZONE team on stock and pricing has made growing our outlet straightforward.",
    name: "Rajeev M.",
    role: "Retail stockist, Kozhikode"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-[80px] sm:py-[120px] lg:py-[140px] bg-[#EDE8DE] border-t border-[#1a1a14]/10" id="testimonials">
      <div className="content-wrap">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20 mb-[40px] sm:mb-[70px]">
          <div className="lg:col-span-4">
            <span className="font-mono-spec text-[11px] sm:text-xs text-[#6d7266] uppercase tracking-widest block">
              Partner & Network Voices
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(28px,5.2vw,68px)] leading-[1.08] sm:leading-[1] tracking-tight sm:tracking-[-2px] lg:tracking-[-3px] font-semibold text-[#1c2624]">
              What partners and customers say.
            </h2>
          </div>
        </div>

        {/* 3-Column Editorial Grid with Thin Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#1a1a14]/15">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className={`py-6 sm:py-[40px] px-0 md:px-6 lg:px-[36px] flex flex-col justify-between gap-6 ${
                idx !== 0 ? 'border-t md:border-t-0 md:border-l border-[#1a1a14]/15' : 'md:pl-0'
              } ${idx === TESTIMONIALS.length - 1 ? 'md:pr-0' : ''}`}
            >
              <div>
                <div className="font-display text-[36px] sm:text-[40px] leading-none text-[#b54e23] font-semibold mb-3 sm:mb-4">
                  “
                </div>
                <p className="text-[15px] sm:text-[16.5px] leading-[1.7] sm:leading-[1.75] text-[#1a1a14] font-sans-body">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a1a14]/15">
                <div className="font-display font-semibold text-[15px] text-[#1c2624]">
                  {item.name}
                </div>
                <div className="text-xs sm:text-[13px] text-[#6d7266] mt-0.5">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
