import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/ServiceDetail";
import { registrations, getRegistrationBySlug } from "@/content/registrations";

export function generateStaticParams() {
  return registrations.map((registration) => ({ slug: registration.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const registration = getRegistrationBySlug(slug);
  if (!registration) return {};
  return {
    title: { absolute: registration.metaTitle },
    description: registration.metaDescription,
    alternates: { canonical: `/registration/${registration.slug}` },
    openGraph: {
      title: registration.metaTitle,
      description: registration.metaDescription,
      url: `/registration/${registration.slug}`,
    },
  };
}

export default async function RegistrationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const registration = getRegistrationBySlug(slug);
  if (!registration) notFound();
  return <ServiceDetail offering={registration} />;
}
