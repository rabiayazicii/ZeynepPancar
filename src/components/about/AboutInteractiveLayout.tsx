"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  GraduationCap,
  Camera,
  Heart,
  Eye,
  BookMarked,
  Handshake,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  FileText,
  X,
  Sparkles,
  Building2,
  Calendar,
} from "lucide-react";
import { AboutHeroPortraitGallery } from "@/components/about/AboutHeroPortraitGallery";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { aboutGalleryFiles, aboutImageSrc } from "@/lib/about-images";
import { certificates, certificateUrl } from "@/lib/certificates";

const values = [
  {
    title: "Saygı ve onur",
    body: "Her bireyin kendi hızında ilerleme hakkına saygı duyarım.",
    icon: Heart,
    iconColor: "text-[#b85b50]",
    iconBg: "bg-[#edcfca]/50 border-[#d5a8a0]/40",
  },
  {
    title: "Şeffaflık",
    body: "Hedefler, seans sıklığı ve beklentiler açıkça konuşulur.",
    icon: Eye,
    iconColor: "text-[#4a6b8c]",
    iconBg: "bg-[#c8dcee]/50 border-[#a0b8d5]/40",
  },
  {
    title: "Kanıt",
    body: "Yöntem seçiminde güvenilir kaynaklara ve klinik deneyime dayanırım.",
    icon: BookMarked,
    iconColor: "text-[#4a8c61]",
    iconBg: "bg-[#d4edda]/60 border-[#a8d5b5]/40",
  },
  {
    title: "İş birliği",
    body: "Aile ve diğer uzmanlarla koordinasyon, sürdürülebilir başarıyı artırır.",
    icon: Handshake,
    iconColor: "text-[#8c7a4a]",
    iconBg: "bg-[#e8dcc8]/50 border-[#d5c5a0]/40",
  },
] as const;

const chronology = [
  {
    status: "active",
    badge: "Hâlen Devam Ediyor",
    title: "Yüksek Lisans Eğitimi",
    subtitle: "Üsküdar Üniversitesi — Dil ve Konuşma Terapisi",
    dotColor: "border-[#8c7a4a] bg-[#e8dcc8] shadow-[0_0_0_4px_rgba(140,122,74,0.2)] animate-pulse",
  },
  {
    status: "completed",
    badge: "2024 Mezuniyeti",
    title: "Dil ve Konuşma Terapisi Lisans Programı",
    subtitle: "İstinye Üniversitesi (Çift Ana Dal, Yüksek Onur Öğrencisi unvanı ile mezuniyet)",
    dotColor: "border-[#4a8c61]/60 bg-[#d4edda] shadow-[0_0_0_4px_rgba(74,140,97,0.1)]",
  },
  {
    status: "completed",
    badge: "2023 Mezuniyeti",
    title: "Fizyoterapi ve Rehabilitasyon Lisans Programı",
    subtitle: "İstinye Üniversitesi",
    dotColor: "border-[#4a6b8c]/40 bg-[#c8dcee] shadow-[0_0_0_4px_rgba(74,107,140,0.05)]",
  },
] as const;

const categoryColors: Record<string, string> = {
  "Gelişimsel Yaklaşımlar": "bg-sage/10 text-sage-dark border border-sage/20",
  "Dil & Konuşma": "bg-sage/10 text-sage-dark border border-sage/20",
  "Klinik Değerlendirme": "bg-sage/10 text-sage-dark border border-sage/20",
  "Yutma & Beslenme": "bg-sage/10 text-sage-dark border border-sage/20",
  "Akıcılık Terapisi": "bg-sage/10 text-sage-dark border border-sage/20",
};

