"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronDown, GraduationCap } from "lucide-react";
import { CertificateGrid } from "@/components/about/CertificateGallery";
import { IconBadge } from "@/components/decorative/IconBadge";
import { cn } from "@/lib/cn";

type BlockProps = {
  /** Hero altına yapışık düzen: dikey boşlukları sıkılaştırır */
  compact?: boolean;
};

/**
 * Hakkımda — “Eğitim ve sertifikalar”: details/summary;
 * `open` state + summary click `preventDefault` ile tarayıcının ilk tıktaki scroll sıçramasını engeller.
 */
export function EducationCertificatesBlock({ compact = false }: BlockProps) {
  const [open, setOpen] = useState(false);
  const scrollLockY = useRef<number | null>(null);

  const lockScrollY = useCallback(() => {
    scrollLockY.current =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
  }, []);

  /** Tarayıcı açılışta scroll’u oynatırsa aynı y’ye sabitle (smooth CSS’i geçici kapatır) */
  const pinScrollY = useCallback((y: number) => {
    const apply = () => {
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, y);
      root.style.scrollBehavior = prev;
    };

    apply();
    queueMicrotask(apply);
    requestAnimationFrame(apply);
    requestAnimationFrame(() => requestAnimationFrame(apply));
    window.setTimeout(apply, 0);
    window.setTimeout(apply, 120);
  }, []);

  return (
    <section className="relative min-w-0 w-full max-w-full [overflow-anchor:none]">
      <div className={compact ? "mb-1" : "mb-2"}>
        <div className="inline-flex items-center gap-2">
          <span className="h-px w-8 bg-sage/35" aria-hidden />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage/90">
            Eğitim
          </span>
        </div>
      </div>
      <p
        className={cn(
          "max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base",
          compact ? "mt-2" : "mt-3",
        )}
      >
        Tamamladığım mesleki eğitimlere ait belgeleri burada paylaşıyorum.
      </p>

      <div
        className={cn(
          /* card-lift kullanılmıyor: hover'da translateY(-4px) tıklanan başlığın “yukarı zıplaması” gibi algılanıyor */
          "relative overflow-hidden rounded-2xl border border-rule/28 glass p-5 shadow-sm ring-1 ring-sage/10 card-soft transition-[border-color,box-shadow] duration-300 hover:border-sage/30 hover:shadow-md sm:p-6",
          "[overflow-anchor:none]",
          compact ? "mt-5" : "mt-8",
        )}
      >
        <details open={open} className="group w-full [overflow-anchor:none]">
          <summary
            id="edu-cert-trigger"
            aria-controls="edu-cert-panel"
            aria-expanded={open}
            onPointerDown={lockScrollY}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") lockScrollY();
            }}
            onClick={(e) => {
              /* Varsayılan summary davranışı (scroll-into-view) ilk tıkta sayfayı sıçratıyor */
              e.preventDefault();
              const y =
                scrollLockY.current ??
                (window.scrollY ||
                  document.documentElement.scrollTop ||
                  0);
              scrollLockY.current = null;

              const next = !open;
              setOpen(next);
              if (next) pinScrollY(y);
            }}
            className={cn(
              "flex w-full cursor-pointer list-none items-center gap-4 rounded-xl text-left sm:gap-5",
              "[&::-webkit-details-marker]:hidden",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
            )}
          >
            <IconBadge
              icon={GraduationCap}
              accent="emerald"
              size="md"
              className="shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span
              id="edu-cert-title"
              className="min-w-0 flex-1 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]"
            >
              Eğitim ve sertifikalar
            </span>
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rule/32 bg-white/60 text-sage shadow-sm ring-1 ring-sage/10 transition-transform duration-300 sm:h-11 sm:w-11",
                open && "rotate-180",
              )}
              aria-hidden
            >
              <ChevronDown className="h-5 w-5" />
            </span>
          </summary>

          <div
            id="edu-cert-panel"
            role="region"
            aria-labelledby="edu-cert-title"
            className="border-t border-rule/22 pt-6"
          >
            <CertificateGrid expanded={open} />
          </div>
        </details>
      </div>
    </section>
  );
}
