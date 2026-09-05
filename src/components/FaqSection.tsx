import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/faqData';

interface FaqSectionProps {
  onOpenInquiry: (category?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenInquiry }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="py-[90px] sm:py-[130px] lg:py-[150px] bg-[#EDE8DE] border-t border-[#1a1a14]/10"
      id="faq"
    >
      <div className="content-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Context & Direct Reachout */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <span className="font-mono-spec text-[11px] sm:text-xs text-[#70766d] uppercase tracking-widest block mb-3">
              FAQ
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] font-semibold text-[#1c2624]">
              Common questions.
            </h2>

            <p className="mt-4 text-[#4a524e] text-base leading-[1.65] font-sans-body max-w-sm">
              Clear answers regarding contract compounding, delivery lead times, wholesale partnerships, and facility operations.
            </p>

            <div className="mt-8 pt-6 border-t border-[#1c2624]/10 max-w-sm">
              <p className="text-sm text-[#5a625e]">Have an unlisted requirement?</p>
              <button
                type="button"
                id="faq-direct-inquiry-btn"
                onClick={() => onOpenInquiry('Commercial Inquiry')}
                className="mt-1.5 text-sm font-medium text-[#1c2624] hover:text-[#b54e23] inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
              >
                <span>Talk with our team</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Typographic Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-b border-[#1c2624]/15 divide-y divide-[#1c2624]/15">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="group" id={`faq-item-${item.id}`}>
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-btn-${item.id}`}
                      className="w-full py-5 sm:py-6 text-left flex items-start justify-between gap-6 cursor-pointer focus:outline-hidden select-none"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6 min-w-0 pr-2">
                        <span className="font-mono-spec text-xs sm:text-sm text-[#7a8077] shrink-0 font-medium group-hover:text-[#b54e23] transition-colors">
                          {item.number}
                        </span>
                        <span className="font-display text-base sm:text-lg lg:text-[19px] font-medium text-[#1c2624] leading-[1.35] tracking-[-0.015em] group-hover:text-[#b54e23] transition-colors">
                          {item.question}
                        </span>
                      </div>

                      {/* Pure architectural rotating plus glyph (no pill border) */}
                      <span
                        className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-[#1c2624]/70 group-hover:text-[#1c2624] transition-colors"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className={`w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isOpen ? 'rotate-45 text-[#b54e23]' : 'rotate-0'
                          }`}
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        >
                          <line x1="10" y1="3" x2="10" y2="17" />
                          <line x1="3" y1="10" x2="17" y2="10" />
                        </svg>
                      </span>
                    </button>

                    {/* Smooth height animation via motion/react */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${item.id}`}
                          role="region"
                          aria-labelledby={`faq-btn-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-7 sm:pl-10 pb-6 sm:pb-7 max-w-[640px]">
                            <p className="text-[#3d4542] text-sm sm:text-[15px] leading-[1.7] font-sans-body">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
