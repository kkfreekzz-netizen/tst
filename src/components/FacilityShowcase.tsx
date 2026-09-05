import React, { useState } from 'react';
import { Maximize2, Shield, Wrench, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { FACILITY_ASSETS } from '../data/enzoneData';

interface FacilityShowcaseProps {
  onOpenImage: (id: string) => void;
  onOpenInquiry: (intent?: string) => void;
}

export const FacilityShowcase: React.FC<FacilityShowcaseProps> = ({ onOpenImage, onOpenInquiry }) => {
  const [selectedAssetId, setSelectedAssetId] = useState<'building' | 'machinery'>('building');

  const buildingAsset = FACILITY_ASSETS.find(a => a.id === 'building') || FACILITY_ASSETS[1];
  const machineryAsset = FACILITY_ASSETS.find(a => a.id === 'machinery') || FACILITY_ASSETS[2];

  const currentAsset = selectedAssetId === 'building' ? buildingAsset : machineryAsset;

  return (
    <section id="facility" className="py-20 sm:py-32 bg-[#ddd5bf]/40 border-y border-[#1a1a14]/10 relative">
      <div className="w-[min(1360px,calc(100%-48px))] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono-spec text-[11px] sm:text-xs text-[#6d7266] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#b54e23]" />
              <span>Infrastructure & Physical Plant</span>
            </div>
            <h2 className="font-display font-semibold text-[#1c2624] text-[clamp(32px,5.4vw,72px)] leading-[0.96] tracking-[-0.03em]">
              Built around real work.
            </h2>
          </div>

          <p className="max-w-md text-[#6d7266] text-sm sm:text-base leading-relaxed">
            Our office, warehousing, and compounding suites in Kozhikode are configured for practical manufacturing throughput and dependable regional distribution — not just for display.
          </p>
        </div>

        {/* Facility Tab Switcher */}
        <div className="flex items-center gap-2 mb-8 p-1 bg-[#ddd5bf] rounded-xs w-fit border border-[#1a1a14]/15">
          <button
            onClick={() => setSelectedAssetId('building')}
            className={`px-4 py-2 rounded-xs text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedAssetId === 'building'
                ? 'bg-[#1c2624] text-[#ece6d8] shadow-xs'
                : 'text-[#1a1a14] hover:bg-[#ece6d8]/60'
            }`}
          >
            01. Exterior & Logistics Complex
          </button>
          <button
            onClick={() => setSelectedAssetId('machinery')}
            className={`px-4 py-2 rounded-xs text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedAssetId === 'machinery'
                ? 'bg-[#1c2624] text-[#ece6d8] shadow-xs'
                : 'text-[#1a1a14] hover:bg-[#ece6d8]/60'
            }`}
          >
            02. Compounding & Production Machinery
          </button>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Visual Asset with Blueprint Corners */}
          <div className="lg:col-span-6">
            <div
              className="marked-box group relative rounded-xs overflow-hidden border border-[#1a1a14]/20 bg-[#1c2624] cursor-pointer shadow-md"
              onClick={() => onOpenImage(currentAsset.id)}
            >
              {/* Corner blueprint marks */}
              <span className="blueprint-corner tl border-white/60" />
              <span className="blueprint-corner tr border-white/60" />
              <span className="blueprint-corner bl border-white/60" />
              <span className="blueprint-corner br border-white/60" />

              <div className="relative aspect-4/3 sm:aspect-16/11 overflow-hidden">
                <img
                  src={currentAsset.src}
                  alt={currentAsset.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2624]/80 via-transparent to-black/10 pointer-events-none" />

                {/* Inspect badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1c2624]/90 text-[#ece6d8] backdrop-blur-xs text-xs font-mono-spec border border-white/10 group-hover:bg-[#b54e23] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View High-Res Photo</span>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <div className="bg-[#ece6d8]/95 backdrop-blur-md px-3.5 py-2 rounded-xs border border-[#1a1a14]/15 shadow-sm">
                    <span className="block font-mono-spec text-[10px] text-[#6d7266] uppercase">
                      Physical Asset · {currentAsset.label}
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-[#1c2624]">
                      {currentAsset.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick switcher thumbnails */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <button
                onClick={() => setSelectedAssetId('building')}
                className={`p-2.5 rounded-xs border text-left transition-all cursor-pointer ${
                  selectedAssetId === 'building'
                    ? 'border-[#b54e23] bg-[#ece6d8] shadow-xs'
                    : 'border-[#1a1a14]/15 bg-[#ddd5bf]/50 hover:bg-[#ece6d8]'
                }`}
              >
                <span className="block font-mono-spec text-[10px] text-[#6d7266]">PHOTO 01</span>
                <span className="font-display text-xs font-semibold text-[#1c2624]">Building Complex</span>
              </button>

              <button
                onClick={() => setSelectedAssetId('machinery')}
                className={`p-2.5 rounded-xs border text-left transition-all cursor-pointer ${
                  selectedAssetId === 'machinery'
                    ? 'border-[#b54e23] bg-[#ece6d8] shadow-xs'
                    : 'border-[#1a1a14]/15 bg-[#ddd5bf]/50 hover:bg-[#ece6d8]'
                }`}
              >
                <span className="block font-mono-spec text-[10px] text-[#6d7266]">PHOTO 02</span>
                <span className="font-display text-xs font-semibold text-[#1c2624]">Compounding Rig</span>
              </button>
            </div>
          </div>

          {/* Infrastructure Specifications Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono-spec text-xs text-[#b54e23] uppercase tracking-wider block mb-2">
              Engineering Standards & Compliance
            </span>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1c2624] tracking-tight mb-4">
              {selectedAssetId === 'building'
                ? 'Central Logistics & Headquarters Hub'
                : 'Sanitary Production & High-Shear Blending'}
            </h3>

            <p className="text-[#6d7266] text-base leading-relaxed mb-6">
              {currentAsset.description}
            </p>

            {/* Spec breakdown table */}
            <div className="border-t border-b border-[#1a1a14]/15 py-4 my-2 space-y-3 font-mono-spec text-xs sm:text-sm">
              {currentAsset.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-baseline justify-between gap-4">
                  <span className="text-[#6d7266] uppercase">{spec.label}</span>
                  <span className="text-[#1c2624] font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Quality assurance assurances */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 text-xs text-[#1a1a14]/80">
                <Shield className="w-4 h-4 text-[#b54e23] shrink-0 mt-0.5" />
                <span>Strict batch quarantine and release protocol</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#1a1a14]/80">
                <Layers className="w-4 h-4 text-[#b54e23] shrink-0 mt-0.5" />
                <span>Multi-tier warehousing preventing cross-contamination</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8">
              <button
                onClick={() => onOpenInquiry('manufacturing')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#1c2624] text-[#ece6d8] text-xs sm:text-sm font-medium hover:bg-[#b54e23] transition-colors cursor-pointer"
              >
                <span>Request Facility Audit or Private Formulation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
