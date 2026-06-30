import { services, getServiceBySlug } from "./services";
import { registrations, getRegistrationBySlug } from "./registrations";
import type { ServiceLike } from "./types";

// The six core offerings shown on the homepage, in the order from the design
// reference: the four services interleaved with the two registrations, with
// Financial Statements last.
export const homepageOfferingSlugs = [
  "income-tax-filing",
  "gst-return-filing",
  "company-return-filing",
  "gst-registration",
  "company-incorporation",
  "financial-statements",
] as const;

const all: ServiceLike[] = [...services, ...registrations];

export const homepageOfferings: ServiceLike[] = homepageOfferingSlugs
  .map((slug) => all.find((o) => o.slug === slug))
  .filter((o): o is ServiceLike => Boolean(o));

/** Look up a service or registration by slug across both collections. */
export function getOfferingBySlug(slug: string): ServiceLike | undefined {
  return getServiceBySlug(slug) ?? getRegistrationBySlug(slug);
}

/** Resolve the route for an offering based on its type. */
export function offeringHref(offering: ServiceLike): string {
  return offering.type === "registration"
    ? `/registration/${offering.slug}`
    : `/services/${offering.slug}`;
}
