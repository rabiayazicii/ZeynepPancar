export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "erken-dil-gelisiminde-egitici-ortam",
    title: "Erken dil gelişiminde eğitici ortam nasıl kurulur?",
    excerpt:
      "Çocuğunuzun dil becerilerini desteklemek için evde uygulanabilecek somut öneriler ve dikkat edilmesi gereken noktalar.",
    date: "2026-03-12",
    readMinutes: 8,
    category: "Çocuk dili",
    content: [
      "Dil gelişimi, çocuğun çevresiyle etkileşim kurduğu her an devam eden bir süreçtir. Erken dönemde sunulan zengin dil ortamı, kelime dağarcığı ve anlama becerileri üzerinde kalıcı etkiler yaratabilir.",
      "Günlük rutinler — kahvaltı, giyinme, oyun saati — konuşma fırsatlarıyla doludur. Bu anlarda çocuğa yönelik, kısa ve net cümleler kurmak; soruları açık uçlu olanı tercih ederek sormak (örneğin “Bu ne?” yerine “Bugün parkta ne gördün?”) dil üretimini teşvik eder.",
      "Ekran süresi yerine kitap okuma, şarkı ve tekrarlayıcı oyunlar; dilin ritmini ve ses yapısını öğrenmeye yardımcı olur. Her çocuğun gelişim hızı farklıdır; endişe duyduğunuzda bir dil ve konuşma terapistinden değerlendirme almak en doğru adımdır.",
    ],
  },
  {
    slug: "kekemelik-ve-aile-destegi",
    title: "Kekemelik: Ailenin rolü ve doğru beklentiler",
    excerpt:
      "Kekemelik hakkında yaygın yanlış anlamalar ve ailenin terapi sürecine nasıl katkı sağlayabileceği.",
    date: "2026-02-28",
    readMinutes: 6,
    category: "Akıcılık",
    content: [
      "Kekemelik, konuşmanın akıcılığını etkileyen nörolojik ve çok faktörlü bir durumdur. Çocuğunuzu aceleyle düzeltmeye çalışmak veya konuşmasını tamamlamak genellikle baskıyı artırır.",
      "Terapi sürecinde hedef, “kusursuz konuşma” değil; iletişim özgüveni ve akıcılık yönetimidir. Evde sabırlı dinleme, göz teması ve çocuğun sözünü bitirmesine izin vermek önemli destekler arasındadır.",
      "Profesyonel değerlendirme ile kekemeliğin tipi ve şiddeti belirlenir; buna göre kişiye özel bir plan oluşturulur.",
    ],
  },
  {
    slug: "yutma-guvenligi-ve-isaretler",
    title: "Yutma güvenliği: Hangi belirtiler uzman değerlendirmesi gerektirir?",
    excerpt:
      "Disfaji belirtilerini tanımak ve ne zaman yardım alınması gerektiğini anlamak.",
    date: "2026-02-08",
    readMinutes: 7,
    category: "Yutma",
    content: [
      "Yutma; ağız, boğaz ve yemek borusunun koordineli çalışmasıyla gerçekleşen karmaşık bir süreçtir. Yaşlanma, nörolojik hastalıklar veya yapısal nedenlerle bu düzen bozulabilir.",
      "Öksürük, boğazda takılma hissi, yemek sırasında burun akıntısı veya ses değişikliği gibi bulgular göz ardı edilmemelidir. Klinik değerlendirme genellikle öykü, oral motor muayenesi ve gerektiğinde enstrümental incelemeleri kapsar.",
      "Erken müdahale aspirasyon riskini azaltmaya ve beslenme kalitesini artırmaya yardımcı olur.",
    ],
  },
  {
    slug: "ses-sagligi-profesyoneller-icin",
    title: "Ses sağlığı: Mesleki ses kullananlar için koruyucu alışkanlıklar",
    excerpt:
      "Öğretmenler, sunucular ve çağrı merkezi çalışanları için ses hijyeni ipuçları.",
    date: "2026-01-20",
    readMinutes: 5,
    category: "Ses",
    content: [
      "Ses telleri, günlük konuşma süresi ve koşullara göre yorulabilir. Uzun süre yüksek sesle konuşmak veya sürekli boğaz temizleme alışkanlığı ses kısıklığına yol açabilir.",
      "Yeterli hidrasyon, doğru nefes desteği ve gerektiğinde mikrofon kullanımı ses yükünü azaltır. Ses kısıklığı iki haftadan uzun sürerse kulak burun boğaz veya dil-konuşma uzmanı değerlendirmesi önerilir.",
      "Ses terapisi ile yanlış vokal kullanım alışkanlıkları düzeltilebilir ve sürdürülebilir bir konuşma kalıbı oluşturulabilir.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
