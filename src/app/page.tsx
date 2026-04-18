import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  BookOpen,
  ClipboardList,
  HeartHandshake,
  MessageCircle,
  Mic,
  Newspaper,
  Sparkles,
  Soup,
  Target,
  UserCircle,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { DotPattern } from "@/components/decorative/DotPattern";
import {
  IconBadge,
  type IconAccent,
} from "@/components/decorative/IconBadge";
import { WaveDivider } from "@/components/decorative/WaveDivider";
import { FadeIn } from "@/components/FadeIn";
import { PhotoCarousel } from "@/components/media/PhotoCarousel";
import type { CarouselSlide } from "@/components/media/PhotoCarousel";
import { PhotoFrame } from "@/components/media/PhotoFrame";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blogPosts } from "@/lib/blog";
import {
  HOME_TRUST_SECTION_IMAGE,
  aboutImageSrc,
  homeHeroCarouselSlides,
} from "@/lib/about-images";

const trustItems: {
  title: string;
  text: string;
  icon: LucideIcon;
  accent: IconAccent;
}[] = [
  {
    title: "Kanıta dayalı yöntemler",
    text: "Güncel literatür ve klinik rehberlerle uyumlu değerlendirme ve tedavi planları.",
    icon: BookOpen,
    accent: "emerald",
  },
  {
    title: "Bütüncül bakış",
    text: "İletişim, yutma ve ses sağlığını yaşam kalitesi ve bireysel hedeflerle birlikte ele alıyorum.",
    icon: HeartHandshake,
    accent: "ocean",
  },
  {
    title: "Şeffaf süreç",
    text: "Her adımda beklentileri netleştirir, ilerlemeyi birlikte takip ederiz.",
    icon: Sparkles,
    accent: "amber",
  },
];

const servicePreview: {
  title: string;
  desc: string;
  icon: LucideIcon;
  accent: IconAccent;
}[] = [
  {
    title: "Çocuk dil ve konuşma",
    desc: "Gecikmiş dil, artikülasyon, pragmatik dil ve okul öncesi iletişim becerileri.",
    icon: Baby,
    accent: "coral",
  },
  {
    title: "Yetişkin konuşması",
    desc: "Afazi, motor konuşma bozuklukları ve ses üretimi üzerine rehabilitasyon.",
    icon: UserCircle,
    accent: "violet",
  },
  {
    title: "Akıcılık ve ses",
    desc: "Kekemelik, ses kısıklığı ve mesleki ses kullanımına yönelik terapi.",
    icon: Mic,
    accent: "sage",
  },
  {
    title: "Yutma ve beslenme",
    desc: "Güvenli yutma ve oral motor işlev için değerlendirme ve stratejiler.",
    icon: Soup,
    accent: "rose",
  },
];

const homeGallerySlides: CarouselSlide[] = homeHeroCarouselSlides.map((s) => ({
  id: s.id,
  title: s.title,
  caption: s.caption,
  aspect: "square",
  imageFile: s.file,
  priority: s.id === "slide-1",
}));

