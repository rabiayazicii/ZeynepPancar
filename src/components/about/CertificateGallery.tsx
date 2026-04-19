"use client";

import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.34,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/** Kare ızgara — sertifika önizlemeleri */
export function CertificateGrid({ className, expanded = true }: Props) {
  return (
    <motion.ul
      initial="hidden"
      animate={expanded ? "visible" : "hidden"}
      variants={listVariants}
      className={cn(
        "grid w-full min-w-0 max-w-full grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-4",
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
            className="flex min-w-0 flex-col gap-1.5"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={c.title}
              aria-label={`${c.title} — yeni sekmede aç`}
              className="group relative aspect-square w-full overflow-hidden rounded-xl border border-white/50 bg-white/60 shadow-sm ring-1 ring-sage/10 transition hover:-translate-y-0.5 hover:border-sage/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              {isPdf ? (
                <span className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-sage/12 via-cream-muted/40 to-sage/8 p-2">
                  <FileText
                    className="h-[28%] max-h-9 w-[28%] max-w-9 text-sage/85 sm:h-10 sm:w-10"
                    aria-hidden
                  />
                  <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-sage/80 sm:text-[10px]">
                    PDF
                  </span>
                </span>
              ) : (
                <Image
                  src={href}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 28vw, 140px"
                  className="object-cover transition duration-300 group-hover:scale-[1.04]"
                />
              )}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-1.5 right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-cream/90 text-sage shadow-sm opacity-0 ring-1 ring-sage/15 transition group-hover:opacity-100">
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </span>
            </a>
            <p className="line-clamp-2 text-center text-[10px] font-medium leading-snug text-ink-muted sm:text-[11px]">
              {c.title}
            </p>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
