import React, { useState } from 'react';

interface CareerPathItem {
  number: string;
  stage: string;
  duration: string;
  focus: string;
}

const CAREER_PATH: CareerPathItem[] = [
  { number: '01', stage: 'Internship', duration: '3–6 months', focus: 'Shop-floor immersion in manufacturing hygiene, compounding, and warehousing.' },
  { number: '02', stage: 'Communication', duration: 'Development', focus: 'Client relationship management, merchant presentations, and territory outreach.' },
  { number: '03', stage: 'Responsibility', duration: 'Experience', focus: 'Direct ownership of regional stockist accounts and dispatch logistics.' },
  { number: '04', stage: 'Career progression', duration: 'Management', focus: 'Leadership roles managing full product lines and expansion corridors.' }
];

interface PeopleSectionProps {
  onOpenInquiry: () => void;
}

export const PeopleSection: React.FC<PeopleSectionProps> = ({ onOpenInquiry }) => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section className="bg-[#1c2624] text-[#ece6d8] py-[80px] sm:py-[120px] lg:py-[140px]" id="people">
      <div className="content-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[100px]">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <span className="font-mono-spec text-[11px] sm:text-xs text-[#ece6d8]/50 uppercase tracking-widest block mb-3">
              Talent & Culture
            </span>
            <h2 className="font-display text-[clamp(30px,6vw,84px)] leading-[0.96] tracking-tight sm:tracking-[-3px] lg:tracking-[-4px] font-semibold text-[#ece6d8]">
              We develop people.
            </h2>
          </div>

          {/* Right Column: Paragraphs & Career Path Table */}
          <div className="lg:col-span-8">
            <p className="max-w-[580px] text-[#ece6d8]/75 text-base sm:text-[17px] leading-[1.75] font-sans-body">
              One of the biggest reasons ENZONE GROUP has grown and continues to grow is the strength of the people we develop.
            </p>
            <p className="max-w-[580px] text-[#ece6d8]/75 text-base sm:text-[17px] leading-[1.75] font-sans-body mt-4 sm:mt-5">
              We provide opportunities for people within the community to gain practical experience, improve communication skills and develop professionally. Through structured internships and training, individuals can grow into greater responsibilities within the organization.
            </p>

            {/* Path Rows */}
            <div className="mt-10 sm:mt-16 border-b border-white/14">
              {CAREER_PATH.map((item) => {
                const isSelected = activeStep === item.number;
                return (
                  <div
                    key={item.number}
                    onClick={() => setActiveStep(isSelected ? null : item.number)}
                    className="group py-4 sm:py-[22px] border-t border-white/14 cursor-pointer transition-colors"
                  >
                    <div className="grid grid-cols-[36px_1fr_auto] sm:grid-cols-[70px_1fr_auto] gap-2.5 sm:gap-6 items-baseline text-[14px] sm:text-[16px]">
                      <span className="font-mono-spec text-[#ece6d8]/42 text-xs sm:text-sm group-hover:text-[#b54e23] transition-colors">
                        {item.number}
                      </span>
                      <span className="font-medium text-[#ece6d8] group-hover:text-white transition-colors">
                        {item.stage}
                      </span>
                      <span className="font-mono-spec text-[11px] sm:text-sm text-[#ece6d8]/50 text-right whitespace-nowrap">
                        {item.duration}
                      </span>
                    </div>

                    {isSelected && (
                      <p className="mt-2.5 pl-[36px] sm:pl-[70px] text-xs sm:text-sm text-[#ece6d8]/65 font-mono-spec animate-in fade-in duration-200">
                        {item.focus}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenInquiry}
                className="text-xs font-mono-spec text-[#ece6d8]/70 hover:text-[#b54e23] border-b border-white/20 hover:border-[#b54e23] pb-1 transition-colors cursor-pointer"
              >
                Apply for internship or career openings →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
