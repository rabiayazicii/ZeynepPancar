"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  BookOpen,
  PenTool,
  Info,
  Camera,
  X,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { aboutGalleryFiles, aboutImageSrc } from "@/lib/about-images";

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
    titleColor: "text-[#4a8c61]",
    iconBg: "bg-[#d4edda]",
    iconColor: "text-[#4a8c61]",
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
    titleColor: "text-[#4a6b8c]",
    iconBg: "bg-[#c8dcee]",
    iconColor: "text-[#4a6b8c]",
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
    titleColor: "text-[#8c5a4a]",
    iconBg: "bg-[#edcfca]",
    iconColor: "text-[#8c5a4a]",
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
    titleColor: "text-[#4a6b8c]",
    iconBg: "bg-[#c8dcee]",
    iconColor: "text-[#4a6b8c]",
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
    titleColor: "text-[#8c7a4a]",
    iconBg: "bg-[#e8dcc8]",
    iconColor: "text-[#8c7a4a]",
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
    titleColor: "text-[#4a8c61]",
    iconBg: "bg-[#d4edda]",
    iconColor: "text-[#4a8c61]",
  },
] as const;

const categoryColors: Record<string, string> = {
  "Gelişimsel Yaklaşımlar": "bg-sage/10 text-sage-dark border border-sage/20",
  "Dil & Konuşma": "bg-sage/10 text-sage-dark border border-sage/20",
  "Klinik Değerlendirme": "bg-sage/10 text-sage-dark border border-sage/20",
  "Yutma & Beslenme": "bg-sage/10 text-sage-dark border border-sage/20",
  "Akıcılık Terapisi": "bg-sage/10 text-sage-dark border border-sage/20",
};

