# Claude Code Execution Plan

## Objective

Build a fresh EasyTaxPlanners website from this repo.

The final site should be a polished, responsive, CA-led Indian tax and compliance services website with original design, clear service architecture, and lead capture.

## Phase 1: Project Setup

Recommended stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui or clean custom components
- lucide-react icons
- MDX or simple markdown-based resource structure

Tasks:
1. Scaffold the Next.js project in this repo.
2. Install dependencies.
3. Set up Tailwind/theme tokens.
4. Add base layout, metadata, and global styles.
5. Confirm the dev server runs.

## Phase 2: Content Model

Create source data files for:
- Services
- Registration services
- Trust badges
- Homepage sections
- Resource articles

Recommended files:
- `src/content/services.ts`
- `src/content/registrations.ts`
- `src/content/trust.ts`
- `src/content/resources.ts`

Do not hardcode the same service content repeatedly across pages.

## Phase 3: Components

Build reusable components:
- `Navbar`
- `Footer`
- `Hero`
- `ServiceCard`
- `TrustBadge`
- `ProcessSteps`
- `LeadForm`
- `DashboardMockup`
- `ResourceCard`
- `SectionHeader`

Design rules:
- No copied competitor UI.
- No nested cards inside cards.
- Stable responsive sizing.
- Clear CTA hierarchy.
- Text must not overflow on mobile.

## Phase 4: Pages

Build:
- Homepage
- Services overview
- Individual service pages
- Registration overview
- Registration detail pages
- About
- Contact
- Resources index

Each service page should include:
- Service headline
- Who it is for
- What is included
- Documents typically needed
- How the process works
- CTA to contact

## Phase 5: Lead Flow

Implement a simple enquiry form.

Minimum behavior:
- Validate name, WhatsApp, and service needed.
- Show success state after submit.
- Do not collect sensitive information.

If no backend is configured:
- Use a WhatsApp click-to-chat fallback.
- Keep the code ready for backend/Supabase later.

## Phase 6: SEO Foundation

Set metadata for:
- Homepage
- Services pages
- Registration pages
- Resources pages

Use clear page titles:
- "Income Tax Filing Services | EasyTaxPlanners"
- "GST Return Filing Services | EasyTaxPlanners"
- "Company Return Filing Services | EasyTaxPlanners"
- "GST Registration Services | EasyTaxPlanners"
- "Company Incorporation Services | EasyTaxPlanners"
- "Financial Statement Preparation | EasyTaxPlanners"

Add JSON-LD later if needed, but do not overcomplicate v1.

## Phase 7: QA

Run:
- `npm run lint`
- `npm run build`

Manual checks:
- Desktop homepage
- Mobile homepage
- Navigation dropdowns
- Contact form
- Service page readability
- No competitor assets
- No sensitive fields in first lead form

## Acceptance Criteria

The build is complete when:
- The site opens locally without errors.
- It looks polished on desktop and mobile.
- The first screen clearly explains what EasyTaxPlanners does.
- The six v1 services are visible.
- The visitor can send an enquiry.
- The design is original.
- The repo contains a clear `CLAUDE.md` so future Claude Code sessions know what to do.
