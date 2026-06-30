import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { Container } from "./Container";
import { siteConfig, whatsappLink } from "@/content/site-config";
import { services } from "@/content/services";
import { registrations } from "@/content/registrations";
import { resourceCategories } from "@/content/resources";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-extrabold text-white">
                ET
              </span>
              <span className="text-lg font-extrabold tracking-tight text-navy">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              CA-led tax and compliance support for individuals, startups, and small
              businesses across India.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={whatsappLink("Hi, I would like help with tax or business compliance.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink hover:text-brand"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp: {siteConfig.whatsappDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-ink hover:text-brand"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <FooterColumn title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Registration */}
          <FooterColumn title="Registration">
            {registrations.map((r) => (
              <FooterLink key={r.slug} href={`/registration/${r.slug}`}>
                {r.title}
              </FooterLink>
            ))}
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          {/* Resources */}
          <FooterColumn title="Resources">
            <FooterLink href="/resources">All resources</FooterLink>
            {resourceCategories.map((c) => (
              <FooterLink key={c} href="/resources">
                {c}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs leading-relaxed text-muted">
            &copy; {year} {siteConfig.name}. CA-led compliance support provided by qualified
            tax professionals. Information on this website is general and does not constitute
            individual professional advice.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-navy">{title}</h3>
      <ul className="mt-3 flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted transition-colors hover:text-brand">
        {children}
      </Link>
    </li>
  );
}
