import React, { useState } from 'react';

interface ContactSectionProps {
  onOpenInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "enzonegroup2@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="pt-[80px] sm:pt-[120px] lg:pt-[140px] pb-[60px] sm:pb-[90px] bg-[#ece6d8]" id="contact">
      <div className="content-wrap">
        <div className="font-mono-spec text-[11px] sm:text-xs text-[#6d7266] uppercase tracking-widest mb-4 sm:mb-5">
          Get in touch
        </div>

        <h2 className="font-display text-[clamp(34px,8vw,110px)] text-[#1c2624] tracking-tight sm:tracking-[-3px] lg:tracking-[-4.5px] leading-[0.96] sm:leading-[0.88] max-w-[1080px] font-semibold">
          Let's build what's next.
        </h2>

        <div className="mt-10 sm:mt-16 lg:mt-20 pt-8 border-t border-[#1a1a14]/15 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
          {/* Email */}
          <div>
            <div className="text-[11px] sm:text-xs font-mono-spec text-[#6d7266] uppercase tracking-widest mb-2.5">
              Email
            </div>
            <div className="flex flex-wrap items-baseline gap-2.5 text-base sm:text-[18px] leading-[1.7]">
              <a
                href={`mailto:${email}`}
                className="break-all border-b border-[#1a1a14]/25 hover:border-[#b54e23] hover:text-[#b54e23] transition-colors pb-0.5"
              >
                {email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="text-xs font-mono-spec text-[#6d7266] hover:text-[#1c2624] cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? '(copied)' : '[copy]'}
              </button>
            </div>

            <div className="mt-5 sm:mt-6">
              <button
                onClick={onOpenInquiry}
                className="text-xs font-mono-spec text-[#b54e23] hover:underline cursor-pointer"
              >
                Open structured commercial inquiry form →
              </button>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <div className="text-[11px] sm:text-xs font-mono-spec text-[#6d7266] uppercase tracking-widest mb-2.5">
              Office
            </div>
            <div className="text-[15.5px] sm:text-[17px] leading-[1.7] text-[#1a1a14]">
              Kalleri – Konaramb Road<br />
              Near ICC Masjid<br />
              Kozhikode, Kerala, India
            </div>
            <div className="mt-4 sm:mt-5">
              <a
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#1c2624] border-b border-[#1a1a14] pb-0.5 hover:text-[#b54e23] hover:border-[#b54e23] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/XB9yDmN6Q64khmXi7?g_st=awb"
              >
                Open location in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
