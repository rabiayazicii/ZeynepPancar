import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  XCircle,
  Droplet,
  Moon,
  VolumeX,
  Ban,
  Volume2,
  Info,
  BookOpen,
  PenTool,
} from "lucide-react";
import { ClinicPhotoGrid } from "@/components/about/ClinicPhotoGrid";
import { FadeIn } from "@/components/FadeIn";
import { PageShell } from "@/components/layout/PageShell";
import { ServicesScrollHero } from "@/components/layout/ServicesScrollHero";
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
      <ServicesScrollHero
        backdropImageSrc={aboutImageSrc(SERVICES_HERO_BACKDROP_IMAGE)}
        pageTitle="Hizmetler"
        headline="Uzmanlık alanları ve süreç"
        description="Aşağıdaki başlıklar dil ve konuşma terapisinin yaygın alanlarını özetler. Size özel program ilk değerlendirme sonrasında netleşir; metinleri kendi klinik içeriğinizle güncelleyebilirsiniz."
      />

      <PageShell width="full" className="mt-14 sm:mt-20 lg:mt-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="space-y-10 lg:col-span-7 xl:col-span-8">
            {services.map((s, index) => (
              <FadeIn key={s.id} delay={index * 0.04}>
                <article
                  id={s.id}
                  className="scroll-mt-32 rounded-[1.75rem] p-6 sm:p-10 lg:p-11"
                >
                  <h2 className="font-serif text-xl font-semibold tracking-tight text-ink sm:text-[1.65rem]">
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

                  {s.id === "cocuk" && (
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="h-px w-6 bg-sage/35" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sage/90">Ebeveyn & Klinik Bilgilendirme</span>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-sky-200/60 bg-sky-50/45 p-5 shadow-sm">
                          <div className="flex items-center gap-2 text-sky-900 font-semibold text-sm">
                            <AlertCircle className="h-4 w-4 text-sky-700 shrink-0" />
                            <span>Artikülasyon Bozukluğu</span>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                            Bireylerin sesleri doğru bir şekilde üretme aşamasında zorlandıkları durumlardır. Eğer çocuğunuz bazı sesleri doğru üretmiyorsa ya da başkalarına (özellikle yabancılara) ne söylediğini anlatmakta zorlanıyorsa, çocuğunuzun daha anlaşılır ve doğru konuşması için Dil ve Konuşma Terapistinden destek alabilirsiniz.
                          </p>
                        </div>

                        <div className="rounded-2xl border border-orange-200/65 bg-orange-50/40 p-5 shadow-sm">
                          <div className="flex items-center gap-2 text-orange-950 font-semibold text-sm">
                            <AlertCircle className="h-4 w-4 text-orange-700 shrink-0" />
                            <span>Gecikmiş Konuşma & Kreş Gerçeği</span>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                            Konuşma gecikmesi olan çocuğu oyun grubu, kreş veya anaokulu <strong>konuşturmaz</strong>. Çocuk bir Dil ve Konuşma Terapistinden destek almıyorsa, bu durum onun akranlarıyla arasındaki iletişimi olumsuz etkileyecektir. Kendini anlatamayan çocuk yalnızlaşır ve hırçınlaşır. Bunun çözümü, Dil ve Konuşma Terapistine başvurmaktır.
                          </p>
                        </div>

                        <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/40 p-5 shadow-sm">
                          <div className="flex items-center gap-2 text-emerald-950 font-semibold text-sm">
                            <BookOpen className="h-4 w-4 text-emerald-700 shrink-0" />
                            <span>Okul Dönemi & İletişim</span>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                            Okul döneminde çocuklar akademik becerilerinin yanında sosyal ve iletişimsel becerileri de sıklıkla kullanırlar. Okula başlamasına rağmen hâlâ belli sesleri yanlış üreten ya da çevresindekiler dışında anlaşılmakta zorlanan çocukların; okuma yazma becerileri, sosyal ilişkileri ve akademik başarıları olumsuz etkilenebilir. Terapistle sağlıklı bir başlangıç yapabilirsiniz.
                          </p>
                        </div>

                        <div className="rounded-2xl border border-violet-200/60 bg-violet-50/40 p-5 shadow-sm">
                          <div className="flex items-center gap-2 text-violet-950 font-semibold text-sm">
                            <PenTool className="h-4 w-4 text-violet-700 shrink-0" />
                            <span>Konuştuğu Gibi Yazma</span>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                            Yazma becerisi, dil ve konuşma gelişimiyle doğrudan ilişkilidir. Çocuklar konuşurken sesleri yanlış ürettiklerinde, yazarken de hata yapabilirler (Örn: "zil" kelimesini "dil" ya da "sil" yazmak). Artikülasyon problemleri fonolojik farkındalığı ve harf-ses eşleştirmesini etkilediğinden, yazmada güçlük yaşayan çocukların dil değerlendirmesi önemlidir.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {s.id === "yetiskin" && (
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="h-px w-6 bg-sage/35" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sage/90">Nörolojik Dil Bozuklukları</span>
                      </div>
                      <div className="rounded-2xl border border-sage/20 bg-gradient-to-b from-cream-muted/75 to-background/90 p-5 shadow-sm">
                        <div className="flex items-center gap-2 text-sage-dark font-semibold text-sm">
                          <Info className="h-4.5 w-4.5 text-sage" />
                          <span>Afazi ve Alt Türleri</span>
                        </div>
                        <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                          Afazi; beyindeki hasar (tümör, travma, inme vb.) sonucu konuşma, anlama, okuma veya yazma becerilerinde bozulma yaşanan nörolojik bir dil bozukluğudur. Dilin akıcılığına bağlı olarak temel iki gruba ayrılır:
                        </p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-xl border border-rule/8 bg-black/5 p-3.5">
                            <h5 className="font-serif text-xs font-bold text-ink">Tutuk Afazi</h5>
                            <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
                              Dilin motor bileşenlerindeki bozukluk nedeniyle konuşmanın yavaş, çaba gerektiren ve sınırlı olması durumudur. Hasarın konumuna göre farklı alt klinik özellikler gösterir.
                            </p>
                          </div>
                          <div className="rounded-xl border border-rule/8 bg-black/5 p-3.5">
                            <h5 className="font-serif text-xs font-bold text-ink">Akıcı Afazi</h5>
                            <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
                              Konuşmanın akıcı ve dil bilgisine uygun olduğu, ancak sözcük seçimi ve anlamsal yapıda ciddi güçlüklerin yaşandığı durumdur. Doğru dil üretimi bozulur.
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 text-[11px] font-semibold text-sage-dark">
                          🔑 Dil ve konuşma terapistleri afazinin tipini ve şiddetini belirleyerek, bireye özel bütüncül bir rehabilitasyon süreci planlar.
                        </p>
                      </div>
                    </div>
                  )}

                  {s.id === "akicilik" && (
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="h-px w-6 bg-sage/35" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sage/90">Kekemelikte Ebeveyn & Çevre Yaklaşımı</span>
                      </div>
                      <div className="rounded-2xl border border-rose-200 bg-rose-50/20 p-5 shadow-sm">
                        <div className="flex items-center gap-2 text-rose-900 font-semibold text-sm">
                          <AlertCircle className="h-4 w-4 text-rose-700" />
                          <span>Doğru Bilinen Yanlışlar ve Önerilmeyen Tavsiyeler</span>
                        </div>
                        
                        <ul className="mt-3 space-y-2.5 text-xs text-ink-muted">
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                            <span><strong>"Yavaş konuş", "Derin nefes al", "Rahatla"</strong> gibi talimatlar vermek kekemelik üzerinde baskıyı artırarak olumsuz etki yaratır.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                            <span><strong>"Kes şunu"</strong> gibi cezalandırıcı, yüksek sesli komutlar çocukta kaygıyı tetikler ve daha fazla zarar verir.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                            <span>Çocuğun cümlesini yarıda kesip <strong>"dur ben söylerim"</strong> diyerek tamamlamak, iletişim özgüvenini zedeler.</span>
                          </li>
                        </ul>

                        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/35 p-3.5">
                          <div className="flex items-center gap-2 text-emerald-950 font-semibold text-xs">
                            <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                            <span>Bunun Yerine Ne Yapmalıyız?</span>
                          </div>
                          <p className="mt-1.5 text-[11px] leading-relaxed text-ink-muted">
                            Kendi konuşma hızımızı yavaşlatmalı, sakin ve sabırlı bir dinleme ortamı sunmalı ve cümlelerini sonuna kadar kendi hızlarında tamamlamalarına izin vermeliyiz.
                          </p>
                        </div>
                        
                        <p className="mt-3 text-[10px] leading-relaxed text-rose-900/90 font-medium">
                          ⚠️ Müdahale yetkisi ve bilimsel dayanağı olmayan yöntemlere itibar etmeyiniz. Kekemelikte en yetkin ve bilimsel müdahale Dil ve Konuşma Terapistleri tarafından sunulmaktadır.
                        </p>
                      </div>
                    </div>
                  )}

                  {s.id === "ses" && (
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="h-px w-6 bg-sage/35" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sage/90">Ses Hijyeni Rehberi</span>
                      </div>
                      <div className="rounded-2xl border border-amber-200 bg-amber-50/15 p-5 shadow-sm">
                        <h4 className="font-serif text-sm font-bold text-ink">Ses Sağlığımı Nasıl Koruyabilirim?</h4>
                        <p className="mt-1.5 text-xs text-ink-muted">
                          Ses tellerinin aşırı yorulmasını ve vokal hasarları önlemek için uygulayabileceğiniz 5 temel ses hijyeni kuralı:
                        </p>
                        
                        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                          <li className="flex items-start gap-2.5 rounded-xl border border-rule/6 bg-surface/40 p-3 shadow-inner">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold">1</span>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-ink flex items-center gap-1">
                                <Droplet className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                                Hidrasyon
                              </p>
                              <p className="mt-0.5 text-[10px] leading-relaxed text-ink-muted">Gün içinde 8-10 bardak su tüketmeye çalışın.</p>
                            </div>
                          </li>

                          <li className="flex items-start gap-2.5 rounded-xl border border-rule/6 bg-surface/40 p-3 shadow-inner">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-850 text-[11px] font-bold">2</span>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-ink flex items-center gap-1">
                                <Moon className="h-3.5 w-3.5 text-violet-600 shrink-0" />
                                Düzen & Kafein
                              </p>
                              <p className="mt-0.5 text-[10px] leading-relaxed text-ink-muted">Uyku düzeninize dikkat edin ve kafein tüketimini azaltın.</p>
                            </div>
                          </li>

                          <li className="flex items-start gap-2.5 rounded-xl border border-rule/6 bg-surface/40 p-3 shadow-inner">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-850 text-[11px] font-bold">3</span>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-ink flex items-center gap-1">
                                <VolumeX className="h-3.5 w-3.5 text-orange-650 shrink-0" />
                                Boğaz Temizleme
                              </p>
                              <p className="mt-0.5 text-[10px] leading-relaxed text-ink-muted">Sık ve şiddetli boğaz temizleme davranışından kaçının.</p>
                            </div>
                          </li>

                          <li className="flex items-start gap-2.5 rounded-xl border border-rule/6 bg-surface/40 p-3 shadow-inner">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-850 text-[11px] font-bold">4</span>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-ink flex items-center gap-1">
                                <Ban className="h-3.5 w-3.5 text-rose-600 shrink-0" />
                                Temiz Hava
                              </p>
                              <p className="mt-0.5 text-[10px] leading-relaxed text-ink-muted">Sigara kullanmayın ve dumanlı ortamlardan uzak durun.</p>
                            </div>
                          </li>

                          <li className="flex items-start gap-2.5 rounded-xl border border-rule/6 bg-surface/40 p-3 shadow-inner sm:col-span-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">5</span>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-ink flex items-center gap-1">
                                <Volume2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                                Ses Kontrolü
                              </p>
                              <p className="mt-0.5 text-[10px] leading-relaxed text-ink-muted">Bağırma davranışından ve gürültülü ortamlarda yüksek sesle konuşmaktan kaçının.</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  )}
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
