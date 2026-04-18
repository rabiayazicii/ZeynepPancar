import type { Metadata } from "next";
import { BookMarked, Eye, Handshake, Heart, Sparkles } from "lucide-react";
import {
  IconBadge,
  type IconAccent,
} from "@/components/decorative/IconBadge";
import { AboutHeroPortraitGallery } from "@/components/about/AboutHeroPortraitGallery";
import { EducationCertificatesBlock } from "@/components/about/EducationCertificatesBlock";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Zeynep Pancar — dil ve konuşma terapisti. Eğitim, yaklaşım ve mesleki değerler.",
};

export default function AboutPage() {
  return (
    <main className="pb-24 lg:pb-32">
      <PageHero
        kicker="Hakkımda"
        title="Zeynep Pancar"
        description="İletişimin her yaşta hak olduğuna inanıyorum; terapi ise bu hakkı desteklemenin bilimsel ve insani yolu."
        descriptionPlain
        shellClassName="!pt-[calc(var(--header-h)+2rem)] !pb-12 sm:!pt-[calc(var(--header-h)+2.5rem)] sm:!pb-14 lg:!pt-[calc(var(--header-h)+3rem)] lg:!pb-16"
        aside={<AboutHeroPortraitGallery />}
      >
        <div className="mt-6 max-w-2xl sm:mt-8">
          <div className="space-y-6 border-l-[3px] border-sage/35 pl-5 text-[0.97rem] leading-[1.82] tracking-[0.01em] text-ink-muted sm:pl-7 sm:text-[17px] sm:leading-[1.78]">
            <p className="text-pretty text-ink/90">
              Dil ve konuşma terapisti olarak çocuklar, ergenler ve yetişkinlerle
              çalışıyorum. Her danışanın hikâyesi farklı olduğu için önce dinler,
              sonra birlikte hedefler belirlerim. Tedavi planlarında güncel
              araştırmalara dayalı yöntemleri; günlük yaşamınıza uygun, uygulanabilir
              önerilerle birleştiriyorum.
            </p>
            <p className="text-pretty">
              Mesleki gelişimi sürdürmek için düzenli eğitimlere katılıyor; gerektiğinde
              psikolog, özel eğitimci, kulak burun boğaz ve nöroloji gibi disiplinlerle
              iş birliğini önemsiyorum. Böylece sizi bütünsel bir bakış açısıyla
              destekleyebiliyorum.
            </p>
          </div>
        </div>
      </PageHero>

      <PageShell width="full" className="mt-12 sm:mt-16 lg:mt-20">
        <div className="mx-auto max-w-5xl space-y-14 sm:space-y-16 lg:space-y-20">
          <FadeIn delay={0.05}>
            <EducationCertificatesBlock />
          </FadeIn>

          <FadeIn delay={0.12}>
            <section className="relative">
              <div className="mb-2 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-sage/35" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage/90">
                  Yaklaşım
                </span>
              </div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
                Çalışma değerlerim
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
                Terapi ilişkisinde öncelediğim ilkeler; güven, netlik ve iş birliği
                üzerine kuruludur.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
                {(
                  [
                    {
                      t: "Saygı ve onur",
                      d: "Her bireyin kendi hızında ilerleme hakkına saygı duyarım.",
                      icon: Heart,
                      accent: "rose" as IconAccent,
                    },
                    {
                      t: "Şeffaflık",
                      d: "Hedefler, seans sıklığı ve beklentiler açıkça konuşulur.",
                      icon: Eye,
                      accent: "ocean" as IconAccent,
                    },
                    {
                      t: "Kanıt",
                      d: "Yöntem seçiminde güvenilir kaynaklara ve klinik deneyime dayanırım.",
                      icon: BookMarked,
                      accent: "emerald" as IconAccent,
                    },
                    {
                      t: "İş birliği",
                      d: "Aile ve diğer uzmanlarla koordinasyon, sürdürülebilir başarıyı artırır.",
                      icon: Handshake,
                      accent: "amber" as IconAccent,
                    },
                  ] as const
                ).map((item) => (
                  <div
                    key={item.t}
                    className="card-lift group flex gap-4 rounded-2xl border border-line/25 bg-gradient-to-br from-white/25 to-transparent p-5 shadow-sm ring-1 ring-sage/10 transition hover:border-sage/25 hover:shadow-md hover:shadow-sage/10 sm:p-6"
                  >
                    <IconBadge
                      icon={item.icon}
                      accent={item.accent}
                      size="sm"
                      className="shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-ink">{item.t}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className="relative pb-2">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-sage/20 glass-strong px-6 py-10 text-center text-ink shadow-[0_20px_50px_-18px_rgba(95,122,108,0.16)] sm:px-10 sm:py-12">
                <div
                  className="pointer-events-none absolute -left-6 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-sage/12 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-2 bottom-0 h-20 w-20 text-sage/18"
                  aria-hidden
                >
                  <Sparkles className="h-full w-full" strokeWidth={1} />
                </div>
                <h2 className="relative font-serif text-xl font-semibold tracking-tight sm:text-2xl">
                  Sorularınız veya yönlendirme ihtiyacınız mı var?
                </h2>
                <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                  Hizmetler veya süreç hakkında netleştirmek istediğiniz bir nokta varsa
                  iletişim sayfasından yazabilir veya arayabilirsiniz.
                </p>
                <div className="relative mt-7">
                  <ButtonLink href="/iletisim" variant="primary" className="px-8 sm:px-10">
                    İletişime geç
                  </ButtonLink>
                </div>
              </div>
            </section>
          </FadeIn>
        </div>
      </PageShell>
    </main>
  );
}
