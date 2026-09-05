import { ProductItem, BusinessStage, CareerStage, TestimonialItem, FacilityAsset } from '../types';

export const COMPANY_DETAILS = {
  name: 'ENZONE GROUP',
  tagline: 'Manufacturing. Distribution. Growth.',
  location: 'Kozhikode, Kerala, India',
  address: {
    line1: 'Kalleri – Konaramb Road',
    landmark: 'Near ICC Masjid',
    city: 'Kozhikode',
    state: 'Kerala',
    country: 'India',
    pincode: '673001'
  },
  email: 'enzonegroup2@gmail.com',
  phone: '+91 98470 00000', // standard business inquiries
  mapsUrl: 'https://goo.gl/maps/XB9yDmN6Q64khmXi7?g_st=awb',
  operationalHours: 'Mon – Sat: 08:30 – 18:30 IST'
};

export const HIGHLIGHT_METRICS = [
  { label: 'Core Divisions', value: '04', subtext: 'Manufacturing to Export' },
  { label: 'Active Lines', value: '4+', subtext: 'Chemicals, Herbals & More' },
  { label: 'Operational Hub', value: 'Kozhikode', subtext: 'Kerala Industrial Belt' },
  { label: 'Network Reach', value: 'Pan-Kerala & GCC', subtext: 'Expanding Export Channels' }
];

