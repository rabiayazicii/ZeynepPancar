import type { Metadata } from "next";
import Link from "next/link";
import { ClinicPhotoGrid } from "@/components/about/ClinicPhotoGrid";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { SERVICES_HERO_BACKDROP_IMAGE, aboutImageSrc } from "@/lib/about-images";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Çocuk ve yetişkin dil-konuşma terapisi, akıcılık, ses, yutma ve değerlendirme hizmetleri.",
};

const services = [
  {
    id: "cocuk",
    title: "Çocuk dil ve konuşma terapisi",
    summary:
      "Erken dönem dil gecikmesi, fonolojik bozukluklar, pragmatik dil ve okuryazarlığa hazırlık süreçlerinde destek.",
    details: [
      "Yaş ve gelişim düzeyine uygun oyun temelli ve yapılandırılmış aktiviteler kullanılır.",
      "Ebeveyn eğitimi ve ev programı, genelleme için kritik öneme sahiptir.",
      "Okul öncesi ve okul çağı çocukları için iletişim ortamının düzenlenmesi konusunda rehberlik sunulur.",
    ],
  },
  {
    id: "yetiskin",
    title: "Yetişkin dil ve konuşma bozuklukları",
    summary:
      "Afazi, motor konuşma bozuklukları, pragmatik zorluklar ve travma sonrası iletişim rehabilitasyonu.",
    details: [
      "Bilişsel-lingüistik beceriler, alternatif iletişim seçenekleri ve günlük yaşam aktiviteleri hedeflenir.",
      "Bakım veren ve yakınlar için iletişim stratejileri paylaşılır.",
      "İhtiyaç halinde multidisipliner takip önerilir.",
    ],
  },
  {
    id: "akicilik",
    title: "Akıcılık (kekemelik) terapisi",
    summary:
      "Konuşma akıcılığını etkileyen durumlarda bireysel değerlendirme ve kanıta dayalı teknikler.",
    details: [
      "Yaşa uygun yaklaşım: çocuklarda genellikle dolaylı stratejiler; yetişkinlerde doğrudan teknikler.",
      "Konuşma özgüveni ve iletişim katılımı ölçülebilir hedeflere bağlanır.",
      "Aile ve çevre ile bilgilendirme oturumları planlanabilir.",
    ],
  },
  {
    id: "ses",
    title: "Ses bozuklukları ve ses hijyeni",
    summary:
      "Ses kısıklığı, fonasyon bozuklukları ve mesleki ses kullananlar için koruyucu ve rehabilitatif çalışmalar.",
    details: [
      "Solunum desteği, resonans ve vokal ısınma egzersizleri kişiye özel düzenlenir.",
      "Gerektiğinde KBB ile koordinasyon önerilir.",
    ],
  },
  {
    id: "yutma",
    title: "Yutma (orofarengeal disfaji) değerlendirmesi",
    summary:
      "Güvenli oral beslenme ve yutma işlevi için klinik inceleme ve strateji önerileri.",
    details: [
      "Öykü, oral motor muayenesi ve gözlem temelli değerlendirme.",
      "Pozisyon, kıvam ve porsiyon önerileri; gerektiğinde ileri inceleme için yönlendirme.",
    ],
  },
  {
    id: "degerlendirme",
    title: "Kapsamlı dil-konuşma değerlendirmesi",
    summary:
      "Tek seferlik veya tanı sürecine destek amaçlı detaylı test bataryaları ve raporlama.",
    details: [
      "Standart ölçekler ve gözlemsel analiz ile güçlü yönler ve destek alanları netleştirilir.",
      "Yazılı geri bildirim ve öneriler paylaşılır.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pb-24 lg:pb-32">
      <PageHero
        kicker="Hizmetler"
        title="Uzmanlık alanları ve süreç"
        description="Aşağıdaki başlıklar dil ve konuşma terapisinin yaygın alanlarını özetler. Size özel program ilk değerlendirme sonrasında netleşir; metinleri kendi klinik içeriğinizle güncelleyebilirsiniz."
        backdropImageSrc={aboutImageSrc(SERVICES_HERO_BACKDROP_IMAGE)}
        backdropStrongTextScrim
      />

      <PageShell width="full" className="mt-14 sm:mt-20 lg:mt-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="space-y-10 lg:col-span-7 xl:col-span-8">
            {services.map((s, index) => (
              <FadeIn key={s.id} delay={index * 0.04}>
                <article
                  id={s.id}
                  className="scroll-mt-32 rounded-[1.75rem] p-8 sm:p-10 lg:p-11"
                >
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-[1.65rem]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
                    {s.summary}
                  </p>
                  <ul className="mt-7 space-y-3.5 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                    {s.details.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage/50" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>

          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="space-y-8 lg:sticky lg:top-28">
              <FadeIn>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-sage">
                    Bekleme ve terapi alanı
                  </p>
                  <h2 className="mt-2 font-serif text-xl font-semibold tracking-tight text-ink">
                    Klinikten kareler
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                    Çalışma ortamı ve terapi sürecinden seçilmiş görüntüler.
                  </p>
                  <ClinicPhotoGrid className="mt-5" />
                </div>
              </FadeIn>
              <FadeIn delay={0.08}>
                <div className="rounded-2xl p-7">
                  <p className="font-serif text-lg font-semibold text-sage">
                    Sık sorulanlar
                  </p>
                  <ul className="mt-5 space-y-5 text-sm leading-relaxed text-ink-muted">
                    <li>
                      <strong className="text-ink">Seans süresi:</strong> Genellikle
                      45–60 dk (yaşa ve ihtiyaca göre değişir).
                    </li>
                    <li>
                      <strong className="text-ink">Online seans:</strong> Uygun görülen
                      durumlarda çevrim içi görüşme mümkündür.
                    </li>
                    <li>
                      <strong className="text-ink">Rapor:</strong> İstenmesi halinde özet
                      rapor veya kurum yazısı hazırlanabilir.
                    </li>
                  </ul>
                  <Link
                    href="/iletisim"
                    className="btn-primary mt-8 w-full py-3.5 text-sm"
                  >
                    Randevu için yazın
                  </Link>
                </div>
              </FadeIn>
            </div>
          </aside>
        </div>
      </PageShell>
    </main>
  );
}
