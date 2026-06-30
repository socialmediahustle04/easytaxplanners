// Central site configuration. Brand, contact, navigation and SEO defaults
// live here so they are defined once and reused everywhere.

export const siteConfig = {
  name: "EasyTaxPlanners",
  tagline: "Start and manage your tax compliance with confidence.",
  description:
    "CA-led income tax filing, GST returns, company filings, registrations, and financial statements for individuals, startups, and small businesses in India.",
  // Used for canonical URLs, sitemap and Open Graph. Update before launch.
  url: "https://www.easytaxplanners.in",

  // ---------------------------------------------------------------------------
  // PLACEHOLDER CONTACT DETAILS — REPLACE BEFORE LAUNCH
  // The WhatsApp number below is a non-working placeholder. Swap in the real
  // business WhatsApp number (digits only, with country code) in `whatsappNumber`
  // and a human-friendly version in `whatsappDisplay`.
  // ---------------------------------------------------------------------------
  whatsappNumber: "910000000000", // PLACEHOLDER: e.g. 919876543210
  whatsappDisplay: "+91 00000 00000", // PLACEHOLDER
  email: "hello@easytaxplanners.in", // PLACEHOLDER
  contactNote:
    "Replace the placeholder WhatsApp number and email in src/content/site-config.ts before going live.",

  nav: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Income Tax Filing", href: "/services/income-tax-filing" },
        { label: "GST Return Filing", href: "/services/gst-return-filing" },
        { label: "Company Return Filing", href: "/services/company-return-filing" },
        { label: "Financial Statements", href: "/services/financial-statements" },
      ],
    },
    {
      label: "Registration",
      href: "/registration",
      children: [
        { label: "GST Registration", href: "/registration/gst-registration" },
        { label: "Company Incorporation", href: "/registration/company-incorporation" },
      ],
    },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  primaryCtaLabel: "Get Compliance Help",
} as const;

export type NavItem = (typeof siteConfig.nav)[number];

/**
 * Build a WhatsApp click-to-chat URL with an optional prefilled message.
 * Falls back gracefully if the number is the placeholder.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
