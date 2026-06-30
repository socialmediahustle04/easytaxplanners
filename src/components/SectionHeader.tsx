import { cn } from "@/lib/utils";

// Eyebrows are used sparingly across the site (rationed, not on every section).
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  inverted = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold",
            inverted ? "text-brand-soft" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold md:text-4xl",
          inverted ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            inverted ? "text-white/80" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
