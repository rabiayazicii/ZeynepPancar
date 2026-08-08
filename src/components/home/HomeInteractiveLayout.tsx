"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Eye,
  Baby,
  UserCircle,
  Mic,
  Soup,
  Lock,
  Star,
  CheckCircle2,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  aboutImageSrc,
  HOME_TRUST_SECTION_IMAGE,
  getBlogCoverImage,
  ABOUT_PORTRAIT_FILE,
} from "@/lib/about-images";
import { BlogPost } from "@/lib/blog";

type Props = {
  latestBlogPosts: BlogPost[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillars: {
  title: string;
  text: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    title: "Kanıta dayalı",
    text: "Güncel literatür ve klinik rehberlerle uyumlu değerlendirme ve planlama.",
    icon: ShieldCheck,
    iconBg: "bg-[#d4edda]/60 border-[#a8d5b5]/40",
    iconColor: "text-[#4a8c61]",
  },
  {
    title: "Bütüncül",
    text: "Dil, konuşma, yutma, ses ve fiziksel gelişim bir bütün olarak ele alınır.",
    icon: Activity,
    iconBg: "bg-[#edcfca]/50 border-[#d5a8a0]/40",
    iconColor: "text-[#8c5a4a]",
  },
  {
    title: "Şeffaf",
    text: "Terapi hedefleri, seans sıklığı ve gelişim süreçleri birlikte takip edilir.",
    icon: Eye,
    iconBg: "bg-[#c8dcee]/50 border-[#a0b8d5]/40",
    iconColor: "text-[#4a6b8c]",
  },
];

const services: {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  titleColor: string;
}[] = [
  {
    title: "Çocuk dil ve konuşma",
    desc: "Gecikmiş dil, artikülasyon, pragmatik dil ve okul öncesi iletişim.",
    icon: Baby,
    iconBg: "bg-[#d4edda]/60 border-[#a8d5b5]/40",
    iconColor: "text-[#4a8c61]",
    titleColor: "text-[#4a8c61]",
  },
  {
    title: "Yetişkin konuşması",
    desc: "Afazi, motor konuşma ve ses üretimi üzerine rehabilitasyon.",
    icon: UserCircle,
    iconBg: "bg-[#edcfca]/50 border-[#d5a8a0]/40",
    iconColor: "text-[#8c5a4a]",
    titleColor: "text-[#8c5a4a]",
  },
  {
    title: "Akıcılık ve ses",
    desc: "Kekemelik, ses kısıklığı ve mesleki ses kullanımı.",
    icon: Mic,
    iconBg: "bg-[#c8dcee]/50 border-[#a0b8d5]/40",
    iconColor: "text-[#4a6b8c]",
    titleColor: "text-[#4a6b8c]",
  },
  {
    title: "Yutma ve beslenme",
    desc: "Güvenli yutma ve oral motor işlev için stratejiler.",
    icon: Soup,
    iconBg: "bg-[#e8dcc8]/50 border-[#d5c5a0]/40",
    iconColor: "text-[#8c7a4a]",
    titleColor: "text-[#8c7a4a]",
  },
];

const steps: {
  n: string;
  title: string;
  text: string;
  numColor: string;
}[] = [
  {
    n: "01",
    title: "Ön görüşme",
    text: "Beklentiler, öykü ve belgelerin paylaşımı.",
    numColor: "text-[#4a8c61]",
  },
  {
    n: "02",
    title: "Değerlendirme",
    text: "Test, gözlem ve gerekiyorsa iş birliği.",
    numColor: "text-[#4a6b8c]",
  },
  {
    n: "03",
    title: "Plan",
    text: "Ölçülebilir hedefler ve seans sıklığı.",
    numColor: "text-[#8c5a4a]",
  },
  {
    n: "04",
    title: "Takip",
    text: "Ev ödevleri ve ara değerlendirmeler.",
    numColor: "text-[#8c7a4a]",
  },
];

// ─── Parallax image ─────────────────────────────────────────────────────────
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────────
export function HomeInteractiveLayout({ latestBlogPosts }: Props) {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          1. PILLARS
         ══════════════════════════════════════════════════════════════ */}
      <section className="bg-background py-16 sm:py-20">
        <PageShell width="full">
          <FadeIn className="mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sage">
              Çalışma Felsefem
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Her bireyin ihtiyacı farklı.
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="group flex h-full flex-col rounded-[2rem] border border-sage/12 bg-surface/50 p-7 shadow-[0_8px_30px_rgba(95,122,108,0.05)] hover:shadow-[0_24px_50px_rgba(95,122,108,0.12)] transition-all duration-500 cursor-default glass"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${item.iconBg} ${item.iconColor}`}
                  >
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className={`mt-5 font-serif text-base font-bold transition-colors ${item.iconColor}`}>
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </PageShell>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. PORTRAIT + INTRO SPLIT
         ══════════════════════════════════════════════════════════════ */}
      <section className="border-t border-line/15 bg-background py-16 sm:py-20">
        <PageShell width="full">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Portrait with soft colored frame */}
            <FadeIn className="relative">
              {/* Soft frame glow */}
              <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-[#d4edda]/60 via-[#c8dcee]/40 to-[#edcfca]/50 blur-xl opacity-70 pointer-events-none" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border-2 border-[#d4edda]/60 shadow-[0_24px_60px_rgba(95,122,108,0.14)]">
                <Image
                  src={aboutImageSrc(ABOUT_PORTRAIT_FILE)}
                  alt="Zeynep Pancar — Dil ve Konuşma Terapisti"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeIn>

            {/* Text */}
            <div className="space-y-8">
              <FadeIn>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sage">
                  Hakkımda
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                  Bilimsel temelli,
                  <br />
                  <span className="text-[#4a8c61]">insani bir yaklaşım.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="text-sm leading-relaxed text-ink/90 sm:text-[15px]">
                  Merhaba, ben{" "}
                  <strong className="text-[#4a8c61]">Zeynep Pancar</strong>.
                  Dil ve Konuşma Terapisi ile Fizyoterapi alanında çift lisans
                  eğitimimi tamamladım. Şu an Üsküdar Üniversitesi&apos;nde
                  yüksek lisans eğitimime devam ediyorum.
                </p>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                  Sakarya&apos;da; çocuktan yetişkine, dil gecikmesinden ses
                  rehabilitasyonuna kadar geniş bir yelpazede, kanıta dayalı ve
                  kişiye özel terapi hizmetleri sunuyorum.
                </p>
              </FadeIn>
              <FadeIn delay={0.16}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Çocuk terapisi", bg: "bg-[#d4edda]/60 border-[#a8d5b5]/40", color: "text-[#4a8c61]" },
                    { label: "Yetişkin rehabilitasyonu", bg: "bg-[#c8dcee]/50 border-[#a0b8d5]/40", color: "text-[#4a6b8c]" },
                    { label: "Online seans", bg: "bg-[#edcfca]/50 border-[#d5a8a0]/40", color: "text-[#8c5a4a]" },
                    { label: "Yüz yüze seans", bg: "bg-[#e8dcc8]/50 border-[#d5c5a0]/40", color: "text-[#8c7a4a]" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 text-xs text-ink-muted font-medium"
                    >
                      <span className={`flex h-7 w-7 items-center justify-center rounded-lg border ${item.bg} ${item.color}`}>
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0"
                          strokeWidth={2.5}
                        />
                      </span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link
                  href="/hakkimda"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4a8c61] transition hover:text-sage-dark"
                >
                  Daha fazla öğren
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </PageShell>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. HİZMETLER
         ══════════════════════════════════════════════════════════════ */}
      <section className="bg-background py-16 sm:py-20 border-t border-line/15">
        <PageShell width="full">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
            <FadeIn>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sage">
                Hizmetler
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Uzmanlık Alanları
              </h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Link
                href="/hizmetler"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-sage transition hover:text-sage-dark"
              >
                Tüm hizmetler{" "}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {services.map((s, si) => (
              <FadeIn key={s.title} delay={si * 0.07}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="group flex gap-5 rounded-[2rem] border border-sage/12 bg-surface/50 p-6 sm:p-7 shadow-[0_8px_30px_rgba(95,122,108,0.04)] hover:shadow-[0_24px_50px_rgba(95,122,108,0.1)] transition-all duration-500 cursor-default glass"
                >
                  <span
                    className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${s.iconBg} ${s.iconColor}`}
                  >
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                        0{si + 1}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-30 transition group-hover:translate-x-1 group-hover:opacity-80" />
                    </div>
                    <h3 className={`mt-1.5 font-serif text-sm font-bold ${s.titleColor}`}>
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </PageShell>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. SÜREÇ
         ══════════════════════════════════════════════════════════════ */}
      <section className="border-t border-line/15 bg-background py-16 sm:py-20">
        <PageShell width="full">
          <FadeIn className="mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sage">
              Nasıl İlerliyoruz?
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Terapi süreci, adım adım.
            </h2>
          </FadeIn>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((row, i) => (
              <FadeIn key={row.n} delay={i * 0.1}>
                <motion.li
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="group flex h-full flex-col rounded-[2rem] border border-sage/12 bg-surface/50 p-6 shadow-[0_8px_30px_rgba(95,122,108,0.04)] hover:shadow-[0_24px_50px_rgba(95,122,108,0.1)] transition-all duration-500 cursor-default glass"
                >
                  <span
                    className={`font-mono text-3xl font-bold opacity-30 transition-all duration-300 group-hover:opacity-100 ${row.numColor}`}
                  >
                    {row.n}
                  </span>
                  <h3 className="mt-4 font-serif text-sm font-bold text-ink">
                    {row.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-muted">
                    {row.text}
                  </p>
                </motion.li>
              </FadeIn>
            ))}
          </ol>
        </PageShell>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. GÜVENİLİRLİK — Full photo background
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative border-t border-line/15 overflow-hidden min-h-[420px] flex items-center py-20 sm:py-28">
        {/* Full background image with parallax */}
        <ParallaxImage
          src={aboutImageSrc(HOME_TRUST_SECTION_IMAGE)}
          alt="Terapi ortamı — güven ve gizlilik"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/50 to-ink/20" />

        <PageShell width="full" className="relative z-10">
          <div className="max-w-lg">
            <FadeIn>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4edda] flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" />
                Güvenilirlik
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Gizlilik ve Güven
              </h2>
              <div className="mt-2 h-[2px] w-10 rounded-full bg-[#d4edda]/60" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-sm leading-relaxed text-white/85">
                Paylaştığınız tüm kişisel ve sağlık bilgileri, mesleki etik
                çerçevesinde ve yasal veri koruma kuralları kapsamında tamamen
                saklı tutulur.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Çocuk çalışmalarında ebeveyn katılımı, şeffaf geri bildirimler
                ve ev içi egzersizler tedavinin başarısında kilit rol oynar.
              </p>
            </FadeIn>
          </div>
        </PageShell>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. BLOG — Visual-heavy card grid
         ══════════════════════════════════════════════════════════════ */}
      <section className="border-t border-line/15 bg-background py-16 sm:py-20">
        <PageShell width="full">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <FadeIn>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sage">
                Blog
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Yazılar ve Rehberler
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-ink-muted max-w-sm leading-relaxed">
                Dil, konuşma, ses ve yutma sağlığına dair rehberler.
              </p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <Link
                href="/blog"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-sage/30 bg-[#d4edda]/40 px-5 py-2 text-xs font-semibold text-[#4a8c61] transition-all duration-300 hover:bg-[#4a8c61] hover:text-white hover:border-[#4a8c61]"
              >
                Tüm yazılar{" "}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>

          {/* Featured large card + 2 small cards */}
          {latestBlogPosts.length > 0 && (
            <div className="grid gap-5 md:grid-cols-12">
              {/* Featured */}
              <FadeIn className="md:col-span-7">
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-sage/12 bg-surface/50 shadow-[0_8px_30px_rgba(95,122,108,0.05)] hover:shadow-[0_24px_50px_rgba(95,122,108,0.12)] transition-all duration-500 glass"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={aboutImageSrc(getBlogCoverImage(latestBlogPosts[0].slug))}
                      alt={latestBlogPosts[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width:768px) 100vw, 58vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-[#d4edda]/90 px-3 py-1 text-[9px] font-bold text-[#4a8c61] backdrop-blur-sm">
                      {latestBlogPosts[0].readMinutes} dk okuma
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#4a8c61]">
                      {latestBlogPosts[0].category}
                    </span>
                    <h3 className="mt-2 font-serif text-base font-bold leading-snug text-ink transition group-hover:text-[#4a8c61] sm:text-lg">
                      <Link href={`/blog/${latestBlogPosts[0].slug}`}>
                        {latestBlogPosts[0].title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-muted line-clamp-3">
                      {latestBlogPosts[0].excerpt}
                    </p>
                    <div className="mt-4 border-t border-line/10 pt-3">
                      <Link
                        href={`/blog/${latestBlogPosts[0].slug}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#4a8c61] transition hover:text-sage-dark"
                      >
                        Devamını oku
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </FadeIn>

              {/* Sidebar cards */}
              <div className="md:col-span-5 flex flex-col gap-5">
                {latestBlogPosts.slice(1).map((post, i) => (
                  <FadeIn key={post.slug} delay={i * 0.08 + 0.08}>
                    <motion.article
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      className="group flex flex-row gap-4 overflow-hidden rounded-[1.5rem] border border-[#a8d5b5]/40 bg-[#d4edda]/20 shadow-sm hover:bg-[#d4edda]/30 transition-all duration-500 p-3"
                    >
                      <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={aboutImageSrc(getBlogCoverImage(post.slug))}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-center py-1">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#4a8c61]">
                          {post.category}
                        </span>
                        <h3 className="mt-1 font-serif text-xs font-bold leading-snug text-ink line-clamp-2 transition group-hover:text-[#4a8c61]">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <span className="mt-1.5 text-[10px] text-ink-muted">
                          {post.readMinutes} dk
                        </span>
                      </div>
                    </motion.article>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}
        </PageShell>
      </section>

      <CtaBanner />
    </>
  );
}
