import React from 'react';

export const Statement: React.FC = () => {
  return (
    <section className="bg-[#1c2624] text-[#ece6d8] py-[80px] sm:py-[120px] lg:py-[140px] relative">
      <div className="content-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14">
          <div className="lg:col-span-3">
            <span className="font-mono-spec text-[11px] sm:text-xs tracking-widest text-[#ece6d8]/50 uppercase block">
              Our Approach
            </span>
          </div>

          <div className="lg:col-span-9">
            <h2 className="font-display text-[clamp(28px,5.4vw,72px)] leading-[1.14] sm:leading-[1.08] tracking-tight sm:tracking-[-2px] lg:tracking-[-3px] max-w-[1040px] font-medium text-[#ece6d8]">
              From <span className="text-[#ece6d8]/45">our own products</span> to the people who bring them into the community.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
