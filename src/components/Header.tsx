import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="relative w-full z-30 bg-[#EDE8DE] border-b border-black/8">
        <div className="content-wrap">
          <nav className="h-[72px] sm:h-[84px] flex items-center justify-between">
            {/* Brand */}
            <a
              href="#"
              className="font-display text-xl font-bold tracking-[-0.4px] text-[#1c2624] flex items-baseline gap-1.5 focus:outline-hidden"
            >
              ENZONE<span className="font-normal text-[#6d7266] text-[15px]">GROUP</span>
            </a>

            {/* Desktop Navigation & Actions aligned right */}
            <div className="hidden md:flex items-center gap-7 lg:gap-9">
              <ul className="flex items-center gap-6 lg:gap-8 text-[14px]">
                <li>
                  <button
                    onClick={() => handleNavClick('#business')}
                    className="underline-hover text-[#1a1a14]/75 hover:text-[#1a1a14] transition-opacity cursor-pointer font-normal"
                  >
                    Business
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('#building')}
                    className="underline-hover text-[#1a1a14]/75 hover:text-[#1a1a14] transition-opacity cursor-pointer font-normal"
                  >
                    Workspace
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('#products')}
                    className="underline-hover text-[#1a1a14]/75 hover:text-[#1a1a14] transition-opacity cursor-pointer font-normal"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('#people')}
                    className="underline-hover text-[#1a1a14]/75 hover:text-[#1a1a14] transition-opacity cursor-pointer font-normal"
                  >
                    People
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('#faq')}
                    className="underline-hover text-[#1a1a14]/75 hover:text-[#1a1a14] transition-opacity cursor-pointer font-normal"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="underline-hover text-[#1a1a14]/75 hover:text-[#1a1a14] transition-opacity cursor-pointer font-normal"
                  >
                    Contact
                  </button>
                </li>
              </ul>

              {/* Refined Pill CTA Button */}
              <button
                onClick={onOpenInquiry}
                className="flex items-center gap-2 text-[14px] font-medium border border-black text-black px-5 py-2.5 rounded-full hover:bg-black hover:text-[#EDE8DE] hover:border-black transition-all duration-200 cursor-pointer shadow-2xs active:scale-[0.98]"
              >
                <span>Start a conversation</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full border border-[#1a1a14] flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-[18px] h-[1.5px] bg-[#1a1a14] transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
                }`}
              />
              <span
                className={`w-[18px] h-[1.5px] bg-[#1a1a14] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-[#1c2624] z-50 flex flex-col justify-center px-10 gap-7 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute top-6 left-8 right-8 flex justify-between items-center">
          <span className="font-display text-xl font-bold text-[#ece6d8]">
            ENZONE<span className="font-normal text-[#ece6d8]/60 text-base">GROUP</span>
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full border border-white/20 text-[#ece6d8] flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {['business', 'building', 'products', 'people', 'faq', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(`#${item}`)}
              className="text-left font-display text-[32px] font-medium text-[#ece6d8] hover:text-[#b54e23] transition-colors uppercase cursor-pointer"
            >
              {item === 'building' ? 'Workspace' : item === 'faq' ? 'FAQ' : item}
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full py-3.5 rounded-full bg-[#b54e23] text-[#ece6d8] font-medium text-center text-sm"
          >
            Start a conversation
          </button>
          <span className="font-mono-spec text-xs text-[#ece6d8]/45 mt-2">
            Kozhikode, Kerala
          </span>
        </div>
      </div>
    </>
  );
};
