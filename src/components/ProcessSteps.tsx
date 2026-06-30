import type { ProcessStep } from "@/content/types";

// Numbered process. Numbering is meaningful here: the steps are an ordered
// sequence the visitor moves through.
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex flex-col">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
            {index + 1}
          </span>
          <h3 className="mt-4 text-base font-bold text-navy">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
