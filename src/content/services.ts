import type { ServiceLike } from "./types";

// Four core services. Copy is original to EasyTaxPlanners.
// Document lists are intentionally generic and never request sensitive data
// (no PAN/Aadhaar numbers, portal passwords, or uploads on the website).

export const services: ServiceLike[] = [
  {
    slug: "income-tax-filing",
    type: "service",
    icon: "fileText",
    title: "Income Tax Filing",
    summary:
      "Filing support for individuals, professionals, and business owners with clear guidance before submission.",
    cardBullets: [
      "Right ITR form selected for your income",
      "Draft shared for review before filing",
      "Guidance on AIS and Form 26AS",
    ],
    whoItIsFor: [
      "Salaried individuals with capital gains or multiple Form 16s",
      "Freelancers, IT consultants, and online service providers",
      "Business owners and professionals with business income",
      "People who filed the wrong return and need to correct it",
    ],
    whatsIncluded: [
      "Selection of the correct ITR form for your situation",
      "Review of income sources against AIS and Form 26AS",
      "Computation of tax and applicable deductions",
      "A draft computation shared for your review before final filing",
      "Filing and acknowledgement, with guidance on next steps",
    ],
    documentsNeeded: [
      "Salary or income summary for the year",
      "Bank interest and investment income details",
      "Details of deductions you want to claim",
      "Previous year's filing reference, if available",
    ],
    process: [
      { title: "Share your requirement", description: "Tell us your income types and what the year looked like." },
      { title: "Get a document checklist", description: "We send a clear list of what is needed, nothing sensitive on the website." },
      { title: "Review the draft", description: "We prepare the computation and share it for your confirmation." },
      { title: "Final filing", description: "Once you approve, we file and share the acknowledgement." },
    ],
    faqs: [
      {
        question: "I think I filed the wrong ITR last year. Can it be corrected?",
        answer:
          "In many cases a revised or updated return can be filed within the allowed time. Share your situation and we will explain the options before any work starts.",
      },
      {
        question: "There is a mismatch in my AIS. Is that a problem?",
        answer:
          "An AIS or Form 26AS mismatch is common and usually manageable. We reconcile the figures before filing so the return reflects the correct position.",
      },
    ],
    metaTitle: "Income Tax Filing Services | EasyTaxPlanners",
    metaDescription:
      "CA-led income tax return filing for individuals, freelancers, and business owners. Correct ITR selection, AIS review, and a draft before final filing.",
    ctaLabel: "Get help with ITR",
  },
  {
    slug: "gst-return-filing",
    type: "service",
    icon: "receipt",
    title: "GST Return Filing",
    summary: "Monthly and periodic GST return support for registered businesses.",
    cardBullets: [
      "GSTR-1 and GSTR-3B prepared on time",
      "Input tax credit checked carefully",
      "Reminders so deadlines are not missed",
    ],
    whoItIsFor: [
      "GST-registered small businesses and traders",
      "Service providers and agencies billing with GST",
      "Businesses with pending or delayed GST returns",
      "New businesses filing GST returns for the first time",
    ],
    whatsIncluded: [
      "Preparation of GSTR-1 and GSTR-3B from your sales and purchase data",
      "Review of input tax credit before it is claimed",
      "Reconciliation of sales records with filed returns",
      "Filing within the due date and sharing the confirmation",
      "Guidance on pending returns and how to bring filings up to date",
    ],
    documentsNeeded: [
      "Summary of sales for the period",
      "Summary of purchases and expenses with GST",
      "Your GST registration number",
      "Details of any previous pending returns",
    ],
    process: [
      { title: "Share your requirement", description: "Tell us your filing frequency and current status." },
      { title: "Get a document checklist", description: "We list the sales and purchase summaries we need." },
      { title: "Review the working", description: "We prepare the return and confirm the figures with you." },
      { title: "Final filing", description: "We file within the due date and share the acknowledgement." },
    ],
    faqs: [
      {
        question: "Several of my GST returns are pending. Can you help?",
        answer:
          "Yes. We review what is pending, explain the position including any late fees, and then bring your filings up to date in a clear sequence.",
      },
    ],
    metaTitle: "GST Return Filing Services | EasyTaxPlanners",
    metaDescription:
      "CA-led GST return filing for small businesses. GSTR-1 and GSTR-3B prepared and reviewed, input tax credit checked, and pending returns brought up to date.",
    ctaLabel: "Get GST filing help",
  },
  {
    slug: "company-return-filing",
    type: "service",
    icon: "building",
    title: "Company Return Filing",
    summary:
      "Compliance support for private limited companies and businesses with pending filings.",
    cardBullets: [
      "ROC and annual filing support",
      "Director and company compliance tracked",
      "Help for companies with pending filings",
    ],
    whoItIsFor: [
      "Private limited companies meeting annual compliance",
      "Newly incorporated companies filing for the first time",
      "Companies with pending ROC or annual filings",
      "Founders who want compliance handled in one place",
    ],
    whatsIncluded: [
      "Guidance on the annual filings your company is required to make",
      "Preparation of the required forms and supporting statements",
      "A checklist of company and director details needed",
      "Review of the filing position before anything is submitted",
      "Support for companies that have fallen behind on filings",
    ],
    documentsNeeded: [
      "Company incorporation details",
      "Financial statements for the year",
      "Director and shareholding details",
      "Records of any previous filings, if available",
    ],
    process: [
      { title: "Share your requirement", description: "Tell us your company status and what is outstanding." },
      { title: "Get a document checklist", description: "We list the company records and statements required." },
      { title: "Review the filings", description: "We prepare the forms and confirm the details with you." },
      { title: "Final filing", description: "We complete the filings and share the confirmations." },
    ],
    faqs: [
      {
        question: "My company has not filed for a year or more. What now?",
        answer:
          "We first establish exactly what is pending and the implications, then plan the filings in order. You will know the scope before any work begins.",
      },
    ],
    metaTitle: "Company Return Filing Services | EasyTaxPlanners",
    metaDescription:
      "CA-led company return and ROC filing support for private limited companies, including newly incorporated companies and those with pending filings.",
    ctaLabel: "Get company filing help",
  },
  {
    slug: "financial-statements",
    type: "service",
    icon: "spreadsheet",
    title: "Financial Statements",
    summary:
      "Balance sheet and financial statement preparation for filings, loans, and business records.",
    cardBullets: [
      "Balance sheet and profit & loss prepared",
      "Useful for bank and loan applications",
      "Clear, accurate business records",
    ],
    whoItIsFor: [
      "Business owners who need a balance sheet for a bank loan",
      "Companies and firms preparing statements for filing",
      "Businesses that want clean, organised financial records",
      "Founders preparing for funding or compliance",
    ],
    whatsIncluded: [
      "Preparation of the balance sheet and profit & loss statement",
      "Organisation of your income and expense records",
      "Statements suitable for loan and compliance purposes",
      "A review of the figures with you before they are finalised",
      "Guidance on what banks and authorities typically expect",
    ],
    documentsNeeded: [
      "Summary of income and expenses for the period",
      "Bank statements summary for the business",
      "Details of assets and liabilities",
      "Any existing accounting records you maintain",
    ],
    process: [
      { title: "Share your requirement", description: "Tell us why you need the statements and by when." },
      { title: "Get a document checklist", description: "We list the records needed to prepare the statements." },
      { title: "Review the draft", description: "We prepare the statements and confirm the figures with you." },
      { title: "Final delivery", description: "You receive statements ready for filing or your loan application." },
    ],
    faqs: [
      {
        question: "My bank asked for a balance sheet for a loan. Can you prepare one?",
        answer:
          "Yes. We prepare a balance sheet and profit & loss statement from your records, suitable for a loan application, and review the figures with you before finalising.",
      },
    ],
    metaTitle: "Financial Statement & Balance Sheet Preparation | EasyTaxPlanners",
    metaDescription:
      "CA-led balance sheet and financial statement preparation for business loans, filings, and clean business records.",
    ctaLabel: "Get statement help",
  },
];

export function getServiceBySlug(slug: string): ServiceLike | undefined {
  return services.find((s) => s.slug === slug);
}
