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
    slug: "ekran-suresi-ve-dil-gelisimi",
    title: "Ekran Süresi Dil Gelişimini Nasıl Etkiler?",
    excerpt:
      "Ekranlar çocukların yaşamında yer etse de, dil gelişiminin temeli insan etkileşimidir. Erken çocukluk döneminde ekran maruziyeti ve etkileşimli aktivitelerin önemi.",
    date: "2026-06-16",
    readMinutes: 5,
    category: "Çocuk dili",
    content: [
      "Ekranlar günümüzde çocukların yaşamında önemli bir yer tutsa da dil gelişiminin temelini ekranlar değil, insan etkileşimi oluşturur. Çocuklar dili yalnızca kelimeleri duyarak değil; karşılıklı konuşarak, soru-cevap yaparak, jest ve mimikleri gözlemleyerek öğrenirler.",
      "Uzun süreli ve pasif ekran maruziyeti, bu etkileşim fırsatlarını azaltarak dil gelişimini olumsuz etkileyebilir. Özellikle erken çocukluk döneminde ekran süresinin sınırlandırılması, bunun yerine oyun oynama, kitap okuma ve günlük yaşam içinde sohbet etme gibi etkileşimli aktivitelerin artırılması dil gelişimini destekleyen en önemli adımlardan biridir.",
    ],
  },
  {
    slug: "yaslara-gore-dil-gelisimi-rehberi",
    title: "Çocuğum Kaç Kelime Söylemeli? Yaşa Göre Dil Gelişimi Rehberi",
    excerpt:
      "Her çocuğun gelişim hızı farklı olsa da belirli yaş dönemlerinde beklenen dil gelişim basamakları bulunur. Ebeveynler için 12. aydan 3 yaşa kadar rehber.",
    date: "2026-06-15",
    readMinutes: 6,
    category: "Çocuk dili",
    content: [
      "Ebeveynlerin en sık sorduğu sorulardan biri, çocuklarının yaşına uygun dil becerileri gösterip göstermediğidir. Her çocuğun gelişim hızı farklı olsa da belirli yaş dönemlerinde beklenen dil gelişimi basamakları bulunmaktadır.",
      "Yaklaşık 12 aylık bir çocuk ilk anlamlı kelimelerini söylemeye başlarken, 18 aylık dönemde kelime dağarcığının artması beklenir. 2 yaş civarında çocuklar iki kelimeli ifadeler kullanmaya başlayabilir; \"anne gel\", \"su ver\" gibi. 3 yaşına gelindiğinde ise çoğu çocuk kısa cümlelerle kendini ifade edebilir ve günlük konuşmaların büyük bölümüne katılabilir.",
      "Ancak dil gelişimi yalnızca söylenen kelime sayısıyla değerlendirilmez. Çocuğun iletişim kurma isteği, söylenenleri anlama becerisi, jest ve mimik kullanımı ile sosyal etkileşimi de büyük önem taşır. Eğer çocuğunuzun dil gelişimiyle ilgili endişeleriniz varsa, erken dönemde bir dil ve konuşma terapistine başvurmak sürecin sağlıklı şekilde değerlendirilmesine yardımcı olacaktır.",
    ],
  },
  {
    slug: "inme-sonrasi-konusma-terapisi",
    title:
      "İnme Sonrası Konuşma Terapisi: İletişim Becerilerini Yeniden Kazanmak Mümkün Mü?",
    excerpt:
      "İnme sonrasında dil, konuşma ve yutma becerileri etkilenebilir. Doğru değerlendirme ve kişiye özel terapi desteğiyle gelişim sağlamak mümkündür.",
    date: "2026-06-14",
    readMinutes: 7,
    category: "Yetişkin konuşması",
    content: [
      "İnme, beynin belirli bölgelerine giden kan akışının kesilmesi veya azalması sonucu ortaya çıkan nörolojik bir durumdur. İnme sonrasında bireylerde hareket, denge ve hafıza gibi alanlarda değişiklikler görülebileceği gibi dil ve konuşma becerileri de etkilenebilir. Bu durum kişinin günlük yaşamını, sosyal ilişkilerini ve yaşam kalitesini önemli ölçüde etkileyebilir. Ancak doğru değerlendirme ve uygun terapi desteğiyle iletişim becerilerinde önemli gelişmeler sağlamak mümkündür.",
      "İnme geçiren her birey aynı belirtileri göstermez. Yaşanan güçlükler, beynin etkilenen bölgesine ve hasarın boyutuna göre değişiklik gösterebilir. İnme sonrasında görülebilen iletişim problemlerinden bazıları şunlardır: Kelimeleri bulmakta zorlanma, konuşulanları anlamada güçlük yaşama, cümle kurmada zorlanma, okuma ve yazma becerilerinde değişiklikler, konuşmanın anlaşılır olmaması, ses kalitesinde değişiklikler ve yutma güçlükleri.",
      "Bu sorunlar bazen hafif düzeyde olabilirken bazen de kişinin günlük iletişimini ciddi şekilde etkileyebilir. Erken dönemde bir uzmana başvurulması sürecin sağlıklı değerlendirilmesi için önemlidir.",
    ],
  },
  {
    slug: "afazi-nedir-ve-tedavisi",
    title: "Afazi Nedir?",
    excerpt:
      "İnme sonrasında en sık karşılaşılan dil bozukluklarından biri olan afazi, dil ve konuşma terapisinin rolü ve ailelerin bu süreçteki önemi.",
    date: "2026-06-13",
    readMinutes: 8,
    category: "Yetişkin konuşması",
    content: [
      "İnme sonrasında en sık karşılaşılan dil bozukluklarından biri afazidir. Afazi; kişinin düşüncelerini ifade etme, konuşulanları anlama, okuma ve yazma becerilerinin etkilenmesiyle ortaya çıkan edinilmiş bir dil bozukluğudur.",
      "Afazisi olan birey ne söylemek istediğini biliyor olabilir ancak uygun kelimeyi bulmakta zorlanabilir. Bazı kişiler ise konuşulanları anlamakta güçlük yaşayabilir. Afazinin türü ve şiddeti kişiden kişiye farklılık gösterir.",
      "Dil ve konuşma terapisi, inme sonrası ortaya çıkan iletişim ve yutma problemlerinin değerlendirilmesi ve rehabilitasyonunda önemli bir yere sahiptir. Terapi sürecinde öncelikle bireyin güçlü ve desteklenmesi gereken yönleri belirlenir. Daha sonra kişinin ihtiyaçlarına uygun hedefler oluşturulur. Terapi çalışmaları kelime bulma, anlama, cümle kurma, konuşma anlaşılırlığı, okuma-yazma ve yutma becerilerini kapsayabilir.",
      "İnme sonrasında mümkün olan en erken dönemde değerlendirme yapılması önerilir. Erken müdahale, kişinin mevcut becerilerinin belirlenmesine ve rehabilitasyon sürecinin planlanmasına yardımcı olur. Bununla birlikte terapiye geç başlanmış olması ilerleme kaydedilemeyeceği anlamına gelmez. İnme üzerinden aylar hatta yıllar geçmiş olsa bile birçok birey uygun terapi desteğiyle iletişim becerilerini geliştirmeye devam edebilir.",
      "İnme sonrası rehabilitasyon yalnızca terapi odasında gerçekleşmez. Aile üyeleri ve yakın çevre de sürecin önemli bir parçasıdır. Ailelerin; kişiye konuşması için zaman tanıması, cümlelerini tamamlamaya çalışmaması, göz teması kurarak iletişim kurması, basit ve anlaşılır ifadeler kullanması ve iletişim kurma çabalarını desteklemesi rehabilitasyon sürecine son derece olumlu katkı sağlayabilir.",
      "Sonuç olarak, inme sonrasında yaşanan dil ve konuşma güçlükleri iletişimin tamamen kaybedildiği anlamına gelmez. Uygun değerlendirme, düzenli terapi ve çevrenin desteğiyle bireyler iletişim becerilerini geliştirebilir ve günlük yaşama daha aktif şekilde katılabilirler.",
    ],
  },
  {
    slug: "konusma-sesi-bozuklugu-nedir",
    title: "Konuşma Sesi Bozukluğu Nedir? Belirtileri ve Tedavi Süreci",
    excerpt:
      "Çocuklarda yaşa uygun dönemde kazanılması beklenen konuşma seslerinin hatalı üretilmesi veya hiç kullanılamaması durumunda konuşma sesi bozukluğundan söz edilir.",
    date: "2026-06-12",
    readMinutes: 5,
    category: "Çocuk dili",
    content: [
      "Çocukların konuşmayı öğrenme sürecinde bazı sesleri yanlış üretmeleri belirli yaşlarda normal kabul edilebilir. Ancak yaşına uygun dönemde kazanılması beklenen seslerin hâlâ hatalı üretilmesi veya bazı seslerin hiç kullanılamaması durumunda konuşma sesi bozukluğundan söz edilebilir.",
      "Konuşma sesi bozukluğu, çocuğun sesleri doğru üretmesini ve konuşmasının çevresi tarafından anlaşılmasını etkileyen bir durumdur. Çocuk bazı sesleri başka seslerle değiştirebilir, atlayabilir veya yanlış şekilde üretebilir. Bu durum iletişim kurmayı zorlaştırabileceği gibi sosyal ve akademik yaşamı da etkileyebilir.",
      "Erken dönemde yapılan değerlendirme, yaşa uygun olmayan ses hatalarının belirlenmesine ve gerekli durumlarda terapi sürecinin planlanmasına yardımcı olur. Dil ve konuşma terapisi ile çocukların doğru ses üretimini öğrenmeleri ve konuşmalarının daha anlaşılır hale gelmesi desteklenebilir.",
    ],
  },
  {
    slug: "ses-sagligimizi-korumak-icin-oneriler",
    title: "Ses Sağlığımızı Korumak İçin Neler Yapmalıyız?",
    excerpt:
      "Ses sağlığını korumak, hem etkili iletişim kurabilmek hem de ses tellerimizi koruyarak ses problemlerinin önüne geçebilmek için oldukça önemlidir.",
    date: "2026-06-10",
    readMinutes: 5,
    category: "Ses",
    content: [
      "Sesimiz günlük yaşamda en sık kullandığımız iletişim araçlarından biridir. Ses sağlığını korumak, hem etkili iletişim kurabilmek hem de olası ses problemlerinin önüne geçebilmek için önemlidir.",
      "Ses sağlığını korumak için öncelikle gün içerisinde yeterli miktarda su tüketmeye özen gösterilmelidir. Su, ses tellerinin nemli kalmasına yardımcı olur ve ses üretimini kolaylaştırır. Uzun süre yüksek sesle konuşmak, bağırmak veya gürültülü ortamlarda sesi zorlamak ses tellerine zarar olabilir. Bu nedenle mümkün olduğunca uygun ses şiddetinde konuşulmalı ve ses dinlenmesine fırsat verilmelidir.",
      "Sigara ve tütün ürünlerinden uzak durmak, aşırı kafein ve alkol tüketimini sınırlandırmak da ses sağlığı açısından önemlidir. Ayrıca boğaz temizleme alışkanlığını sık tekrarlamak yerine su yudumlamak veya yutkunmak tercih edilebilir.",
      "İki haftadan uzun süren ses kısıklığı, konuşurken ağrı, seste yorulma veya çatallanma gibi belirtiler varsa bir kulak burun boğaz hekimi ve dil ve konuşma terapisti tarafından değerlendirme yapılması önerilir. Unutulmamalıdır ki sağlıklı bir ses, etkili iletişimin temelidir.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
