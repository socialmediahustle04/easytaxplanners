# EasyTaxPlanners Claude Code Operating Brief

This file is the first document Claude Code must read in every new session for this repository.

Project root:

```txt
/Users/apple/easytaxplanners
```

Live production URL:

```txt
https://easytaxplanners.vercel.app
```

GitHub repo:

```txt
https://github.com/socialmediahustle04/easytaxplanners
```

Current stack:

- Next.js `15.5.19`
- React `19.0.0`
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- TypeScript
- Vercel production deployment

## Current Product Mission

Build EasyTaxPlanners as a modern, CA-led Indian tax and compliance website for:

- Individuals filing ITR
- New startups and newly registered businesses
- IT consultants, freelancers, and small agencies
- GST-registered businesses
- Private limited companies with pending compliance
- Business owners needing balance sheets or financial statements
- People worried about notices, revised returns, AIS/Form 26AS mismatches, or filing mistakes

Core positioning:

```txt
Tax and compliance support with CA-led clarity, human review, and practical follow-up.
```

The product should feel polished like a large tax platform, but more accountable, human, and trust-led.

## Current Site State

The site already exists and is live. Do not start from scratch unless explicitly asked.

Important current implementation:

- Homepage is built in `src/app/page.tsx`.
- Main hero is in `src/components/Hero.tsx`.
- Right-side hero visual is in `src/components/HeroVisual.tsx`.
- Animated floating hero panel is in `src/components/HeroCompliancePanel.tsx`.
- Hero image asset is at `public/images/generated/hero-trust-visual.png`.
- Homepage copy/content is in `src/content/homepage.ts`.
- Services content is in `src/content/services.ts`.
- Registration content is in `src/content/registrations.ts`.
- Resource/blog content is in `src/content/resources.ts`.
- Site config is in `src/content/site-config.ts`.
- Design tokens live in `src/app/globals.css`.

The current hero intentionally follows the conversion anatomy of ClearTax-style ITR pages:

- Review/trust pill
- Big ITR headline
- Blue accuracy phrase
- Green reassurance badge
- Notice-support strip
- Two large CTA cards
- Right-side person image with circular trust motif
- Floating auto-check/data panel
- Bottom proof band

Keep the EasyTaxPlanners brand, copy, colors, and assets original. Do not copy competitor files.

## Important Legal / IP Rule

Do not copy ClearTax or any competitor assets.

Allowed:

- Study public websites for navigation patterns, trust patterns, section rhythm, CTA hierarchy, and UX inspiration.
- Create original EasyTaxPlanners components, copy, colors, layouts, icons, and images.
- Use screenshots only as private internal references.

Not allowed:

- Do not copy competitor HTML, CSS, JavaScript, images, SVGs, icons, logos, screenshots, illustrations, or proprietary UI.
- Do not use ClearTax marks, names, logos, screenshots, or trade dress in final public assets.
- Do not commit private ClearTax screenshots such as `d_home_full.png`.

Local-only ignored artifacts:

- `_local.sh`
- `d_home_full.png`
- `.vercel/`
- `.next/`
- `node_modules/`

## Required Reading Order For Every New Claude Session

Before coding, read these files completely and in this order:

1. `CLAUDE.md`
2. `docs/product-brief.md`
3. `docs/design-reference.md`
4. `docs/research/cleartax-design-reference.md`
5. `docs/research/cleartax-image-positioning-analysis.md`
6. `docs/research/cleartax-image-prompt-research.md`
7. `docs/site-architecture.md`
8. `docs/build-plan/claude-execution-plan.md`
9. `docs/chatgpt-image-prompts.md`
10. `docs/image-generation-plan.md`
11. `docs/image-generation-prompts.md`
12. `package.json`
13. `src/content/homepage.ts`
14. `src/content/site-config.ts`
15. `src/components/Hero.tsx`
16. `src/components/HeroVisual.tsx`
17. `src/components/HeroCompliancePanel.tsx`

After reading, summarize:

- What the website is
- What is already built
- Which files control the requested area
- Which skills are relevant
- What you will change
- What you will not touch

Do not write code before completing that context pass.

## Installed Skills To Read

The repo includes project-local skills under `.agents/skills/`.

For a new Claude Code session, read all `SKILL.md` files listed below before planning meaningful work:

