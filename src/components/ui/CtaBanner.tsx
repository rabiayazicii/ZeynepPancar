"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageShell } from "@/components/layout/PageShell";

type Props = {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  href?: string;
};

export function CtaBanner({
  title = "Bir sonraki adımı konuşalım",
  subtitle = "Süreç & Danışmanlık",
  description = "Sorularınız veya yönlendirme için iletişim formu veya telefon. Görüşme türünü birlikte seçeriz.",
  buttonText = "Bizimle İletişime Geçin",
  href = "/iletisim",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-sage py-16 sm:py-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <PageShell width="content">
        <FadeIn className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          >
            <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
          </motion.div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
            {subtitle}
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          <div className="mt-2 h-[2px] w-10 rounded-full bg-white/30" />
          <p className="mx-auto mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-white/80">
            {description}
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={href}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/15 px-6 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-white hover:text-sage hover:border-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-sm"
            >
              {buttonText}
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="tel:+905385206583"
              className="text-xs font-semibold text-white/70 transition hover:text-white"
            >
              veya arayın
            </Link>
          </div>
        </FadeIn>
      </PageShell>
    </section>
  );
}
