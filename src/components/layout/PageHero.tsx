import type { ReactNode } from "react";
import Image from "next/image";
import { DotPattern } from "@/components/decorative/DotPattern";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageShell } from "./PageShell";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  description?: string;
  kicker?: string;
  /** Başlık altı ekstra (ör. breadcrumb) */
  children?: React.ReactNode;
  className?: string;
  /** Açıklama metnini başlık gibi değil, gövde paragrafı gibi göster */
  descriptionPlain?: boolean;
  /** Büyük ekranda sağ sütun (ör. portre) — metin solda, aside sağ üstte */
  aside?: ReactNode;
  /** PageShell iç padding (ör. hero’yu nav’a yaklaştırmak için) */
  shellClassName?: string;
  /** Başlık bandının arkasında saydam dekoratif fotoğraf */
  backdropImageSrc?: string;
  /** Fotoğraf üzerinde metin zor okunuyorsa: güçlü sol gradient + hafif metin gölgesi */
  backdropStrongTextScrim?: boolean;
};

/**
 * İç sayfa üst bandı — gradient, yumuşak vurgu, tutarlı dikey boşluk.
 */
export function PageHero({
  title,
  description,
  kicker,
  children,
  className,
  descriptionPlain = false,
  aside,
  shellClassName,
  backdropImageSrc,
  backdropStrongTextScrim = false,
}: Props) {
  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-line/25 glass-band",
        /* Arka plan: kısa metin sayfaları da yeterli band; max(vh,rem) — uzunluğu abartmamak için orta taban */
        backdropImageSrc &&
          "min-h-[max(44vh,24rem)] sm:min-h-[max(42vh,26rem)] lg:min-h-[max(40vh,28rem)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-sage/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-sage/[0.05] blur-3xl"
        aria-hidden
      />
      {backdropImageSrc ? (
        <div
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
          aria-hidden
        >
          <div className="absolute inset-0">
            <Image
              src={backdropImageSrc}
              alt=""
              fill
              className={cn(
                "object-cover",
                backdropStrongTextScrim
                  ? "object-[42%_38%] saturate-[1.05]"
                  : "object-[50%_32%]",
              )}
              sizes="100vw"
              priority
            />
          </div>
          {backdropStrongTextScrim ? (
            <>
              {/* Sol: metin okunurluğu; sağa doğru seyrelerek fotoğraf daha görünür */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-cream/82 from-[6%] via-cream-muted/58 via-[48%] to-cream/12"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-cream/32 via-transparent to-cream/48"
                aria-hidden
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-cream/78 via-cream-muted/52 to-cream/68" />
          )}
        </div>
      ) : null}
      <DotPattern
        className={cn(
          "z-[2]",
          backdropImageSrc && backdropStrongTextScrim
            ? "opacity-[0.18]"
            : "opacity-[0.35]",
        )}
      />

      <PageShell
        width="full"
        className={cn(
          "relative z-10 pb-14 pt-[calc(var(--header-h)+3.5rem)] sm:pb-20 sm:pt-[calc(var(--header-h)+4rem)] lg:pb-24 lg:pt-[calc(var(--header-h)+5rem)]",
          shellClassName,
        )}
      >
        <FadeIn>
          <div
            className={cn(
              aside &&
                "lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-x-10 xl:gap-x-14",
            )}
          >
            <div className="min-w-0">
              {kicker ? (
                <SectionLabel
                  className={
                    backdropImageSrc && backdropStrongTextScrim
                      ? "[&>span:nth-child(2)]:text-sage-dark [&>span:nth-child(2)]:[text-shadow:0_1px_12px_rgba(253,245,201,0.85)]"
                      : undefined
                  }
                >
                  {kicker}
                </SectionLabel>
              ) : null}
              <h1
                className={cn(
                  "max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]",
                  kicker ? "mt-5" : "",
                  backdropImageSrc &&
                    backdropStrongTextScrim &&
                    "[text-shadow:0_0_1px_rgba(255,253,246,0.95),0_2px_24px_rgba(253,245,201,0.85)]",
                )}
              >
                {title}
              </h1>
              {description ? (
                <p
                  className={cn(
                    "mt-5 max-w-2xl leading-relaxed",
                    backdropImageSrc && backdropStrongTextScrim
                      ? "text-ink/95 [text-shadow:0_1px_18px_rgba(253,245,201,0.9)]"
                      : "text-ink-muted",
                    descriptionPlain
                      ? "text-base sm:text-[17px]"
                      : "text-base sm:text-lg",
                  )}
                >
                  {description}
                </p>
              ) : null}
              {children}
            </div>
            {aside ? (
              <div className="mt-10 flex shrink-0 justify-center lg:mt-0 lg:justify-end lg:pl-2">
                {aside}
              </div>
            ) : null}
          </div>
        </FadeIn>
      </PageShell>
    </header>
  );
}