export const BUSINESS_STAGES: BusinessStage[] = [
  {
    step: '01',
    title: 'Manufacturing',
    subtitle: 'Self-governed production & formulation control',
    description: 'We develop and manufacture our own portfolio of products in-house. Taking ownership of formulation, batch hygiene, and packaging gives us complete oversight of product consistency, regulatory safety, and cost competitiveness.',
    metrics: [
      { label: 'Batch Precision', value: '100% QA' },
      { label: 'Facility', value: 'Kozhikode Plant' }
    ],
    keyStrengths: [
      'Raw material sourcing with verified Certificates of Analysis (COA)',
      'Clean compounding and stainless steel processing equipment',
      'Flexible batch volume configurations for domestic & export demands',
      'In-house packaging, sealing, and label serialization'
    ]
  },
  {
    step: '02',
    title: 'Direct Selling',
    subtitle: 'Community-rooted marketing & dealer enablement',
    description: 'Our direct-selling model bypasses layers of middlemen, putting high-utility products directly into consumer hands while offering viable micro-enterprise opportunities for entrepreneurial individuals across Kerala.',
    metrics: [
      { label: 'Model', value: 'Community Direct' },
      { label: 'Network', value: 'Field Agents & Outlets' }
    ],
    keyStrengths: [
      'Transparent merchant and agent margin structures',
      'Hands-on product training and client communication kits',
      'Rapid feedback loop from grassroots buyers straight to the plant',
      'Loyalty and recurring replenishment incentives'
    ]
  },
  {
    step: '03',
    title: 'Distribution',
    subtitle: 'Reliable route-to-market logistics',
    description: 'We run dedicated supply pipelines linking manufacturing batches directly to supermarkets, local provision stores, pharmacies, and district stockists with reliable turnarounds.',
    metrics: [
      { label: 'Districts', value: 'Statewide Coverage' },
      { label: 'Delivery SLA', value: '24–48 Hours' }
    ],
    keyStrengths: [
      'Centralized dispatch depot in Kozhikode district',
      'Buffer inventory management preventing retail stockouts',
      'Direct order dispatch tracking and digital billing',
      'Supportive credit terms for established regional stockists'
    ]
  },
  {
    step: '04',
    title: 'Export',
    subtitle: 'Taking Kerala manufacturing to international shores',
    description: 'Our strategic roadmap extends beyond domestic frontiers. We engineer formulations to meet international packaging and compliance criteria, opening direct commercial corridors with the Middle East and neighboring overseas markets.',
    metrics: [
      { label: 'Focus Corridors', value: 'GCC & South Asia' },
      { label: 'Compliance', value: 'Export Standard' }
    ],
    keyStrengths: [
      'Export-grade barrier packaging and tamper-evident seals',
      'Harmonized System (HS) code compliance and documentation',
      'Private labeling capabilities for overseas trading partners',
      'Container-load volume logistics and palletized transit'
    ]
  }
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Formulations', count: 8 },
  { id: 'chemicals', label: 'Chemicals', count: 2, iconName: 'FlaskConical' },
  { id: 'herbals', label: 'Herbals', count: 2, iconName: 'Leaf' },
  { id: 'household', label: 'Household', count: 2, iconName: 'Home' },
  { id: 'cosmetics', label: 'Cosmetics', count: 2, iconName: 'Sparkles' }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'chem-01',
    name: 'Industrial & Surface Disinfectant Compound',
    category: 'chemicals',
    categoryLabel: 'Chemicals · CAT.01',
    tagline: 'High-efficacy sanitizing & institutional surface hygiene solution',
    description: 'Engineered for commercial establishments, food processing units, and clinics. Formulated with balanced active biocidal agents that eliminate pathogens without corrosive residue on stainless steel or stone.',
    keyFeatures: [
      'Broad-spectrum antimicrobial activity',
      'Non-staining, neutral pH dilution profile',
      'Cost-effective concentrated dilution ratio (1:50)',
      'Free from harsh volatile organic solvents'
    ],
    packagingOptions: ['5 Litre Jerry Can', '20 Litre Drum', '200 Litre Commercial Barrel'],
    intendedMarket: 'Hospitals, Hotels, Manufacturing Plants, Institutions',
    batchCapacity: '5,000 Litres / week',
    specCode: 'ENZ-CHM-804'
  },
  {
    id: 'chem-02',
    name: 'Heavy-Duty Degreaser & Floor Cleanser',
    category: 'chemicals',
    categoryLabel: 'Chemicals · CAT.01',
    tagline: 'Alkaline emulsifying surfactant for workshops and processing floors',
    description: 'Concentrated industrial floor cleaner designed to penetrate tough oil deposits, grease slicks, and ingrained tire marks on warehouse epoxy and tile surfaces.',
    keyFeatures: [
      'Rapid saponification of oily compounds',
      'Low foam formulation suitable for floor scrubbers',
      'Safe on epoxy, concrete, and ceramic tiles',
      'Water-miscible and quick-rinsing'
    ],
    packagingOptions: ['5 Litre Can', '25 Litre Can', 'Bulk IBC Tote'],
    intendedMarket: 'Warehouses, Workshops, Food Factories, Commercial Kitchens',
    batchCapacity: '4,000 Litres / week',
    specCode: 'ENZ-CHM-912'
  },
  {
    id: 'herb-01',
    name: 'Traditional Herbal Scalp & Hair Tonic',
    category: 'herbals',
    categoryLabel: 'Herbals · CAT.02',
    tagline: 'Formulated with cold-infused botanical extracts and virgin coconut base',
    description: 'A signature preparation combining classic Malabar botanical heritage with modern extraction methods. Infused with Bhringraj, Amla, Neeli, and Tulsi to soothe scalp heat, nourish follicles, and reduce hair breakage.',
    keyFeatures: [
      'Traditional slow-maceration herbal infusion',
      '100% pure plant extracts; zero artificial colorants',
      'Naturally scented with pure essential botanical notes',
      'Suitable for daily restorative hair routines'
    ],
    packagingOptions: ['100ml Glass Bottle', '200ml Flip-Cap Dispenser', '500ml Salon Refill'],
    intendedMarket: 'Retail Stores, Ayurvedic Counters, Wellness Centers',
    batchCapacity: '10,000 Units / month',
    specCode: 'ENZ-HRB-108'
  },
  {
    id: 'herb-02',
    name: 'Herbal Muscle & Joint Soothing Rub',
    category: 'herbals',
    categoryLabel: 'Herbals · CAT.02',
    tagline: 'Deep penetrating therapeutic balm with eucalyptus and camphor',
    description: 'Developed to relieve muscular strain, stiff joints, and fatigue after physical exertion. Uses essential oils and active herbs that generate mild warmth followed by cooling comfort.',
    keyFeatures: [
      'High-potency essential camphor and wintergreen blend',
      'Non-greasy rapid absorption wax base',
      'Immediate warming sensation for overworked muscles',
      'Convenient travel-ready tin container'
    ],
    packagingOptions: ['25g Pocket Tin', '50g Glass Jar', '100g Clinical Pack'],
    intendedMarket: 'Pharmacies, Supermarkets, Direct-Selling Networks',
    batchCapacity: '15,000 Units / month',
    specCode: 'ENZ-HRB-205'
  },
  {
    id: 'house-01',
    name: 'Multi-Surface Citrus Home Cleaner',
    category: 'household',
    categoryLabel: 'Household · CAT.03',
    tagline: 'Natural citrus-powered clean for tiles, countertops, and glass',
    description: 'A biodegradable household liquid that lifts domestic grime, food splatters, and water spots. Leaves living spaces with a natural, crisp lime freshness without toxic fumes.',
    keyFeatures: [
      'Plant-derived surfactant system',
      'Streak-free formula on glass, laminates, and granite',
      'Safe around household pets and food prep counters',
      'Concentrated formula delivering up to 40 washes per bottle'
    ],
    packagingOptions: ['500ml Spray Trigger', '1 Litre Refill Pouch', '5 Litre Home Pack'],
    intendedMarket: 'Supermarkets, Kirana Outlets, Department Stores',
    batchCapacity: '12,000 Units / month',
    specCode: 'ENZ-HSD-301'
  },
  {
    id: 'house-02',
    name: 'Fabric Care Concentrated Detergent Gel',
    category: 'household',
    categoryLabel: 'Household · CAT.03',
    tagline: 'Enzyme-enriched stain lifter for machine and bucket washing',
    description: 'Formulated for Indian water conditions and tropical sweat stains. Protects garment fibers and colors while dissolving tough oil stains, collar dirt, and food marks.',
    keyFeatures: [
      'Active protease and amylase stain enzymes',
      'Optic brighteners maintaining cotton and synthetic vitality',
      'Low residue rinse preventing skin irritation',
      'Long-lasting fresh linen fragrance'
    ],
    packagingOptions: ['1 Litre Easy-Pour Spout', '2 Litre Family Jug', '5 Litre Laundry Pack'],
    intendedMarket: 'Retail Chains, Residential Direct Sales, Laundromats',
    batchCapacity: '8,000 Litres / week',
    specCode: 'ENZ-HSD-402'
  },
  {
    id: 'cosm-01',
    name: 'Revitalizing Aloe & Niacinamide Face Cleanser',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics · CAT.04',
    tagline: 'Gentle clarifying wash for humid climates and urban exposure',
    description: 'Specially engineered for tropical skin needs. Removes excess sebum and pollution dust while preserving the moisture barrier with pure aloe vera gel and Vitamin B3 (Niacinamide).',
    keyFeatures: [
      'Sulfate-free (SLS/SLES-free) gentle surfactant base',
      'Balances oily T-zone without feeling dry or tight',
      'Dermatologically tested pH 5.5 formulation',
      'Subtle natural botanical fragrance'
    ],
    packagingOptions: ['100ml Pump Bottle', '150ml Tube', '250ml Eco-Refill'],
    intendedMarket: 'Beauty Outlets, Salons, Direct Brand Ambassadors',
    batchCapacity: '12,000 Units / month',
    specCode: 'ENZ-CSM-501'
  },
  {
    id: 'cosm-02',
    name: 'Nourishing Botanical Body Lotion',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics · CAT.04',
    tagline: 'Lightweight shea butter and almond oil emulsion with 24h hydration',
    description: 'Fast-absorbing daily body moisturizer that penetrates instantly without stickiness, making it ideal for coastal weather. Combines rich cold-pressed almond oil and vitamin E.',
    keyFeatures: [
      'Ultra-light non-comedogenic texture',
      'Shields against dry air conditioning and sun fatigue',
      'Rich in antioxidants and natural fatty acids',
      'Paraben-free and cruelty-free formulation'
    ],
    packagingOptions: ['200ml Pump Dispenser', '400ml Family Bottle'],
    intendedMarket: 'Pharmacies, Supermarkets, Cosmetics Distributors',
    batchCapacity: '9,000 Units / month',
    specCode: 'ENZ-CSM-602'
  }
];

