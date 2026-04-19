import Link from "next/link";
import { DotPattern } from "@/components/decorative/DotPattern";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageShell } from "./PageShell";

type Props = {
  category: string;
  title: string;
  date: string;
  dateLabel: string;
  readMinutes: number;
};

/** Blog yazısı — dar sütun, geri bağlantı, meta satırı */
export function ArticleHero({
  category,
  title,
  date,
  dateLabel,
  readMinutes,
}: Props) {
  return (
    <header className="relative overflow-hidden border-b border-rule/28 glass-band">
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-sage/[0.06] blur-3xl"
        aria-hidden
      />
      <DotPattern className="z-[2] opacity-[0.28]" />
      <PageShell
        width="reading"
        className="relative z-10 pb-12 pt-[calc(var(--header-h)+2.75rem)] sm:pb-16 sm:pt-[calc(var(--header-h)+3.25rem)] lg:pb-20 lg:pt-[calc(var(--header-h)+3.75rem)]"
      >
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex text-sm font-medium text-sage transition hover:text-sage-dark"
          >
            ← Bloga dön
          </Link>
          <div className="mt-8">
            <SectionLabel>{category}</SectionLabel>
          </div>
          <h1 className="mt-5 text-balance font-serif text-lg font-semibold leading-[1.22] tracking-tight text-ink sm:text-4xl md:text-[2.65rem]">
            {title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted">
            <time dateTime={date}>{dateLabel}</time>
            <span className="hidden sm:inline" aria-hidden>
              ·
            </span>
            <span>~{readMinutes} dakika okuma</span>
          </div>
        </FadeIn>
      </PageShell>
    </header>
  );
}
