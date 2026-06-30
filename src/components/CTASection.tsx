import { Container } from "./Container";
import { Button } from "./Button";
import { whatsappLink } from "@/content/site-config";

// Closing call-to-action band. Used at the foot of most pages.
export function CTASection({
  title = "Need help with tax or business compliance?",
  subtitle = "Tell us what you need and we will reply with a clear next step. No sensitive details required to get started.",
  primaryLabel = "Send Enquiry",
  primaryHref = "/contact",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="bg-navy">
      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">{subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primaryHref} size="lg" variant="white" withArrow>
              {primaryLabel}
            </Button>
            <Button
              href={whatsappLink("Hi, I would like help with tax or business compliance.")}
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
