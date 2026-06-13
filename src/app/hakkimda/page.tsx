import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  Eye,
  Handshake,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { AboutHeroPortraitGallery } from "@/components/about/AboutHeroPortraitGallery";
import { ClinicPhotoGrid } from "@/components/about/ClinicPhotoGrid";
import { EducationCertificatesBlock } from "@/components/about/EducationCertificatesBlock";
import { FadeIn } from "@/components/FadeIn";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { highlightCta3d, softRoundLink3d } from "@/lib/highlight-cta-3d";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Zeynep Pancar — dil ve konuşma terapisti. Eğitim, yaklaşım ve mesleki değerler.",
};

const values: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Saygı ve onur",
    body: "Her bireyin kendi hızında ilerleme hakkına saygı duyarım.",
    icon: Heart,
  },
  {
    title: "Şeffaflık",
    body: "Hedefler, seans sıklığı ve beklentiler açıkça konuşulur.",
    icon: Eye,
  },
  {
    title: "Kanıt",
    body: "Yöntem seçiminde güvenilir kaynaklara ve klinik deneyime dayanırım.",
    icon: BookMarked,
  },
  {
    title: "İş birliği",
    body: "Aile ve diğer uzmanlarla koordinasyon, sürdürülebilir başarıyı artırır.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-clip">
      <section className="relative overflow-hidden bg-gradient-to-br from-cream-muted/55 via-background to-highlight/15">
        <div
          className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-highlight/30 blur-3xl sm:h-80 sm:w-80 lg:top-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-sage/10 blur-3xl"
          aria-hidden
        />
        <PageShell
          width="full"
          className="relative grid min-w-0 gap-10 pb-12 pt-[calc(var(--header-h)+2.25rem)] sm:gap-12 lg:grid-cols-[1fr_minmax(0,0.95fr)] lg:items-start lg:gap-14 lg:pb-16 lg:pt-[calc(var(--header-h)+3rem)]"
        >
          <div className="min-w-0 max-w-xl lg:pt-2">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage">
                Hakkımda
              </p>
              <h1 className="mt-5 border-l-[3px] border-sage pl-4 font-serif text-[2.15rem] font-medium leading-[1.06] tracking-tight text-ink sm:pl-5 sm:text-5xl lg:text-[3.25rem]">
                Zeynep Pancar
              </h1>
              <p className="mt-4 inline-flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]">
                <span className="rounded-full border border-sage/35 bg-cream-muted/90 px-3 py-1 text-sage-dark shadow-sm">
                  Dil ve Konuşma Terapisti
                </span>
                <span className="rounded-full border border-sage/35 bg-cream-muted/90 px-3 py-1 text-sage-dark shadow-sm">
                  Fizyoterapist
                </span>
                <span className="rounded-full border border-emerald-300/40 bg-emerald-50/80 px-3 py-1 text-emerald-800 shadow-sm">
                  Yüksek Onur Öğrencisi Mezunu
                </span>
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-muted sm:text-lg font-medium">
                İletişimin ve hareketin her yaşta hak olduğuna inanıyorum; terapi ise bu hakları desteklemenin bilimsel, bütüncül ve insani yoludur.
              </p>
              <div className="mt-9 space-y-6 text-[15px] leading-[1.75] text-ink-muted sm:text-[16px] md:text-[17px]">
                <p className="text-pretty text-ink/95">
                  Dil ve Konuşma Terapisti ve Fizyoterapist Zeynep Pancar, lisans eğitimini 2023 yılında İstinye Üniversitesi Fizyoterapi ve Rehabilitasyon bölümünde tamamlamıştır. 2024 yılında ise Dil ve Konuşma Terapisi lisans programından çift ana dal yaparak <strong>“Yüksek Onur Öğrencisi”</strong> unvanıyla mezun olmuştur. Hâlen Üsküdar Üniversitesi’nde yüksek lisans eğitimine devam etmektedir.
                </p>
                <p className="text-pretty">
                  Eğitim süreci boyunca hem fizyoterapi hem de dil ve konuşma terapisi alanlarında; çeşitli özel eğitim ve rehabilitasyon merkezleri, klinikler ve hastanelerde aktif olarak gözlem ve uygulama stajları gerçekleştirmiştir. Bu süreçte farklı yaş grupları ve çeşitli ihtiyaçlara sahip bireylerle çalışma deneyimi kazanmıştır.
                </p>
                <p className="text-pretty">
                  Mesleki gelişimine önem veren Zeynep Pancar, birçok kongre, seminer ve eğitim programına katılarak güncel ve bilimsel yaklaşımları yakından takip etmektedir.
                </p>
                <p className="text-pretty">
                  Sakarya’da terapi ve danışmanlık hizmeti sunan Zeynep Pancar; danışanlarının bireysel ihtiyaçlarına uygun, bütüncül ve bilimsel temelli terapi planları oluşturmaktadır. Hem yüz yüze hem de online terapi seçenekleriyle hizmet vermekte; süreçlerinde empatik, anlaşılır ve çözüm odaklı bir yaklaşım benimsemektedir.
                </p>
                
                <div className="mt-8 rounded-2xl border border-sage/20 bg-cream/40 p-4.5 text-center shadow-inner sm:p-5">
                  <p className="text-pretty font-semibold text-ink sm:text-[15px] flex items-center justify-center gap-1.5">
                    Detaylı bilgi almak veya randevu oluşturmak için iletişime geçebilirsiniz. 📩
                  </p>
                </div>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <ButtonLink
                  href="/iletisim"
                  variant="primary"
                  className={cn(
                    "!bg-highlight !text-ink hover:!bg-cream-muted",
                    highlightCta3d,
                  )}
                >
                  İletişim
                </ButtonLink>
                <Link
                  href="/hizmetler"
                  className={cn(
                    "group inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-sage-dark sm:px-5 sm:py-2.5 sm:text-sm",
                    softRoundLink3d,
                  )}
                >
                  Hizmetler
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn
            delay={0.1}
            className="relative flex min-w-0 w-full flex-col items-center lg:items-stretch lg:pt-2"
          >
            <div className="relative w-full flex justify-center">
              <div
                className="pointer-events-none absolute inset-x-0 -top-4 bottom-8 -z-10 max-w-full rounded-[2rem] bg-gradient-to-b from-highlight/35 to-transparent blur-2xl sm:inset-x-2 lg:inset-x-0"
                aria-hidden
              />
              <AboutHeroPortraitGallery />
            </div>

            {/* Eğitim Kronolojisi / Timeline */}
            <div className="mt-8 mx-auto w-full max-w-[min(100%,20rem)] sm:max-w-[min(100%,24rem)] lg:max-w-[min(100%,28rem)] xl:max-w-[min(100%,32rem)] rounded-2xl border border-sage/18 bg-gradient-to-b from-cream-muted/70 via-background/95 to-cream-muted/50 p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <h3 className="font-serif text-sm font-bold text-ink flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-sage" />
                Eğitim Kronolojisi
              </h3>
              <div className="mt-5 space-y-4">
                {/* Yüksek Lisans */}
                <div className="relative pl-5 border-l-2 border-sage/24 pb-4">
                  <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-sage shadow-[0_0_0_3px_rgba(95,122,108,0.15)]" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-sage">Hâlen Devam Ediyor</span>
                  <h4 className="text-xs font-bold text-ink mt-0.5">Yüksek Lisans Eğitimi</h4>
                  <p className="text-[11px] leading-relaxed text-ink-muted mt-0.5">Üsküdar Üniversitesi — Dil ve Konuşma Terapisi</p>
                </div>
                {/* DKT Lisans */}
                <div className="relative pl-5 border-l-2 border-sage/24 pb-4">
                  <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-sage" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-sage">2024 Mezuniyeti</span>
                  <h4 className="text-xs font-bold text-ink mt-0.5">Dil ve Konuşma Terapisi Lisans Programı</h4>
                  <p className="text-[11px] leading-relaxed text-ink-muted mt-0.5">İstinye Üniversitesi (Çift Ana Dal, <strong>Yüksek Onur Öğrencisi</strong> unvanı ile mezuniyet)</p>
                </div>
                {/* FTR Lisans */}
                <div className="relative pl-5 border-l-2 border-sage/24 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-sage" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-sage">2023 Mezuniyeti</span>
                  <h4 className="text-xs font-bold text-ink mt-0.5">Fizyoterapi ve Rehabilitasyon Lisans Programı</h4>
                  <p className="text-[11px] leading-relaxed text-ink-muted mt-0.5">İstinye Üniversitesi</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="col-span-full min-w-0 border-t border-sage/20 pt-8 sm:pt-10 lg:pt-11">
            <FadeIn delay={0.06}>
              <EducationCertificatesBlock compact />
            </FadeIn>
          </div>
        </PageShell>
      </section>

      <section className="border-y border-sage-dark/35 bg-sage py-14 text-cream-muted sm:py-16 lg:py-20">
        <PageShell width="full" className="min-w-0">
          <FadeIn delay={0.06}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cream-muted/90">
              Yaklaşım
            </p>
            <h2 className="mt-4 border-l-[3px] border-cream-muted/55 pl-4 font-serif text-xl font-medium tracking-tight text-cream-muted sm:pl-5 sm:text-4xl">
              Çalışma değerlerim
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-cream-muted/90 sm:text-[17px] md:text-lg">
              Terapi ilişkisinde öncelediğim ilkeler: güven, netlik ve iş birliği.
              Aşağıdaki dört başlık, günlük pratiğe nasıl yansıdığını özetler.
            </p>
          </FadeIn>
          <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.08 + i * 0.04}>
                <li className="flex h-full flex-col rounded-xl border border-cream-muted/30 bg-black/12 px-4 py-5 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,251,245,0.12)] ring-1 ring-cream-muted/10 transition duration-300 hover:-translate-y-0.5 hover:border-cream-muted/45 hover:bg-black/[0.16] sm:px-5 sm:py-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cream-muted/35 bg-cream-muted/12 text-cream-muted">
                    <v.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="mt-4 font-serif text-lg font-medium text-cream-muted sm:text-2xl">
                    {v.title}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-muted/90 sm:text-[15px]">
                    {v.body}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </PageShell>
      </section>

      <section className="overflow-x-clip border-b border-rule/12 bg-gradient-to-b from-cream-muted/40 via-background to-cream-muted/25 py-14 sm:py-16 lg:py-20">
        <PageShell width="full" className="min-w-0">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sage">
              Ortam
            </p>
            <h2 className="mt-4 max-w-2xl border-l-[3px] border-sage pl-4 font-serif text-xl font-medium tracking-tight text-ink sm:pl-5 sm:text-4xl">
              Çalışma ortamından kareler
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-[17px] md:text-lg">
              Seansların geçtiği alan; sakin, düzenli ve yaşa uygun materyallerle
              desteklenir. Görüntüler, klinik gündelikten kısa bir kesit sunar.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.08}
            className="mt-10 w-full min-w-0 max-w-full sm:mt-12"
          >
            <ClinicPhotoGrid
              size="large"
              className="justify-items-stretch sm:grid-cols-2 lg:grid-cols-2"
            />
          </FadeIn>
        </PageShell>
      </section>

      <section className="border-t border-sage-dark/40 bg-sage-dark py-16 text-cream-muted sm:py-20">
        <PageShell width="content" className="text-center">
          <FadeIn>
            <BookOpen
              className="mx-auto h-9 w-9 text-cream-muted/90"
              strokeWidth={1.25}
              aria-hidden
            />
            <h2 className="mx-auto mt-6 max-w-md rounded-xl border border-cream-muted/40 bg-black/14 px-4 py-2.5 font-serif text-xl font-medium tracking-tight text-cream-muted shadow-[0_14px_36px_-18px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,251,245,0.1)] sm:mt-7 sm:px-5 sm:py-3 sm:text-3xl">
              Sorularınız mı var?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream-muted/85 sm:text-[15px]">
              Hizmetler veya süreç hakkında netleştirmek istediğiniz bir nokta varsa
              yazabilir veya arayabilirsiniz.
            </p>
            <div className="mt-10">
              <ButtonLink
                href="/iletisim"
                variant="primary"
                className={cn(
                  "!bg-highlight !text-ink hover:!bg-cream-muted",
                  highlightCta3d,
                )}
              >
                İletişime geç
              </ButtonLink>
            </div>
          </FadeIn>
        </PageShell>
      </section>
    </main>
  );
}
