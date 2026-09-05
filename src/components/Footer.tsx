import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c2624] text-[#ece6d8] py-[32px]">
      <div className="content-wrap">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="font-display font-semibold text-[17px] text-[#ece6d8]">
            ENZONE<span className="font-normal opacity-60"> GROUP</span>
          </div>
          <div className="font-mono-spec text-xs text-[#ece6d8]/40">
            © {new Date().getFullYear()} ENZONE GROUP · Kozhikode, Kerala
          </div>
        </div>
      </div>
    </footer>
  );
};
