import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { PageShell } from "@/components/layout/PageShell";
import { getPostBySlug, getAllSlugs, blogPosts } from "@/lib/blog";
import { aboutImageSrc, getBlogCoverImage, ABOUT_PORTRAIT_FILE } from "@/lib/about-images";
import { ReadingProgressBar } from "@/components/ui/ReadingProgressBar";
import { ArrowLeft, Clock, Calendar, BookOpen, Send, MessageSquare } from "lucide-react";
import { cn } from "@/lib/cn";
import { softRoundLink3d } from "@/lib/highlight-cta-3d";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return {
    title: `${post.title} | Zeynep Pancar`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const dateLabel = new Date(post.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const coverFile = getBlogCoverImage(slug);
  
  // Get related posts (exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-muted/50 via-background to-cream/30 pb-24 pt-[calc(var(--header-h)+2rem)] sm:pb-32">
      <ReadingProgressBar />

      {/* Header section with breadcrumbs and title */}
      <div className="border-b border-rule/10 bg-surface/40 backdrop-blur-sm py-10 sm:py-14">
        <PageShell width="wide">
          <FadeIn>
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage mb-6">
              <Link href="/" className="hover:text-sage-dark transition">Anasayfa</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-sage-dark transition">Blog</Link>
              <span>/</span>
              <span className="text-ink-muted line-clamp-1 lowercase first-letter:uppercase">{post.category}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-ink-muted mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/8 border border-sage/12 px-3 py-0.5 text-sage font-bold uppercase tracking-wider text-[11px]">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={post.date}>{dateLabel}</time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readMinutes} dk okuma
              </span>
            </div>

            <h1 className="font-serif text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl lg:max-w-4xl">
              {post.title}
            </h1>
          </FadeIn>
        </PageShell>
      </div>

      <PageShell width="wide" className="mt-12 sm:mt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Immersive Cover Image */}
            <FadeIn>
              <div className="relative p-2.5 rounded-[2.5rem] bg-surface border border-sage/12 shadow-[0_20px_50px_rgba(95,122,108,0.08)]">
                <div className="relative aspect-video w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src={aboutImageSrc(coverFile)}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover transition duration-700 hover:scale-[1.01]"
                    priority
                  />
                </div>
              </div>
            </FadeIn>

            {/* Content text */}
            <div className="space-y-6 sm:space-y-8">
              {post.content.map((paragraph, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  {i === 0 ? (
                    // Lead paragraph
                    <p className="text-[17px] leading-[1.8] text-ink font-medium sm:text-xl sm:leading-[1.85] first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-sage first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      {paragraph}
                    </p>
                  ) : (
                    // Normal paragraph
                    <p className="text-[15px] leading-[1.75] text-ink-muted sm:text-[17px] sm:leading-[1.8]">
                      {paragraph}
                    </p>
                  )}
                </FadeIn>
              ))}

              {/* Decorative blockquote insertion for visual beauty */}
              {post.content.length >= 2 && (
                <FadeIn delay={0.1}>
                  <blockquote className="my-8 rounded-3xl border-l-4 border-sage bg-surface/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                    <p className="font-serif text-lg italic leading-relaxed text-ink">
                      "Bütüncül yaklaşım, bireyin tüm gelişim basamaklarını (dil, konuşma, yutma, ses ve fiziksel fonksiyonlar) tek bir çerçevede birleştirmeyi ve kişiye özel hedefleri hayata geçirmeyi gerektirir."
                    </p>
                    <cite className="mt-3 block text-xs font-semibold uppercase tracking-wider text-sage font-sans not-italic">
                      — Klinik Prensip
                    </cite>
                  </blockquote>
                </FadeIn>
              )}
            </div>

            {/* Warning Note */}
            <FadeIn delay={0.15}>
              <div className="rounded-3xl border border-sage/15 bg-surface/65 p-6 text-sm leading-relaxed text-ink-muted shadow-sm backdrop-blur-sm sm:p-8 flex gap-4 items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
                  !
                </span>
                <div>
                  <strong className="text-ink font-serif text-base block mb-1">Önemli Bilgilendirme</strong>
                  Bu içerik yalnızca genel bilgilendirme amacıyla hazırlanmıştır; kişisel bir tıbbi değerlendirme, teşhis veya profesyonel tedavi yerine geçmez.
                </div>
              </div>
            </FadeIn>

            {/* Bottom Actions */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4 border-t border-rule/10 pt-10">
                <Link href="/iletisim" className="btn-primary flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Soru Sorun
                </Link>
                <Link href="/blog" className="btn-secondary flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Tüm Yazılar
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            
            {/* Therapist Profile Card */}
            <FadeIn delay={0.1}>
              <div className="rounded-3xl border border-sage/12 bg-surface/80 p-6 shadow-[0_12px_36px_rgba(95,122,108,0.06)] backdrop-blur-sm text-center">
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-sage/20 shadow-sm mb-4">
                  <Image
                    src={aboutImageSrc(ABOUT_PORTRAIT_FILE)}
                    alt="Zeynep Pancar"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">Zeynep Pancar</h3>
                <p className="text-xs font-semibold text-sage uppercase tracking-wider mt-1">
                  Dil ve Konuşma Terapisti & Fizyoterapist
                </p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  Bütüncül ve bilimsel yaklaşımlarla çocuk ve yetişkin gelişimini destekleyen uzman klinik çalışmalarını yürütmektedir.
                </p>
                <div className="h-[1px] w-full bg-rule/5 my-4" />
                <Link
                  href="/hakkimda"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sage hover:text-sage-dark transition"
                >
                  Hakkımda daha fazla bilgi
                  <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                </Link>
              </div>
            </FadeIn>

            {/* Related Posts Card */}
            {relatedPosts.length > 0 && (
              <FadeIn delay={0.15}>
                <div className="rounded-3xl border border-sage/12 bg-surface/80 p-6 shadow-[0_12px_36px_rgba(95,122,108,0.06)] backdrop-blur-sm">
                  <h3 className="font-serif text-base font-bold text-ink mb-4 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-sage" />
                    Benzer Yazılar
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((p) => (
                      <div key={p.slug} className="group">
                        <span className="text-[10px] font-bold text-sage uppercase tracking-wider">
                          {p.category}
                        </span>
                        <h4 className="font-serif text-sm font-medium leading-snug text-ink mt-0.5 group-hover:text-sage transition">
                          <Link href={`/blog/${p.slug}`}>
                            {p.title}
                          </Link>
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Quick Consultation CTA */}
            <FadeIn delay={0.2}>
              <div className="rounded-3xl border border-sage/15 bg-gradient-to-br from-sage to-sage-dark p-6 text-cream-muted shadow-lg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-radial-gradient(circle at 80% 20%, rgba(255,250,195,0.08), transparent 50%)" />
                <h3 className="font-serif text-lg font-medium leading-snug mb-2 flex items-center gap-2 relative z-10">
                  <Send className="h-4 w-4 text-highlight" />
                  Randevu Alın
                </h3>
                <p className="text-xs leading-relaxed text-cream-muted/90 mb-5 relative z-10">
                  Size özel terapi planı oluşturmak veya değerlendirme seansı planlamak için hemen iletişime geçin.
                </p>
                <Link
                  href="/iletisim"
                  className={cn(
                    "w-full text-center py-2.5 rounded-full text-xs font-semibold bg-highlight text-ink hover:bg-cream-muted transition-all duration-300 block relative z-10"
                  )}
                >
                  İletişime Geçin
                </Link>
              </div>
            </FadeIn>

          </aside>

        </div>
      </PageShell>
    </main>
  );
}