```txt
.agents/skills/agent-browser/SKILL.md
.agents/skills/backlink-analyzer/SKILL.md
.agents/skills/brainstorming/SKILL.md
.agents/skills/canvas-design/SKILL.md
.agents/skills/design-md/SKILL.md
.agents/skills/design-taste-frontend/SKILL.md
.agents/skills/find-skills/SKILL.md
.agents/skills/firecrawl-seo-audit/SKILL.md
.agents/skills/framer-motion-animator/SKILL.md
.agents/skills/frontend-design/SKILL.md
.agents/skills/high-end-visual-design/SKILL.md
.agents/skills/programmatic-seo/SKILL.md
.agents/skills/seo-audit/SKILL.md
.agents/skills/seo-geo/SKILL.md
.agents/skills/stitch-design-taste/SKILL.md
.agents/skills/systematic-debugging/SKILL.md
.agents/skills/web-design-guidelines/SKILL.md
```

Use skills intentionally:

- `frontend-design`, `design-taste-frontend`, `high-end-visual-design`, `web-design-guidelines`, and `stitch-design-taste` for UI/UX work.
- `framer-motion-animator` for hero/section animation and micro-interactions.
- `agent-browser` for browser inspection and screenshots.
- `seo-audit`, `programmatic-seo`, `seo-geo`, `firecrawl-seo-audit`, and `backlink-analyzer` for SEO/GEO work.
- `brainstorming` before major creative/product decisions.
- `systematic-debugging` when a build, deployment, layout, or runtime issue appears.

If a skill references relevant files under `references/`, read the relevant reference files before acting.

## Brand And Design Direction

Desired feel:

- Trustworthy
- CA-led
- Premium but approachable
- Clear and structured
- Human and accountable
- Modern enough to compete with large tax platforms

Use:

- White / very light blue backgrounds
- Deep navy text
- Clear blue CTAs
- Green only for reassurance or success
- Amber only for warning/pending/support states
- Original cards, panels, checklist visuals, document chips, and status badges
- Lucide icons where possible

Avoid:

- Purple/blue gradient-heavy SaaS look
- Decorative blobs/orbs
- Generic tax stock-photo feeling
- Overloaded dashboards
- Landing page fluff before actual service action
- Claims such as "100% accuracy", "maximum refund guaranteed", or "file in 3 minutes" unless legally approved

## Content Voice

Use clear Indian business English.

Tone:

- Calm
- Professional
- Helpful
- Trust-building
- Easy for a non-tax person to understand

Prefer:

- "CA-led filing and compliance support"
- "Clear document checklist before work starts"
- "Review before final submission"
- "Practical WhatsApp follow-up"
- "Know what is required before you proceed"
- "Notice guidance before you panic or pay twice"

Avoid:

- Hype
- Fake guarantees
- Overpromising refunds
- Saying the product is fully automated when it is CA-led
- Asking for PAN, Aadhaar, passwords, or sensitive documents in the first website form

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
- Financial Statements

Registration menu:

- GST Registration
- Company Incorporation

Future service ideas:

- Udyam Registration
- FSSAI License
- Trademark
- Copyright
- Patent
- Notice Rescue
- Revised Return / ITR-U

Do not add future services to the main v1 navigation unless explicitly requested.

## MVP Boundaries

Do not build these in v1 unless explicitly requested:

- Login
- User dashboard
- Payments
- Document upload
- Tax calculators
- AI filing engine
- Chatbot
- Client portal

The current site is a lead-generation and trust-building website, not a full filing product.

## Forms And Trust Rules

Lead forms should ask only for:

- Name
- WhatsApp number
- Service needed
- Short message/context

Do not ask for:

- PAN
- Aadhaar
- Portal password
- Bank details
- Uploaded documents
- OTPs

## SEO Direction

Primary SEO/service topics:

- Income tax filing
- GST return filing
- Company return filing
- GST registration
- Company incorporation
- Balance sheet / financial statements
- Revised returns
- Wrong ITR filed
- AIS mismatch
- Notice help

Resource topics already planned:

- GST return filing for small business
- Company return filing for private limited company
- Balance sheet for business loan
- Income tax return filing for business income
- GST registration for new business
- Company incorporation vs GST registration
- Wrong ITR filed what to do
- AIS mismatch in ITR

## Deployment Notes

