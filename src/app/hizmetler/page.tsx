import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServicesScrollHero } from "@/components/layout/ServicesScrollHero";
import { ServicesInteractiveLayout } from "@/components/services/ServicesInteractiveLayout";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SERVICES_HERO_BACKDROP_IMAGE, aboutImageSrc } from "@/lib/about-images";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Çocuk ve yetişkin dil-konuşma terapisi, akıcılık, ses, yutma ve değerlendirme hizmetleri.",
};

export default function ServicesPage() {
  return (
    <main className="pb-0 lg:pb-0">
      <ServicesScrollHero
        backdropImageSrc={aboutImageSrc(SERVICES_HERO_BACKDROP_IMAGE)}
        pageTitle="Hizmetler"
        headline="Uzmanlık alanları ve süreç"
        description="Aşağıdaki başlıklar dil ve konuşma terapisinin yaygın alanlarını özetler. Size özel program ilk değerlendirme sonrasında netleşir; metinleri kendi klinik içeriğinizle güncelleyebilirsiniz."
      />

      <PageShell width="full" className="mt-14 sm:mt-20 lg:mt-24 mb-16">
        <ServicesInteractiveLayout />
      </PageShell>

      {/* ——— CTA ——— */}
      <div className="mt-20 sm:mt-28">
        <CtaBanner
          subtitle="Randevu & Bilgi"
          title="Süreci birlikte planlayalım"
          description="Hangi hizmetin size uygun olduğundan emin değil misiniz? Kısa bir ön görüşme ile sizi en doğru şekilde yönlendirebilirim."
          buttonText="Randevu Alın"
        />
      </div>
    </main>
  );
}
