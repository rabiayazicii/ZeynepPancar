"use client";

import { CONTACT_MAP_EMBED_SRC } from "@/lib/contact-map";
import { cn } from "@/lib/cn";

/** Sayfa altı — ortalanmış, yuvarlatılmış harita (tam genişlik değil) */
export function ContactMapEmbed() {
  if (!CONTACT_MAP_EMBED_SRC.trim()) {
    return null;
  }

  return (
    <section
      className="mt-16 w-full sm:mt-20 lg:mt-24"
      aria-labelledby="contact-map-heading"
    >
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-2 inline-flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-sage/35" aria-hidden />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage/90">
            Konum
          </span>
          <span className="h-px w-8 bg-sage/35" aria-hidden />
        </div>
        <h2
          id="contact-map-heading"
          className="font-serif text-xl font-semibold tracking-tight text-ink sm:text-2xl"
        >
          Haritada bizi bulun
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-[15px]">
          Yol tarifi veya yakın çevre için haritayı kullanabilirsiniz.
        </p>
      </div>

      <div
        className={cn(
          "relative mx-auto mt-8 w-full max-w-6xl overflow-hidden rounded-2xl",
          "border-2 border-sage/25 bg-cream-muted/30 shadow-[0_16px_48px_-16px_rgba(95,122,108,0.22)]",
          "ring-1 ring-sage/15",
          "h-[12rem] sm:h-[13rem] lg:h-[14rem]",
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
    </section>
  );
}
