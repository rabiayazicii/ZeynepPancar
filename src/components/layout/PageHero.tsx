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
  /** Görünür başlık/kicker/açıklama yok; sadece görsel bandı. `title` ekran okuyucu için sr-only kalır. */
  visualOnly?: boolean;
  /** Arka plan fotoğrafının üzerinde gradient / nokta deseni yok. Metin buzlu panel (sabit blur, FadeIn yok). */
  backdropClear?: boolean;
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
  visualOnly = false,
  backdropClear = false,
}: Props) {
  const clearBackdrop = Boolean(backdropImageSrc && backdropClear);
  const strongScrim = backdropStrongTextScrim && !visualOnly && !clearBackdrop;
  const onClearPhoto = clearBackdrop && !visualOnly;

  const titleBlock = (
    <>
      {kicker ? (
        <SectionLabel
          className={cn(
            backdropImageSrc &&
              strongScrim &&
              "[&>span:nth-child(2)]:text-sage-dark [&>span:nth-child(2)]:[text-shadow:0_1px_12px_rgba(253,245,201,0.85)]",
            onClearPhoto &&
              "max-sm:[&>span:first-of-type]:bg-cream-muted/55 max-sm:[&>span.text-gold]:text-cream-muted max-sm:[&>span.text-gold]:drop-shadow-sm sm:[&>span.text-gold]:text-sage-dark",
          )}
        >
          {kicker}
        </SectionLabel>
      ) : null}
      <h1
        className={cn(
          "max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]",
          kicker ? "mt-5" : "",
          backdropImageSrc &&
            strongScrim &&
            "[text-shadow:0_0_1px_rgba(255,253,246,0.95),0_2px_24px_rgba(253,245,201,0.85)]",
          onClearPhoto &&
            "max-sm:text-cream-muted max-sm:[text-shadow:0_2px_26px_rgba(0,0,0,0.55)]",
        )}
      >
        {title}
      </h1>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl leading-relaxed",
            backdropImageSrc && strongScrim
              ? "text-ink/95 [text-shadow:0_1px_18px_rgba(253,245,201,0.9)]"
              : "text-ink-muted",
            onClearPhoto &&
              "max-sm:text-cream-muted/92 max-sm:[text-shadow:0_1px_16px_rgba(0,0,0,0.5)]",
            descriptionPlain
              ? "text-base sm:text-[17px]"
              : "text-base sm:text-lg",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </>
  );

  const gridContent = (
    <div
      className={cn(
        aside &&
          "lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-x-10 xl:gap-x-14",
      )}
    >
      <div className={cn("min-w-0", onClearPhoto && "max-w-2xl")}>
        {onClearPhoto ? (
          <div className="relative isolate overflow-hidden max-sm:rounded-none max-sm:border-0 sm:rounded-2xl sm:border sm:border-rule/28">
            <div
              className="pointer-events-none absolute inset-0 z-0 max-sm:hidden bg-[color-mix(in_srgb,var(--cream)_38%,transparent)] backdrop-blur-md [transition:none] [-webkit-backdrop-filter:blur(12px)]"
              aria-hidden
            />
            <div className="relative z-[1] px-0 pb-0 pt-0 sm:px-7 sm:py-6">
              {titleBlock}
            </div>
          </div>
        ) : (
          titleBlock
        )}
      </div>
      {aside ? (
        <div className="mt-10 flex shrink-0 justify-center lg:mt-0 lg:justify-end lg:pl-2">
          {aside}
        </div>
      ) : null}
    </div>
  );

  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-rule/28",
        clearBackdrop
          ? "bg-transparent [backdrop-filter:none] [-webkit-backdrop-filter:none]"
          : "glass-band",
        /* Arka plan: kısa metin sayfaları da yeterli band; max(vh,rem) — uzunluğu abartmamak için orta taban */
        backdropImageSrc &&
          (clearBackdrop
            ? "flex min-h-[100svh] flex-col sm:block sm:min-h-[max(42vh,26rem)] lg:min-h-[max(40vh,28rem)]"
            : "min-h-[max(44vh,24rem)] sm:min-h-[max(42vh,26rem)] lg:min-h-[max(40vh,28rem)]"),
        className,
      )}
    >
      {!clearBackdrop ? (
        <>
          <div
            className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-sage/[0.07] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-sage/[0.05] blur-3xl"
            aria-hidden
          />
        </>
      ) : null}
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
                strongScrim && "object-[42%_38%] saturate-[1.05]",
                !strongScrim &&
                  clearBackdrop &&
                  "max-sm:object-[48%_58%] sm:object-[50%_32%]",
                !strongScrim &&
                  !clearBackdrop &&
                  backdropImageSrc &&
                  "object-[50%_32%]",
              )}
              sizes="100vw"
              priority
            />
          </div>
          {!clearBackdrop &&
            (strongScrim ? (
              <>
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
              <div
                className={cn(
                  "absolute inset-0",
                  visualOnly
                    ? "bg-gradient-to-b from-cream/25 via-cream-muted/15 to-cream/35"
                    : "bg-gradient-to-br from-cream/78 via-cream-muted/52 to-cream/68",
                )}
                aria-hidden
              />
            ))}
        </div>
      ) : null}
      {clearBackdrop && backdropImageSrc ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[min(52vh,22rem)] bg-gradient-to-t from-black/78 via-black/45 to-transparent max-sm:block sm:hidden"
          aria-hidden
        />
      ) : null}
      {!clearBackdrop ? (
        <DotPattern
          className={cn(
            "z-[2]",
            backdropImageSrc && strongScrim
              ? "opacity-[0.18]"
              : visualOnly && backdropImageSrc
                ? "opacity-[0.12]"
                : "opacity-[0.35]",
          )}
        />
      ) : null}

      <PageShell
        width="full"
        className={cn(
          "relative z-10 w-full",
          visualOnly
            ? "pb-8 pt-[calc(var(--header-h)+2rem)] sm:pb-10 sm:pt-[calc(var(--header-h)+2.5rem)] lg:pb-12 lg:pt-[calc(var(--header-h)+3rem)]"
            : clearBackdrop
              ? "max-sm:mt-auto max-sm:pb-[max(1.25rem,env(safe-area-inset-bottom))] max-sm:pt-3 sm:mt-0 sm:pb-20 sm:pt-[calc(var(--header-h)+4rem)] lg:pb-24 lg:pt-[calc(var(--header-h)+5rem)]"
              : "pb-14 pt-[calc(var(--header-h)+3.5rem)] sm:pb-20 sm:pt-[calc(var(--header-h)+4rem)] lg:pb-24 lg:pt-[calc(var(--header-h)+5rem)]",
          shellClassName,
        )}
      >
        {visualOnly ? (
          <h1 className="sr-only">{title}</h1>
        ) : clearBackdrop ? (
          gridContent
        ) : (
          <FadeIn>{gridContent}</FadeIn>
        )}
      </PageShell>
    </header>
  );
}