export const FACILITY_ASSETS: FacilityAsset[] = [
  {
    id: 'office',
    title: 'Executive & Operations Headquarters',
    label: 'ENZONE GROUP · Workplace & Operations Hub',
    src: 'https://raw.githubusercontent.com/MozhdehLeather/orizon/main/WhatsApp%20Image%202026-09-05%20at%2010.37.17%20AM.jpeg',
    aspect: '4/3',
    description: 'Located in Kozhikode, Kerala, our headquarters hosts executive planning, inventory logistics coordination, quality validation, and direct partner onboarding.',
    specs: [
      { label: 'Location', value: 'Kozhikode, Kerala' },
      { label: 'Function', value: 'Operations & Logistics HQ' },
      { label: 'Coordination', value: 'Sales & Dealer Management' }
    ]
  },
  {
    id: 'building',
    title: 'Industrial Complex & Logistics Depot',
    label: 'ENZONE GROUP · Exterior Facility View',
    src: 'https://raw.githubusercontent.com/MozhdehLeather/orizon/main/WhatsApp%20Image%202026-09-05%20at%2010.37.17%20AM%20(1).jpeg',
    aspect: '738/1600',
    description: 'Our purpose-built commercial building features multi-floor storage, secure warehouse loading docks, and training halls designed for day-to-day high throughput.',
    specs: [
      { label: 'Structural Type', value: 'Multi-Level Commercial Complex' },
      { label: 'Access', value: 'Direct Highway & Freight Corridor' },
      { label: 'Zones', value: 'Compounding, Storage, Dispatch' }
    ]
  },
  {
    id: 'machinery',
    title: 'Compounding & Production Machinery',
    label: 'ENZONE GROUP · Precision Manufacturing Equipment',
    src: 'https://raw.githubusercontent.com/MozhdehLeather/orizon/main/WhatsApp%20Image%202026-09-05%20at%2010.37.14%20AM.jpeg',
    aspect: '16/10',
    description: 'Precision compounding units and stainless steel processing equipment allow uniform blending, sanitary packaging, and adherence to strict hygiene guidelines.',
    specs: [
      { label: 'Material Contact', value: 'SS-304 / SS-316 Food & Pharma Grade' },
      { label: 'Process Type', value: 'Liquid Blending & Semi-Solid Homogenization' },
      { label: 'QA Protocol', value: 'Batch-by-Batch Gravimetric Testing' }
    ]
  }
];

