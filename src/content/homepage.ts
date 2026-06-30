import type {
  HelpSegment,
  ProblemPrompt,
  ProcessStep,
  WhyChooseContent,
} from "./types";

// Homepage section content kept out of the page component so copy is easy to edit.

export const hero = {
  headline: "File ITR in minutes with CA-led Accuracy",
  subheadline:
    "Income tax filing, GST returns, company filings, registrations, and financial statements, handled with CA-led review.",
  // Retained for any other references to the original hero CTAs.
  primaryCta: { label: "Get Compliance Help", href: "/contact" },
  secondaryCta: { label: "View Services", href: "/services" },
  trustPills: ["8+ yrs CA experience", "4.8 client trust"],
  reassurance: "Maximum Tax Clarity, Guaranteed",
  support: "Received a notice? We guide the next step before you panic or pay twice.",
  actionCards: [
    {
      icon: "fileText",
      title: "File your taxes",
      subtitle: "In 3 simple steps",
      ctaLabel: "Start Filing Now",
      href: "/services/income-tax-filing",
      tone: "brand",
      // Shown as a hover/focus ribbon at the top edge of the card.
      activeLabel: "Guided filing with CA review",
    },
    {
      icon: "users",
      title: "Expert files for you",
      subtitle: "ITR, GST and ROC support",
      ctaLabel: "Hire an Expert",
      href: "/contact",
      tone: "brand",
      activeLabel: "Handled by a CA-led team",
    },
  ],
  proofStats: [
    {
      icon: "shieldCheck",
      label: "₹ 5Cr+",
      detail: "Tax and compliance work guided",
    },
    {
      icon: "listChecks",
      label: "8+ yrs",
      detail: "CA experience behind the service",
    },
  ],
} as const;

export const helpSegments: HelpSegment[] = [
  {
    icon: "rocket",
    title: "New business owners",
    description: "Starting out and unsure which registrations and filings apply to you.",
  },
  {
    icon: "briefcase",
    title: "IT consultants and freelancers",
    description: "Service providers who need clean filing without the guesswork.",
  },
  {
    icon: "store",
    title: "GST-registered businesses",
    description: "Traders and agencies who need GST returns filed correctly and on time.",
  },
  {
    icon: "building",
    title: "Private limited companies",
    description: "Companies meeting annual compliance or catching up on pending filings.",
  },
  {
    icon: "clock",
    title: "People with pending filings",
    description: "Returns that are overdue or were filed incorrectly and need sorting out.",
  },
  {
    icon: "rupee",
    title: "Owners needing a balance sheet",
    description: "Businesses that need financial statements for a bank or loan application.",
  },
];

export const howItWorks: ProcessStep[] = [
  { title: "Tell us what you need", description: "Share the service you are after and a little context." },
  { title: "Get a document checklist", description: "We send a clear list of what is required, nothing sensitive on the website." },
  { title: "Review scope and timeline", description: "You see the scope and timing before any work begins." },
  { title: "Work begins", description: "Filing or preparation is handled with CA-led guidance." },
  { title: "Confirmation and support", description: "You receive confirmation and practical follow-up support." },
];

export const trustSection = {
  title: "CA-led support, without the guesswork",
  intro:
    "Large platforms sell speed and automation. We focus on clarity: you understand what is required, you see the scope before you commit, and your work is guided by qualified tax professionals.",
  points: [
    "CA-led professional guidance on income tax, GST, company filing, and registrations.",
    "No PAN, Aadhaar, passwords, or uploads requested on the website.",
    "Clear scope agreed before any work starts.",
    "Practical follow-up over WhatsApp with a real person.",
  ],
} as const;

export const problemPrompts: ProblemPrompt[] = [
  {
    icon: "receipt",
    question: "GST return pending?",
    description: "Bring overdue GST filings up to date in a clear sequence.",
  },
  {
    icon: "building",
    question: "Company filing delayed?",
    description: "Sort out pending ROC and annual company filings.",
  },
  {
    icon: "rupee",
    question: "Need a balance sheet for a loan?",
    description: "Get financial statements prepared for your bank application.",
  },
  {
    icon: "helpCircle",
    question: "Unsure which return applies?",
    description: "Get clear guidance on the right filing for your situation.",
  },
  {
    icon: "rocket",
    question: "Starting a company or GST registration?",
    description: "Begin with the correct checklist and professional handling.",
  },
];


// "Why people choose EasyTaxPlanners" carousel section.
// Original EasyTaxPlanners content and assets. Inspired only by the general
// structure/feel of large tax platforms, never their copy, code, or imagery.
export const whyChoose: WhyChooseContent = {
  eyebrow: "Why EasyTaxPlanners",
  title: "Why people choose EasyTaxPlanners",
  subtitle:
    "CA-led review, clear next steps, and real human support, from ITR filing to GST, ROC, and registrations.",
  cards: [
    {
      tone: "blue",
      icon: "shieldCheck",
      tag: "CA-led review",
      title: "CA review before you file",
      body: "Your return is checked for missing details, mismatches, and the right filing path before submission.",
      image: "/images/generated/why-choose-accuracy.png",
      imageAlt:
        "Illustration of a chartered accountant reviewing an income tax return before filing",
      points: [
        "Right ITR form for your income",
        "AIS / Form 26AS mismatch checks",
        "Reviewed before final submission",
      ],
    },
    {
      tone: "teal",
      icon: "listChecks",
      tag: "Clear next steps",
      title: "Tax clarity, not panic",
      body: "We explain what changed, what documents are needed, and what the next step should be.",
      image: "/images/generated/why-choose-refund.png",
      imageAlt:
        "Illustration of clear, step-by-step tax guidance with a document checklist",
      points: [
        "Plain-language guidance",
        "Clear document checklist upfront",
        "Notice support before you pay twice",
      ],
    },
    {
      tone: "indigo",
      icon: "messageCircle",
      tag: "WhatsApp-first help",
      title: "Human support when it matters",
      body: "Get WhatsApp-first guidance for notices, GST, ROC filings, registrations, and business compliance.",
      image: "/images/generated/why-choose-support.png",
      imageAlt:
        "Illustration of WhatsApp-first human support for tax and compliance questions",
      points: [
        "A real person on WhatsApp",
        "GST, ROC & registration help",
        "Practical follow-up after filing",
      ],
    },
  ],
  cta: {
    title: "Get CA-led help before filing",
    subtitle: "Share your situation and we'll guide the right next step.",
    ctaLabel: "Get Compliance Help",
    href: "/contact",
  },
};
