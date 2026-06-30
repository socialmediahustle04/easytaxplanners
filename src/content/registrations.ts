import type { ServiceLike } from "./types";

// Two registration services for v1. Same shape as services so the detail
// template and cards can be reused.

export const registrations: ServiceLike[] = [
  {
    slug: "gst-registration",
    type: "registration",
    icon: "clipboardCheck",
    title: "GST Registration",
    summary:
      "Get your GST registration process started with the right document checklist.",
    cardBullets: [
      "Clear checklist before you start",
      "Application prepared and tracked",
      "Guidance on what GST means for you",
    ],
    whoItIsFor: [
      "New businesses that need to register for GST",
      "Businesses crossing the GST turnover threshold",
      "Online sellers and service providers needing GST",
      "Owners who want the process handled correctly the first time",
    ],
    whatsIncluded: [
      "A clear checklist of documents required for registration",
      "Preparation and submission of the GST registration application",
      "Tracking the application until the registration is granted",
      "Plain-language guidance on your filing obligations afterwards",
      "A handover so you know what comes next",
    ],
    documentsNeeded: [
      "Business name and nature of activity",
      "Address details for the place of business",
      "Bank account details for the business",
      "Identity and address proofs as per the checklist we share",
    ],
    process: [
      { title: "Share your requirement", description: "Tell us about your business and why you need GST." },
      { title: "Get a document checklist", description: "We send a clear list of what is required to apply." },
      { title: "Application prepared", description: "We prepare and submit the registration application." },
      { title: "Registration granted", description: "We track it through and hand over your next steps." },
    ],
    faqs: [
      {
        question: "Do I actually need GST registration for my business?",
        answer:
          "It depends on your turnover, activity, and where you sell. Tell us your situation and we will explain whether registration applies before any work starts.",
      },
    ],
    metaTitle: "GST Registration Services | EasyTaxPlanners",
    metaDescription:
      "CA-led GST registration for new and growing businesses. A clear document checklist, application preparation, and tracking until registration is granted.",
    ctaLabel: "Start GST registration",
  },
  {
    slug: "company-incorporation",
    type: "registration",
    icon: "rocket",
    title: "Company Incorporation",
    summary:
      "Start your company with professional guidance on incorporation and compliance basics.",
    cardBullets: [
      "Guidance on structure and naming",
      "Incorporation paperwork handled",
      "Compliance basics explained upfront",
    ],
    whoItIsFor: [
      "Founders starting a new private limited company",
      "Small teams formalising their business",
      "Entrepreneurs who want incorporation done properly",
      "Owners who want to understand compliance from day one",
    ],
    whatsIncluded: [
      "Guidance on company structure and name selection",
      "Preparation of the incorporation application and documents",
      "Coordination of the filings needed to incorporate",
      "An explanation of the compliance that follows incorporation",
      "A clear handover so you start on the right footing",
    ],
    documentsNeeded: [
      "Proposed company name options",
      "Details of the proposed directors and shareholders",
      "Registered office address details",
      "Identity and address proofs as per the checklist we share",
    ],
    process: [
      { title: "Share your requirement", description: "Tell us about your business idea and the founders." },
      { title: "Get a document checklist", description: "We list what is needed and discuss structure." },
      { title: "Incorporation prepared", description: "We prepare and submit the incorporation filings." },
      { title: "Company incorporated", description: "We hand over next steps and ongoing compliance basics." },
    ],
    faqs: [
      {
        question: "Should I register a company or just get GST registration?",
        answer:
          "They serve different purposes and sometimes you need both. We explain the difference for your situation so you can choose with a clear picture.",
      },
    ],
    metaTitle: "Company Incorporation Services | EasyTaxPlanners",
    metaDescription:
      "CA-led company incorporation with guidance on structure, naming, paperwork, and the compliance basics that follow. Start your company with confidence.",
    ctaLabel: "Start incorporation",
  },
];

export function getRegistrationBySlug(slug: string): ServiceLike | undefined {
  return registrations.find((r) => r.slug === slug);
}
