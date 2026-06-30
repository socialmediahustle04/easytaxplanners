// Shared content types for EasyTaxPlanners.
// Icons are stored as string keys and resolved through src/lib/icon-map.ts
// so that content files stay free of JSX/component imports.

export type IconKey =
  | "fileText"
  | "receipt"
  | "building"
  | "spreadsheet"
  | "clipboardCheck"
  | "rocket"
  | "shieldCheck"
  | "listChecks"
  | "scanEye"
  | "messageCircle"
  | "fileCheck"
  | "briefcase"
  | "users"
  | "store"
  | "landmark"
  | "alertCircle"
  | "helpCircle"
  | "rupee"
  | "clock"
  | "phone"
  | "mail";

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type ServiceType = "service" | "registration";

export interface ServiceLike {
  slug: string;
  type: ServiceType;
  icon: IconKey;
  title: string;
  /** Short one-line summary used on cards. */
  summary: string;
  /** Exactly three short bullets for the service card. */
  cardBullets: [string, string, string];
  whoItIsFor: string[];
  whatsIncluded: string[];
  /** Generic documents only. Never request sensitive data on the website. */
  documentsNeeded: string[];
  process: ProcessStep[];
  faqs?: FAQ[];
  metaTitle: string;
  metaDescription: string;
  ctaLabel: string;
}

export interface TrustItem {
  id: string;
  icon: IconKey;
  label: string;
  description: string;
}

export interface HelpSegment {
  icon: IconKey;
  title: string;
  description: string;
}

export interface ProblemPrompt {
  icon: IconKey;
  question: string;
  description: string;
}

// Tones reuse the existing soft service-card palette so the section stays
// cohesive with the rest of the homepage.
export type WhyChooseTone = "blue" | "teal" | "indigo";

export interface WhyChooseCard {
  tone: WhyChooseTone;
  icon: IconKey;
  /** Short pill label above the title. */
  tag: string;
  title: string;
  body: string;
  /** Path under /public to an EasyTaxPlanners-original illustration. */
  image: string;
  /** Descriptive alt text for accessibility. */
  imageAlt: string;
  points: string[];
}

export interface WhyChooseCta {
  title: string;
  subtitle: string;
  ctaLabel: string;
  href: string;
}

export interface WhyChooseContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: WhyChooseCard[];
  cta: WhyChooseCta;
}

export type ResourceCategory =
  | "Income Tax"
  | "GST"
  | "Company Compliance"
  | "Registrations"
  | "Business Finance";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export interface ResourceArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: ResourceCategory;
  publishedDate: string; // ISO date
  readingTime: string;
  /** Slug of a related service/registration to link back to. */
  relatedService?: string;
  metaTitle: string;
  metaDescription: string;
  body: ArticleBlock[];
}
