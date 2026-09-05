import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/enzoneData';
import { InquiryFormData } from '../types';
import { X, Send, Check, MessageSquare, ArrowUpRight } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIntent?: string;
  defaultProduct?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultIntent = 'distribution',
  defaultProduct = 'All Product Lines'
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: (defaultIntent as any) || 'distribution',
    productInterest: defaultProduct,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        inquiryType: (defaultIntent as any) || 'distribution',
        productInterest: defaultProduct || 'All Product Lines'
      }));
      setSubmitted(false);
    }
  }, [isOpen, defaultIntent, defaultProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ENZONE GROUP, I would like to inquire about ${formData.inquiryType}.\nName: ${formData.name || 'Visitor'}\nProduct: ${formData.productInterest}`
    );
    window.open(`https://wa.me/919847000000?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1c2624]/85 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="marked-box relative w-full max-w-lg bg-[#f4efe4] rounded-xs border border-[#1a1a14]/25 shadow-2xl overflow-hidden text-[#1a1a14]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Blueprint corners */}
        <span className="blueprint-corner tl border-[#1c2624]" />
        <span className="blueprint-corner tr border-[#1c2624]" />
        <span className="blueprint-corner bl border-[#1c2624]" />
        <span className="blueprint-corner br border-[#1c2624]" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#ddd5bf] border-b border-[#1a1a14]/15 flex items-center justify-between">
          <div>
            <span className="font-mono-spec text-[10px] text-[#b54e23] uppercase tracking-wider block">
              Official Requisition Channel
            </span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#1c2624]">
              Start a Conversation with ENZONE
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xs border border-[#1a1a14]/20 hover:bg-[#1c2624] hover:text-[#ece6d8] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-xl text-[#1c2624] mb-1">
                Requisition Logged
              </h4>
              <p className="text-xs sm:text-sm text-[#6d7266] max-w-xs mx-auto mb-6">
                Our commercial channel manager in Kozhikode will reach out to you within 24 business hours.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 rounded-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continue on WhatsApp Directly</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2 rounded-xs border border-[#1a1a14]/20 text-xs font-semibold text-[#1c2624] hover:bg-[#ddd5bf] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono-spec text-[11px] text-[#6d7266] uppercase mb-1">
                  Inquiry Purpose *
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData(prev => ({ ...prev, inquiryType: e.target.value as any }))}
                  className="w-full px-3 py-2 bg-[#ece6d8] border border-[#1a1a14]/20 rounded-xs text-xs text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                >
                  <option value="distribution">Regional Distribution & Stockist Partnership</option>
                  <option value="wholesale">Wholesale Product Order</option>
                  <option value="manufacturing">Contract Manufacturing / Private Labeling</option>
                  <option value="export">Export Consignments</option>
                  <option value="career">Career / Internship Opportunity</option>
                  <option value="general">General Commercial Inquiry</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-spec text-[11px] text-[#6d7266] uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Full name"
                    className="w-full px-3 py-1.5 bg-[#ece6d8] border border-[#1a1a14]/20 rounded-xs text-xs text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                  />
                </div>

                <div>
                  <label className="block font-mono-spec text-[11px] text-[#6d7266] uppercase mb-1">
                    Organization / Shop
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                    placeholder="Company name"
                    className="w-full px-3 py-1.5 bg-[#ece6d8] border border-[#1a1a14]/20 rounded-xs text-xs text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono-spec text-[11px] text-[#6d7266] uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="name@domain.com"
                    className="w-full px-3 py-1.5 bg-[#ece6d8] border border-[#1a1a14]/20 rounded-xs text-xs text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                  />
                </div>

                <div>
                  <label className="block font-mono-spec text-[11px] text-[#6d7266] uppercase mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91..."
                    className="w-full px-3 py-1.5 bg-[#ece6d8] border border-[#1a1a14]/20 rounded-xs text-xs text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-spec text-[11px] text-[#6d7266] uppercase mb-1">
                  Product or Requisition Details *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Detail your requirements, desired quantity, or territory..."
                  className="w-full px-3 py-2 bg-[#ece6d8] border border-[#1a1a14]/20 rounded-xs text-xs text-[#1a1a14] focus:outline-hidden focus:border-[#b54e23]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-xs bg-[#b54e23] hover:bg-[#9c411b] text-[#ece6d8] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Submit Requisition to Kozhikode HQ</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
