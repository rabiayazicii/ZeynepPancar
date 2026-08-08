import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { HomeHeroBackdrop } from "@/components/home/HomeHeroBackdrop";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { blogPosts } from "@/lib/blog";
import { HomeInteractiveLayout } from "@/components/home/HomeInteractiveLayout";
import {
  aboutImageSrc,
  homeHeroCarouselSlides,
} from "@/lib/about-images";

export const metadata: Metadata = {
  title: "Zeynep Pancar — Dil ve Konuşma Terapisti & Fizyoterapist",
  description:
    "Sakarya'da çocuk ve yetişkin dil, konuşma, ses ve yutma terapisi. Bilimsel ve bütüncül yaklaşımlarla terapi desteği.",
};

const heroBackdropSlides = homeHeroCarouselSlides.map((s) => ({
  id: s.id,
  src: aboutImageSrc(s.file),
  label: s.caption ?? s.title,
}));

export default function HomePage() {
  const latest = blogPosts.slice(0, 3);

  return (
    <>
      {/* ——— Hero: tam ekran arka plan fotoğrafları (otomatik) + metin ——— */}
      <HomeHeroBackdrop slides={heroBackdropSlides}>
          <div className="max-w-xl text-left bg-transparent p-0 shadow-none border-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            <FadeIn
              initial={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-muted/95 sm:text-[11px] inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cream-muted animate-pulse" />
                Dil ve Konuşma Terapisi & Fizyoterapi
              </p>
              <h1 className="mt-3 font-serif text-[1.65rem] font-light leading-[1.25] tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
                İletişimin bilimle desteklenen hali.
              </h1>
              <p className="mt-3 text-[13.5px] leading-relaxed text-cream-muted/90 sm:mt-4 sm:text-base sm:leading-relaxed">
                Merhaba, ben <span className="font-semibold text-white">Zeynep Pancar</span>.
                Dil ve Konuşma Terapisti ve Fizyoterapist olarak, çocuktan yetişkine her yaşta bütüncül, bilimsel temelli ve size özel çözümler sunuyorum.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-start gap-4">
                <ButtonLink
                  href="/iletisim"
                  variant="primary"
                  className="!border !border-white/60 !bg-transparent !text-white hover:!bg-white hover:!text-ink !shadow-none rounded-full px-6 py-2.5 transition-all duration-300 text-xs font-semibold"
                >
                  Randevu talep et
                </ButtonLink>
                <Link
                  href="/hizmetler"
                  className="group inline-flex items-center gap-2 text-[12.5px] font-semibold text-white/85 hover:text-white transition duration-300"
                >
                  Hizmetlere bak
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
      </HomeHeroBackdrop>

      {/* ——— İnteraktif Widget'lar ve Alt İçerikler (Client-Side) ——— */}
      <HomeInteractiveLayout latestBlogPosts={latest} />
    </>
  );
}
