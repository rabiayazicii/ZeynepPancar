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
      <section className="relative overflow-hidden bg-gradient-to-br from-cream-muted/40 via-background to-highlight/10">
        {/* Background decorative elements */}
        <div
          className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-highlight/25 blur-3xl sm:h-80 sm:w-80 lg:top-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-sage/8 blur-3xl"
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
              <h1 className="mt-5 border-l-[3.5px] border-sage pl-4 font-serif text-[2.15rem] font-medium leading-[1.06] tracking-tight text-ink sm:pl-5 sm:text-5xl lg:text-[3.25rem]">
                Zeynep Pancar
              </h1>

              <div className="mt-8 border-l-2 border-sage/35 pl-4 sm:pl-5">
                <p className="font-serif italic text-lg sm:text-[1.3rem] leading-relaxed text-ink/90">
                  “İletişimin ve hareketin her yaşta hak olduğuna inanıyorum; terapi ise bu hakları desteklemenin bilimsel, bütüncül ve insani yoludur.”
                </p>
              </div>

              <div className="mt-8 space-y-6 text-[15px] leading-[1.78] text-ink-muted sm:text-[16px] md:text-[17px]">
                <p className="text-pretty text-ink/95">
                  Dil ve Konuşma Terapisti ve Fizyoterapist Zeynep Pancar, lisans eğitimini 2023 yılında İstinye Üniversitesi Fizyoterapi ve Rehabilitasyon bölümünde tamamlamıştır. 2024 yılında ise Dil ve Konuşma Terapisi lisans programından çift ana dal yaparak <strong className="text-ink font-semibold">“Yüksek Onur Öğrencisi”</strong> unvanıyla mezun olmuştur. Hâlen Üsküdar Üniversitesi’nde yüksek lisans eğitimine devam etmektedir.
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
                
                {/* Modernized interactive card */}
                <div className="mt-10 rounded-[1.5rem] border border-sage/12 bg-gradient-to-r from-surface/80 to-cream-muted/30 p-6 shadow-[0_12px_40px_rgba(95,122,108,0.05)] backdrop-blur-sm flex flex-col sm:flex-row items-center gap-5 sm:justify-between text-left">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sage-light/10 text-sage border border-sage/15">
                      <BookOpen className="h-5.5 w-5.5" strokeWidth={1.25} />
                    </span>
                    <div>
                      <h4 className="font-serif text-[15px] font-bold text-ink">Bireysel Terapi ve Danışmanlık</h4>
                      <p className="text-[11px] text-ink-muted mt-0.5">Yüz yüze veya online seçeneklerle bilgi alın.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <ButtonLink
                      href="/iletisim"
                      variant="primary"
                      className={cn(
                        "!bg-highlight !text-ink hover:!bg-cream-muted text-xs py-2.5 px-4.5 rounded-xl shadow-sm hover:scale-[1.02] transition-transform duration-300",
                        highlightCta3d,
                      )}
                    >
                      Randevu Al
                    </ButtonLink>
                    <Link
                      href="/hizmetler"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sage-dark hover:text-sage transition-colors px-2 py-2"
                    >
                      Hizmetler
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
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
            <div className="mt-8 mx-auto w-full max-w-[min(100%,20rem)] sm:max-w-[min(100%,24rem)] lg:max-w-[min(100%,28rem)] xl:max-w-[min(100%,32rem)] rounded-3xl border border-sage/15 bg-gradient-to-b from-surface via-cream-muted/95 to-surface/90 p-6 sm:p-7 shadow-[0_12px_40px_rgba(95,122,108,0.04)]">
              <h3 className="font-serif text-sm font-bold text-ink flex items-center gap-2">
                <BookOpen className="h-4.5 w-4.5 text-sage" />
                Eğitim Kronolojisi
              </h3>
              <div className="mt-6 space-y-5">
                {/* Yüksek Lisans */}
                <div className="relative pl-6 border-l-2 border-sage/20 pb-5">
                  <span className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full border border-sage bg-surface shadow-[0_0_0_4px_rgba(95,122,108,0.1)] animate-pulse" />
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-sage">Hâlen Devam Ediyor</span>
                  <h4 className="text-xs font-bold text-ink mt-1">Yüksek Lisans Eğitimi</h4>
                  <p className="text-[11px] leading-relaxed text-ink-muted mt-0.5">Üsküdar Üniversitesi — Dil ve Konuşma Terapisi</p>
                </div>
                {/* DKT Lisans */}
                <div className="relative pl-6 border-l-2 border-sage/20 pb-5">
                  <span className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full border border-sage/40 bg-sage" />
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-sage">2024 Mezuniyeti</span>
                  <h4 className="text-xs font-bold text-ink mt-1">Dil ve Konuşma Terapisi Lisans Programı</h4>
                  <p className="text-[11px] leading-relaxed text-ink-muted mt-0.5">İstinye Üniversitesi (Çift Ana Dal, <strong>Yüksek Onur Öğrencisi</strong> unvanı ile mezuniyet)</p>
                </div>
                {/* FTR Lisans */}
                <div className="relative pl-6 border-l-2 border-sage/20 last:pb-0">
                  <span className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full border border-sage/40 bg-sage" />
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-sage">2023 Mezuniyeti</span>
                  <h4 className="text-xs font-bold text-ink mt-1">Fizyoterapi ve Rehabilitasyon Lisans Programı</h4>
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

      <section className="relative overflow-hidden bg-gradient-to-br from-sage-dark via-sage to-sage-dark/95 py-16 text-cream-muted sm:py-20 lg:py-24 border-y border-sage-dark/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,250,195,0.06),transparent_60%)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cream/5 blur-3xl" aria-hidden />
        <PageShell width="full" className="relative z-10 min-w-0">
          <FadeIn delay={0.06}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-highlight/85">
              Yaklaşım
            </p>
            <h2 className="mt-4 border-l-4 border-highlight pl-4 font-serif text-2xl font-medium tracking-tight text-cream-muted sm:pl-5 sm:text-4xl lg:text-5xl">
              Çalışma değerlerim
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-cream-muted/85 sm:text-[17px] md:text-lg">
              Terapi ilişkisinde öncelediğim ilkeler: güven, netlik ve iş birliği.
              Aşağıdaki dört başlık, günlük pratiğe nasıl yansıdığını özetler.
            </p>
          </FadeIn>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.08 + i * 0.04}>
                <li className="group flex h-full flex-col rounded-2xl border border-white/12 bg-white/5 px-5 py-6 shadow-[0_12px_36px_-16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09] hover:border-white/20 sm:px-6 sm:py-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-highlight transition-all duration-300 group-hover:scale-105 group-hover:bg-highlight group-hover:text-sage-dark">
                    <v.icon className="h-5.5 w-5.5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <p className="mt-5 font-serif text-lg font-bold text-cream-muted sm:text-xl">
                    {v.title}
                  </p>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cream-muted/80">
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
