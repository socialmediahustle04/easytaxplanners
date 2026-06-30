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

Each card uses `next/image` with `object-cover` inside a rounded, tone-tinted visual panel. The source art is normalised to a uniform **16:9** ratio (see _Post-processing_ below) so `object-cover` fills the panel edge-to-edge with no letterboxing or corner artefacts, while preserving the full composition (faces, hands, and document details).

## Post-processing (applied to the copied assets)

The raw generations were inconsistent: `why-choose-accuracy.png` was ~16:9 with near-white rounded-corner fill, while `why-choose-refund.png` and `why-choose-support.png` were ~21:9 with **black** rounded-corner fill. On a light pastel panel the black corners rendered as dark triangles, and the differing ratios letterboxed unevenly across slides.

A one-off normalisation (Pillow) was run on the **copied** assets only (the `~/Downloads/easy-tax/` originals are never modified):

1. Re-copy each pristine source from `~/Downloads/easy-tax/` into `public/images/generated/`.
2. Flood-fill the four corners with the image's interior background colour to remove the baked white/black rounded-corner fill.
3. Pad the short axis with the same interior background colour so every asset becomes exactly **16:9** (1.78). Padding is seamless because it matches the image background.

Result (all 16:9): `why-choose-accuracy.png` 1672×941, `why-choose-refund.png` 1916×1078, `why-choose-support.png` 1916×1078.

If assets are regenerated, re-run this normalisation (or generate them at a clean 16:9 with no corner fill) so the carousel stays consistent.

## Prompts (used / intended for regeneration)

All assets are **EasyTaxPlanners-original**. They must not contain any competitor branding, logos, marks, screenshots, trade dress, or product UI (no ClearTax or any other platform). Keep the brand feel: trustworthy, CA-led, premium but approachable, white / very light blue surfaces, deep navy accents, clear blue as the primary accent, green only for reassurance, amber only for warning/support.

Shared style guidance for every prompt:

- Clean, modern flat-vector business illustration with soft pastel background and generous padding around the subject.
- Friendly, professional Indian small-business / individual context.
- Soft rounded shapes, subtle depth, no harsh gradients, no neon, no 3D render look.
- No real logos, no brand names, no readable competitor UI, no stock-photo realism.
- Wide, landscape-friendly composition (target a clean 16:9 frame) with the key subject centred and generous background padding, so it reads well filling the panel.

### 1. `why-choose-accuracy.png` (Card 1, blue — "CA review before you file")

> Flat-vector illustration on a soft pale-blue background of a calm chartered accountant reviewing an income tax return on screen before filing. Include a subtle shield-with-check motif and a document being verified line by line. Convey careful, trustworthy review and the right filing path. Centred subject, soft rounded shapes, deep navy and clear blue accents, plenty of background padding. No logos, no brand names, no competitor UI.

### 2. `why-choose-refund.png` (Card 2, teal — "Tax clarity, not panic")

> Flat-vector illustration on a soft pale-teal background showing clear, step-by-step tax guidance: a simple document checklist, a calm person understanding their next step, light "what changed / what is needed" cues. Convey clarity and reassurance instead of panic. Centred subject, soft rounded shapes, teal and navy accents, generous background padding. No logos, no brand names, no competitor UI.

### 3. `why-choose-support.png` (Card 3, indigo — "Human support when it matters")

> Flat-vector illustration on a soft pale-indigo background of WhatsApp-style, human-first support for tax and compliance: a real advisor helping over chat with notices, GST, ROC filings, and registrations. Convey a real person, practical follow-up, and approachable help. Centred subject, soft rounded shapes, indigo and navy accents, ample background padding. Use a generic green chat bubble motif only as a reassurance cue, never a real messaging-app logo. No logos, no brand names, no competitor UI.

## Notes

- These are original EasyTaxPlanners assets. Do not introduce competitor branding when regenerating.
- Keep compositions wide and centred so the carousel shows the full illustration on both desktop and mobile.
- Prefer generating at a clean **16:9** ratio with a solid pastel background and **no baked rounded-corner fill** (the card applies its own rounding via CSS). If a regenerated asset differs, re-run the normalisation in _Post-processing_ above, or re-check the card's visual panel ratio (`aspect-[16/9]`) and `object-cover` positioning in `WhyChooseSection.tsx`.
