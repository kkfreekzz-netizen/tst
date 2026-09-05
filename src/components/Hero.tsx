import React, { useEffect, useRef } from 'react';

interface HeroProps {
  onOpenImage: (src: string, caption: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenImage }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const heroImageSrc = "https://raw.githubusercontent.com/MozhdehLeather/orizon/main/WhatsApp%20Image%202026-09-05%20at%2010.37.17%20AM.jpeg";

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current || window.innerWidth < 768) return;
      const y = window.scrollY;
      const shift = Math.min(y * 0.08, 45);
      imgRef.current.style.transform = `translateY(${shift}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 pb-[60px] sm:pb-[80px] flex flex-col justify-center overflow-hidden">
      <div className="grid-veil" />

      <div className="content-wrap w-full">
        {/* 12-Column Editorial Grid: Headline + Aligned Subhead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left column (span 8 columns): Vertical stack without stepping */}
          <div className="lg:col-span-8">
            <h1 className="font-display text-[clamp(44px,8.4vw,132px)] leading-[0.9] sm:leading-[0.88] tracking-[-0.035em] font-bold text-[#1c2624]">
              <span className="block overflow-hidden">
                <span className="block rise-line-1">We make.</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block rise-line-2">We move.</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block rise-line-3">We grow.</span>
              </span>
            </h1>
          </div>

          {/* Right column (span 4 columns, aligned to bottom of the headline) */}
          <div className="lg:col-span-4 flex flex-col justify-end pb-1 sm:pb-2">
            <p className="text-[#3d4542] text-base sm:text-[17px] lg:text-[18px] leading-[1.62] font-sans-body">
              A multi-disciplinary industrial group driving advanced manufacturing, logistics networks, and sustainable infrastructure across emerging markets.
            </p>

            <div className="mt-6 sm:mt-7">
              <a
                href="#business"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#1c2624] hover:text-[#b54e23] transition-colors group cursor-pointer"
              >
                <span>Explore our businesses</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 font-sans">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Visual Asset: Workplace Showcase */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div
            className="marked h-[280px] xs:h-[360px] sm:h-[460px] lg:h-[560px] overflow-hidden relative cursor-pointer group bg-[#ddd5bf] shadow-xs"
            onClick={() => onOpenImage(heroImageSrc, 'ENZONE GROUP · our workplace in Kozhikode, Kerala')}
            title="Click to view full image"
          >
            <img
              ref={imgRef}
              src={heroImageSrc}
              alt="ENZONE GROUP office in Kozhikode, Kerala"
              className="w-full h-full md:h-[114%] object-cover object-center transition-transform duration-700 ease-out will-change-transform"
              loading="eager"
            />

            {/* Corner marks */}
            <span className="corner tl light" />
            <span className="corner tr light" />
            <span className="corner bl light" />
            <span className="corner br light" />

            {/* Label */}
            <div className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-[#EDE8DE]/92 backdrop-blur-md text-[11px] sm:text-xs font-mono-spec text-[#1c2624] border border-black/10 shadow-xs">
              ENZONE GROUP · our workplace
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
