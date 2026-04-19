/** `public/zp-gorseller/` — site genelinde kullanılan fotoğraflar */
export const ABOUT_IMAGE_BASE = "/zp-gorseller";

/** Site logosu — navbar, footer, favicon */
export const SITE_LOGO_SRC = `${ABOUT_IMAGE_BASE}/logo.png`;

export function aboutImageSrc(fileName: string) {
  return `${ABOUT_IMAGE_BASE}/${encodeURIComponent(fileName)}`;
}

/** Ana sayfa hero carousel (4 slayt) */
export const homeHeroCarouselSlides = [
  {
    id: "slide-1",
    file: "IMG_6892.jpeg",
    title: "Profil",
    caption: "Zeynep Pancar — klinik çalışması",
  },
  {
    id: "slide-2",
    file: "IMG_6877.jpeg",
    title: "Seans ortamı",
    caption: "Sakin ve düzenli bir çalışma alanı",
  },
  {
    id: "slide-3",
    file: "IMG_6884.jpeg",
    title: "Terapi süreci",
    caption: "Bireysel ihtiyaçlara göre planlanan seanslar",
  },
  {
    id: "slide-4",
    file: "IMG_6889.jpeg",
    title: "Materyaller",
    caption: "Yaşa uygun araç ve etkinlikler",
  },
] satisfies ReadonlyArray<{
  id: string;
  file: string;
  title: string;
  caption: string;
}>;

/** Ana sayfa — “Güven ve gizlilik” bölümü */
export const HOME_TRUST_SECTION_IMAGE = "IMG_6890.jpeg";

/** Hizmetler — kenar çubuğu (tek görsel; galeri kullanıldığında isteğe bağlı) */
export const SERVICES_SIDEBAR_IMAGE = "IMG_6887.jpeg";

/** Hizmetler — hero başlık bandı arkası (saydam dekor) */
export const SERVICES_HERO_BACKDROP_IMAGE = "3d-rendering-pen-ai-generated.jpg";

/** Blog — hero başlık bandı arkası */
export const BLOG_PAGE_HERO_IMAGE = "blog.jpg";

/** İletişim — hero arkası */
export const CONTACT_PAGE_IMAGE = "contact2.jpg";

const blogCoverBySlug: Record<string, string> = {
  "erken-dil-gelisiminde-egitici-ortam": "IMG_6889.jpeg",
  "kekemelik-ve-aile-destegi": "IMG_6892.jpeg",
  "yutma-guvenligi-ve-isaretler": "IMG_6894.jpeg",
  "ses-sagligi-profesyoneller-icin": "IMG_6901.jpeg",
};

export function getBlogCoverImage(slug: string): string {
  return blogCoverBySlug[slug] ?? "IMG_6889.jpeg";
}

export const ABOUT_PORTRAIT_FILE = "IMG_6870.jpeg";

/** Polaroid şeridi (3 kare) */
export const aboutPolaroidFiles = [
  { file: "IMG_6877.jpeg", caption: "Çalışma ortamı" },
  { file: "IMG_6884.jpeg", caption: "Terapi süreci" },
  { file: "IMG_6887.jpeg", caption: "Materyaller" },
] as const;

/** Hakkımda hero: büyük görsel + küçük seçiciler (portre + polaroid seti) */
export const aboutHeroGallerySlides = [
  { file: ABOUT_PORTRAIT_FILE, caption: "Zeynep Pancar" },
  ...aboutPolaroidFiles,
] as const;

/** Alt galeri grid’i */
export const aboutGalleryFiles = [
  "IMG_6889.jpeg",
  "IMG_6890.jpeg",
  "IMG_6892.jpeg",
  "IMG_6894.jpeg",
  "IMG_6899.jpeg",
  "IMG_6901.jpeg",
] as const;
