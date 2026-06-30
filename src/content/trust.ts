import type { TrustItem } from "./types";

// Service-proof trust signals (not scale-proof). These reflect how the work
// is actually done rather than vanity metrics.

export const trustItems: TrustItem[] = [
  {
    id: "ca-led-guidance",
    icon: "shieldCheck",
    label: "CA-led guidance",
    description: "Your filing and compliance work is guided by qualified tax professionals.",
  },
  {
    id: "document-checklist",
    icon: "listChecks",
    label: "Clear document checklist",
    description: "You know exactly what is required before any work begins.",
  },
  {
    id: "review-before-filing",
    icon: "scanEye",
    label: "Review before filing",
    description: "Where applicable, a draft is shared for your confirmation before final submission.",
  },
  {
    id: "whatsapp-support",
    icon: "messageCircle",
    label: "WhatsApp support",
    description: "Reach a real person for practical follow-up on your enquiry.",
  },
  {
    id: "transparent-scope",
    icon: "fileCheck",
    label: "Transparent scope",
    description: "The scope is explained clearly before you proceed, with no surprises.",
  },
];
