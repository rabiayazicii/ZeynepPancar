"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GOOGLE_BUSINESS_URL } from "@/lib/contact-info";
import { cn } from "@/lib/cn";

type Props = {
  /** "floating": sağdaki sabit balon; "inline": sayfa içi */
  variant?: "floating" | "inline";
  className?: string;
};

/** Google İşletme profiline giden sade "Benimle iletişime geçin" balonu */
export function ContactBubble({ variant = "floating", className }: Props) {
  const floating = variant === "floating";

  return (
    <motion.a
      href={GOOGLE_BUSINESS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Benimle iletişime geçin – Google işletme profili"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: floating ? 0.4 : 0, duration: 0.4, ease: "easeOut" }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-sage/25 bg-cream-muted/90 px-4 py-2 backdrop-blur-sm",
        "text-[13px] font-medium tracking-tight text-ink",
        "shadow-[0_6px_18px_-10px_rgba(18,22,20,0.3)]",
        "transition-all duration-300 hover:border-sage/50 hover:bg-sage hover:text-cream-muted",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-sage transition-colors group-hover:bg-cream-muted" aria-hidden />
      Benimle iletişime geçin
      <ArrowUpRight
        className="h-3.5 w-3.5 text-sage transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream-muted"
        aria-hidden
      />
    </motion.a>
  );
}