export function AboutInteractiveLayout() {
  const [activeRightTab, setActiveRightTab] = useState<"media" | "certificates">("media");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileCertOpen, setIsMobileCertOpen] = useState(false);

  const isCertOpen = activeRightTab === "certificates";

  // Stagger variants for word/paragraph level entrance
  const paragraphVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  } as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  } as const;

  return (
    <div className="relative grid gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
      
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
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sage-light/10 border border-sage/15 text-sage">
                    <Camera className="h-4.5 w-4.5" />
                  </span>
                  <h4 className="font-serif text-lg font-light text-ink">Terapi Odası Detayları</h4>
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

      <AnimatePresence>
        {isMobileCertOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121614]/30 backdrop-blur-md p-4 sm:p-6 lg:hidden"
            onClick={() => setIsMobileCertOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-white/95 rounded-[2.5rem] border border-sage/18 shadow-2xl glass overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-line/20 px-6 py-4 bg-surface/50">
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Eğitim & Seminerler</h3>
                  <p className="text-xs text-ink-muted mt-0.5">Katılım sağlanan sertifika programları</p>
                </div>
                <button 
                  onClick={() => setIsMobileCertOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5 text-ink-muted hover:text-ink transition"
                  aria-label="Kapat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body (Scrollable List) */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin">
                {certificates.map((c) => {
                  const href = certificateUrl(c.fileName);
                  return (
                    <div
                      key={c.id}
                      className="rounded-2xl border border-[#d4edda]/60 bg-[#EEF5F0]/50 p-4 transition-all duration-300 hover:border-[#a8d5b5]/60 hover:bg-[#d4edda]/40"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider ${categoryColors[c.category] ?? "bg-[#d4edda]/60 text-[#4a8c61] border border-[#a8d5b5]/40"}`}>
                          {c.category}
                        </span>
                      </div>
                      <h4 className="mt-2.5 font-serif text-xs font-light leading-snug text-ink">
                        {c.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-[#4a8c61]">
                        <span>{c.issuer}</span>
                      </div>
                      <p className="mt-2 text-[10px] leading-relaxed text-ink-muted">
                        {c.description}
                      </p>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3.5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-[#a8d5b5]/40 bg-[#d4edda]/50 py-1.5 text-[10px] font-bold text-[#4a8c61] transition duration-300 hover:bg-[#4a8c61] hover:text-white"
                      >
                        <FileText className="h-3 w-3" />
                        Görüntüle
                        <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sol Kolon: Biyografi, Eğitim, Değerler (Zarif, soft pastel renkli kartlar) */}
      <div className="space-y-10 lg:col-span-7 xl:col-span-8">
        
        {/* 1. Biyografi Giriş Kartı (Soft Pastel Krem/Keten) */}
        <FadeIn>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            whileHover={{ y: -8 }}
            className="rounded-[2.5rem] border border-[#EDE7DB]/50 bg-[#FAF8F5] p-8 sm:p-10 shadow-[0_20px_50px_rgba(95,122,108,0.04),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_35px_70px_rgba(95,122,108,0.12)] transition-all duration-500 relative overflow-hidden glass cursor-default"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sage/5 to-transparent rounded-bl-full pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <motion.div variants={paragraphVariants} className="border-l-2 border-sage/35 pl-4 py-1">
                <p className="font-serif italic text-base leading-relaxed text-ink/90 sm:text-[17px]">
                  “İletişimin ve hareketin her yaşta hak olduğuna inanıyorum; terapi ise bu hakları desteklemenin bilimsel, bütüncül ve insani yoludur.”
                </p>
              </motion.div>

              <div className="space-y-5 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                <motion.p variants={paragraphVariants} className="text-pretty text-ink/95">
                  Dil ve Konuşma Terapisti ve Fizyoterapist Zeynep Pancar, lisans eğitimini{" "}
                  <span className="text-[#4a8c61] font-semibold">2023 yılında</span>{" "}
                  İstinye Üniversitesi Fizyoterapi ve Rehabilitasyon bölümünde tamamlamıştır.{" "}
                  <span className="text-[#4a6b8c] font-semibold">2024 yılında</span> ise Dil ve Konuşma Terapisi lisans programından çift ana dal yaparak{" "}
                  <strong className="text-[#b85b50] font-semibold">“Yüksek Onur Öğrencisi”</strong>{" "}
                  unvanıyla mezun olmuştur. Hâlen Üsküdar Üniversitesi’nde{" "}
                  <span className="text-[#8c7a4a] font-semibold">yüksek lisans eğitimine</span>{" "}
                  devam etmektedir.
                </motion.p>
                <motion.p variants={paragraphVariants} className="text-pretty">
                  Eğitim süreci boyunca hem{" "}
                  <span className="text-[#4a6b8c] font-semibold">fizyoterapi</span>{" "}
                  hem de{" "}
                  <span className="text-[#4a8c61] font-semibold">dil ve konuşma terapisi</span>{" "}
                  alanlarında; çeşitli özel eğitim ve rehabilitasyon merkezleri, klinikler ve hastanelerde aktif olarak gözlem ve uygulama stajları gerçekleştirmiştir. Bu süreçte farklı yaş grupları ve çeşitli ihtiyaçlara sahip bireylerle çalışma deneyimi kazanmıştır.
                </motion.p>
                <motion.p variants={paragraphVariants} className="text-pretty">
                  Mesleki gelişimine önem veren Zeynep Pancar, birçok{" "}
                  <span className="text-[#8c5a4a] font-semibold">kongre, seminer ve eğitim programına</span>{" "}
                  katılarak güncel ve bilimsel yaklaşımları yakından takip etmektedir.
                </motion.p>
                <motion.p variants={paragraphVariants} className="text-pretty">
                  Sakarya’da terapi ve danışmanlık hizmeti sunan Zeynep Pancar; danışanlarının bireysel ihtiyaçlarına uygun,{" "}
                  <span className="text-[#4a8c61] font-semibold">bütüncül &amp; bilimsel temelli</span>{" "}
                  terapi planları oluşturmaktadır. Hem{" "}
                  <span className="text-[#4a6b8c] font-semibold">yüz yüze</span> hem de{" "}
                  <span className="text-[#4a6b8c] font-semibold">online terapi</span>{" "}
                  seçenekleriyle hizmet vermekte; süreçlerinde empatik, anlaşılır ve çözüm odaklı bir yaklaşım benimsemektedir.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <motion.div 
            whileHover={{ y: -8 }}
            className="rounded-[2.5rem] border border-[#DEE5DE]/50 bg-[#F3F5F3] p-8 shadow-[0_20px_50px_rgba(95,122,108,0.04),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_35px_70px_rgba(95,122,108,0.12)] transition-all duration-500 glass cursor-default"
          >
            <h3 className="font-serif text-base font-light text-sage-dark flex items-center gap-2 mb-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#d4edda]/60 border border-[#a8d5b5]/40 text-[#4a8c61]">
                <GraduationCap className="h-4.5 w-4.5" />
              </span>
              Eğitim Kronolojisi
            </h3>
            <div className="space-y-8 relative pl-1">
              <div className="absolute left-[13px] top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-[#8c7a4a]/40 via-[#4a8c61]/40 to-[#4a6b8c]/40 z-0 bg-[length:100%_200%] animate-[flow_3s_linear_infinite]" />
              {chronology.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.15, type: "spring", stiffness: 80, damping: 14 }}
                  className="relative pl-8 z-10 group"
                >
                  <span className={`absolute left-[5px] top-1.5 h-4 w-4 rounded-full border-2 bg-white transition-all duration-300 z-10 ${item.dotColor}`} />
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-sage-dark">{item.badge}</span>
                  <h4 className="text-sm font-bold text-ink mt-1 transition-colors group-hover:text-sage">
                    {item.title === "Dil ve Konuşma Terapisi Lisans Programı" ? (
                      <span>
                        Dil ve Konuşma Terapisi Lisans Programı <span className="ml-1 text-[#b85b50] font-semibold text-xs">“Yüksek Onur”</span>
                      </span>
                    ) : item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-ink-muted mt-0.5">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <motion.div 
            whileHover={{ y: -8 }}
            className="rounded-[2.5rem] border border-[#E6E3DF]/50 bg-[#F5F5F4] p-8 shadow-[0_20px_50px_rgba(95,122,108,0.04),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_35px_70px_rgba(95,122,108,0.12)] transition-all duration-500 relative overflow-hidden glass"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e8dcc8]/50 border border-[#d5c5a0]/40 text-[#8c7a4a]">
                    <Award className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="font-serif text-base font-light text-sage-dark">
                    Eğitim & Sertifikalar
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted mt-2">
                  Katıldığım mesleki eğitimlere ait belgeleri sağ tarafta inceleyebilirsiniz.
                </p>
              </div>
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && window.innerWidth < 1024) {
                    setIsMobileCertOpen(true);
                  } else {
                    const targetState = isCertOpen ? "media" : "certificates";
                    setActiveRightTab(targetState);
                    if (targetState === "certificates") {
                      const rightCol = document.getElementById("right-column-aside");
                      if (rightCol) {
                        rightCol.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      }
                    }
                  }
                }}
                className="inline-flex items-center gap-1.5 whitespace-nowrap self-start sm:self-center px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 group"
                style={isCertOpen
                  ? { background: "rgba(237,207,202,0.6)", borderColor: "rgba(213,168,160,0.4)", color: "#8c5a4a" }
                  : { background: "rgba(212,237,218,0.7)", borderColor: "rgba(168,213,181,0.5)", color: "#4a8c61" }
                }
              >
                {isCertOpen ? "Sertifikaları Kapat" : "Sertifikaları Göster"}
                {isCertOpen ? (
                  <X className="h-3.5 w-3.5 transition group-hover:scale-110" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                )}
              </button>
            </div>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-[2.5rem] border border-[#EAE3D6]/50 bg-[#FAF7F3] p-8 shadow-[0_20px_50px_rgba(95,122,108,0.04),0_1px_3px_rgba(0,0,0,0.01)] glass">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#edcfca]/50 border border-[#d5a8a0]/40 text-[#b85b50]">
                <Award className="h-4.5 w-4.5" />
              </span>
              <h3 className="font-serif text-base font-light text-sage-dark">
                Çalışma Değerlerim
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-ink-muted mb-6">
              Terapi ilişkisinde öncelediğim ilkeler: güven, netlik ve iş birliği. Aşağıdaki dört başlık, günlük pratiğe nasıl yansıdığını özetler.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <motion.li 
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="group flex h-full flex-col rounded-2xl border border-line/20 bg-background/30 p-5 transition-all duration-300 hover:bg-background/50 hover:border-sage/35 shadow-sm cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${v.iconBg} ${v.iconColor}`}>
                        <v.icon className="h-4.5 w-4.5" strokeWidth={1.5} aria-hidden />
                      </span>
                      <h4 className={`font-serif text-sm font-light transition-colors group-hover:opacity-80 ${v.iconColor}`}>
                        {v.title}
                      </h4>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-ink-muted">
                      {v.body}
                    </p>
                  </motion.li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </FadeIn>

      </div>

      <aside id="right-column-aside" className="lg:col-span-5 xl:col-span-4 scroll-mt-24">
        <div className="lg:sticky lg:top-24">
          
          <AnimatePresence mode="wait">
            {activeRightTab === "media" ? (
              <motion.div
                key="media-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <div className="rounded-[2.5rem] border border-[#edcfca]/80 p-2.5 bg-[#FAF7F3]/80 shadow-sm glass">
                  <AboutHeroPortraitGallery />
                </div>

                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-[2.5rem] border border-sage/12 bg-surface/50 p-6 shadow-[0_20px_50px_rgba(95,122,108,0.04),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_35px_70px_rgba(95,122,108,0.12)] hover:-translate-y-2 transition-all duration-500 cursor-pointer relative group glass"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#c8dcee]/50 border border-[#a0b8d5]/40 text-[#4a6b8c]">
                        <Camera className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="font-serif text-base font-light text-ink group-hover:text-sage transition-colors">
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

                <div className="rounded-[2.5rem] border border-accent-soft/30 bg-accent-soft/8 p-6 shadow-sm glass text-center">
                  <h4 className="font-serif text-base font-light text-ink">İletişime Geçin</h4>
                  <p className="text-xs text-ink-muted mt-1.5 leading-relaxed">
                    Randevu planlamak veya terapi süreci hakkında bilgi almak için randevu sayfamızı ziyaret edebilirsiniz.
                  </p>
                  <Link
                    href="/iletisim"
                    className="btn-primary mt-5 w-full py-2.5 text-xs font-semibold rounded-full text-center"
                  >
                    Randevu Alın
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="certificates-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="rounded-[2.5rem] border border-[#e8dcc8]/40 bg-[#FAF9F6]/90 p-6 sm:p-7 shadow-sm glass space-y-6"
              >
                <div className="flex items-center justify-between border-b border-[#e8dcc8]/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e8dcc8]/50 border border-[#d5c5a0]/40 text-[#8c7a4a]">
                      <Award className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="font-serif text-base font-light text-ink">Sertifikalar &amp; Belgeler</h3>
                  </div>
                  <button
                    onClick={() => setActiveRightTab("media")}
                    className="inline-flex items-center gap-1 text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#edcfca]/60 bg-[#edcfca]/40 text-[#8c5a4a] hover:bg-[#edcfca]/70 transition-all duration-300"
                  >
                    Kapat <X className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="max-h-[78vh] overflow-y-auto space-y-4 pr-1 scrollbar-thin">
                  {certificates.map((c) => {
                    const href = certificateUrl(c.fileName);
                    return (
                      <div
                        key={c.id}
                        className="rounded-2xl border border-[#d4edda]/60 bg-[#EEF5F0]/50 p-4 transition-all duration-300 hover:border-[#a8d5b5]/60 hover:bg-[#d4edda]/40"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className={`rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider ${categoryColors[c.category] ?? "bg-[#d4edda]/60 text-[#4a8c61] border border-[#a8d5b5]/40"}`}>
                            {c.category}
                          </span>
                        </div>
                        <h4 className="mt-2.5 font-serif text-xs font-light leading-snug text-ink">
                          {c.title}
                        </h4>
                        <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-[#4a8c61]">
                          <span>{c.issuer}</span>
                        </div>
                        <p className="mt-2 text-[10px] leading-relaxed text-ink-muted">
                          {c.description}
                        </p>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3.5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-[#a8d5b5]/40 bg-[#d4edda]/50 py-1.5 text-[10px] font-bold text-[#4a8c61] transition duration-300 hover:bg-[#4a8c61] hover:text-white"
                        >
                          <FileText className="h-3 w-3" />
                          Görüntüle
                          <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </aside>

    </div>
  );
}
