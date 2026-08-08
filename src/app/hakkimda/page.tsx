import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { AboutInteractiveLayout } from "@/components/about/AboutInteractiveLayout";
import { FadeIn } from "@/components/FadeIn";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Zeynep Pancar — dil ve konuşma terapisti. Eğitim, yaklaşım ve mesleki değerler.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-clip pb-24 lg:pb-32 pt-[calc(var(--header-h)+2rem)]">
      <PageShell width="full">
        {/* Giriş Üst Bilgi */}
        <div className="mb-10 lg:mb-14">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sage">
            Özgeçmiş & Yaklaşım
          </p>
          <h1 className="mt-2 font-serif text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Zeynep Pancar
          </h1>
          <div className="h-[2px] w-12 bg-sage/35 rounded-full mt-3" />
        </div>

        <AboutInteractiveLayout />
      </PageShell>

      {/* ——— CTA ——— */}
      <div className="mt-20 sm:mt-28">
        <CtaBanner
          subtitle="Süreç & Danışmanlık"
          title="Sorularınız mı var?"
          description="Hizmetler veya süreç hakkında netleştirmek istediğiniz bir nokta varsa yazabilir veya arayabilirsiniz."
          buttonText="İletişime Geçin"
        />
      </div>
    </main>
  );
}
