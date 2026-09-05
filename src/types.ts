export type ProductCategory = 'chemicals' | 'herbals' | 'household' | 'cosmetics';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  packagingOptions: string[];
  intendedMarket: string;
  batchCapacity: string;
  specCode: string;
}

export interface BusinessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  keyStrengths: string[];
}

export interface CareerStage {
  step: string;
  title: string;
  duration: string;
  description: string;
  skillsGained: string[];
  deliverables: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  relationship: 'Distribution Partner' | 'Retail Stockist' | 'Team Member' | 'Institutional Buyer';
  verifiedSince: string;
}

export interface InquiryFormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  inquiryType: 'distribution' | 'manufacturing' | 'export' | 'career' | 'general';
  productInterest: string;
  message: string;
}

export interface FacilityAsset {
  id: string;
  title: string;
  label: string;
  src: string;
  aspect: string;
  description: string;
  specs: { label: string; value: string }[];
}

export interface FaqItem {
  id: string;
  number: string;
  category: string;
  question: string;
  answer: string;
  highlight?: string;
}

