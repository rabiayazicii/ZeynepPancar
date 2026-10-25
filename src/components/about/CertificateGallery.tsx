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
        const href = c.fileName ? certificateUrl(c.fileName) : null;

        return (
          <motion.li
            key={c.id}
            variants={itemVariants}
            className="flex min-w-0"
          >
            <div className="group/card flex w-full flex-col justify-between rounded-[1.75rem] border border-sage/12 bg-surface/70 p-6 shadow-[0_8px_32px_rgba(95,122,108,0.03)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-surface/90 hover:border-sage/25 hover:shadow-[0_20px_50px_rgba(95,122,108,0.08)]">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className={cn(
                    "rounded-full px-2.5 py-0.5 text-[9px] font-semibold tracking-[0.08em] uppercase",
                    categoryColors[c.category] ?? "bg-sage-light/8 text-sage-dark border border-sage/15"
                  )}>
                    {c.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono tracking-wider uppercase text-ink-muted/80">
                    <FileText className="h-3 w-3 text-sage/60" />
                    {c.kind}
                  </span>
                </div>
                
                <h4 className="mt-4 font-serif text-[15.5px] font-light leading-snug text-ink sm:text-base group-hover/card:text-sage-dark transition-colors duration-300">
                  {c.title}
                </h4>
                
                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-sage-dark">
                  <Award className="h-4 w-4 shrink-0 text-sage/70" strokeWidth={1.5} />
                  <span>{c.issuer}</span>
                </div>
                
                <p className="mt-3.5 text-xs leading-relaxed text-ink-muted/95">
                  {c.description}
                </p>
              </div>

              {href && (
              <div className="mt-6 border-t border-sage/10 pt-4">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sage/18 bg-surface/80 px-4 py-2.5 text-xs font-bold text-sage-dark shadow-sm transition-all duration-300 hover:bg-sage hover:text-white hover:border-sage"
                >
                  <Eye className="h-3.5 w-3.5 transition group-hover/btn:scale-110" />
                  Belgeyi Görüntüle
                  <ExternalLink className="h-3 w-3 opacity-60 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
              )}
            </div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
