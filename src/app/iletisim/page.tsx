import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CONTACT_PAGE_IMAGE, aboutImageSrc } from "@/lib/about-images";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Randevu ve bilgi için iletişim. Dil ve konuşma terapisi — Zeynep Pancar.",
};

export default function ContactPage() {
  return (
    <main className="pb-24 lg:pb-32">
      <PageHero
        kicker="İletişim"
        title="Randevu ve sorular"
        description="Formu doldurabilir veya doğrudan arayabilirsiniz. Form demo amaçlıdır; canlıya almak için e-posta servisi veya API bağlanabilir."
        backdropImageSrc={aboutImageSrc(CONTACT_PAGE_IMAGE)}
        backdropClear
      />

      <ContactForm />
    </main>
  );
}
