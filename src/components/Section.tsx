import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Background = "default" | "surface" | "soft" | "navy";

const backgrounds: Record<Background, string> = {
  default: "bg-background",
  surface: "bg-surface",
  soft: "bg-brand-soft",
  navy: "bg-navy text-white",
};

export function Section({
  children,
  background = "default",
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  background?: Background;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgrounds[background], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
