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
    file: "kid-doing-occupational-therapy-session.jpg",
    title: "Klinik",
    caption: "Klinik ortam",
  },
  {
    id: "slide-2",
    file: "paintbaby.jpg",
    title: "Materyaller",
    caption: "Zengin terapi materyalleri",
  },
  {
    id: "slide-3",
    file: "woods.jpg",
    title: "Terapi",
    caption: "Birebir etkileşim",
  },
  {
    id: "slide-4",
    file: "paper.jpg",
    title: "Terapi",
    caption: "Birebir etkileşim",
  }
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
export const SERVICES_HERO_BACKDROP_IMAGE = "close-up-smiley-daughter-mother.jpg";

/** Blog — hero başlık bandı arkası */
export const BLOG_PAGE_HERO_IMAGE = "read2.jpg";

/** İletişim — hero arkası */
export const CONTACT_PAGE_IMAGE = "call2.jpg";

const blogCoverBySlug: Record<string, string> = {
  "ekran-suresi-ve-dil-gelisimi": "screen.jpg",
  "yaslara-gore-dil-gelisimi-rehberi": "womandoingspeechtherapy.jpg",
  "inme-sonrasi-konusma-terapisi": "words.jpg",
  "afazi-nedir-ve-tedavisi": "uzmanlik2.jpg",
  "konusma-sesi-bozuklugu-nedir": "children.jpg",
  "ses-sagligimizi-korumak-icin-oneriler": "mic.jpg",
};

export function getBlogCoverImage(slug: string): string {
  return blogCoverBySlug[slug] ?? "IMG_6889.jpeg";
}

export const ABOUT_PORTRAIT_FILE = "anasayfazeynosu.jpg";

/** Polaroid şeridi (3 kare) */
export const aboutPolaroidFiles = [
  { file: "baloncuk.jpeg", caption: "Oyun ile öğrenme" },
  { file: "IMG_6899.jpeg", caption: "Çalışma ortamı" },
] as const;

/** Hakkımda hero: büyük görsel + küçük seçiciler (portre + polaroid seti) */
export const aboutHeroGallerySlides = [
  { file: ABOUT_PORTRAIT_FILE, caption: "Zeynep Pancar" },
  ...aboutPolaroidFiles,
] as const;

/** Alt galeri grid’i */
export const aboutGalleryFiles = [
  "ahtapotvesalincak.jpeg",
  "balinasalincagi.jpeg",
  "caydanlik.jpeg",
  "ev-onden.jpeg",
  "guzelpazar.jpeg",
  "mutfak.jpeg",
  "mutfakvekoltuk.jpeg",
  "oyuncakevvecam.jpeg",
  "panda.jpeg",
  "piknik.jpeg",
  "salincakuzak.jpeg",
  "teyze.jpg",
  "zurafakitaplar.jpeg",
  "zurafamasauzak.jpeg",
] as const;
