# EasyTaxPlanners Build Instructions

## Mission

Build EasyTaxPlanners from scratch as a modern CA-led tax and compliance website for Indian individuals, new businesses, startups, IT consultants, GST-registered businesses, and small companies.

The website should feel as polished and structured as large tax platforms, but it must not copy any competitor assets, CSS, page code, images, logos, illustrations, or exact layouts.

Core positioning:

> Start and manage your tax compliance with confidence.

Supporting positioning:

> EasyTaxPlanners helps individuals, startups, small businesses, and companies with income tax filing, GST returns, company filings, registrations, and financial statements.

## Important Legal / IP Rule

Do not copy ClearTax or any competitor design files.

Allowed:
- Study public websites for navigation patterns, trust patterns, service grouping, pricing clarity, section rhythm, and UX inspiration.
- Create original EasyTaxPlanners components, copy, colors, layouts, icons, and illustrations.
- Use screenshots only as private internal references if needed.

Not allowed:
- Copy competitor HTML, CSS, JavaScript, images, SVGs, icons, screenshots as page assets, brand colors exactly, logos, illustrations, or proprietary UI.
- Name files or components as if they were imported from ClearTax.
- Use any ClearTax mark or trade dress in the final product.

## Audience

Primary customers:
- New startups and newly registered businesses
- IT consultants, freelancers, service providers, and small agencies
- GST-registered small businesses
- Private limited companies with pending compliance
- People needing income tax return filing, revised return help, or notice guidance
- Business owners needing balance sheets / financial statements for loans

Secondary customers:
- Salaried individuals with more complex filing needs
- People with capital gains, multiple Form 16s, AIS/Form 26AS mismatch, or refund anxiety

Avoid over-optimizing for:
- Big audit clients who already have established CA relationships
- Bargain hunters looking only for free filing

## Service Architecture

Top navigation:
- Home
- Services
- Registration
- Resources
- About
- Contact

Services menu:
- Income Tax Filing
- GST Return Filing
- Company Return Filing
- Financial Statements / Balance Sheet Preparation

Registration menu:
- GST Registration
- Company Incorporation

Future services, not v1 unless simple:
- Udyam Registration
- FSSAI License
- Trademark
- Copyright
- Patent
- Notice Rescue
- Revised Return / ITR-U

## Homepage Requirements

Hero:
- Headline: "Start and manage your tax compliance with confidence."
- Subheadline: "Income tax filing, GST returns, company filings, registrations, and financial statements handled with CA-led guidance."
- Primary CTA: "Get Compliance Help"
- Secondary CTA: "View Services"
- Hero visual: original compliance dashboard mockup, not stock CA photo and not copied competitor UI.

First services section:
- Income Tax Filing
- GST Return Filing
- Company Return Filing
- GST Registration
- Company Incorporation
- Financial Statements

Trust section:
- CA-led guidance
- Clear document checklist
- Draft/review before final filing where applicable
- WhatsApp support
- Transparent scope before work starts
- No unnecessary options or overloaded service grid

Problem section:
- GST returns pending?
- Company return not filed?
- Need balance sheet for loan?
- Wrong ITR filed?
- Starting a new business?

Lead capture:
- Keep it simple.
- Ask for name, WhatsApp number, service needed, and short message.
- Do not ask for PAN, Aadhaar, portal password, or sensitive documents on the first website form.

## Visual Direction

Desired feel:
- Trustworthy
- Premium but approachable
- Clear and structured
- More human than a large filing portal
- More modern than a local CA brochure

Use:
- White / very light blue background
- Deep navy text
- Clear blue CTAs
- Green only for reassurance/success
- Amber only for warnings or pending compliance
- Original cards, dashboards, checklist visuals, document chips, and status badges

Avoid:
- Purple/blue gradient-heavy SaaS look
- Generic tax stock photos
- Decorative blobs/orbs
- Copying ClearTax's exact card shapes, spacing, graphics, or color palette
- Huge marketing hero with no useful service action

## Content Voice

Use formal, clear Indian business English.

Tone:
- Calm
- Professional
- Helpful
- No hype

Prefer:
- "Clear document checklist before work starts"
- "CA-led filing and compliance support"
- "Review before final submission"
- "Support for new businesses and pending filings"
- "Know what is required before you proceed"

Avoid:
- "100% accuracy"
- "Maximum refund guaranteed"
- "File in 3 minutes"
- "AI-powered CA"
- "Best in India"

## MVP Build Recommendation

Build a Next.js app with:
- Homepage
- Services overview
- Individual service pages for the six v1 services
- Registration overview
- About page
- Contact/lead form
- Resources/blog structure ready for SEO

Do not build calculators, dashboards, login, payments, or document upload in v1 unless explicitly requested.

## First SEO Topics

Create the content system so these can be added:
- GST return filing for small business
- Company return filing for private limited company
- Balance sheet for business loan
- Income tax return filing for business income
- GST registration for new business
- Company incorporation vs GST registration
- Wrong ITR filed what to do
- AIS mismatch in ITR

## Implementation Standard

Before coding:
- Read `docs/product-brief.md`
- Read `docs/design-reference.md`
- Read `docs/research/cleartax-design-reference.md`
- Read `docs/site-architecture.md`
- Read `docs/build-plan/claude-execution-plan.md`

During coding:
- Build original UI.
- Keep components reusable.
- Ensure mobile responsiveness.
- Ensure CTAs are visible.
- Keep service content easy for a non-tax person to understand.

Before finishing:
- Run lint/build.
- Open the site locally and verify homepage, service pages, about, and contact work on desktop/mobile.
- Check no copied competitor assets are present.
