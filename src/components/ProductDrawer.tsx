import React, { useEffect } from 'react';
import { CategorySpec } from './ProductsSection';

interface ProductDrawerProps {
  category: CategorySpec | null;
  onClose: () => void;
  onInquire: (categoryName: string) => void;
}

export const ProductDrawer: React.FC<ProductDrawerProps> = ({
  category,
  onClose,
  onInquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[540px] h-full bg-[#ece6d8] text-[#1a1a14] p-5 sm:p-10 flex flex-col justify-between overflow-y-auto border-l border-[#1a1a14]/15 shadow-2xl animate-in slide-in-from-right duration-400"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1a1a14]/15 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-mono-spec text-xs text-[#b54e23] font-semibold">
                {category.catCode}
              </span>
              <span className="font-mono-spec text-xs text-[#6d7266]">
                Formulation Specifications
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-sm font-mono-spec text-[#6d7266] hover:text-[#1c2624] cursor-pointer"
            >
              [close]
            </button>
          </div>

          {/* Title & Icon */}
          <div className="flex items-center gap-4 mb-4">
            <svg
              className="w-8 h-8 text-[#b54e23]"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={category.iconPath} />
            </svg>
            <h3 className="font-display text-3xl font-bold text-[#1c2624] tracking-tight">
              {category.name}
            </h3>
          </div>

          <p className="text-[#6d7266] text-sm leading-[1.7] mb-8 font-sans-body">
            {category.summary}
          </p>

          {/* Formulations List */}
          <div className="space-y-4">
            <span className="font-mono-spec text-xs text-[#1c2624] uppercase tracking-wider block">
              Active Formulations & Packaging
            </span>

            {category.formulations.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#ddd5bf]/50 border border-[#1a1a14]/15 rounded-xs"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-display font-semibold text-sm text-[#1c2624]">
                    {item.name}
                  </h4>
                  <span className="font-mono-spec text-[11px] text-[#b54e23] shrink-0">
                    {item.spec}
                  </span>
                </div>
                <div className="font-mono-spec text-xs text-[#6d7266]">
                  Available in: {item.packaging}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="pt-8 border-t border-[#1a1a14]/15 mt-8 flex flex-col gap-3">
          <button
            onClick={() => {
              onClose();
              onInquire(category.name);
            }}
            className="w-full py-3.5 px-5 bg-[#1c2624] hover:bg-[#b54e23] text-[#ece6d8] font-medium text-sm transition-colors text-center cursor-pointer"
          >
            Request Batch Samples or Wholesale Terms
          </button>
          <span className="font-mono-spec text-[11px] text-[#6d7266] text-center">
            Manufactured and dispatched from Kozhikode, Kerala
          </span>
        </div>
      </div>
    </div>
  );
};
