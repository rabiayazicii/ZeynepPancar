import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";

type Props = {
  backdropImageSrc: string;
  /** Küçük etiket (ör. Hizmetler) */
  pageTitle: string;
  /** Ana başlık */
  headline: string;
  /** Giriş paragrafı */
  description?: string;
};

/**
 * Hizmetler üst kahraman — `PageHero` backdropClear ile aynı mobil kural:
 * küçük ekranda tam ekran görsel, metin sol altta okunaklı gradient üzerinde.
 */
export function ServicesScrollHero({
  backdropImageSrc,
  pageTitle,
  headline,
  description,
}: Props) {
  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-rule/28 bg-transparent [backdrop-filter:none] [-webkit-backdrop-filter:none]",
        "flex min-h-[100svh] sm:min-h-[max(42vh,26rem)] lg:min-h-[max(40vh,28rem)] w-full flex-col justify-end items-start pb-8 sm:pb-12 pt-[calc(var(--header-h)+1.5rem)]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0">
          <Image
            src={backdropImageSrc}
            alt=""
            fill
            className="object-cover max-sm:object-[48%_58%] sm:object-[50%_32%]"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[min(52vh,22rem)] bg-gradient-to-t from-black/78 via-black/45 to-transparent max-sm:block sm:hidden"
        aria-hidden
      />

      <PageShell
        width="full"
        className="relative z-10 w-full max-w-none px-4 sm:px-8 lg:px-12"
      >
        <div className="min-w-0">
          <SectionLabel
            className="text-white/80 [&>span:first-of-type]:bg-white/20"
          >
            {pageTitle}
          </SectionLabel>
          <h1 className="mt-5 max-w-3xl font-serif text-[1.5625rem] font-light leading-[1.25] tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] sm:text-4xl lg:text-[3.15rem] lg:leading-[1.08]">
            {headline}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-cream-muted/95 [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </PageShell>
    </header>
  );
}