export const CAREER_PATH_STAGES: CareerStage[] = [
  {
    step: '01',
    title: 'Practical Internship & Induction',
    duration: '3 – 6 Months',
    description: 'Immersive hands-on experience on the factory floor, packaging units, and field distribution routes. Interns learn how physical manufacturing integrates with retail realities.',
    skillsGained: ['Production Hygiene & Safety', 'Basic Inventory Tracking', 'Customer Interaction Fundamentals'],
    deliverables: 'Completion of 3 rotating operational modules with mentor sign-off.'
  },
  {
    step: '02',
    title: 'Communication & Direct Outreach',
    duration: '6 – 12 Months',
    description: 'Developing polished client pitch skills, dealer negotiation, and community relationship building under experienced team leaders.',
    skillsGained: ['B2B Sales Presentations', 'Catalog Knowledge', 'Conflict Resolution & Account Care'],
    deliverables: 'Independent management of regional retail stockist accounts.'
  },
  {
    step: '03',
    title: 'Operational Responsibility',
    duration: '1 – 2 Years',
    description: 'Assuming direct responsibility for a product line, regional depot dispatch, or a dedicated squad of field representatives.',
    skillsGained: ['Supply Chain Logistics', 'Quality Auditing', 'Team Leadership & Target Setting'],
    deliverables: 'Consistent meeting of regional fulfillment and dealer retention goals.'
  },
  {
    step: '04',
    title: 'Branch & Career Management',
    duration: 'Senior Tier',
    description: 'Leading business growth initiatives, territory expansion into new Kerala districts or export corridors, and mentoring new cohorts.',
    skillsGained: ['P&L Management', 'Export Documentation', 'Strategic Business Development'],
    deliverables: 'Expansion into emerging markets and leadership of regional hubs.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'ENZONE GROUP delivers on time and the product quality has been consistent since day one. That reliability in both batch quality and credit transparency is what keeps us reordering every single month.',
    author: 'Ashraf K.',
    role: 'Managing Partner',
    location: 'Malappuram Distribution Hub',
    relationship: 'Distribution Partner',
    verifiedSince: 'Partner since 2022'
  },
  {
    id: 'test-2',
    quote: 'I joined as an intern with no prior industrial background. Through their structured progression, I learned compounding and logistics. Today I manage a full regional product line — ENZONE truly invests in people.',
    author: 'Fathima N.',
    role: 'Operations & Quality Lead',
    location: 'Kozhikode Facility',
    relationship: 'Team Member',
    verifiedSince: 'Team member since 2023'
  },
  {
    id: 'test-3',
    quote: 'Their herbal and household range sells itself once local families try it. Margin support from the ENZONE management team has made expanding our retail department store straightforward.',
    author: 'Rajeev M.',
    role: 'Proprietor',
    location: 'Kozhikode Town',
    relationship: 'Retail Stockist',
    verifiedSince: 'Stockist since 2021'
  },
  {
    id: 'test-4',
    quote: 'For bulk disinfectant and industrial cleansers, we needed a Kerala-based manufacturer that could guarantee batch consistency and prompt emergency replenishment. ENZONE delivered without fail.',
    author: 'Naveen Kurian',
    role: 'Facilities Procurement Manager',
    location: 'Ernakulam Commercial Complex',
    relationship: 'Institutional Buyer',
    verifiedSince: 'Client since 2023'
  }
];

export const FAQS = [
  {
    q: 'How can I become an authorized regional distributor for ENZONE GROUP?',
    a: 'We welcome partnership inquiries from established distributors with coverage across Kerala and neighboring states. Submit an inquiry through our form or WhatsApp to connect with our channel development team. We provide attractive margins, marketing collaterals, and territory exclusivity support.'
  },
  {
    q: 'Do you offer contract manufacturing or private labeling services?',
    a: 'Yes. With our versatile compounding facility in Kozhikode, we formulate and package custom formulations for private brands in household care, cosmetics, and specialty disinfectants under strict confidentiality agreements.'
  },
  {
    q: 'What are the criteria for your internship and career development program?',
    a: 'We look for motivated individuals eager to gain practical skills in manufacturing, marketing, and operations. Academic background is less critical than discipline, eagerness to learn, and strong community communication skills.'
  },
  {
    q: 'Can ENZONE GROUP supply export-grade consignments overseas?',
    a: 'Yes, our products are engineered to comply with export standards. We can arrange container-load consignments, complete export documentation, and custom language labeling for GCC and Asian destinations.'
  }
];
