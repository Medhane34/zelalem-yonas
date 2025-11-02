// lib/services.ts
import {
  ScaleIcon,
  DocumentIcon,
  BuildingLibraryIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  HomeIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";

export interface ServiceHero {
  title: string;
  tagline: string;
  description: string;
  badges: string[];
  heroImage: string;
  contactUrl?: string;
}

export interface Stat {
  value: string; // e.g., "97%", "$2.3B"
  label: string; // e.g., "Settlement Rate"
  iconName: string; // Full Heroicons name, e.g., "TrophyIcon"
}

export interface Feature {
  title: string;
  description: string;
  iconName: string; // Heroicons name, e.g., "scale"
  stats?: string[]; // Optional for variety, e.g., ["98% Success"]
  isHighlighted?: boolean; // Optional for special styling/hover
}
export interface FAQ {
  question: string;
  answer: string;
}
2
export interface FormField {
  name: string; // e.g., "inquiryDetails"
  label: string; // e.g., "Describe your IRS issue"
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox";
  options?: string[]; // For select
  required: boolean;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
/*   icon: ComponentType<{ className?: string }>; 
*/  
 iconName: "scale" | "document" | "building" | "document-check" | "globe" | "home" | "banknotes" | "shield" | "chart"; // ← STRING
  features: Feature[]; // 0-9 for 3x3 grid
  stats: Stat[]; // 3-4 items
  statsImage?: string; // e.g., "/images/services/criminal-tax-stats.jpg"
  process: { step: string; description: string }[];
  /* team: { name: string; role: string; image: string }[];
  faqs: { question: string; answer: string }[]; */
  faqs: FAQ[]; // 4-6 per service
  formFields: FormField[]; // 4-6 dynamic fields
  cta: { text: string; href: string };
   hero: ServiceHero; // ← NEW
}


export const services: Service[] = [
  {
    slug: "criminal-tax-law",
    title: "Criminal Tax Law",
    hero: {
      title: "Defending Your Rights in Criminal Tax Cases",
      tagline: "20+ Years of IRS Defense Experience",
      description: "From IRS investigations to federal court, we protect your freedom and financial future with aggressive, strategic defense.",
      badges: ["IRS Criminal Defense", "Tax Fraud", "Court Representation", "Plea Negotiation"],
      heroImage: "/images/services/criminal-tax-hero.jpg",
      contactUrl: "/contact?service=criminal-tax",
    },
    description: "Expert defense against IRS criminal investigations and tax fraud charges.",
    longDescription:
      "Our criminal tax law specialists have over 20 years of experience defending clients in high-stakes IRS investigations, tax evasion cases, and federal court proceedings. We protect your rights and build strategic defenses.",
    iconName: "scale", // ← STRING
/*     features: [
     { "IRS Criminal Investigation Defense",
      "Tax Evasion & Fraud Cases",
      "Federal Court Representation",
      "Plea Negotiations",
    ], */
    features: [
      { title: "IRS Criminal Investigation Defense", description: "Immediate response to IRS notices and full representation during audits.", iconName: "ShieldCheckIcon", stats: ["500+ Cases Handled"] },
      { title: "Tax Evasion & Fraud Cases", description: "Aggressive strategies to challenge evasion allegations and reduce penalties.", iconName: "ScaleIcon", isHighlighted: true },
      { title: "Federal Court Representation", description: "Experienced trial attorneys for court appearances and appeals.", iconName: "GavelIcon" },
      { title: "Plea Negotiations", description: "Skilled bargaining to minimize charges and secure favorable outcomes.", iconName: "HandshakeIcon" },
    ],
    process: [
      { step: "Initial Consultation", description: "Review your case and assess risks." },
      { step: "Evidence Analysis", description: "Examine IRS findings and documentation." },
      { step: "Strategy Development", description: "Build a defense tailored to your situation." },
      { step: "Representation", description: "Defend you in court or negotiations." },
    ],
    stats: [
      { value: "97%", label: "Settlement Rate", iconName: "TrophyIcon" },
      { value: "$1.5M", label: "Avg. Penalty Reduced", iconName: "CurrencyDollarIcon" },
      { value: "42", label: "Cases Defended", iconName: "BriefcaseIcon" },
      { value: "< 6 mo", label: "Avg. Resolution Time", iconName: "ClockIcon" },
    ],
    statsImage: "/images/services/criminal-tax-stats.jpg", // Custom per service
   /*  team: [
      { name: "Abebe Kebede", role: "Senior Tax Attorney", image: "/team/abebe.jpg" },
      { name: "Selamawit Tadesse", role: "Criminal Tax Specialist", image: "/team/selam.jpg" },
    ], */
    /* faqs: [
      { question: "What happens if I'm under IRS criminal investigation?", answer: "You have rights. We immediately intervene to protect evidence and communications." },
      { question: "Can criminal tax charges be reduced?", answer: "Yes. With strong representation, many cases are reduced or dismissed." },
    ], */
    faqs: [
      { question: "What happens if I'm under IRS criminal investigation?", answer: "You have rights. We immediately intervene to protect evidence and communications. Our team will handle all IRS interactions while you focus on your business." },
      { question: "Can criminal tax charges be reduced or dismissed?", answer: "Yes, with strong representation, many cases are reduced to civil penalties or dismissed entirely. We've achieved this in 97% of our cases through strategic plea negotiations." },
      { question: "How long does a criminal tax case take?", answer: "Timelines vary, but most investigations resolve in 6-12 months. We accelerate the process with proactive evidence gathering and expert witnesses." },
      { question: "What are the potential penalties for tax evasion?", answer: "Penalties can include fines up to $250,000 and up to 5 years in prison. We work to minimize these through compliance programs and voluntary disclosure." },
    ],
    formFields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "inquiryDetails", label: "Describe your IRS issue", type: "textarea", required: true },
      { name: "preferredContact", label: "Preferred Contact", type: "select", options: ["Email", "Phone"], required: false },
      { name: "consent", label: "I consent to contact", type: "checkbox", required: true },
    ],
    cta: { text: "Schedule Defense Consultation", href: "/contact" },
  },
]
  /*
  {
    slug: "estate-planning-taxation",
    title: "Estate Planning & Taxation",
    hero: {
      title: "Defending Your Rights in Criminal Tax Cases",
      tagline: "20+ Years of IRS Defense Experience",
      description: "From IRS investigations to federal court, we protect your freedom and financial future with aggressive, strategic defense.",
      badges: ["IRS Criminal Defense", "Tax Fraud", "Court Representation", "Plea Negotiation"],
      heroImage: "/images/services/criminal-tax-hero.jpg",
      contactUrl: "/contact?service=criminal-tax",
    },
    description: "Minimize estate taxes and secure your legacy with strategic planning.",
    longDescription:
      "We help high-net-worth individuals and families preserve wealth across generations using trusts, gifting strategies, and tax-efficient estate plans.",
    iconName: "scale", // ← STRING
    features: ["Trust Formation", "Gift Tax Planning", "Succession Planning", "Charitable Giving"],
 
features: [
      { title: "IRS Criminal Investigation Defense", description: "Immediate response to IRS notices and full representation during audits.", iconName: "shield-check", stats: ["500+ Cases Handled"] },
      { title: "Tax Evasion & Fraud Cases", description: "Aggressive strategies to challenge evasion allegations and reduce penalties.", iconName: "scale", isHighlighted: true },
      { title: "Federal Court Representation", description: "Experienced trial attorneys for court appearances and appeals.", iconName: "gavel" },
      { title: "Plea Negotiations", description: "Skilled bargaining to minimize charges and secure favorable outcomes.", iconName: "handshake" },
    ],
  process: [
      { step: "Asset Review", description: "Map your estate and tax exposure." },
      { step: "Plan Design", description: "Create custom trust and will structures." },
      { step: "Implementation", description: "Execute legal documents and transfers." },
      { step: "Ongoing Review", description: "Update plan as laws and assets change." },
    ],
    team: [
      { name: "Dr. Yonas Mekonnen", role: "Estate Planning Partner", image: "/team/yonas.jpg" },
    ],
    faqs: [
      { question: "How much can I gift tax-free?", answer: "In 2025, the annual gift exclusion is $18,000 per recipient." },
    ],
    cta: { text: "Start Estate Planning", href: "/contact" },
  },
  {
    slug: "state-local-taxation",
    title: "State & Local Taxation",
    hero: {
      title: "Defending Your Rights in Criminal Tax Cases",
      tagline: "20+ Years of IRS Defense Experience",
      description: "From IRS investigations to federal court, we protect your freedom and financial future with aggressive, strategic defense.",
      badges: ["IRS Criminal Defense", "Tax Fraud", "Court Representation", "Plea Negotiation"],
      heroImage: "/images/services/criminal-tax-hero.jpg",
      contactUrl: "/contact?service=criminal-tax",
    },
    description: "Navigate complex state tax laws and compliance across jurisdictions.",
    longDescription:
      "We handle multi-state tax filings, audits, and disputes for businesses and individuals operating across Ethiopia and beyond.",
   iconName: "scale", // ← STRING
    features: ["Multi-State Compliance", "Nexus Analysis", "State Audit Defense", "Tax Credits"], 
   features: [
      { title: "IRS Criminal Investigation Defense", description: "Immediate response to IRS notices and full representation during audits.", iconName: "shield-check", stats: ["500+ Cases Handled"] },
      { title: "Tax Evasion & Fraud Cases", description: "Aggressive strategies to challenge evasion allegations and reduce penalties.", iconName: "scale", isHighlighted: true },
      { title: "Federal Court Representation", description: "Experienced trial attorneys for court appearances and appeals.", iconName: "gavel" },
      { title: "Plea Negotiations", description: "Skilled bargaining to minimize charges and secure favorable outcomes.", iconName: "handshake" },
    ],
    process: [
      { step: "Jurisdiction Mapping", description: "Identify all taxable states." },
      { step: "Filing Strategy", description: "Optimize returns and credits." },
      { step: "Audit Support", description: "Represent you in state tax audits." },
    ],
    team: [
      { name: "Tigist Alemu", role: "State Tax Director", image: "/team/tigist.jpg" },
    ],
    faqs: [],
    cta: { text: "Get State Tax Help", href: "/contact" },
  },
  // --- Add 6 more services below (same structure) ---
  {
    slug: "tax-planning-compliance",
    title: "Tax Planning & Compliance",
    hero: {
      title: "Defending Your Rights in Criminal Tax Cases",
      tagline: "20+ Years of IRS Defense Experience",
      description: "From IRS investigations to federal court, we protect your freedom and financial future with aggressive, strategic defense.",
      badges: ["IRS Criminal Defense", "Tax Fraud", "Court Representation", "Plea Negotiation"],
      heroImage: "/images/services/criminal-tax-hero.jpg",
      contactUrl: "/contact?service=criminal-tax",
    },
    description: "Stay compliant while minimizing tax liability through proactive planning.",
    longDescription: "We provide year-round tax strategy and filing support for individuals and corporations.",
   iconName: "scale", // ← STRING
/*     features: ["Quarterly Planning", "Deduction Optimization", "Compliance Filing", "Risk Assessment"],
 
  features: [
      { title: "IRS Criminal Investigation Defense", description: "Immediate response to IRS notices and full representation during audits.", iconName: "shield-check", stats: ["500+ Cases Handled"] },
      { title: "Tax Evasion & Fraud Cases", description: "Aggressive strategies to challenge evasion allegations and reduce penalties.", iconName: "scale", isHighlighted: true },
      { title: "Federal Court Representation", description: "Experienced trial attorneys for court appearances and appeals.", iconName: "gavel" },
      { title: "Plea Negotiations", description: "Skilled bargaining to minimize charges and secure favorable outcomes.", iconName: "handshake" },
    ],
process: [],
    team: [],
    faqs: [],
    cta: { text: "Book Planning Session", href: "/contact" },
  },
  {
    slug: "international-taxation",
    title: "International Taxation",
    hero: {
      title: "Defending Your Rights in Criminal Tax Cases",
      tagline: "20+ Years of IRS Defense Experience",
      description: "From IRS investigations to federal court, we protect your freedom and financial future with aggressive, strategic defense.",
      badges: ["IRS Criminal Defense", "Tax Fraud", "Court Representation", "Plea Negotiation"],
      heroImage: "/images/services/criminal-tax-hero.jpg",
      contactUrl: "/contact?service=criminal-tax",
    },
    description: "Manage cross-border tax obligations with expert guidance.",
    longDescription: "We help Ethiopian businesses and expats navigate treaties, foreign income, and reporting.",
    iconName: "scale", // ← STRING
/*     features: ["FBAR & FATCA", "Tax Treaties", "Foreign Income", "Transfer Pricing"],
  
  features: [
      { title: "IRS Criminal Investigation Defense", description: "Immediate response to IRS notices and full representation during audits.", iconName: "shield-check", stats: ["500+ Cases Handled"] },
      { title: "Tax Evasion & Fraud Cases", description: "Aggressive strategies to challenge evasion allegations and reduce penalties.", iconName: "scale", isHighlighted: true },
      { title: "Federal Court Representation", description: "Experienced trial attorneys for court appearances and appeals.", iconName: "gavel" },
      { title: "Plea Negotiations", description: "Skilled bargaining to minimize charges and secure favorable outcomes.", iconName: "handshake" },
    ],
process: [],
    team: [],
    faqs: [],
    cta: { text: "Consult on Global Tax", href: "/contact" },
  },
  {
    slug: "property-taxes",
    title: "Property Taxes",
    hero: {
      title: "Defending Your Rights in Criminal Tax Cases",
      tagline: "20+ Years of IRS Defense Experience",
      description: "From IRS investigations to federal court, we protect your freedom and financial future with aggressive, strategic defense.",
      badges: ["IRS Criminal Defense", "Tax Fraud", "Court Representation", "Plea Negotiation"],
      heroImage: "/images/services/criminal-tax-hero.jpg",
      contactUrl: "/contact?service=criminal-tax",
    },
    description: "Reduce property tax burden through appeals and exemptions.",
    longDescription: "We challenge assessments and secure relief for commercial and residential properties.",
    iconName: "scale", // ← STRING
/*     features: ["Assessment Appeals", "Exemption Filing", "Valuation Disputes", "Payment Plans"],
  
   features: [
      { title: "IRS Criminal Investigation Defense", description: "Immediate response to IRS notices and full representation during audits.", iconName: "shield-check", stats: ["500+ Cases Handled"] },
      { title: "Tax Evasion & Fraud Cases", description: "Aggressive strategies to challenge evasion allegations and reduce penalties.", iconName: "scale", isHighlighted: true },
      { title: "Federal Court Representation", description: "Experienced trial attorneys for court appearances and appeals.", iconName: "gavel" },
      { title: "Plea Negotiations", description: "Skilled bargaining to minimize charges and secure favorable outcomes.", iconName: "handshake" },
    ],
process: [],
    team: [],
    faqs: [],
    cta: { text: "Appeal Your Assessment", href: "/contact" },
  },
  {
    slug: "corporate-tax",
    title: "Corporate Tax",
    hero: {
      title: "Defending Your Rights in Criminal Tax Cases",
      tagline: "20+ Years of IRS Defense Experience",
      description: "From IRS investigations to federal court, we protect your freedom and financial future with aggressive, strategic defense.",
      badges: ["IRS Criminal Defense", "Tax Fraud", "Court Representation", "Plea Negotiation"],
      heroImage: "/images/services/criminal-tax-hero.jpg",
      contactUrl: "/contact?service=criminal-tax",
    },
    description: "Optimize corporate tax structure for growth and compliance.",
    longDescription: "We design tax-efficient corporate entities and handle mergers, acquisitions, and restructuring.",
  iconName: "scale", // ← STRING
/*     features: ["Entity Selection", "M&A Tax", "R&D Credits", "Consolidated Returns"],
 
    features: [
      { title: "IRS Criminal Investigation Defense", description: "Immediate response to IRS notices and full representation during audits.", iconName: "shield-check", stats: ["500+ Cases Handled"] },
      { title: "Tax Evasion & Fraud Cases", description: "Aggressive strategies to challenge evasion allegations and reduce penalties.", iconName: "scale", isHighlighted: true },
      { title: "Federal Court Representation", description: "Experienced trial attorneys for court appearances and appeals.", iconName: "gavel" },
      { title: "Plea Negotiations", description: "Skilled bargaining to minimize charges and secure favorable outcomes.", iconName: "handshake" },
    ],
process: [],
    team: [],
    faqs: [],
    cta: { text: "Optimize Corporate Tax", href: "/contact" },
  },
  {
    slug: "audit-defense",
    title: "Audit Defense",
    hero: {
      title: "Defending Your Rights in Criminal Tax Cases",
      tagline: "20+ Years of IRS Defense Experience",
      description: "From IRS investigations to federal court, we protect your freedom and financial future with aggressive, strategic defense.",
      badges: ["IRS Criminal Defense", "Tax Fraud", "Court Representation", "Plea Negotiation"],
      heroImage: "/images/services/criminal-tax-hero.jpg",
      contactUrl: "/contact?service=criminal-tax",
    },
    description: "Full representation during IRS and state tax audits.",
    longDescription: "We manage all communication, documentation, and appeals to protect your interests.",
    iconName: "scale", // ← STRING
/*     features: ["Audit Notice Response", "Document Preparation", "IRS Meetings", "Appeal Filing"],
 
features: [
      { title: "IRS Criminal Investigation Defense", description: "Immediate response to IRS notices and full representation during audits.", iconName: "shield-check", stats: ["500+ Cases Handled"] },
      { title: "Tax Evasion & Fraud Cases", description: "Aggressive strategies to challenge evasion allegations and reduce penalties.", iconName: "scale", isHighlighted: true },
      { title: "Federal Court Representation", description: "Experienced trial attorneys for court appearances and appeals.", iconName: "gavel" },
      { title: "Plea Negotiations", description: "Skilled bargaining to minimize charges and secure favorable outcomes.", iconName: "handshake" },
    ],
      process: [],
    team: [],
    faqs: [],
    cta: { text: "Defend Your Audit", href: "/contact" },
  },
  {
    slug: "tax-analytics",
    title: "Tax Analytics",
    hero: {
      title: "Defending Your Rights in Criminal Tax Cases",
      tagline: "20+ Years of IRS Defense Experience",
      description: "From IRS investigations to federal court, we protect your freedom and financial future with aggressive, strategic defense.",
      badges: ["IRS Criminal Defense", "Tax Fraud", "Court Representation", "Plea Negotiation"],
      heroImage: "/images/services/criminal-tax-hero.jpg",
      contactUrl: "/contact?service=criminal-tax",
    },
    description: "Data-driven tax insights and forecasting.",
    longDescription: "We use AI and analytics to predict liabilities, identify savings, and model scenarios.",
    iconName: "scale", // ← STRING
     features: ["Tax Forecasting", "Scenario Modeling", "Savings Reports", "Compliance Alerts"],
features: [
      { title: "IRS Criminal Investigation Defense", description: "Immediate response to IRS notices and full representation during audits.", iconName: "shield-check", stats: ["500+ Cases Handled"] },
      { title: "Tax Evasion & Fraud Cases", description: "Aggressive strategies to challenge evasion allegations and reduce penalties.", iconName: "scale", isHighlighted: true },
      { title: "Federal Court Representation", description: "Experienced trial attorneys for court appearances and appeals.", iconName: "gavel" },
      { title: "Plea Negotiations", description: "Skilled bargaining to minimize charges and secure favorable outcomes.", iconName: "handshake" },
    ],
  process: [],
    team: [],
    faqs: [],
    cta: { text: "Request Tax Report", href: "/contact" },
  },
];  */
