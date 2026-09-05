import React from 'react';

export interface CategorySpec {
  id: string;
  catCode: string;
  name: string;
  detail: string;
  iconPath: string;
  summary: string;
  formulations: { name: string; spec: string; packaging: string }[];
}

export const CATEGORIES_DATA: CategorySpec[] = [
  {
    id: 'chemicals',
    catCode: 'CAT.01',
    name: 'Chemicals',
    detail: 'Manufactured product solutions',
    iconPath: 'M24 8h16 M27 8v14l-12 24a4 4 0 0 0 4 6h26a4 4 0 0 0 4-6l-12-24V8 M20 40h24',
    summary: 'High-efficacy commercial, institutional, and surface sanitization solutions engineered with strict batch safety.',
    formulations: [
      { name: 'Industrial & Clinical Disinfectant Compound', spec: 'ENZ-CHM-804', packaging: '5L Jerry Can / 20L Drum' },
      { name: 'Heavy-Duty Alkaline Degreaser & Floor Cleanser', spec: 'ENZ-CHM-912', packaging: '5L Can / 25L Can / Bulk Tote' }
    ]
  },
  {
    id: 'herbals',
    catCode: 'CAT.02',
    name: 'Herbals',
    detail: 'Herbal-based products',
    iconPath: 'M32 56C16 52 12 36 20 20C28 8 44 8 50 8C50 24 46 40 32 56Z M32 56C32 44 34 30 44 18',
    summary: 'Formulated with cold-infused indigenous Malabar botanical extracts and virgin oil bases with zero harsh additives.',
    formulations: [
      { name: 'Traditional Herbal Scalp & Follicle Tonic', spec: 'ENZ-HRB-108', packaging: '100ml Glass / 200ml Flip-Cap' },
      { name: 'Herbal Muscle & Joint Soothing Rub', spec: 'ENZ-HRB-205', packaging: '25g Pocket Tin / 50g Glass Jar' }
    ]
  },
  {
    id: 'household',
    catCode: 'CAT.03',
    name: 'Household',
    detail: 'Everyday household goods',
    iconPath: 'M26 10h12 M28 10v6l-6 6v30a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V22l-6-6v-6 M22 34h20',
    summary: 'Everyday household cleaning and fabric hygiene detergents formulated for efficiency and freshness.',
    formulations: [
      { name: 'Multi-Surface Citrus Home Cleaner', spec: 'ENZ-HSD-301', packaging: '500ml Spray Trigger / 1L Refill Pouch' },
      { name: 'Concentrated Fabric Care Detergent Gel', spec: 'ENZ-HSD-402', packaging: '1L Spout / 2L Family Jug / 5L Pack' }
    ]
  },
  {
    id: 'cosmetics',
    catCode: 'CAT.04',
    name: 'Cosmetics',
    detail: 'Cosmetics & hair care',
    iconPath: 'M18 22h28v30a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6V22Z M18 22c0-6 4-10 14-10s14 4 14 10 M24 32h16',
    summary: 'Dermatologically balanced, humidity-resistant facial cleansers and nourishing botanical emulsions.',
    formulations: [
      { name: 'Clarifying Aloe & Niacinamide Face Cleanser', spec: 'ENZ-CSM-501', packaging: '100ml Pump / 150ml Tube' },
      { name: 'Nourishing Botanical Body Emulsion', spec: 'ENZ-CSM-602', packaging: '200ml Pump / 400ml Bottle' }
    ]
  }
];

interface ProductsSectionProps {
  onSelectCategory: (cat: CategorySpec) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="bg-[#ddd5bf] py-[80px] sm:py-[120px] lg:py-[140px]" id="products">
      <div className="content-wrap">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-[40px] sm:mb-[60px]">
          <div>
            <div className="font-mono-spec text-[11px] sm:text-xs text-[#6d7266] uppercase tracking-widest mb-3">
              Product Portfolio
            </div>
            <h2 className="font-display text-[clamp(32px,6.2vw,88px)] leading-[0.94] tracking-tight sm:tracking-[-3px] lg:tracking-[-4px] font-semibold text-[#1c2624]">
              What<br />we make.
            </h2>
          </div>

          <p className="max-w-[360px] text-[#6d7266] text-sm sm:text-[15px] leading-[1.7] font-sans-body">
            Our manufacturing activities span a growing range of product categories designed for everyday use, strict quality control, and regional market demand.
          </p>
        </div>

        {/* Product Rows List with Animated SVG line drawings */}
        <div className="border-t border-[#1a1a14]/15">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="product-row group grid grid-cols-[36px_40px_1fr_auto] sm:grid-cols-[64px_62px_1fr_1fr] items-center min-h-[88px] sm:min-h-[118px] border-b border-[#1a1a14]/15 transition-all duration-300 hover:bg-white/40 hover:pl-3 sm:hover:pl-4 cursor-pointer"
            >
              {/* Category Code */}
              <div className="font-mono-spec text-[11px] sm:text-xs text-[#6d7266]">
                {cat.catCode}
              </div>

              {/* Animated SVG line icon */}
              <div className="text-[#1c2624] group-hover:text-[#b54e23] transition-colors">
                <svg
                  className="product-icon w-[28px] h-[28px] sm:w-[36px] sm:h-[36px]"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={cat.iconPath} />
                </svg>
              </div>

              {/* Name and mobile subtitle */}
              <div className="pl-2 sm:pl-0">
                <div className="font-display text-[clamp(20px,2.9vw,42px)] tracking-tight sm:tracking-[-1.6px] font-semibold text-[#1c2624] group-hover:text-[#b54e23] transition-colors">
                  {cat.name}
                </div>
                <div className="sm:hidden text-[13px] text-[#6d7266] mt-0.5">
                  {cat.detail}
                </div>
              </div>

              {/* Detail & Quick Inspect hint (Desktop) */}
              <div className="hidden sm:flex flex-col items-end text-right">
                <span className="text-[#6d7266] text-[14px]">
                  {cat.detail}
                </span>
                <span className="font-mono-spec text-[11px] text-[#b54e23] opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  View specifications →
                </span>
              </div>

              {/* Mobile tap indicator */}
              <div className="sm:hidden text-[#6d7266] group-hover:text-[#b54e23] pr-1">
                <span className="text-lg">›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
