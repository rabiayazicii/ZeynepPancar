import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Clock,
  Mic,
  Soup,
  UserCircle,
  ShieldCheck,
  Activity,
  Eye,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { HomeHeroBackdrop } from "@/components/home/HomeHeroBackdrop";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { blogPosts } from "@/lib/blog";
import { highlightCta3d, softRoundLink3d } from "@/lib/highlight-cta-3d";
import { cn } from "@/lib/cn";
import {
  HOME_TRUST_SECTION_IMAGE,
  aboutImageSrc,
  homeHeroCarouselSlides,
  getBlogCoverImage,
} from "@/lib/about-images";

const pillars: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Kanıta dayalı",
    text: "Güncel literatür ve klinik rehberlerle uyumlu değerlendirme ve planlama.",
    icon: ShieldCheck,
  },
  {
    title: "Bütüncül",
    text: "Dil, konuşma, yutma, ses ve fiziksel gelişim bir bütün olarak ele alınır.",
    icon: Activity,
  },
  {
    title: "Şeffaf",
    text: "Terapi hedefleri, seans sıklığı ve gelişim süreçleri birlikte takip edilir.",
    icon: Eye,
  },
];

const services: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Çocuk dil ve konuşma",
    desc: "Gecikmiş dil, artikülasyon, pragmatik dil ve okul öncesi iletişim.",
    icon: Baby,
  },
  {
    title: "Yetişkin konuşması",
    desc: "Afazi, motor konuşma ve ses üretimi üzerine rehabilitasyon.",
    icon: UserCircle,
  },
  {
    title: "Akıcılık ve ses",
    desc: "Kekemelik, ses kısıklığı ve mesleki ses kullanımı.",
    icon: Mic,
  },
  {
    title: "Yutma ve beslenme",
    desc: "Güvenli yutma ve oral motor işlev için stratejiler.",
    icon: Soup,
  },
];

const steps: { n: string; title: string; text: string }[] = [
  {
    n: "01",
    title: "Ön görüşme",
    text: "Beklentiler, öykü ve belgelerin paylaşımı.",
  },
  {
    n: "02",
    title: "Değerlendirme",
    text: "Test, gözlem ve gerekiyorsa iş birliği.",
  },
  {
    n: "03",
    title: "Plan",
    text: "Ölçülebilir hedefler ve seans sıklığı.",
  },
  {
    n: "04",
    title: "Takip",
    text: "Ev ödevleri ve ara değerlendirmeler.",
  },
];

const heroBackdropSlides = homeHeroCarouselSlides.map((s) => ({
  id: s.id,
  src: aboutImageSrc(s.file),
  label: s.caption ?? s.title,
}));

const heroPrimarySoft =
  "!border !border-white/45 !bg-gradient-to-br !from-highlight/85 !via-highlight !to-cream-muted/50 !text-ink !shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] hover:!from-cream-muted/95 hover:!via-highlight/90 hover:!to-highlight/75 hover:!border-white/55";

const pastelIconBox = (i: number) =>
  [
    "border border-sky-200/50 bg-gradient-to-br from-sky-50/80 to-sky-100/45 text-sky-700/88 shadow-[0_3px_10px_-5px_rgba(14,116,144,0.18)]",
    "border border-violet-200/50 bg-gradient-to-br from-violet-50/80 to-violet-100/45 text-violet-700/88 shadow-[0_3px_10px_-5px_rgba(109,40,217,0.14)]",
    "border border-emerald-200/50 bg-gradient-to-br from-emerald-50/80 to-emerald-100/45 text-emerald-800/88 shadow-[0_3px_10px_-5px_rgba(5,150,105,0.15)]",
    "border border-amber-200/50 bg-gradient-to-br from-amber-50/80 to-amber-100/45 text-amber-900/82 shadow-[0_3px_10px_-5px_rgba(217,119,6,0.14)]",
  ][i % 4] as string;

/** Nasıl ilerliyoruz — 01…04 rozetleri */
const stepNumberBadge = (i: number) =>
  [
    "border border-sky-300/55 bg-gradient-to-br from-sky-100/95 to-sky-200/45 text-sky-950 shadow-[0_2px_10px_-4px_rgba(14,116,144,0.25)]",
    "border border-violet-300/55 bg-gradient-to-br from-violet-100/95 to-violet-200/45 text-violet-950 shadow-[0_2px_10px_-4px_rgba(109,40,217,0.2)]",
    "border border-emerald-300/55 bg-gradient-to-br from-emerald-100/95 to-emerald-200/42 text-emerald-950 shadow-[0_2px_10px_-4px_rgba(5,150,105,0.2)]",
    "border border-amber-300/55 bg-gradient-to-br from-amber-100/95 to-amber-200/40 text-amber-950 shadow-[0_2px_10px_-4px_rgba(217,119,6,0.2)]",
  ][i % 4] as string;

