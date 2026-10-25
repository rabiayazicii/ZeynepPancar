/**
 * İletişim sayfası — harita yerleştirme (iframe `src`). Statik görsel kullanılmaz.
 *
 * Adres sorgusuyla Google Haritalar gömülü görünümü kullanılır (API anahtarı gerekmez).
 * Daha kesin konum için: Google Haritalar → Paylaş → Harita yerleştir →
 * HTML’deki `src="..."` adresini buraya yapıştırabilirsiniz.
 */
const MAP_QUERY =
  "Köprübaşı Mahallesi, Özlem Sokak No:1, Adapazarı, Sakarya";

export const CONTACT_MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY,
)}&z=17&hl=tr&output=embed`;