export default function HomePage() {
  const latest = blogPosts.slice(0, 3);

  return (
    <>
      <section className="gradient-mesh relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-sage/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-[320px] w-[320px] rounded-full bg-sage/[0.05] blur-3xl" />
        <PageShell
          width="full"
          className="relative grid items-center gap-10 pb-14 pt-[calc(var(--header-h)+2rem)] sm:pb-16 sm:pt-[calc(var(--header-h)+2.5rem)] lg:grid-cols-[0.95fr_1.25fr] lg:gap-12 lg:pb-20 lg:pt-[calc(var(--header-h)+3rem)]"
        >
          <FadeIn>
            <SectionLabel>Profesyonel dil ve konuşma terapisi</SectionLabel>
            <h1 className="mt-6 max-w-xl text-balance font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
              İletişimi güçlendiren, bilimle desteklenen bir terapi deneyimi
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Merhaba, ben Zeynep Pancar. Çocuklardan yetişkinlere her yaşta; dil,
              konuşma, ses ve yutma alanlarında bireysel ihtiyaçlarınıza göre
              çalışıyorum. Hedefiniz net iletişim, güvenli yutma veya akıcı konuşma
              olsun — birlikte ulaşılabilir adımlar planlıyoruz.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/iletisim" variant="primary">
                Randevu talep et
              </ButtonLink>
              <ButtonLink href="/hizmetler" variant="secondary">
                Hizmetleri incele
              </ButtonLink>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <PhotoCarousel
              slides={homeGallerySlides}
              autoplayMs={6500}
              className="card-soft mx-auto w-full shadow-xl lg:scale-[1.03]"
            />
          </FadeIn>
        </PageShell>
      </section>

      <WaveDivider />

      <section className="relative overflow-hidden border-b border-line/25 glass-band py-20 sm:py-24">
        <DotPattern className="opacity-[0.25]" />
        <PageShell width="full" className="relative z-10">
          <FadeIn>
            <SectionLabel>Neden burada</SectionLabel>
            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Neden bu çalışma?
            </h2>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Terapi ilişkisinin temelinde güven ve ortak anlayış yatar. Süreci
              şeffaf, ölçülebilir ve size özel kurguluyorum.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {trustItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card-lift relative h-full overflow-hidden rounded-2xl border border-line/30 glass p-6 card-soft">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sage/10 blur-2xl" />
                  <IconBadge
                    icon={item.icon}
                    accent={item.accent}
                    className="relative"
                  />
                  <h3 className="relative mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="py-20 sm:py-28">
        <PageShell width="full">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <SectionLabel>Uzmanlık</SectionLabel>
              <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Uzmanlık alanları
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                Dil ve konuşma terapisi; konuşma sesinin üretimi, dilin anlaşılması
                ve kullanımı, akıcılık, ses kalitesi ve yutma işlevini kapsar. İlk
                görüşmede detaylı öykü, standart testler ve klinik gözlem ile
                profiliniz netleştirilir; ardından hedeflerinize uygun bir program
                önerilir.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ink-muted">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage/40" />
                  Gelişimsel ve edinilmiş dil-konuşma bozuklukları
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage/40" />
                  Motor konuşma, apraksi ve yapısal farklılıklar
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage/40" />
                  Ses ve solunum destekli konuşma, ses hijyeni
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage/40" />
                  Orofarengeal disfaji ve güvenli beslenme stratejileri
                </li>
              </ul>
              <Link
                href="/hizmetler"
                className="mt-8 inline-flex text-sm font-semibold text-sage underline-offset-4 hover:underline"
              >
                Tüm hizmet detayları →
              </Link>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {servicePreview.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.06}>
                  <div className="card-lift flex gap-4 rounded-2xl glass p-5 shadow-sm ring-1 ring-line/30">
                    <IconBadge
                      icon={s.icon}
                      accent={s.accent}
                      size="sm"
                      className="shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-ink">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {s.desc}
          </p>
        </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      <section className="relative overflow-hidden glass-band py-20 sm:py-24">
        <DotPattern className="opacity-[0.2]" />
        <PageShell width="full" className="relative z-10">
          <FadeIn>
            <SectionLabel center>Süreç</SectionLabel>
            <h2 className="mt-5 text-center font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Terapi süreci nasıl işler?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-ink-muted">
              Dört adımda özetlenen yapı, hem sizin hem de benim için net bir yol
              haritası sunar.
            </p>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {(
              [
                {
                  step: "01",
                  t: "Ön görüşme",
                  d: "Beklentiler, öykü ve mevcut belgelerin paylaşımı.",
                  icon: MessageCircle,
                  accent: "emerald" as IconAccent,
                },
                {
                  step: "02",
                  t: "Değerlendirme",
                  d: "Test, gözlem ve gerekiyorsa iş birliği (aile, eğitimci, hekim).",
                  icon: ClipboardList,
                  accent: "ocean" as IconAccent,
                },
                {
                  step: "03",
                  t: "Plan",
                  d: "Ölçülebilir hedefler ve seans sıklığı birlikte belirlenir.",
                  icon: Target,
                  accent: "coral" as IconAccent,
                },
                {
                  step: "04",
                  t: "Takip",
                  d: "Ev ödevleri ve ara değerlendirmelerle ilerleme izlenir.",
                  icon: RefreshCw,
                  accent: "violet" as IconAccent,
                },
              ] as const
            ).map((row, i) => (
              <FadeIn key={row.step} delay={i * 0.07}>
                <div className="card-lift relative rounded-2xl border border-line/30 glass p-6">
                  <div className="flex items-start justify-between gap-2">
                    <IconBadge
                      icon={row.icon}
                      accent={row.accent}
                      size="sm"
                    />
                    <span className="font-serif text-2xl font-light tabular-nums text-sage/30">
                      {row.step}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-ink">{row.t}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{row.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="py-20 sm:py-28">
        <PageShell
          width="full"
          className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-14"
        >
          <FadeIn>
            <PhotoFrame
              title="Terapi ortamı"
              caption="Seans ve materyallere dair bir kare"
              aspect="square"
              variant="gallery"
              className="w-full"
            >
              <div className="relative aspect-[4/3] min-h-[17rem] w-full bg-cream-muted/40 sm:min-h-[21rem]">
                <Image
                  src={aboutImageSrc(HOME_TRUST_SECTION_IMAGE)}
                  alt="Terapi ortamı"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </PhotoFrame>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
              Güven ve gizlilik
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Paylaştığınız tüm sağlık bilgileri mesleki etik kurallar ve yasal
              çerçeve doğrultusunda korunur. Onam ve bilgilendirilmiş rıza
              süreçlerinde sorularınızı yanıtlamak için zaman ayırıyorum.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Çocuk çalışmalarında ebeveyn katılımı, genel olarak daha sürdürülebilir
              sonuçlarla ilişkilidir; bu nedenle ev aktiviteleri ve geri bildirim
              döngüsü planın parçasıdır.
            </p>
          </FadeIn>
        </PageShell>
      </section>

      <section className="relative overflow-hidden border-t border-line/25 glass-band py-20 sm:py-24">
        <DotPattern className="opacity-[0.18]" />
        <PageShell width="full" className="relative z-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <FadeIn>
              <SectionLabel>Blog</SectionLabel>
              <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Blog
              </h2>
              <p className="mt-2 max-w-xl text-ink-muted">
                Dil, konuşma ve yutma sağlığı üzerine düzenli içerikler.
              </p>
            </FadeIn>
            <FadeIn>
              <ButtonLink
                href="/blog"
                variant="secondary"
                className="!px-6 !py-2.5 text-sm"
              >
                Tüm yazılar
              </ButtonLink>
            </FadeIn>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {latest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.06}>
                <article className="card-lift relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/30 glass p-6 transition hover:border-sage/25 hover:shadow-[0_12px_40px_-12px_rgba(95,122,108,0.2)]">
                  <div className="pointer-events-none absolute -right-4 top-0 h-20 w-20 text-sage/10">
                    <Newspaper className="h-full w-full" strokeWidth={1} aria-hidden />
                  </div>
                  <time
                    dateTime={post.date}
                    className="relative text-xs font-medium uppercase tracking-wider text-sage"
                  >
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-sage">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-semibold text-sage/90"
                  >
                    Devamını oku →
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="pb-24 pt-6 sm:pb-28">
        <PageShell width="full">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-sage/20 glass-strong px-8 py-14 text-center text-ink shadow-[0_24px_60px_-20px_rgba(95,122,108,0.18)] sm:px-12">
              <div className="pointer-events-none absolute -left-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-sage/15 blur-3xl" />
              <div className="pointer-events-none absolute -right-4 bottom-0 h-24 w-24 text-sage/20">
                <Sparkles className="h-full w-full" strokeWidth={1} aria-hidden />
              </div>
              <h2 className="relative font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Bir sonraki adımı birlikte planlayalım
              </h2>
              <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                Sorularınız veya yönlendirme ihtiyacınız varsa iletişim formu veya
                telefon üzerinden ulaşabilirsiniz. Size en uygun görüşme türünü
                (yüz yüze / çevrim içi) birlikte seçeriz.
              </p>
              <div className="relative mt-9">
                <ButtonLink href="/iletisim" variant="primary" className="px-10">
                  İletişime geç
                </ButtonLink>
        </div>
    </div>
          </FadeIn>
        </PageShell>
      </section>
    </>
  );
}
