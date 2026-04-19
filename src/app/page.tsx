import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Clock,
  Mic,
  Soup,
  UserCircle,
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
} from "@/lib/about-images";

const pillars: { title: string; text: string }[] = [
  {
    title: "Kanıta dayalı",
    text: "Güncel literatür ve klinik rehberlerle uyumlu planlama.",
  },
  {
    title: "Bütüncül",
    text: "Dil, ses, yutma ve yaşam kalitesi birlikte ele alınır.",
  },
  {
    title: "Şeffaf",
    text: "Hedefler ve ilerleme birlikte takip edilir.",
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
            "max-w-4xl lg:max-w-3xl",
            "max-sm:mx-0 max-sm:max-w-none max-sm:px-3 max-sm:pr-2",
          )}
        >
          <div className="max-sm:mr-auto max-sm:max-w-[min(100%,20rem)] max-sm:text-left sm:max-w-none">
            <FadeIn>
            <p className="inline-flex rounded-full border-2 border-white/45 bg-white/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-muted backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[11px] sm:tracking-[0.26em]">
              Dil ve konuşma terapisi
            </p>
            <h1 className="mt-4 max-w-[14ch] border-l-[3px] border-white/55 pl-3 font-serif text-[1.7rem] font-medium leading-[1.08] tracking-tight text-cream-muted [text-shadow:0_1px_3px_rgba(18,22,20,0.35),0_12px_40px_rgba(253,251,245,0.55)] sm:mt-6 sm:max-w-[15ch] sm:border-l-4 sm:pl-5 sm:text-5xl sm:leading-[1.02] lg:text-[3.45rem]">
              Net iletişim, bilimle desteklenen yol.
            </h1>
            <p className="mt-5 max-w-lg rounded-r-2xl border-y border-r border-white/35 border-l-0 bg-black/22 py-3 pl-3 pr-3 text-[13px] leading-[1.68] text-cream-muted/92 backdrop-blur-[2px] sm:mt-8 sm:max-w-lg sm:py-4 sm:pl-5 sm:pr-6 sm:text-lg sm:leading-[1.75]">
              Merhaba, ben{" "}
              <span className="font-semibold text-cream-muted">Zeynep Pancar</span>.
              Çocuktan yetişkine her yaşta dil, konuşma, ses ve yutma alanlarında size
              özel çalışıyorum.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:mt-10 sm:gap-5">
              <ButtonLink
                href="/iletisim"
                variant="primary"
                className={cn(
                  "!bg-highlight !text-ink hover:!bg-cream-muted",
                  highlightCta3d,
                )}
              >
                Randevu talep et
              </ButtonLink>
              <Link
                href="/hizmetler"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-cream-muted drop-shadow-[0_1px_10px_rgba(18,22,20,0.35)] sm:text-sm"
              >
                Hizmetlere bak
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </FadeIn>
          </div>
        </PageShell>
      </HomeHeroBackdrop>

      {/* ——— Üç ilke: siyah yok — yeşil ton — ince beyaz üst/alt çizgi */}
      <section className="border-t border-b border-white/30 bg-sage py-11 text-cream-muted sm:py-14">
        <PageShell width="full">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8 sm:divide-x sm:divide-cream-muted/30">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border-2 border-cream-muted/40 bg-black/10 px-4 py-4 sm:px-6 sm:py-5 sm:first:pl-4 sm:last:pr-4"
              >
                <p className="font-serif text-base font-medium text-cream-muted sm:text-2xl">
                  {p.title}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream-muted/90">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* ——— Uzmanlık: sıcak krem / sarı vurgu (süreçten ayrı ton) ——— */}
      <section className="border-b border-rule/12 bg-gradient-to-b from-cream via-highlight/18 to-cream-muted/50 py-20 sm:py-28">
        <PageShell width="full">
          <FadeIn>
            <h2 className="max-w-xl border-l-4 border-sage pl-4 font-serif text-xl font-medium tracking-tight text-ink sm:pl-5 sm:text-4xl">
              Alanlar
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/90 sm:text-[17px]">
              İlk görüşmede öykü, test ve klinik gözlemle profil netleşir; ardından
              hedeflerinize uygun program önerilir. Her yaş ve ihtiyaç için
              değerlendirme ve tedavi planı birlikte şekillenir; gerektiğinde diğer
              uzmanlarla koordinasyon plana dahil edilir.
            </p>
          </FadeIn>
          <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-sage/22 lg:overflow-hidden lg:rounded-2xl lg:border lg:border-sage/26 lg:bg-gradient-to-b lg:from-cream-muted/42 lg:via-background/96 lg:to-cream-muted/36 lg:shadow-[0_22px_56px_-28px_rgba(18,22,20,0.14),inset_0_1px_0_rgba(255,251,240,0.48)] lg:ring-1 lg:ring-sage/10">
            {services.map((s, si) => (
              <li
                key={s.title}
                className="flex gap-4 rounded-xl border border-sage/24 bg-gradient-to-b from-cream-muted/45 to-background/95 p-5 shadow-[0_16px_40px_-20px_rgba(18,22,20,0.11),inset_0_1px_0_rgba(255,251,240,0.55)] transition duration-300 hover:-translate-y-0.5 hover:border-sage/32 sm:p-6 lg:rounded-none lg:border-0 lg:bg-background/82 lg:p-8 lg:shadow-none lg:[background-image:none] lg:hover:translate-y-0 lg:odd:border-r lg:odd:border-sage/22"
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    pastelIconBox(si),
                  )}
                >
                  <s.icon className="h-5 w-5 opacity-90" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-ink">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <FadeIn delay={0.06}>
            <Link
              href="/hizmetler"
              className={cn(
                "mt-10 inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-sage-dark sm:px-5 sm:py-2.5 sm:text-sm",
                softRoundLink3d,
              )}
            >
              Tüm hizmet detayları
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </PageShell>
      </section>

      {/* ——— Süreç: açık sarımsı zemin (grimsi yeşil yok) ——— */}
      <section className="border-t-2 border-sage/25 bg-gradient-to-b from-highlight/22 via-cream-muted/40 to-highlight/12 py-20 sm:py-28">
        <PageShell width="full">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <FadeIn className="max-w-xl lg:max-w-2xl">
              <h2 className="border-l-4 border-sage pl-4 font-serif text-xl font-medium tracking-tight text-ink sm:pl-5 sm:text-4xl">
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
              className="w-full shrink-0 rounded-2xl border border-sage/24 bg-gradient-to-br from-cream-muted/48 to-background/95 p-5 shadow-[0_18px_44px_-24px_rgba(18,22,20,0.12),inset_0_1px_0_rgba(255,251,240,0.45)] ring-1 ring-sage/10 sm:p-6 lg:max-w-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
                Pratik notlar
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                {[
                  "İlk görüşmede belgelerinizi yanınızda bulundurmanız süreci hızlandırır.",
                  "Ev ödevleri kısa ve uygulanabilir tutulur; takipte birlikte gözden geçirilir.",
                  "Gerekirse yönlendirme ve multidisipliner iş birliği plana eklenir.",
                ].map((line, bi) => (
                  <li key={line} className="flex gap-2.5">
                    <span
                      className={cn(
                        "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                        noteBulletPastel[bi % noteBulletPastel.length],
                      )}
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
            {steps.map((row, i) => (
              <FadeIn key={row.n} delay={i * 0.05}>
                <li className="group relative flex h-full min-h-[10.5rem] flex-col rounded-2xl border border-sage/26 bg-gradient-to-b from-cream-muted/38 via-background/96 to-cream-muted/32 p-5 shadow-[0_18px_48px_-24px_rgba(18,22,20,0.13),inset_0_1px_0_rgba(255,251,240,0.52)] ring-1 ring-sage/10 transition duration-300 hover:-translate-y-1 hover:border-sage/34 hover:shadow-[0_26px_56px_-26px_rgba(95,122,108,0.15),inset_0_1px_0_rgba(255,251,240,0.58)] sm:min-h-[12rem] sm:p-7">
                  <div className="flex items-center justify-start gap-3">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold tabular-nums",
                        stepNumberBadge(i),
                      )}
                    >
                      {row.n}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-base font-medium tracking-tight text-ink sm:mt-5 sm:text-xl">
                    {row.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {row.text}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </PageShell>
      </section>

      {/* ——— Gizlilik: tam genişlik görsel — overlay yok, fotoğraf kendi rengi ——— */}
      <section className="relative isolate min-h-[20rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[24rem]">
        <Image
          src={aboutImageSrc(HOME_TRUST_SECTION_IMAGE)}
          alt="Terapi ortamı"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <PageShell
          width="full"
          className="relative z-10 flex min-h-[20rem] flex-col justify-end py-12 sm:min-h-[22rem] sm:justify-center sm:py-14 lg:min-h-[24rem] lg:max-w-2xl lg:py-16"
        >
          <div className="rounded-2xl border border-white/40 bg-black/28 p-5 shadow-[0_22px_50px_-20px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cream-muted">
              Güven
            </p>
            <h2 className="mt-3 border-b-2 border-white/35 pb-3 font-serif text-xl font-medium tracking-tight text-cream-muted sm:text-4xl">
              Gizlilik ve güven
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-cream-muted/92 sm:text-[17px] md:text-lg">
              Paylaştığınız sağlık bilgileri mesleki etik ve yasal çerçevede korunur;
              onam süreçlerinde sorularınız için zaman ayrılır.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-cream-muted/88 sm:text-[17px] md:text-lg">
              Çocuk çalışmalarında ebeveyn katılımı ve ev aktiviteleri, sürdürülebilir
              sonuçlar için planın parçasıdır.
            </p>
          </div>
        </PageShell>
      </section>

      {/* ——— Blog: kart ızgarası ——— */}
      <section className="border-t border-rule/10 bg-gradient-to-b from-cream-muted/35 via-background/80 to-cream-muted/20 py-20 sm:py-28">
        <PageShell width="full">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <FadeIn className="max-w-2xl">
              <h2 className="border-l-4 border-sage pl-4 font-serif text-xl font-medium tracking-tight text-ink sm:pl-5 sm:text-4xl">
                Yazılar
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/90 sm:text-[17px] md:text-lg">
                Dil, konuşma, ses ve yutma sağlığına dair kısa rehberler ve sık
                sorulan konulara yönelik yazılar.
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                Her yazıda pratik özet ve güvenilir kaynaklara uyumlu bir çerçeve
                bulabilirsiniz.
              </p>
            </FadeIn>
            <FadeIn>
              <Link
                href="/blog"
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 px-4 py-2 text-[13px] font-semibold text-sage-dark backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-sm",
                  softRoundLink3d,
                )}
              >
                Tüm yazılar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.06}>
                <article className="group flex h-full flex-col rounded-2xl border border-sage/26 bg-gradient-to-b from-cream-muted/40 via-background/97 to-cream-muted/30 p-5 shadow-[0_16px_44px_-22px_rgba(18,22,20,0.12),inset_0_1px_0_rgba(255,251,240,0.5)] ring-1 ring-sage/10 transition duration-300 hover:-translate-y-1 hover:border-sage/32 hover:ring-sage/18 hover:shadow-[0_26px_52px_-26px_rgba(95,122,108,0.16),inset_0_1px_0_rgba(255,251,240,0.58)] sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                    <span className="rounded-full border border-emerald-200/45 bg-gradient-to-r from-emerald-50/95 to-cream-muted/70 px-2.5 py-0.5 text-sage-dark shadow-sm">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="inline-flex items-center gap-1 normal-case font-medium tracking-normal text-ink-muted">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {post.readMinutes} dk
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-base font-medium leading-snug tracking-tight text-ink sm:text-xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition group-hover:text-sage"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sage"
                  >
                    Devamını oku
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </PageShell>
      </section>

      {/* ——— CTA: yeşil bant ——— */}
      <section className="border-t border-sage/20 bg-sage py-16 text-cream-muted sm:py-20">
        <PageShell width="content" className="text-center">
          <FadeIn>
            <h2 className="mx-auto mt-0 max-w-md rounded-xl border border-cream-muted/42 bg-black/14 px-4 py-2.5 font-serif text-xl font-medium tracking-tight text-cream-muted shadow-[0_14px_36px_-16px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,251,245,0.12)] sm:px-5 sm:py-3 sm:text-3xl">
              Bir sonraki adımı konuşalım
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream-muted/85 sm:text-[15px]">
              Sorularınız veya yönlendirme için iletişim formu veya telefon. Yüz yüze
              veya çevrim içi görüşme türünü birlikte seçeriz.
            </p>
            <div className="mt-10">
              <ButtonLink
                href="/iletisim"
                variant="primary"
                className={cn(heroPrimarySoft, highlightCta3d)}
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
