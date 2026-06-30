# EasyTaxPlanners Image Generation Plan

## Goal

Create a fully original image system for EasyTaxPlanners that supports the existing website without copying competitor assets, screenshots, colors, layouts, or trade dress.

The image system should make the site feel more premium and trustworthy while staying true to the product:

> CA-led tax and compliance support for individuals, startups, freelancers, GST businesses, and small companies in India.

The emotional angle is calm confidence: no confusion, clear document checklist, professional review, deadline support, and human accountability.

## Style Direction

Use original raster images with a polished editorial/product feel:

- Professional Indian tax and compliance context.
- Calm navy, blue, green, and amber accents.
- White, pale-blue, and soft-neutral surfaces.
- Clean desk scenes, documents, checklists, calendars, laptops, and abstract dashboard overlays.
- Human presence through hands, side profiles, or consultation scenes, but avoid generic stock-photo posing.
- No real PAN, Aadhaar, GSTIN, government logos, portal screenshots, bank statements, or private data.
- No copied competitor UI, copied website sections, or brand-confusable image composition.
- Prefer no text inside images. Website text should remain live HTML.

## Asset Plan

| Filename | Page / Section | Purpose / Message | Aspect Ratio | Desktop Placement | Mobile Placement | Animation Suggestion | Alt Text | Short Generation Prompt |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `hero-compliance-dashboard.png` | Homepage hero | Compliance feels organized, reviewed, and guided by professionals. | 16:10 | Right side of hero, replacing or supporting the current dashboard mockup. | Below hero copy after CTAs, max-width constrained. | Subtle fade-in and tiny y-translate; no hidden initial state. | "Organized tax compliance dashboard and document checklist on a professional desk" | Create an original compliance dashboard scene with checklist cards, status chips, documents, laptop, and calm CA-led professional tone. |
| `income-tax-filing.png` | `/services/income-tax-filing` and service card detail | ITR filing is reviewed before submission. | 4:3 | Near PageHero or first service content block. | Under page intro before document checklist. | Hover lift on framed image card. | "Income tax filing checklist with reviewed documents and calculator" | Create a professional income tax filing visual with Form 16-like abstract documents, AIS-style checklist, calculator, and review tick marks, no real data. |
| `gst-return-filing.png` | `/services/gst-return-filing` | GST return work is tracked monthly with input and sales summaries. | 4:3 | Service detail intro or documents-needed aside. | Stacked below intro text. | Soft reveal; optional checklist item stagger. | "GST return filing workspace with invoices and monthly compliance calendar" | Create an original GST compliance workspace with invoice stacks, monthly calendar, sales and purchase summary cards, and pending/reviewed status accents. |
| `company-return-filing.png` | `/services/company-return-filing` | Company compliance is serious but manageable with a clear process. | 4:3 | Service detail intro. | Stacked under intro. | Subtle fade only. | "Company return filing documents with board resolution and annual compliance checklist" | Create an original private limited company compliance scene with annual filing folder, checklist, calendar deadline marker, and professional review atmosphere. |
| `financial-statements.png` | `/services/financial-statements` | Balance sheet and financial statements help loans, filings, and records. | 4:3 | Service detail intro or resource content block. | Under intro. | Hover lift only. | "Financial statements and balance sheet preparation with clean charts and ledger papers" | Create an original balance sheet preparation visual with clean ledger sheets, simple charts, laptop spreadsheet, and CA-style review markers. |
| `gst-registration.png` | `/registration/gst-registration` | Starting GST registration begins with the right checklist. | 4:3 | Registration detail intro. | Under intro. | Gentle checklist reveal. | "GST registration checklist for a new business with documents ready" | Create an original new-business GST registration visual with storefront/laptop context, abstract document checklist, address proof folder, and application progress cards. |
| `company-incorporation.png` | `/registration/company-incorporation` | Company incorporation is a guided first step for founders. | 4:3 | Registration detail intro. | Under intro. | Soft fade and hover lift. | "Company incorporation planning table with founder documents and compliance steps" | Create an original incorporation planning visual with startup desk, name approval concept, incorporation folder, founder checklist, and clean professional guidance mood. |
| `ca-led-trust.png` | `/about` trust section | A qualified professional team reviews the work. | 3:2 | Right side of About intro or trust section. | Full-width after About intro. | Slow fade; no slide dependency. | "CA-led professional tax consultation with checklist and laptop" | Create an original CA-led consultation scene showing a professional reviewing a checklist with a client, with documents and laptop visible but no sensitive data. |
| `contact-support.png` | `/contact` beside form | A human will respond and guide the next step. | 4:3 | Right column beside lead form or direct-contact card. | Between intro and form, cropped 4:3. | Static or very subtle fade. | "Helpful tax support desk with WhatsApp-style message bubble and checklist" | Create an original support visual with a clean desk, phone showing abstract chat bubbles, checklist, calendar, and reassuring professional service mood. |
| `resource-thumbnail-template.png` | `/resources` cards and future blog thumbnails | SEO resources feel useful, structured, and trustworthy. | 16:9 | Resource card image/header template. | Full card width. | Hover scale within clipped container. | "Tax compliance resource thumbnail with document checklist and clean abstract cards" | Create an original blog thumbnail template with abstract tax documents, checklist symbols, calendar marker, and clean editorial composition for Indian compliance topics. |

