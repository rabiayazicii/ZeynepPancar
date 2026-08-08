import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingSocialStack } from "@/components/ui/FloatingSocialStack";
import { SITE_LOGO_SRC } from "@/lib/about-images";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zeynep Pancar | Dil ve Konuşma Terapisti & Fizyoterapist",
    template: "%s | Zeynep Pancar",
  },
  description:
    "Dil ve konuşma terapisi ile fizyoterapi/rehabilitasyon alanlarında bütüncül, bilimsel ve kanıta dayalı değerlendirme ve tedavi planları.",
  keywords: [
    "dil ve konuşma terapisti",
    "fizyoterapist",
    "çift ana dal dkt",
    "sakarya dil terapisi",
    "sakarya fizyoterapist",
    "logopedi",
    "kekemelik",
    "çocuk dili",
    "yutma terapisi",
    "ses terapisi",
    "fizyoterapi ve rehabilitasyon",
  ],
  icons: {
    icon: [{ url: SITE_LOGO_SRC, type: "image/png" }],
    apple: SITE_LOGO_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased [font-feature-settings:'kern'_1,'liga'_1]">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingSocialStack />
      </body>
    </html>
  );
}
