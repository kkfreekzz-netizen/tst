import React from 'react';

interface FacilitySectionProps {
  onOpenImage: (src: string, caption: string) => void;
}

export const FacilitySection: React.FC<FacilitySectionProps> = ({ onOpenImage }) => {
  const buildingImg = "https://raw.githubusercontent.com/MozhdehLeather/orizon/main/WhatsApp%20Image%202026-09-05%20at%2010.37.17%20AM%20(1).jpeg";
  const machineImg = "https://raw.githubusercontent.com/MozhdehLeather/orizon/main/WhatsApp%20Image%202026-09-05%20at%2010.37.14%20AM.jpeg";

  return (
    <>
      {/* Building Section */}
      <section className="pb-[80px] sm:pb-[120px] lg:pb-[140px] bg-[#ece6d8]" id="building">
        <div className="content-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[70px] items-center">
            {/* Building Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div
                className="marked relative overflow-hidden h-[340px] xs:h-[400px] sm:h-[500px] lg:h-[620px] w-full max-w-[440px] bg-[#ddd5bf] cursor-pointer group shadow-xs"
                onClick={() => onOpenImage(buildingImg, 'ENZONE GROUP · Exterior Facility & Commercial Complex')}
                title="Click to view full image"
              >
                <img
                  src={buildingImg}
                  alt="ENZONE GROUP building exterior in Kozhikode, Kerala"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <span className="corner tl light" />
                <span className="corner tr light" />
                <span className="corner bl light" />
                <span className="corner br light" />

                <div className="absolute bottom-3 left-3 px-2.5 py-1.5 bg-[#ece6d8]/90 backdrop-blur-xs text-[10px] sm:text-xs font-mono-spec text-[#1c2624]">
                  Kozhikode Complex
                </div>
              </div>
            </div>

            {/* Building Content */}
            <div className="lg:col-span-7">
              <span className="font-mono-spec text-[11px] sm:text-xs text-[#6d7266] uppercase tracking-widest block mb-3">
                Where the work happens
              </span>
              <h2 className="font-display text-[clamp(28px,5.4vw,74px)] text-[#1c2624] tracking-tight sm:tracking-[-2px] lg:tracking-[-3px] leading-[1.05] sm:leading-[0.98] font-semibold">
                Built around real work.
              </h2>
              <p className="text-[#6d7266] text-base sm:text-[17px] leading-[1.75] max-w-[460px] mt-4 sm:mt-6 font-sans-body">
                Our office and workspace are set up for the day-to-day work of manufacturing, distribution and growing a business — not just for show.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Section */}
      <section className="py-[80px] sm:py-[120px] lg:py-[140px] bg-[#ece6d8]" id="machine">
        <div className="content-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            {/* Machine Image */}
            <div className="lg:col-span-6">
              <div
                className="marked h-[260px] xs:h-[340px] sm:h-[460px] lg:h-[560px] overflow-hidden relative cursor-pointer group bg-[#ddd5bf] shadow-xs"
                onClick={() => onOpenImage(machineImg, 'ENZONE GROUP · Precision Manufacturing Equipment')}
                title="Click to view full image"
              >
                <img
                  src={machineImg}
                  alt="ENZONE GROUP manufacturing equipment"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <span className="corner tl dark" />
                <span className="corner br dark" />

                <div className="absolute bottom-3 left-3 px-2.5 py-1.5 bg-[#1c2624]/90 backdrop-blur-xs text-[10px] sm:text-xs font-mono-spec text-[#ece6d8]">
                  Stainless Compounding Reactor
                </div>
              </div>
            </div>

            {/* Machine Content */}
            <div className="lg:col-span-6 lg:pr-[2vw]">
              <span className="font-mono-spec text-[11px] sm:text-xs text-[#6d7266] uppercase tracking-widest block mb-3">
                Manufacturing & Infrastructure
              </span>
              <h2 className="font-display text-[clamp(28px,5.2vw,68px)] text-[#1c2624] tracking-tight sm:tracking-[-2px] lg:tracking-[-3px] leading-[1.05] sm:leading-[0.98] font-semibold mb-4 sm:mb-6">
                Products start with capability.
              </h2>
              <p className="text-[#6d7266] text-base sm:text-[17px] leading-[1.75] max-w-[480px] font-sans-body">
                Our manufacturing operations form the foundation of our product ecosystem. By developing our own products, ENZONE GROUP aims to create greater control over the journey from production to market.
              </p>
              <a
                href="#contact"
                className="mt-6 sm:mt-8 inline-block text-sm font-semibold text-[#1c2624] border-b border-[#1a1a14] pb-0.5 hover:text-[#b54e23] hover:border-[#b54e23] transition-colors"
              >
                Learn about ENZONE GROUP
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
