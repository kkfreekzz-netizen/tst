import React, { useState } from 'react';

interface StageDetail {
  number: string;
  name: string;
  desc: string;
  details: string[];
}

const STAGES: StageDetail[] = [
  {
    number: '01',
    name: 'Manufacturing',
    desc: 'We develop and manufacture our own range of products, giving us greater control over development, quality and distribution.',
    details: ['Compounding facility in Kozhikode', 'Batch-tested quality standards', 'Flexible custom packaging configurations']
  },
  {
    number: '02',
    name: 'Direct Selling',
    desc: 'Our direct-selling and self-marketing model brings products closer to customers while creating opportunities for our network.',
    details: ['Transparent merchant margin structures', 'Hands-on product training for field teams', 'Direct consumer feedback integration']
  },
  {
    number: '03',
    name: 'Distribution',
    desc: 'We build distribution channels that connect our products with customers and communities.',
    details: ['Pan-Kerala wholesale routing', 'Dependable 24–48h replenishment', 'Direct support for retail stockists']
  },
  {
    number: '04',
    name: 'Export',
    desc: 'Our ambitions extend beyond local markets, creating opportunities to take our products into wider markets.',
    details: ['Export-standard packaging and documentation', 'Active GCC trade connections', 'Container-load commercial logistics']
  }
];

export const BusinessFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <section className="py-[80px] sm:py-[120px] lg:py-[140px] bg-[#ece6d8]" id="business">
      <div className="content-wrap">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20 mb-[50px] sm:mb-[80px]">
          <div className="lg:col-span-4">
            <span className="font-mono-spec text-[11px] sm:text-xs text-[#6d7266] uppercase tracking-widest block">
              Operations & Ecosystem
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(28px,5.6vw,72px)] leading-[1.08] sm:leading-[1] tracking-tight sm:tracking-[-2px] lg:tracking-[-3px] font-semibold text-[#1c2624]">
              Four stages, one connected business.
            </h2>
          </div>
        </div>

        {/* Connected Supply Chain Flow */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] top-[14px] bottom-[14px] w-[1px] bg-[#1a1a14]/15 hidden sm:block pointer-events-none after:content-[''] after:absolute after:left-[-3.5px] after:bottom-[-2px] after:border-4 after:border-transparent after:border-t-[#1a1a14]" />

          <div className="space-y-0">
            {STAGES.map((stage) => {
              const isSelected = activeStage === stage.number;
              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStage(isSelected ? null : stage.number)}
                  className="group grid grid-cols-[46px_1fr] sm:grid-cols-[56px_0.85fr_1fr] gap-x-4 gap-y-2 sm:gap-10 py-5 sm:py-[34px] border-b border-[#1a1a14]/10 sm:border-b-0 cursor-pointer transition-colors"
                >
                  {/* Node Circle */}
                  <div
                    className={`w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] rounded-full border flex items-center justify-center font-mono-spec text-xs sm:text-[13px] transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#b54e23] border-[#b54e23] text-[#ece6d8]'
                        : 'bg-[#ece6d8] border-[#1a1a14] text-[#1c2624] group-hover:bg-[#b54e23] group-hover:border-[#b54e23] group-hover:text-[#ece6d8]'
                    }`}
                  >
                    {stage.number}
                  </div>

                  {/* Flow Name */}
                  <div className="flex items-center sm:block">
                    <h3 className="font-display text-[22px] sm:text-[clamp(26px,2.8vw,40px)] font-semibold tracking-tight sm:tracking-[-1.4px] text-[#1c2624] sm:pt-2 group-hover:text-[#b54e23] transition-colors">
                      {stage.name}
                    </h3>
                  </div>

                  {/* Flow Description */}
                  <div className="col-span-2 sm:col-span-1 pl-[60px] sm:pl-0">
                    <p className="text-[#6d7266] max-w-[440px] leading-[1.65] text-sm sm:text-[15.5px] sm:pt-2.5">
                      {stage.desc}
                    </p>

                    {/* Subtle expansion on click */}
                    {isSelected && (
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-[#1a1a14]/15 space-y-1.5 animate-in fade-in duration-300">
                        {stage.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono-spec text-[#1c2624]">
                            <span className="w-1 h-1 rounded-full bg-[#b54e23]" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
