import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { BusinessFlow } from './components/BusinessFlow';
import { FacilitySection } from './components/FacilitySection';
import { ProductsSection, CategorySpec } from './components/ProductsSection';
import { PeopleSection } from './components/PeopleSection';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDrawer } from './components/ProductDrawer';
import { InquiryDrawer } from './components/InquiryDrawer';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategorySpec | null>(null);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState(false);
  const [prefilledCategory, setPrefilledCategory] = useState<string>('');
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  const handleOpenInquiryWithCategory = (catName: string) => {
    setPrefilledCategory(catName);
    setInquiryDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EDE8DE] text-[#1a1a14] font-sans-body antialiased selection:bg-[#b54e23] selection:text-[#EDE8DE]">
      {/* Header */}
      <Header
        onOpenInquiry={() => {
          setPrefilledCategory('');
          setInquiryDrawerOpen(true);
        }}
      />

      {/* Main Flow */}
      <main>
        <Hero
          onOpenImage={(src, caption) => setLightbox({ src, caption })}
        />

        <Statement />

        <BusinessFlow />

        <FacilitySection
          onOpenImage={(src, caption) => setLightbox({ src, caption })}
        />

        <ProductsSection
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        <PeopleSection
          onOpenInquiry={() => {
            setPrefilledCategory('Careers & Internships');
            setInquiryDrawerOpen(true);
          }}
        />

        <FaqSection
          onOpenInquiry={(cat) => handleOpenInquiryWithCategory(cat || 'General Inquiry')}
        />

        <TestimonialsSection />

        <ContactSection
          onOpenInquiry={() => {
            setPrefilledCategory('');
            setInquiryDrawerOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Drawers & Lightbox */}
      <ProductDrawer
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onInquire={(catName) => handleOpenInquiryWithCategory(catName)}
      />

      <InquiryDrawer
        isOpen={inquiryDrawerOpen}
        onClose={() => setInquiryDrawerOpen(false)}
        prefilledCategory={prefilledCategory}
      />

      <LightboxModal
        src={lightbox?.src || null}
        caption={lightbox?.caption || ''}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