const noteBulletPastel = [
  "bg-sky-400/55 shadow-[0_0_0_3px_rgba(125,211,252,0.2)]",
  "bg-violet-400/50 shadow-[0_0_0_3px_rgba(196,181,253,0.22)]",
  "bg-emerald-400/45 shadow-[0_0_0_3px_rgba(110,231,183,0.2)]",
] as const;

export default function HomePage() {
  const latest = blogPosts.slice(0, 3);

  return (
    <>
      {/* ——— Hero: tam ekran arka plan fotoğrafları (otomatik) + metin ——— */}
      <HomeHeroBackdrop slides={heroBackdropSlides}>
        <PageShell
          width="full"
          className={cn(
            "mr-auto ml-0 max-w-xl lg:max-w-2xl pl-4 sm:pl-8 lg:pl-16",
            "max-sm:mx-0 max-sm:max-w-none max-sm:px-3 max-sm:pr-2",
          )}
        >
          <div className="max-w-[32rem] rounded-[2rem] border border-white/12 bg-black/20 p-8 sm:p-10 shadow-[0_24px_50px_-16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
            <FadeIn
              initial={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-muted/90 sm:text-[11px] flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-highlight animate-pulse" />
                Dil ve Konuşma Terapisi & Fizyoterapi
              </p>
              <h1 className="mt-4 max-w-[16ch] font-serif text-[1.85rem] font-medium leading-[1.15] tracking-tight text-cream-muted sm:mt-5 sm:text-5xl sm:leading-[1.08] lg:text-[3.6rem]">
                Net iletişim, bilimle desteklenen yol.
              </h1>
              <p className="mt-4 text-[14px] leading-relaxed text-cream-muted/90 sm:mt-6 sm:text-lg sm:leading-relaxed">
                Merhaba, ben <span className="font-semibold text-cream-muted">Zeynep Pancar</span>.
                Dil ve Konuşma Terapisti ve Fizyoterapist olarak, çocuktan yetişkine her yaşta bütüncül, bilimsel temelli ve size özel çözümler sunuyorum.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-5">
                <ButtonLink
                  href="/iletisim"
                  variant="primary"
                  className={cn(
                    "!bg-highlight !text-ink hover:!bg-cream-muted !shadow-lg transition-all hover:scale-105 duration-300",
                    highlightCta3d,
                  )}
                >
                  Randevu talep et
                </ButtonLink>
                <Link
                  href="/hizmetler"
                  className="group inline-flex items-center gap-2 text-[13px] font-semibold text-cream-muted hover:text-highlight transition duration-300 sm:text-sm"
                >
                  Hizmetlere bak
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </PageShell>
      </HomeHeroBackdrop>

      {/* ——— Üç ilke: modern, ikonlu cam kartlar ——— */}
      <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-background to-cream-muted/30 py-16 sm:py-24 border-b border-rule/8">
        <PageShell width="full">
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.05}>
                <div className="group relative flex flex-col items-start text-left rounded-[2rem] border border-sage/12 bg-surface/80 p-8 shadow-[0_12px_40px_rgba(95,122,108,0.05)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:bg-surface hover:border-sage/24 hover:shadow-[0_24px_56px_rgba(95,122,108,0.12)]">
                  {/* Subtle card glow on hover */}
                  <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-highlight/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-light/10 text-sage border border-sage/15 shadow-sm group-hover:scale-105 group-hover:bg-sage group-hover:text-cream-muted transition-all duration-500">
                    <p.icon className="h-7 w-7" strokeWidth={1.25} aria-hidden />
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {p.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </PageShell>
      </section>

      {/* ——— Uzmanlık: sıcak krem / sarı vurgu (süreçten ayrı ton) ——— */}
      <section className="border-b border-rule/12 bg-gradient-to-b from-cream via-highlight/18 to-cream-muted/50 py-20 sm:py-28">
        <PageShell width="full">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
                Hizmetler
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Alanlar ve Uzmanlıklar
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-[15px] leading-relaxed text-ink/90 sm:text-[17px]">
                İlk görüşmede öykü, test ve klinik gözlemle profil netleşir; ardından
                hedeflerinize uygun program önerilir. Her yaş ve ihtiyaç için
                değerlendirme ve tedavi planı birlikte şekillenir; gerektiğinde diğer
                uzmanlarla koordinasyon plana dahil edilir.
              </p>
            </FadeIn>
          </div>
          
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {services.map((s, si) => (
              <FadeIn key={s.title} delay={si * 0.05}>
                <div className="group relative flex gap-6 rounded-[2rem] border border-sage/12 bg-surface/70 p-7 shadow-[0_12px_36px_rgba(95,122,108,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-surface hover:border-sage/24 hover:shadow-[0_24px_50px_rgba(95,122,108,0.1)] sm:p-8">
                  {/* Subtle inner accent glow on hover */}
                  <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-cream-muted/5 to-highlight/12 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span
                    className={cn(
                      "mt-0.5 flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl group-hover:scale-105 transition-all duration-500",
                      pastelIconBox(si),
                    )}
                  >
                    <s.icon className="h-6 w-6 opacity-90" strokeWidth={1.25} aria-hidden />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-sage/40 uppercase">0{si + 1} / {si < 2 ? "Çocuk" : "Yetişkin"}</span>
                      <ArrowRight className="h-4.5 w-4.5 text-sage/30 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-sage" />
                    </div>
                    <h3 className="mt-2.5 font-serif text-lg font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <FadeIn>
              <Link
                href="/hizmetler"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-sage-dark hover:text-sage transition",
                  softRoundLink3d,
                )}
              >
                Tüm hizmet detayları
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </PageShell>
      </section>

      {/* ——— Süreç: açık sarımsı zemin (grimsi yeşil yok) ——— */}
      <section className="border-t-2 border-sage/25 bg-gradient-to-b from-highlight/22 via-cream-muted/40 to-highlight/12 py-20 sm:py-28">
        <PageShell width="full">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <FadeIn className="max-w-xl lg:max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
                Terapi Süreci
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Nasıl ilerliyoruz?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/90 sm:text-[17px] md:text-lg">
                Dört adımlı bir çerçeveyle ilerleriz: önce beklentileri ve öyküyü
                netleştiririz, ardından değerlendirme ve planı birlikte kurarız.
                Seans sıklığı ve ev uygulamaları, günlük hayatınıza uyacak şekilde
                ayarlanır.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                Her aşamada onam ve gizlilik konuşulur; ilerleme birlikte
                değerlendirilir.
              </p>
            </FadeIn>
            <FadeIn
              delay={0.05}
              className="w-full shrink-0 rounded-3xl border border-sage/15 bg-surface/75 p-6 shadow-[0_12px_36px_rgba(95,122,108,0.06)] backdrop-blur-sm sm:p-8 lg:max-w-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
                Pratik notlar
              </p>
              <ul className="mt-4 space-y-3.5 text-sm leading-relaxed text-ink-muted">
                {[
                  "İlk görüşmede belgelerinizi yanınızda bulundurmanız süreci hızlandırır.",
                  "Ev ödevleri kısa ve uygulanabilir tutulur; takipte birlikte gözden geçirilir.",
                  "Gerekirse yönlendirme ve multidisipliner iş birliği plana eklenir.",
                ].map((line, bi) => (
                  <li key={line} className="flex gap-3 items-start">
                    <span
                      className={cn(
                        "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                        noteBulletPastel[bi % noteBulletPastel.length],
                      )}
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Timeline Process steps */}
          <div className="relative mt-16">
            {/* Connector line running behind numbers */}
            <div className="absolute top-10 left-12 right-12 hidden h-[2px] border-t-2 border-dashed border-sage/20 lg:block z-0" />
            
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 relative z-10">
              {steps.map((row, i) => (
                <FadeIn key={row.n} delay={i * 0.05}>
                  <li className="group relative flex h-full flex-col rounded-[2rem] border border-sage/12 bg-surface/75 p-6 shadow-[0_12px_36px_rgba(95,122,108,0.05)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:bg-surface hover:border-sage/24 hover:shadow-[0_24px_50px_rgba(95,122,108,0.12)]">
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-bold shadow-sm transition-all duration-300 group-hover:scale-105",
                          stepNumberBadge(i),
                        )}
                      >
                        {row.n}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-sage/35 transition-all duration-500 group-hover:bg-sage group-hover:scale-150" />
                    </div>
                    <h3 className="mt-6 font-serif text-lg font-bold text-ink sm:text-xl">
                      {row.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {row.text}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </PageShell>
      </section>

      {/* ——— Gizlilik: Tüm arka planı kaplayan görsel düzeni ——— */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 border-t border-b border-rule/10">
        {/* Background Image spanning the entire section */}
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image
            src={aboutImageSrc(HOME_TRUST_SECTION_IMAGE)}
            alt="Terapi ortamı arka planı"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          {/* Gradient mask for text legibility and blending with warm background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-transparent max-lg:bg-cream/90" />
        </div>

        <PageShell width="full">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Side: Content Panel */}
            <div className="lg:col-span-7 xl:col-span-6">
              <FadeIn>
                <div className="rounded-3xl border border-sage/12 bg-surface/90 p-8 sm:p-10 shadow-[0_20px_50px_rgba(95,122,108,0.08)] backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5" />
                    Güvenilirlik
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                    Gizlilik ve Güven
                  </h2>
                  <div className="h-[2px] w-12 bg-sage/30 rounded-full mt-4" />
                  <p className="mt-6 text-[15px] leading-relaxed text-ink/95 sm:text-[16px] md:text-[17px]">
                    Paylaştığınız sağlık bilgileri mesleki etik ve yasal çerçevede korunur;
                    onam süreçlerinde sorularınız için zaman ayrılır.
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/95 sm:text-[16px] md:text-[17px]">
                    Çocuk çalışmalarında ebeveyn katılımı ve ev aktiviteleri, sürdürülebilir
                    sonuçlar için planın parçasıdır.
                  </p>
                </div>
              </FadeIn>
            </div>
            
            {/* Right side left empty to let the background photo display clearly */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
          </div>
        </PageShell>
      </section>

      {/* ——— Blog: kart ızgarası ——— */}
      <section className="border-t border-rule/10 bg-gradient-to-b from-cream-muted/35 via-background/80 to-cream-muted/20 py-20 sm:py-28">
        <PageShell width="full">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <FadeIn className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
                Blog
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Yazılar ve Rehberler
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/90 sm:text-[17px] md:text-lg">
                Dil, konuşma, ses ve yutma sağlığına dair kısa rehberler ve sık
                sorulan konulara yönelik yazılar.
              </p>
            </FadeIn>
            <FadeIn>
              <Link
                href="/blog"
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 px-5 py-2.5 text-sm font-semibold text-sage-dark backdrop-blur-sm transition",
                  softRoundLink3d,
                )}
              >
                Tüm yazılar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {latest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.06}>
                <article className="group flex h-full flex-col rounded-3xl border border-sage/12 bg-surface/65 p-5 shadow-[0_12px_36px_rgba(95,122,108,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface/95 hover:border-sage/24 hover:shadow-[0_20px_48px_rgba(95,122,108,0.12)]">
                  
                  {/* Cover Image */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-rule/5 bg-cream-muted/40 mb-5">
                    <Image
                      src={aboutImageSrc(getBlogCoverImage(post.slug))}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-mono tracking-wider uppercase text-sage">
                    <span className="rounded-full border border-sage/15 bg-sage-light/8 px-2.5 py-0.5 text-sage-dark text-[9px] font-sans font-semibold tracking-normal normal-case">
                      {post.category}
                    </span>
                    <time dateTime={post.date} className="text-sage/80">
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="inline-flex items-center gap-1 font-sans text-ink-muted/80">
                      • {post.readMinutes} dk
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-bold leading-snug tracking-tight text-ink flex-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-sage-dark"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-sage group-hover:text-sage-dark transition"
                  >
                    Devamını oku
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </PageShell>
      </section>

      {/* ——— CTA: modern mesh-style band ——— */}
      <section className="relative overflow-hidden py-20 text-cream-muted sm:py-28 bg-gradient-to-br from-sage-dark via-sage to-sage-dark">
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient(circle at 80% 20%, rgba(255,250,195,0.15), transparent 50%)" />
        <PageShell width="content" className="relative z-10 text-center">
          <FadeIn>
            <h2 className="mx-auto mt-0 max-w-lg rounded-2xl border border-white/20 bg-white/5 px-6 py-4 font-serif text-2xl font-medium tracking-tight text-cream-muted shadow-[0_20px_50px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm sm:text-4xl">
              Bir sonraki adımı konuşalım
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-cream-muted/90 sm:text-lg">
              Sorularınız veya yönlendirme için iletişim formu veya telefon. Yüz yüze
              veya çevrim içi görüşme türünü birlikte seçeriz.
            </p>
            <div className="mt-10">
              <ButtonLink
                href="/iletisim"
                variant="primary"
                className={cn(heroPrimarySoft, highlightCta3d, "hover:scale-105 transition-transform duration-300")}
              >
                İletişime geç
              </ButtonLink>
            </div>
          </FadeIn>
        </PageShell>
      </section>
    </>
  );
}