Vercel project:

```txt
ad-guardian-ai/easytaxplanners
```

Important Vercel settings:

- Framework Preset must be `Next.js`.
- Output Directory must be `Next.js default`.
- Build Command should be `npm run build` or `next build`.
- SSO deployment protection should be disabled for public `.vercel.app` access.

This was previously broken because Vercel was set to `Other` and treated `public/` as the output directory, causing `404: NOT_FOUND`.

If deployment fails:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Check `vercel project inspect easytaxplanners`.
4. Confirm `Framework Preset: Next.js`.
5. Confirm the live URL returns `HTTP/2 200`.

## Verification Checklist

Before finishing any implementation:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Open or test `http://localhost:3000` or chosen dev port.
4. Verify homepage, services, service detail pages, registration pages, about, resources, and contact.
5. Check mobile and desktop layouts.
6. Confirm no competitor screenshots/assets are used publicly.
7. Confirm no sensitive data collection was added.
8. Confirm git status and list exactly what changed.

## Git Rules

Before committing:

- Run `git status -sb`.
- Do not commit `d_home_full.png`, `_local.sh`, `.vercel/`, `.next/`, `node_modules/`, or other local artifacts.
- Keep commits focused.
- Use clear commit messages.

When pushing:

- Push to `main` only if the user asks for direct push.
- Otherwise, summarize local changes and ask before pushing.

## Prompt For A New Claude Code Session

Copy and paste this into a fresh Claude Code session:

```txt
You are working in /Users/apple/easytaxplanners.

Before doing anything, read the full project context. Do not code yet.

First read these files completely, in this exact order:
1. CLAUDE.md
2. docs/product-brief.md
3. docs/design-reference.md
4. docs/research/cleartax-design-reference.md
5. docs/research/cleartax-image-positioning-analysis.md
6. docs/research/cleartax-image-prompt-research.md
7. docs/site-architecture.md
8. docs/build-plan/claude-execution-plan.md
9. docs/chatgpt-image-prompts.md
10. docs/image-generation-plan.md
11. docs/image-generation-prompts.md
12. package.json
13. src/content/homepage.ts
14. src/content/site-config.ts
15. src/components/Hero.tsx
16. src/components/HeroVisual.tsx
17. src/components/HeroCompliancePanel.tsx

Then read every installed project skill fully:
- .agents/skills/agent-browser/SKILL.md
- .agents/skills/backlink-analyzer/SKILL.md
- .agents/skills/brainstorming/SKILL.md
- .agents/skills/canvas-design/SKILL.md
- .agents/skills/design-md/SKILL.md
- .agents/skills/design-taste-frontend/SKILL.md
- .agents/skills/find-skills/SKILL.md
- .agents/skills/firecrawl-seo-audit/SKILL.md
- .agents/skills/framer-motion-animator/SKILL.md
- .agents/skills/frontend-design/SKILL.md
- .agents/skills/high-end-visual-design/SKILL.md
- .agents/skills/programmatic-seo/SKILL.md
- .agents/skills/seo-audit/SKILL.md
- .agents/skills/seo-geo/SKILL.md
- .agents/skills/stitch-design-taste/SKILL.md
- .agents/skills/systematic-debugging/SKILL.md
- .agents/skills/web-design-guidelines/SKILL.md

If any skill points to relevant reference files, read those relevant reference files too.

After reading, reply with a short context report:
- What EasyTaxPlanners is
- What is already built
- Current stack and live deployment URL
- Which files control the homepage and hero
- Which skills are relevant for the next work
- What risks or constraints matter
- What exact plan you recommend

Important constraints:
- Do not copy ClearTax or competitor HTML, CSS, JS, images, logos, screenshots, SVGs, icons, or proprietary UI.
- It is okay to study competitor UX patterns, but final work must be original EasyTaxPlanners work.
- Do not commit private reference screenshots such as d_home_full.png.
- Do not ask for PAN, Aadhaar, passwords, OTPs, bank details, or uploads in the first website form.
- Keep the site CA-led, trust-led, and easy for non-tax users to understand.
- Vercel framework must remain Next.js. Output Directory must remain Next.js default.

Before finishing any code work, run:
npm run lint
npm run build

Also verify the site visually on desktop and mobile.

Do not start coding until you have completed the reading/context pass and I approve the plan.
```