export function ServicesInteractiveLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Framer Motion Hover/Rest variants for main article card
  const mainCardVariants = {
    rest: {},
    hover: {},
  } as const;

  // Stagger transition for child elements
  const staggerContainerVariants = {
    rest: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    hover: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  } as const;

  // Variants for bullet items
  const liVariants = {
    rest: { x: 0, opacity: 0.8 },
    hover: { x: 4, opacity: 1, transition: { type: "spring", stiffness: 180, damping: 14 } },
  } as const;

  // Variants for nested boxes ("kutucukların içindeki kutucuklar")
  const innerCardVariants = {
    rest: { opacity: 0.8, scale: 0.98, y: 3 },
    hover: { opacity: 1, scale: 1.02, y: -2, transition: { type: "spring", stiffness: 140, damping: 12 } },
  } as const;

  return (
    <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
      
      {/* Centered Modern Modal Overlay for Clinic Gallery */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121614]/30 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-white/95 rounded-[2.5rem] border border-sage/18 shadow-2xl glass overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-line/20 px-6 py-4 bg-surface/50">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#c8dcee]/50 border border-[#a0b8d5]/40 text-[#4a6b8c]">
                    <Camera className="h-4.5 w-4.5" />
                  </span>
                  <h4 className="font-serif text-lg font-bold text-ink">Terapi Odası Detayları</h4>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5 text-ink-muted hover:text-ink transition"
                  aria-label="Kapat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body (Scrollable List) */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
                {aboutGalleryFiles.map((file, i) => (
                  <div key={file} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line/30 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
                    <Image
                      src={aboutImageSrc(file)}
                      alt={`Klinik ortamı detaylı görsel ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sol Sütun: Hizmet Listeleri */}
      <div className="space-y-10 lg:col-span-7 xl:col-span-8">
        {services.map((s, index) => (
          <FadeIn key={s.id} delay={index * 0.04}>
            <motion.article
              id={s.id}
              initial="rest"
              whileHover="hover"
              variants={mainCardVariants}
              className="scroll-mt-32 rounded-[2.5rem] border border-sage/12 bg-surface/50 p-8 sm:p-10 shadow-[0_20px_50px_rgba(95,122,108,0.04),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_35px_70px_rgba(95,122,108,0.12)] hover:-translate-y-2.5 transition-all duration-500 glass cursor-default"
            >
              <h2 className={`font-serif text-xl font-bold tracking-tight sm:text-2xl transition-colors ${s.titleColor}`}>
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                {s.summary}
              </p>
              
              <motion.ul 
                variants={staggerContainerVariants}
                className="mt-6 space-y-3.5 text-xs sm:text-sm leading-relaxed"
              >
                {s.details.map((line) => (
                  <motion.li key={line} variants={liVariants} className="flex items-start gap-2.5">
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-current shadow-sm ${s.iconColor}`} />
                    <span className="text-ink/85">{line}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Çocuk Dil ve Konuşma nested cards (Original Texts restored) */}
              {s.id === "cocuk" && (
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-6 bg-[#4a8c61]/40" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4a8c61]">Ebeveyn & Klinik Bilgilendirme</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <motion.div variants={innerCardVariants} className="rounded-2xl border border-[#d4edda]/60 bg-[#EEF5F0]/50 p-5 shadow-sm transition-all hover:border-[#a8d5b5]/60 hover:bg-[#d4edda]/40">
                      <div className="flex items-center gap-2 text-[#4a8c61] font-bold text-sm">
                        <AlertCircle className="h-4 w-4 shrink-0 text-[#4a8c61]" />
                        <span>Artikülasyon Bozukluğu</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                        Bireylerin sesleri doğru bir şekilde üretme aşamasında zorlandıkları durumlardır. Eğer çocuğunuz bazı sesleri doğru üretmiyorsa ya da başkalarına (özellikle yabancılara) ne söylediğini anlatmakta zorlanıyorsa, çocuğunuzun daha anlaşılır ve doğru konuşması için <span className="text-[#4a8c61] font-medium">Dil ve Konuşma Terapistinden</span> destek alabilirsiniz.
                      </p>
                    </motion.div>

                    <motion.div variants={innerCardVariants} className="rounded-2xl border border-[#edcfca]/60 bg-[#FAF3F2]/50 p-5 shadow-sm transition-all hover:border-[#d5a8a0]/60 hover:bg-[#FAF3F2]">
                      <div className="flex items-center gap-2 text-[#8c5a4a] font-bold text-sm">
                        <AlertCircle className="h-4 w-4 shrink-0 text-[#8c5a4a]" />
                        <span>Gecikmiş Konuşma & Kreş Gerçeği</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                        Konuşma gecikmesi olan çocuğu oyun grubu, kreş veya anaokulu <strong className="text-[#8c5a4a]">konuşturmaz</strong>. Çocuk bir <span className="text-[#8c5a4a] font-medium">Dil ve Konuşma Terapistinden</span> destek almıyorsa, bu durum onun akranlarıyla arasındaki iletişimi olumsuz etkileyecektir. Kendini anlatamayan çocuk yalnızlaşır ve hırçınlaşır. Bunun çözümü terapisttir.
                      </p>
                    </motion.div>

                    <motion.div variants={innerCardVariants} className="rounded-2xl border border-[#c8dcee]/60 bg-[#F0F5FA]/50 p-5 shadow-sm transition-all hover:border-[#a0b8d5]/60 hover:bg-[#c8dcee]/40">
                      <div className="flex items-center gap-2 text-[#4a6b8c] font-bold text-sm">
                        <BookOpen className="h-4 w-4 shrink-0 text-[#4a6b8c]" />
                        <span>Okul Dönemi & İletişim</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                        Okul döneminde çocuklar akademik becerilerinin yanında sosyal ve iletişimsel becerileri de sıklıkla kullanırlar. Okula başlamasına rağmen hâlâ belli sesleri yanlış üreten ya da anlaşılmakta zorlanan çocukların; <span className="text-[#4a6b8c] font-medium">okuma yazma becerileri, sosyal ilişkileri ve akademik başarıları</span> olumsuz etkilenebilir. Terapistle sağlıklı bir başlangıç yapabilirsiniz.
                      </p>
                    </motion.div>

                    <motion.div variants={innerCardVariants} className="rounded-2xl border border-[#e8dcc8]/60 bg-[#FAF7F3]/50 p-5 shadow-sm transition-all hover:border-[#d5c5a0]/60 hover:bg-[#e8dcc8]/40">
                      <div className="flex items-center gap-2 text-[#8c7a4a] font-bold text-sm">
                        <PenTool className="h-4 w-4 shrink-0 text-[#8c7a4a]" />
                        <span>Konuştuğu Gibi Yazma</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                        Yazma becerisi, <span className="text-[#8c7a4a] font-medium">dil ve konuşma gelişimiyle</span> doğrudan ilişkilidir. Çocuklar konuşurken sesleri yanlış ürettiklerinde, yazarken de hata yapabilirler (Örn: "zil" kelimesini "dil" ya da "sil" yazmak). Artikülasyon problemleri fonolojik farkındalığı ve harf-ses eşleştirmesini etkilediğinden, yazmada güçlük yaşayan çocukların dil değerlendirmesi önemlidir.
                      </p>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Yetişkin Dil ve Konuşma nested cards (Original Texts restored) */}
              {s.id === "yetiskin" && (
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-6 bg-[#4a6b8c]/40" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4a6b8c]">Nörolojik Dil Bozuklukları</span>
                  </div>
                  <motion.div variants={innerCardVariants} className="rounded-2xl border border-[#c8dcee]/60 bg-[#F0F5FA]/50 p-5 shadow-sm transition-all">
                    <div className="flex items-center gap-2 text-[#4a6b8c] font-bold text-sm">
                      <Info className="h-4.5 w-4.5 text-[#4a6b8c]" />
                      <span>Afazi ve Alt Türleri</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                      Afazi; beyindeki hasar (tümör, travma, inme vb.) sonucu konuşma, anlama, okuma veya yazma becerilerinde bozulma yaşanan nörolojik bir dil bozukluğudur. Dilin akıcılığına bağlı olarak temel iki gruba ayrılır:
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-[#e8dcc8]/60 bg-[#FAF7F3]/70 p-3.5 transition-all hover:bg-[#FAF7F3]">
                        <h5 className="font-serif text-xs font-bold text-[#8c7a4a]">Tutuk Afazi</h5>
                        <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
                          Dilin motor bileşenlerindeki bozukluk nedeniyle konuşmanın yavaş, çaba gerektiren ve sınırlı olması durumudur. Hasarın konumuna göre farklı alt klinik özellikler gösterir.
                        </p>
                      </div>
                      <div className="rounded-xl border border-[#d4edda]/60 bg-[#EEF5F0]/70 p-3.5 transition-all hover:bg-[#EEF5F0]">
                        <h5 className="font-serif text-xs font-bold text-[#4a8c61]">Akıcı Afazi</h5>
                        <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
                          Konuşmanın dilbilgisi kurallarına uygun ve akıcı olduğu ancak üretilen kelimelerin anlamsız ya da neolojizm (yeni anlamsız kelime uydurma) içerdiği, anlama becerilerinin de belirgin derecede bozulduğu durumudur.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.article>
          </FadeIn>
        ))}
      </div>

      {/* Sağ Sütun: Terapi Alanı ve FAQ (Yapışık) */}
      <aside className="lg:col-span-5 xl:col-span-4">
        <div className="space-y-8 lg:sticky lg:top-24">
          
          {/* Terapi Ortamı Preview (Modal Açıcı) */}
          <FadeIn>
            <div 
              onClick={() => setIsModalOpen(true)}
              className="rounded-[2.5rem] border border-sage/12 bg-surface/50 p-6 shadow-[0_20px_50px_rgba(95,122,108,0.04),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_35px_70px_rgba(95,122,108,0.12)] hover:-translate-y-2 transition-all duration-500 cursor-pointer relative group glass"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#c8dcee]/50 border border-[#a0b8d5]/40 text-[#4a6b8c]">
                    <Camera className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="font-serif text-base font-bold text-ink group-hover:text-sage transition-colors">
                    Terapi Ortamı
                  </h3>
                </div>
                <span className="text-[10px] text-sage font-semibold uppercase tracking-wider flex items-center gap-0.5">
                  İncele →
                </span>
              </div>
              <p className="text-xs leading-relaxed text-ink-muted mb-4">
                Klinikten bekleme ve oyun/terapi odası görsellerini modern bir pencerede tam boy incelemek için tıklayın.
              </p>
              <div className="rounded-2xl overflow-hidden border border-line/30 p-1 bg-background shadow-inner pointer-events-none relative aspect-[16/10]">
                <Image
                  src={aboutImageSrc(aboutGalleryFiles[0])}
                  alt="Terapi Odası kapak görseli"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-white/90 text-sage-dark text-[10px] font-bold rounded-full shadow-md backdrop-blur-sm">
                    Görselleri Aç
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Sık Sorulanlar FAQ */}
          <FadeIn delay={0.08}>
            <div className="rounded-[2.5rem] border border-sage/12 bg-surface/50 p-6 sm:p-8 shadow-[0_20px_50px_rgba(95,122,108,0.04),0_1px_3px_rgba(0,0,0,0.01)] glass">
              <h3 className="font-serif text-base font-bold text-ink flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#d4edda]/60 border border-[#a8d5b5]/40 text-[#4a8c61]">
                  <ChevronRight className="h-4.5 w-4.5" />
                </span>
                Sıkça Sorulanlar
              </h3>
              <ul className="mt-5 space-y-5 text-xs sm:text-sm leading-relaxed text-ink-muted">
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
                className="btn-primary mt-6 w-full py-2.5 text-xs font-semibold rounded-full text-center"
              >
                Randevu için yazın
              </Link>
            </div>
          </FadeIn>

        </div>
      </aside>

    </div>
  );
}
