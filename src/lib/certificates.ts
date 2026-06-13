/** Statik dosyalar: `public/zp-sertifikalar/` */
export const CERTIFICATE_BASE = "/zp-sertifikalar";

export type CertificateItem = {
  id: string;
  fileName: string;
  title: string;
  kind: "image" | "pdf";
  issuer: string;
  category: string;
  description: string;
};

export function certificateUrl(fileName: string) {
  return `${CERTIFICATE_BASE}/${encodeURIComponent(fileName)}`;
}

/** Görüntüleme sırası — dosya adları `public/zp-sertifikalar` ile birebir eşleşmeli */
export const certificates: CertificateItem[] = [
  {
    id: "floortime-101",
    fileName: "Floortime 101.jpg",
    title: "DIR 101: An Introduction to DIR And DIRFloortime",
    kind: "image",
    issuer: "ICDL (The Interdisciplinary Council on Development and Learning)",
    category: "Gelişimsel Yaklaşımlar",
    description: "Bireysel farklılıklara dayalı, ilişki temelli gelişimsel model eğitimi.",
  },
  {
    id: "floortime-201",
    fileName: "Floortime 201.pdf",
    title: "DIR 201: Temel Gelişimsel Kapasiteleri Desteklemek",
    kind: "pdf",
    issuer: "ICDL (The Interdisciplinary Council on Development and Learning)",
    category: "Gelişimsel Yaklaşımlar",
    description: "Fonksiyonel duygusal gelişimsel kapasiteleri (FEDCs) destekleme yeterliliği.",
  },
  {
    id: "gelisimsel-dil",
    fileName: "Gelişimsel Dil Bozukluğu Yol Haritası.pdf",
    title: "Gelişimsel Dil Bozukluğu Yol Haritası",
    kind: "pdf",
    issuer: "Dil ve Konuşma Terapisi Platformu",
    category: "Dil & Konuşma",
    description: "Gelişimsel dil bozukluklarında değerlendirme ve güncel terapi yaklaşımları.",
  },
  {
    id: "todil-jpg",
    fileName: "TODİL.jpg",
    title: "TODİL (Türkçe Okul Çağı Dil Gelişimi Testi)",
    kind: "image",
    issuer: "Türkçe Dil Testleri Yayın Hakları",
    category: "Klinik Değerlendirme",
    description: "Okul çağı çocuklarında dil yeteneklerini ölçmek için uygulayıcı sertifikası.",
  },
  {
    id: "todil-pdf",
    fileName: "TODİL.pdf",
    title: "TODİL (Türkçe Okul Çağı Dil Gelişimi Testi - PDF)",
    kind: "pdf",
    issuer: "Türkçe Dil Testleri Yayın Hakları",
    category: "Klinik Değerlendirme",
    description: "Okul çağı çocuklarında dil yeteneklerini ölçmek için uygulayıcı sertifikası.",
  },
  {
    id: "vfs-fees",
    fileName: "VFS FEES.pdf",
    title: "VFS and FEES: Interpretation and Treatment Planning",
    kind: "pdf",
    issuer: "Klinik Yutma Bozuklukları Derneği",
    category: "Yutma & Beslenme",
    description: "Videofloroskopik ve fiberoptik endoskopik yutma değerlendirmesi ve terapi planlaması.",
  },
  {
    id: "zeynep-tedil",
    fileName: "Zeynep PANCAR TEDİL.pdf",
    title: "TEDİL (Türkçe Erken Dil Gelişimi Testi)",
    kind: "pdf",
    issuer: "Detay Yayıncılık & Test Eğitimleri",
    category: "Klinik Değerlendirme",
    description: "Erken çocukluk dönemi dil gelişimini değerlendirme uygulayıcı sertifikası.",
  },
  {
    id: "kizilboga",
    fileName: "kızılboğa kekemelik eğitimi.jpg",
    title: "Çocuklarda Kekemelik Modelinde Kızılboğa Terapisi",
    kind: "image",
    issuer: "Kızılboğa Kekemelik Terapisi Enstitüsü",
    category: "Akıcılık Terapisi",
    description: "Çocuklarda kekemelik ve akıcılık bozukluklarına yönelik bütüncül terapi yaklaşımı.",
  },
];

