"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, GraduationCap } from "lucide-react";
import { CertificateGrid } from "@/components/about/CertificateGallery";
import { IconBadge } from "@/components/decorative/IconBadge";
import { cn } from "@/lib/cn";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Hakkımda — “Eğitim ve sertifikalar”: akordeon; başlık tetikleyicide.
 */
export function EducationCertificatesBlock() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="h-px w-8 bg-sage/35" aria-hidden />
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage/90">
          Eğitim
        </span>
      </div>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
        Tamamladığım mesleki eğitimlere ait belgeleri burada paylaşıyorum.
      </p>

      <div className="mt-8 card-lift relative overflow-hidden rounded-2xl border border-line/30 glass p-5 shadow-sm ring-1 ring-sage/10 card-soft sm:p-6">
        <button
          type="button"
          id="edu-cert-trigger"
          aria-expanded={open}
          aria-controls="edu-cert-panel"
          aria-label={
            open
              ? "Eğitim ve sertifikalar bölümünü kapat"
              : "Eğitim ve sertifikalar bölümünü aç"
          }
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "group flex w-full items-center gap-4 rounded-xl text-left transition-colors sm:gap-5",
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
          <motion.span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line/40 bg-white/60 text-sage shadow-sm ring-1 ring-sage/10 sm:h-11 sm:w-11"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            aria-hidden
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="cert-panel"
              id="edu-cert-panel"
              role="region"
              aria-labelledby="edu-cert-title"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.45, ease: easeOut },
                opacity: { duration: 0.3, ease: easeOut },
              }}
              style={{ overflow: "hidden" }}
            >
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ duration: 0.35, ease: easeOut, delay: 0.04 }}
                className="mt-6 border-t border-line/25 pt-6"
              >
                <CertificateGrid />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
