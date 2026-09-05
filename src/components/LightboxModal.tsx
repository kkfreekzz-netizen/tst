import React, { useEffect } from 'react';

interface LightboxModalProps {
  src: string | null;
  caption: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  src,
  caption,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (src) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-10 bg-black/92 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="flex items-center justify-between text-xs font-mono-spec text-white/60">
        <span>{caption}</span>
        <button
          onClick={onClose}
          className="text-white hover:text-[#b54e23] transition-colors cursor-pointer"
        >
          [close esc]
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        <img
          src={src}
          alt={caption}
          className="max-h-[82vh] max-w-[95vw] object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div className="text-center font-mono-spec text-[11px] text-white/40">
        ENZONE GROUP · Kozhikode, Kerala
      </div>
    </div>
  );
};
