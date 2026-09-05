import React, { useState, useEffect } from 'react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledCategory?: string;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  prefilledCategory = ''
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [intent, setIntent] = useState('Distribution');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      if (prefilledCategory) {
        setNote(`Inquiring about ${prefilledCategory} formulations.`);
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, prefilledCategory, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ENZONE GROUP,\nI would like to discuss ${intent}.\nName: ${name || 'Prospective Partner'}\nNote: ${note}`
    );
    window.open(`https://wa.me/919847000000?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`[ENZONE Inquiry] ${intent} - ${name || 'Prospective Partner'}`);
    const body = encodeURIComponent(`Name: ${name}\nContact: ${contact}\nIntent: ${intent}\n\nNote:\n${note}`);
    window.location.href = `mailto:enzonegroup2@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[500px] h-full bg-[#ece6d8] text-[#1a1a14] p-5 sm:p-10 flex flex-col justify-between overflow-y-auto border-l border-[#1a1a14]/15 shadow-2xl animate-in slide-in-from-right duration-400"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#1a1a14]/15 mb-6 sm:mb-8">
            <span className="font-mono-spec text-[11px] sm:text-xs text-[#6d7266] uppercase tracking-widest">
              Direct Commercial Desk
            </span>
            <button
              onClick={onClose}
              className="text-sm font-mono-spec text-[#6d7266] hover:text-[#1c2624] cursor-pointer"
            >
              [close]
            </button>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2624] tracking-tight mb-2.5">
            Start a conversation.
          </h3>
          <p className="text-[#6d7266] text-sm leading-[1.7] mb-6 sm:mb-8 font-sans-body">
            Directly connect with ENZONE GROUP channel leadership for wholesale distributorship, manufacturing contracts, export inquiries, or career opportunities.
          </p>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="font-display text-2xl font-semibold text-[#1c2624]">
                Inquiry Logged.
              </div>
              <p className="text-sm text-[#6d7266] max-w-[320px] mx-auto leading-relaxed">
                Thank you, {name || 'Partner'}. Our channel desk in Kozhikode will review your note shortly.
              </p>
              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 bg-[#1c2624] text-[#ece6d8] text-xs font-semibold hover:bg-[#b54e23] transition-colors"
                >
                  Send via WhatsApp Directly →
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 border border-[#1a1a14]/20 text-xs text-[#1c2624] hover:bg-[#ddd5bf] transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono-spec text-xs text-[#6d7266] uppercase mb-1">
                  Nature of Inquiry
                </label>
                <select
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#ddd5bf]/50 border border-[#1a1a14]/20 rounded-xs text-sm text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                >
                  <option value="Distribution">Wholesale & Regional Distribution</option>
                  <option value="Compounding">Contract Manufacturing & Compounding</option>
                  <option value="Export">Export Consignments</option>
                  <option value="Careers">Internship & Career Training</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block font-mono-spec text-xs text-[#6d7266] uppercase mb-1">
                  Name / Enterprise *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ashraf K. / Malabar Traders"
                  className="w-full px-3.5 py-2.5 bg-[#ddd5bf]/50 border border-[#1a1a14]/20 rounded-xs text-sm text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                />
              </div>

              <div>
                <label className="block font-mono-spec text-xs text-[#6d7266] uppercase mb-1">
                  Phone / WhatsApp or Email *
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+91... or email"
                  className="w-full px-3.5 py-2.5 bg-[#ddd5bf]/50 border border-[#1a1a14]/20 rounded-xs text-sm text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                />
              </div>

              <div>
                <label className="block font-mono-spec text-xs text-[#6d7266] uppercase mb-1">
                  Message / Region
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Mention your target market, order requirements, or background..."
                  className="w-full px-3.5 py-2.5 bg-[#ddd5bf]/50 border border-[#1a1a14]/20 rounded-xs text-sm text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 bg-[#1c2624] hover:bg-[#b54e23] text-[#ece6d8] font-medium text-sm transition-colors cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Alternative Quick Contact */}
        <div className="pt-6 border-t border-[#1a1a14]/15 mt-6 flex items-center justify-between text-xs font-mono-spec text-[#6d7266]">
          <span>enzonegroup2@gmail.com</span>
          <button
            onClick={handleDirectEmail}
            className="hover:text-[#b54e23] underline"
          >
            Email app
          </button>
        </div>
      </div>
    </div>
  );
};
