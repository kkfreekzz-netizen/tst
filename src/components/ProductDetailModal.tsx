import React, { useEffect } from 'react';
import { ProductItem } from '../types';
import { X, Check, Package, Layers, ShieldCheck, ArrowUpRight, Award } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onInquire: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1c2624]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="marked-box relative w-full max-w-2xl bg-[#ece6d8] rounded-xs border border-[#1a1a14]/25 shadow-2xl max-h-[90vh] flex flex-col overflow-hidden text-[#1a1a14]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Blueprint corners */}
        <span className="blueprint-corner tl border-[#1c2624]" />
        <span className="blueprint-corner tr border-[#1c2624]" />
        <span className="blueprint-corner bl border-[#1c2624]" />
        <span className="blueprint-corner br border-[#1c2624]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#ddd5bf] border-b border-[#1a1a14]/15 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-xs bg-[#1c2624] text-[#ece6d8] font-mono-spec text-[10px] uppercase">
                {product.categoryLabel}
              </span>
              <span className="font-mono-spec text-xs font-semibold text-[#b54e23]">
                {product.specCode}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1c2624] tracking-tight">
              {product.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xs border border-[#1a1a14]/20 hover:bg-[#1c2624] hover:text-[#ece6d8] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Tagline & Description */}
          <div>
            <p className="font-display font-semibold text-base text-[#1c2624] mb-2">
              {product.tagline}
            </p>
            <p className="text-sm text-[#6d7266] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Formulations Highlights */}
          <div className="p-4 rounded-xs bg-[#f4efe4] border border-[#1a1a14]/10">
            <span className="block font-mono-spec text-xs text-[#6d7266] uppercase mb-3">
              Formulation Specifications & Efficacy
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#1a1a14]">
                  <Check className="w-4 h-4 text-[#b54e23] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="border border-[#1a1a14]/15 rounded-xs divide-y divide-[#1a1a14]/15 font-mono-spec text-xs">
            <div className="p-3 flex items-center justify-between">
              <span className="text-[#6d7266] uppercase">Packaging Options</span>
              <span className="text-[#1c2624] font-semibold text-right">
                {product.packagingOptions.join(' / ')}
              </span>
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-[#6d7266] uppercase">Intended End-Markets</span>
              <span className="text-[#1c2624] font-semibold text-right">
                {product.intendedMarket}
              </span>
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-[#6d7266] uppercase">Plant Batch Capacity</span>
              <span className="text-[#1c2624] font-semibold text-right">
                {product.batchCapacity}
              </span>
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-[#6d7266] uppercase">Manufacturing Origin</span>
              <span className="text-[#1c2624] font-semibold text-right">
                Kozhikode Plant, Kerala
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#ddd5bf] border-t border-[#1a1a14]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#6d7266] font-mono-spec">
            COA & Material Safety Data Sheet (MSDS) provided on request
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-[#1c2624] border border-[#1a1a14]/20 rounded-xs hover:bg-[#ece6d8] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onInquire(product.name);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2 rounded-xs bg-[#b54e23] hover:bg-[#9c411b] text-[#ece6d8] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <span>Request Wholesale Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
