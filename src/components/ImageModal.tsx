import React, { useEffect } from 'react';
import { FACILITY_ASSETS } from '../data/enzoneData';
import { X, MapPin, Layers, Maximize2 } from 'lucide-react';

interface ImageModalProps {
  assetId: string | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ assetId, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!assetId) return null;

  const asset = FACILITY_ASSETS.find((a) => a.id === assetId) || FACILITY_ASSETS[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="marked-box relative w-full max-w-4xl bg-[#1c2624] text-[#ece6d8] rounded-xs border border-white/20 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Blueprint corners */}
        <span className="blueprint-corner tl border-white/60" />
        <span className="blueprint-corner tr border-white/60" />
        <span className="blueprint-corner bl border-white/60" />
        <span className="blueprint-corner br border-white/60" />

        {/* Modal Top Bar */}
        <div className="p-3.5 sm:p-4 bg-[#263531] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b54e23]" />
            <span className="font-mono-spec text-xs text-[#ece6d8]/80 uppercase">
              {asset.label}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-xs border border-white/20 text-[#ece6d8] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close photo view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High Resolution Media */}
        <div className="relative max-h-[70vh] bg-black/40 flex items-center justify-center overflow-hidden">
          <img
            src={asset.src}
            alt={asset.title}
            className="w-full h-full object-contain max-h-[68vh]"
          />
        </div>

        {/* Details Caption Footer */}
        <div className="p-4 sm:p-5 bg-[#222e2b] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-[#ece6d8]">
              {asset.title}
            </h4>
            <p className="text-xs text-[#ece6d8]/70 leading-relaxed max-w-xl mt-0.5">
              {asset.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 font-mono-spec text-xs text-[#ece6d8]/50">
            <span>Kozhikode Hub</span>
            <span className="px-2 py-0.5 rounded-xs bg-[#b54e23]/30 text-[#b54e23] border border-[#b54e23]/50">
              Verified Asset
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
