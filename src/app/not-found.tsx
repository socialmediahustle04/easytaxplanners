import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold text-brand">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-navy md:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you are looking for does not exist or may have moved. Let us help you find what you
        need.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/services" size="lg" variant="secondary">
          View services
        </Button>
      </div>
    </Container>
  );
}
