"use client";

import { useState } from "react";
import { ChevronDown, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CertificateGrid } from "@/components/about/CertificateGallery";
import { IconBadge } from "@/components/decorative/IconBadge";
import { cn } from "@/lib/cn";

type BlockProps = {
  /** Hero altına yapışık düzen: dikey boşlukları sıkılaştırır */
  compact?: boolean;
};

export function EducationCertificatesBlock({ compact = false }: BlockProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-w-0 w-full max-w-full">
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
          "relative overflow-hidden rounded-3xl border border-sage/12 bg-surface/50 p-6 sm:p-8 shadow-sm glass transition-[border-color,box-shadow] duration-300 hover:border-sage/25",
          compact ? "mt-6" : "mt-8",
        )}
      >
        <div className="w-full">
          <button
            id="edu-cert-trigger"
            aria-controls="edu-cert-panel"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={cn(
              "flex w-full items-center gap-4 rounded-xl text-left sm:gap-5 focus:outline-none",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
            )}
          >
            <IconBadge
              icon={GraduationCap}
              accent="emerald"
              size="md"
              className="shrink-0 transition-transform duration-300"
            />
            <span
              id="edu-cert-title"
              className="min-w-0 flex-1 font-serif text-2xl font-light tracking-tight text-ink sm:text-[1.75rem]"
            >
              Eğitim ve sertifikalar
            </span>
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sage/20 bg-surface/80 text-sage shadow-sm transition-transform duration-300 sm:h-11 sm:w-11",
                open && "rotate-180",
              )}
              aria-hidden
            >
              <ChevronDown className="h-5 w-5" />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="edu-cert-panel"
                role="region"
                aria-labelledby="edu-cert-title"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.25, delay: 0.05 }
                  }
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.2 }
                  }
                }}
                className="overflow-hidden border-t border-rule/22 mt-6 pt-6"
              >
                <CertificateGrid expanded={open} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
