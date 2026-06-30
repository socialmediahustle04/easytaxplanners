# Why Choose Section Image Prompts

Image prompts and asset mapping for the homepage **"Why people choose EasyTaxPlanners"** carousel (`src/components/WhyChooseSection.tsx`).

## Status

The final illustrations have **already been generated and copied** into the project at `public/images/generated/`. The carousel references them directly through `src/content/homepage.ts` (the `whyChoose` content object). No regeneration is required for the section to work; the prompts below are kept for future regeneration or refinement.

## Asset Mapping

Source files (originals were created in `~/Downloads/easy-tax/` and left untouched) were copied into the project:

| Generated source (Downloads) | Project asset (`public/images/generated/`) | Carousel card |
| --- | --- | --- |
| `easy-1.png` | `why-choose-accuracy.png` | Card 1 — CA review before you file (blue) |
| `easy2.png` | `why-choose-refund.png` | Card 2 — Tax clarity, not panic (teal) |
| `easy-3.png` | `why-choose-support.png` | Card 3 — Human support when it matters (indigo) |

Each card uses `next/image` with `object-contain` inside a rounded, tone-tinted visual panel so the full composition stays visible without cropping faces, hands, or document details.

## Prompts (used / intended for regeneration)

All assets are **EasyTaxPlanners-original**. They must not contain any competitor branding, logos, marks, screenshots, trade dress, or product UI (no ClearTax or any other platform). Keep the brand feel: trustworthy, CA-led, premium but approachable, white / very light blue surfaces, deep navy accents, clear blue as the primary accent, green only for reassurance, amber only for warning/support.

Shared style guidance for every prompt:

- Clean, modern flat-vector business illustration with soft pastel background and generous padding around the subject.
- Friendly, professional Indian small-business / individual context.
- Soft rounded shapes, subtle depth, no harsh gradients, no neon, no 3D render look.
- No real logos, no brand names, no readable competitor UI, no stock-photo realism.
- Wide, landscape-friendly composition with the key subject centred so it survives `object-contain`.

### 1. `why-choose-accuracy.png` (Card 1, blue — "CA review before you file")

> Flat-vector illustration on a soft pale-blue background of a calm chartered accountant reviewing an income tax return on screen before filing. Include a subtle shield-with-check motif and a document being verified line by line. Convey careful, trustworthy review and the right filing path. Centred subject, soft rounded shapes, deep navy and clear blue accents, plenty of background padding. No logos, no brand names, no competitor UI.

### 2. `why-choose-refund.png` (Card 2, teal — "Tax clarity, not panic")

> Flat-vector illustration on a soft pale-teal background showing clear, step-by-step tax guidance: a simple document checklist, a calm person understanding their next step, light "what changed / what is needed" cues. Convey clarity and reassurance instead of panic. Centred subject, soft rounded shapes, teal and navy accents, generous background padding. No logos, no brand names, no competitor UI.

### 3. `why-choose-support.png` (Card 3, indigo — "Human support when it matters")

> Flat-vector illustration on a soft pale-indigo background of WhatsApp-style, human-first support for tax and compliance: a real advisor helping over chat with notices, GST, ROC filings, and registrations. Convey a real person, practical follow-up, and approachable help. Centred subject, soft rounded shapes, indigo and navy accents, ample background padding. Use a generic green chat bubble motif only as a reassurance cue, never a real messaging-app logo. No logos, no brand names, no competitor UI.

## Notes

- These are original EasyTaxPlanners assets. Do not introduce competitor branding when regenerating.
- Keep compositions wide and centred so the carousel's `object-contain` rendering shows the full illustration on both desktop and mobile.
- If a regenerated asset changes aspect ratio significantly, re-check the card's visual panel aspect ratio (`aspect-[16/10]`) and object positioning in `WhyChooseSection.tsx`.
