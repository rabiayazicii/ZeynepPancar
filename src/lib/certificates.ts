/** Statik dosyalar: `public/zp-sertifikalar/` */
export const CERTIFICATE_BASE = "/zp-sertifikalar";

export type CertificateItem = {
  id: string;
  fileName: string;
  title: string;
  kind: "image" | "pdf";
};

export function certificateUrl(fileName: string) {
  return `${CERTIFICATE_BASE}/${encodeURIComponent(fileName)}`;
}

/** Görüntüleme sırası — dosya adları `public/zp-sertifikalar` ile birebir eşleşmeli */
export const certificates: CertificateItem[] = [
  {
    id: "floortime-101",
    fileName: "Floortime 101.jpg",
    title: "Floortime 101",
    kind: "image",
  },
  {
    id: "floortime-201",
    fileName: "Floortime 201.pdf",
    title: "Floortime 201",
    kind: "pdf",
  },
  {
    id: "gelisimsel-dil",
    fileName: "Gelişimsel Dil Bozukluğu Yol Haritası.pdf",
    title: "Gelişimsel Dil Bozukluğu Yol Haritası",
    kind: "pdf",
  },
  {
    id: "todil-jpg",
    fileName: "TODİL.jpg",
    title: "TODİL",
    kind: "image",
  },
  {
    id: "todil-pdf",
    fileName: "TODİL.pdf",
    title: "TODİL (PDF)",
    kind: "pdf",
  },
  {
    id: "vfs-fees",
    fileName: "VFS FEES.pdf",
    title: "VFS FEES",
    kind: "pdf",
  },
  {
    id: "zeynep-tedil",
    fileName: "Zeynep PANCAR TEDİL.pdf",
    title: "Zeynep Pancar — TEDİL",
    kind: "pdf",
  },
  {
    id: "kizilboga",
    fileName: "kızılboğa kekemelik eğitimi.jpg",
    title: "Kızılboğa kekemelik eğitimi",
    kind: "image",
  },
];