## Integration Plan After Images Exist

Generated images should be saved here:

`/Users/apple/easytaxplanners/public/images/generated/`

Use the exact filenames listed above.

### Suggested Code Integration Points

- Homepage hero: `src/components/Hero.tsx`
  - Option 1: Replace `DashboardMockup` with `next/image` using `hero-compliance-dashboard.png`.
  - Option 2: Keep `DashboardMockup` and add generated art as a subtle framed background/side visual. This is safer if the current dashboard is already working well.

- Service and registration detail pages: `src/components/ServiceDetail.tsx`
  - Add an optional image field to content items or map by slug.
  - Place the image in the first content section, before or beside the "Who this is for" block on desktop.
  - Keep the documents-needed aside text-first and avoid making the image compete with CTA buttons.

- Services overview: `src/components/ServiceCard.tsx`
  - For V1, keep cards icon-led and simple.
  - Add image thumbnails only if spacing remains clean on mobile.

- About page: `src/app/about/page.tsx`
  - Use `ca-led-trust.png` in a trust or origin section.
  - Keep copy safe: "CA-led compliance support" and "qualified tax professionals."

- Contact page: `src/app/contact/page.tsx`
  - Use `contact-support.png` near the form or direct-contact aside.
  - Do not add upload or sensitive fields.

- Resources page: `src/components/ResourceCard.tsx`
  - Use `resource-thumbnail-template.png` as default thumbnail for resource cards until topic-specific thumbnails exist.

### Technical Rules

- Use `next/image` for local images.
- Add explicit width/height or `fill` inside stable aspect-ratio containers to avoid layout shift.
- Use meaningful `alt` text from the table above.
- Use responsive image containers:
  - Hero: `aspect-[16/10]` or `aspect-[4/3]` on smaller screens.
  - Service images: `aspect-[4/3]`.
  - Resource thumbnails: `aspect-video`.
- Keep critical content visible without scroll-triggered opacity.
- Animation should be optional enhancement only.

## Current Status

The folder `public/images/generated/` does not exist yet and no generated image files are present. Therefore, no website code should be changed in this step.

Next step for Codex:

1. Read `docs/image-generation-prompts.md`.
2. Generate all ten images.
3. Save them into `public/images/generated/` with the exact filenames.
4. Report generated files and previews.

Next step for Claude Code after image generation:

1. Read this plan.
2. Confirm all image files exist.
3. Integrate images into the website.
4. Run lint/build and desktop/mobile visual verification.
5. Do not commit or push unless explicitly asked.
