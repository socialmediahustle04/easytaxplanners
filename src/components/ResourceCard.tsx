import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ResourceArticle } from "@/content/types";
import { formatDate } from "@/lib/utils";

export function ResourceCard({ article }: { article: ResourceArticle }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="flex items-center gap-3 text-xs font-medium text-muted">
        <span className="rounded-full bg-brand-soft px-2.5 py-1 font-semibold text-brand">
          {article.category}
        </span>
        <span>{article.readingTime}</span>
      </div>

      <h3 className="mt-4 text-lg font-bold leading-snug text-navy">{article.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-muted">{formatDate(article.publishedDate)}</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Read
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
