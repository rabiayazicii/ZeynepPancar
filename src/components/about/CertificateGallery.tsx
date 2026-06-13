"use client";

import { ExternalLink, FileText, Award, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { certificateUrl, certificates } from "@/lib/certificates";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** Akordeon açıkken kartların sırayla görünmesi için */
  expanded?: boolean;
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const categoryColors: Record<string, string> = {
  "Gelişimsel Yaklaşımlar": "bg-emerald-100/80 text-emerald-900 border border-emerald-200/60",
  "Dil & Konuşma": "bg-sky-100/80 text-sky-900 border border-sky-200/60",
  "Klinik Değerlendirme": "bg-violet-100/80 text-violet-900 border border-violet-200/60",
  "Yutma & Beslenme": "bg-orange-100/80 text-orange-900 border border-orange-200/60",
  "Akıcılık Terapisi": "bg-amber-100/80 text-amber-950 border border-amber-200/60",
};

/** Redesigned: Rich card layout for professional certificates */
export function CertificateGrid({ className, expanded = true }: Props) {
  return (
    <motion.ul
      initial="hidden"
      animate={expanded ? "visible" : "hidden"}
      variants={listVariants}
      className={cn(
        "grid w-full min-w-0 max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2",
        className,
      )}
    >
      {certificates.map((c) => {
        const href = certificateUrl(c.fileName);
        const isPdf = c.kind === "pdf";

        return (
          <motion.li
            key={c.id}
            variants={itemVariants}
            className="flex min-w-0"
          >
            <div className="flex w-full flex-col justify-between rounded-2xl border border-sage/18 bg-gradient-to-b from-cream-muted/70 via-background/95 to-cream-muted/50 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition duration-300 hover:-translate-y-1 hover:border-sage/35 hover:shadow-[0_20px_50px_rgba(95,122,108,0.12)]">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className={cn(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.06em] uppercase",
                    categoryColors[c.category] ?? "bg-sage/10 text-sage-dark border border-sage/20"
                  )}>
                    {c.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-ink-muted">
                    <FileText className="h-3 w-3" />
                    {c.kind.toUpperCase()}
                  </span>
                </div>
                
                <h4 className="mt-3.5 font-serif text-[15px] font-bold leading-snug text-ink sm:text-base">
                  {c.title}
                </h4>
                
                <div className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-sage-dark">
                  <Award className="h-3.5 w-3.5 shrink-0 opacity-80" />
                  <span>{c.issuer}</span>
                </div>
                
                <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                  {c.description}
                </p>
              </div>

              <div className="mt-5 border-t border-sage/12 pt-3">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sage/24 bg-white/60 px-4 py-2.5 text-xs font-semibold text-sage-dark shadow-[0_2px_8px_rgba(95,122,108,0.04)] transition hover:bg-sage hover:text-cream-muted hover:border-sage"
                >
                  <Eye className="h-3.5 w-3.5 transition group-hover:scale-110" />
                  Belgeyi Görüntüle
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
