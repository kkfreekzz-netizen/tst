export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'What product categories does ENZONE manufacture in-house?',
    answer:
      'We manufacture industrial cleaning chemicals, commercial hygiene supplies, personal care formulations, and herbal products. Everything is blended, tested, and packaged at our facility in Kozhikode to ensure consistent active concentrations and shelf stability.'
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Do you provide private labeling and custom batch compounding?',
    answer:
      'Yes. We support white-label production and custom formulations for retail brands, hotels, hospitals, and commercial cleaning contractors. Services include formulation development, fragrance selection, container packaging, batch coding, and regulatory documentation.'
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'What are standard lead times and dispatch schedules?',
    answer:
      'Standard catalog products ship within 48 to 72 hours from our Kerala central warehouse. Custom compounding runs and specialized packaging orders typically require 10 to 18 business days from final sample sign-off.'
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'How do regional distribution and stockist partnerships work?',
    answer:
      'We partner with regional wholesalers, distributors, and retail stockists across South India. Partners receive protected trade territories, structured tier discounts, and reliable scheduled replenishment.'
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'What international shipping and export terms do you support?',
    answer:
      'Our export operations service the GCC, East Africa, and Southeast Asia via Cochin and Tuticorin seaports. We handle both full container loads (FCL) and consolidated shipments under FOB, CIF, or CFR terms with complete MSDS and clearance documentation.'
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'Can prospective partners visit the Kozhikode facility?',
    answer:
      'Yes. We welcome prospective distributors, institutional buyers, and commercial clients to our production facility along Kalleri Road, Kozhikode. Advance notice allows our team to prepare product specifications and relevant samples for your visit.'
  }
];
