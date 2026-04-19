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
  description: string;
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
        "flex min-h-[100svh] flex-col sm:block sm:min-h-[max(42vh,26rem)] lg:min-h-[max(40vh,28rem)]",
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
        className={cn(
          "relative z-10 w-full max-sm:mt-auto max-sm:pb-[max(1.25rem,env(safe-area-inset-bottom))] max-sm:pt-3 sm:mt-0 sm:pb-16 sm:pt-[calc(var(--header-h)+3.5rem)] lg:pb-20 lg:pt-[calc(var(--header-h)+4rem)]",
        )}
      >
        <div className="min-w-0 max-w-2xl">
          <div className="relative isolate overflow-hidden max-sm:rounded-none max-sm:border-0 sm:rounded-2xl sm:border sm:border-rule/28">
            <div
              className="pointer-events-none absolute inset-0 z-0 max-sm:hidden bg-[color-mix(in_srgb,var(--cream)_38%,transparent)] backdrop-blur-md [transition:none] [-webkit-backdrop-filter:blur(12px)]"
              aria-hidden
            />
            <div className="relative z-[1] px-0 pb-0 pt-0 sm:px-7 sm:py-6">
              <SectionLabel
                className={cn(
                  "max-sm:[&>span:first-of-type]:bg-cream-muted/55 max-sm:[&>span.text-gold]:text-cream-muted max-sm:[&>span.text-gold]:drop-shadow-sm sm:[&>span.text-gold]:text-sage-dark",
                )}
              >
                {pageTitle}
              </SectionLabel>
              <h1 className="mt-5 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-ink max-sm:text-cream-muted max-sm:[text-shadow:0_2px_26px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
                {headline}
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted max-sm:text-cream-muted/92 max-sm:[text-shadow:0_1px_16px_rgba(0,0,0,0.5)] sm:text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </PageShell>
    </header>
  );
}
