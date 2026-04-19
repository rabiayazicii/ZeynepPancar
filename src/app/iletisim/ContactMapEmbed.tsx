"use client";

import { FadeIn } from "@/components/FadeIn";
import { CONTACT_MAP_EMBED_SRC } from "@/lib/contact-map";
import { cn } from "@/lib/cn";

/** Sayfa altı — harita; kabuk ile hizalı başlık ve geniş kart */
export function ContactMapEmbed() {
  if (!CONTACT_MAP_EMBED_SRC.trim()) {
    return null;
  }

  return (
    <section
      className="mt-14 w-full sm:mt-16 lg:mt-20"
      aria-labelledby="contact-map-heading"
    >
      <FadeIn delay={0.06}>
        <div className="flex items-start gap-3 sm:gap-4">
          <span
            className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-200/55 bg-gradient-to-br from-sky-50/70 to-sky-100/50 text-lg leading-none shadow-[0_3px_10px_-5px_rgba(14,116,144,0.2)] sm:h-12 sm:w-12 sm:text-xl"
            aria-hidden
          >
            <span className="opacity-90 drop-shadow-sm">🗺️</span>
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
              Konum
            </p>
            <h2
              id="contact-map-heading"
              className="mt-2 font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl"
            >
              Haritada bizi bulun
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-[15px]">
              Yol tarifi veya yakın çevre için haritayı kullanabilirsiniz.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "relative mt-8 w-full overflow-hidden rounded-2xl border border-sage/26 bg-cream-muted/40",
            "shadow-[0_18px_48px_-26px_rgba(18,22,20,0.28),0_8px_20px_-12px_rgba(95,122,108,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]",
            "h-[14rem] sm:h-[16rem] lg:h-[18rem]",
          )}
        >
          <iframe
            title="Klinik konumu haritası"
            src={CONTACT_MAP_EMBED_SRC.trim()}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </FadeIn>
    </section>
  );
}
