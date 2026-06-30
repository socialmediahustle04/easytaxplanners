import type { ResourceArticle, ResourceCategory } from "./types";

// Eight seed articles covering the planned first SEO topics. These are short,
// genuinely useful stubs (real outlines, not filler) and are written to be
// expanded over time. They are educational and never give individual advice.

export const resourceCategories: ResourceCategory[] = [
  "Income Tax",
  "GST",
  "Company Compliance",
  "Registrations",
  "Business Finance",
];

export const resources: ResourceArticle[] = [
  {
    slug: "gst-return-filing-for-small-business",
    title: "GST return filing for small business: a plain guide",
    excerpt:
      "What returns a small business usually files, how the cycle works, and how to avoid missing deadlines.",
    category: "GST",
    publishedDate: "2026-05-12",
    readingTime: "5 min read",
    relatedService: "gst-return-filing",
    metaTitle: "GST Return Filing for Small Business | EasyTaxPlanners",
    metaDescription:
      "A plain-language guide to GST return filing for small businesses in India: which returns apply, the filing cycle, and how to stay on top of deadlines.",
    body: [
      { type: "paragraph", text: "If your business is registered under GST, filing returns is a regular obligation rather than a one-time task. The good news is that once the cycle is set up properly, it becomes routine." },
      { type: "heading", text: "Which returns most small businesses file" },
      { type: "paragraph", text: "Most regular small businesses deal with two returns on an ongoing basis: one that reports outward sales and one that summarises tax and input credit for the period. Businesses under the composition scheme follow a simpler, less frequent cycle." },
      { type: "list", items: [
        "A return reporting your sales (outward supplies).",
        "A summary return where tax is paid and input tax credit is claimed.",
        "An annual return, depending on your turnover.",
      ] },
      { type: "heading", text: "Why deadlines matter" },
      { type: "paragraph", text: "Late filing can attract late fees and interest, and pending returns can block later filings. Keeping a simple monthly rhythm, sales summary, purchase summary, review, file, prevents most problems." },
      { type: "heading", text: "Getting started cleanly" },
      { type: "paragraph", text: "Keep your sales and purchase summaries organised each month. If returns are already pending, the priority is to establish exactly what is outstanding before filing, so nothing is missed." },
    ],
  },
  {
    slug: "company-return-filing-for-private-limited-company",
    title: "Company return filing for a private limited company",
    excerpt:
      "An overview of the annual compliance a private limited company is expected to keep, and what happens if filings fall behind.",
    category: "Company Compliance",
    publishedDate: "2026-05-18",
    readingTime: "6 min read",
    relatedService: "company-return-filing",
    metaTitle: "Company Return Filing for a Private Limited Company | EasyTaxPlanners",
    metaDescription:
      "Understand the annual compliance a private limited company is expected to maintain in India and the options when filings have fallen behind.",
    body: [
      { type: "paragraph", text: "A private limited company carries ongoing compliance from the moment it is incorporated, even if business activity is small or has not started yet." },
      { type: "heading", text: "What annual compliance usually involves" },
      { type: "list", items: [
        "Preparation of financial statements for the year.",
        "Annual filings with the registrar of companies.",
        "Income tax return for the company.",
        "Maintenance of statutory records and director details.",
      ] },
      { type: "heading", text: "What if filings are pending" },
      { type: "paragraph", text: "It is common for new founders to discover their company has fallen behind. Pending filings can lead to penalties that grow over time, so the first step is always to map exactly what is outstanding." },
      { type: "paragraph", text: "Once the position is clear, the filings can be completed in a sensible order. The aim is to bring the company current and keep it that way with a predictable annual rhythm." },
    ],
  },
  {
    slug: "balance-sheet-for-business-loan",
    title: "Balance sheet for a business loan: what banks look for",
    excerpt:
      "Why a bank asks for a balance sheet, what it typically contains, and how to prepare one that supports your application.",
    category: "Business Finance",
    publishedDate: "2026-05-22",
    readingTime: "5 min read",
    relatedService: "financial-statements",
    metaTitle: "Balance Sheet for a Business Loan | EasyTaxPlanners",
    metaDescription:
      "Learn why banks ask for a balance sheet for business loans, what it contains, and how to prepare accurate financial statements for your application.",
    body: [
      { type: "paragraph", text: "When you apply for a business loan, the bank wants to understand the financial position of your business. A balance sheet is one of the clearest ways to show that." },
      { type: "heading", text: "What a balance sheet shows" },
      { type: "paragraph", text: "A balance sheet is a snapshot of what your business owns and owes at a point in time. Alongside a profit and loss statement, it gives the bank a picture of stability and capacity to repay." },
      { type: "list", items: [
        "Assets: what the business owns.",
        "Liabilities: what the business owes.",
        "Capital: the owner's stake in the business.",
      ] },
      { type: "heading", text: "Preparing one that holds up" },
      { type: "paragraph", text: "Banks expect statements that are consistent with your other records. Accurate, well-organised figures, reviewed before submission, make the application smoother and reduce back-and-forth." },
    ],
  },
  {
    slug: "income-tax-return-filing-for-business-income",
    title: "Income tax return filing for business income",
    excerpt:
      "How filing differs when you have business or professional income, and what to keep ready before you file.",
    category: "Income Tax",
    publishedDate: "2026-05-26",
    readingTime: "6 min read",
    relatedService: "income-tax-filing",
    metaTitle: "Income Tax Return Filing for Business Income | EasyTaxPlanners",
    metaDescription:
      "A guide to income tax return filing when you have business or professional income in India: choosing the right form and what to keep ready.",
    body: [
      { type: "paragraph", text: "Filing with business or professional income is different from filing a simple salary return. The form is different, and the records you need are broader." },
      { type: "heading", text: "Choosing the right form" },
      { type: "paragraph", text: "The correct return form depends on the nature of your income and whether you use a presumptive scheme. Filing on the wrong form is a common and avoidable mistake." },
      { type: "heading", text: "What to keep ready" },
      { type: "list", items: [
        "A summary of business income and expenses.",
        "Bank statements for the business.",
        "Details of advance tax or TDS already paid.",
        "Details of deductions you intend to claim.",
      ] },
      { type: "heading", text: "Review before filing" },
      { type: "paragraph", text: "Because business returns carry more detail, reviewing the computation before submission helps catch issues early and gives you a clear record of what was filed." },
    ],
  },
  {
    slug: "gst-registration-for-new-business",
    title: "GST registration for a new business: do you need it?",
    excerpt:
      "When GST registration applies to a new business, and what the process looks like from start to finish.",
    category: "Registrations",
    publishedDate: "2026-05-30",
    readingTime: "5 min read",
    relatedService: "gst-registration",
    metaTitle: "GST Registration for a New Business | EasyTaxPlanners",
    metaDescription:
      "Find out when a new business needs GST registration in India, what triggers it, and what the registration process involves.",
    body: [
      { type: "paragraph", text: "One of the first questions new business owners ask is whether they need to register for GST. The answer depends on a few factors rather than a single rule." },
      { type: "heading", text: "Common triggers for registration" },
      { type: "list", items: [
        "Crossing the turnover threshold that applies to your activity.",
        "Selling across state lines in certain cases.",
        "Selling through some online platforms.",
        "Choosing to register voluntarily for business reasons.",
      ] },
      { type: "heading", text: "What the process involves" },
      { type: "paragraph", text: "Registration starts with a clear checklist of documents, followed by an application that is submitted and tracked until the registration is granted. After that, regular return filing begins." },
      { type: "paragraph", text: "If you are unsure whether registration applies, it is worth confirming before you start, so you neither register unnecessarily nor miss an obligation." },
    ],
  },
  {
    slug: "company-incorporation-vs-gst-registration",
    title: "Company incorporation vs GST registration",
    excerpt:
      "These two are often confused. Here is what each one actually does and when you might need both.",
    category: "Registrations",
    publishedDate: "2026-06-03",
    readingTime: "4 min read",
    relatedService: "company-incorporation",
    metaTitle: "Company Incorporation vs GST Registration | EasyTaxPlanners",
    metaDescription:
      "Company incorporation and GST registration serve different purposes. Understand the difference and when a business needs one, the other, or both.",
    body: [
      { type: "paragraph", text: "New founders often treat company incorporation and GST registration as the same step. They are different things, and confusing them can lead to wrong assumptions." },
      { type: "heading", text: "What incorporation does" },
      { type: "paragraph", text: "Incorporation creates a legal company, such as a private limited company. It establishes the business as a separate entity with its own compliance." },
      { type: "heading", text: "What GST registration does" },
      { type: "paragraph", text: "GST registration brings your business under the GST system so you can charge and report GST. It applies based on turnover and activity, regardless of whether you have incorporated a company." },
      { type: "heading", text: "When you might need both" },
      { type: "paragraph", text: "A company that crosses the GST threshold or sells in ways that require GST will need both. A sole proprietor might need only GST registration. The right combination depends on your specific situation." },
    ],
  },
  {
    slug: "wrong-itr-filed-what-to-do",
    title: "Wrong ITR filed? Here is what you can do",
    excerpt:
      "Filing the wrong return or with an error is more common than people think, and it is usually fixable.",
    category: "Income Tax",
    publishedDate: "2026-06-08",
    readingTime: "4 min read",
    relatedService: "income-tax-filing",
    metaTitle: "Wrong ITR Filed: What to Do | EasyTaxPlanners",
    metaDescription:
      "Filed the wrong ITR or made an error? Learn the common options for correcting an income tax return in India and how to approach it calmly.",
    body: [
      { type: "paragraph", text: "Discovering that you filed the wrong return, or filed with a mistake, can be stressful. In most cases there is a clear way to put it right." },
      { type: "heading", text: "Common situations" },
      { type: "list", items: [
        "The wrong ITR form was used.",
        "Income was missed or reported incorrectly.",
        "A deduction was claimed wrongly or not claimed.",
        "Details did not match your AIS or Form 26AS.",
      ] },
      { type: "heading", text: "The usual options" },
      { type: "paragraph", text: "Depending on timing, a revised return or an updated return may be available to correct the position. Each has its own conditions and time limits." },
      { type: "heading", text: "How to approach it" },
      { type: "paragraph", text: "The calmest approach is to first understand exactly what went wrong, then choose the correction route that fits. Acting within the available time window keeps more options open." },
    ],
  },
  {
    slug: "ais-mismatch-in-itr",
    title: "AIS mismatch in your ITR: what it means",
    excerpt:
      "Why your AIS might not match your records, and why a mismatch is usually manageable rather than alarming.",
    category: "Income Tax",
    publishedDate: "2026-06-12",
    readingTime: "5 min read",
    relatedService: "income-tax-filing",
    metaTitle: "AIS Mismatch in ITR | EasyTaxPlanners",
    metaDescription:
      "Understand why an AIS or Form 26AS mismatch happens when filing your ITR in India, and how it is typically reconciled before filing.",
    body: [
      { type: "paragraph", text: "The Annual Information Statement (AIS) summarises financial information reported about you. When it does not match your own records, it can feel concerning, but it is usually manageable." },
      { type: "heading", text: "Why mismatches happen" },
      { type: "list", items: [
        "Interest or income reported under a slightly different figure.",
        "Transactions reported by a bank or institution that you recorded differently.",
        "Timing differences across the financial year.",
        "Duplicate or incorrectly tagged entries.",
      ] },
      { type: "heading", text: "How it is handled" },
      { type: "paragraph", text: "The figures are reconciled before filing so the return reflects the correct position. Where an entry in the AIS is genuinely incorrect, there is a process to flag it." },
      { type: "paragraph", text: "The key point: a mismatch is a reconciliation task, not automatically a problem. Reviewing it before filing keeps your return clean." },
    ],
  },
];

export function getResourceBySlug(slug: string): ResourceArticle | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourcesByCategory(category: ResourceCategory): ResourceArticle[] {
  return resources.filter((r) => r.category === category);
}
