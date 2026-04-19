import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { PhotoFrame } from "@/components/media/PhotoFrame";
import { ArticleHero } from "@/components/layout/ArticleHero";
import { PageShell } from "@/components/layout/PageShell";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { aboutImageSrc, getBlogCoverImage } from "@/lib/about-images";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return {
    title: post.title,
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

  return (
    <main className="pb-24 lg:pb-32">
      <ArticleHero
        category={post.category}
        title={post.title}
        date={post.date}
        dateLabel={dateLabel}
        readMinutes={post.readMinutes}
      />

      <PageShell width="reading" className="mt-12 sm:mt-16 lg:mt-20">
        <FadeIn>
          <PhotoFrame
            title="Kapak görseli"
            caption={post.category}
            aspect="wide"
            variant="gallery"
            className="w-full"
          >
            <div className="relative aspect-video w-full bg-cream-muted/40 sm:aspect-[21/9] sm:min-h-[10rem]">
              <Image
                src={aboutImageSrc(coverFile)}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 42rem"
                className="object-cover"
              />
            </div>
          </PhotoFrame>
        </FadeIn>

        <div className="mt-12 sm:mt-14">
          {post.content.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <p className="mb-7 text-[17px] leading-[1.8] text-ink-muted last:mb-0">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-14 rounded-2xl border border-rule/28 glass p-6 text-sm leading-relaxed text-ink-muted sm:p-7">
            <strong className="text-ink">Not:</strong> Bu içerik genel bilgilendirme
            amaçlıdır; kişisel değerlendirme veya tedavi yerine geçmez.
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-14 flex flex-wrap gap-4 border-t border-rule/38 pt-10">
            <Link href="/iletisim" className="btn-primary px-6 py-3 text-sm">
              Soru sorun
            </Link>
            <Link href="/blog" className="btn-secondary px-6 py-3 text-sm">
              Diğer yazılar
            </Link>
          </div>
        </FadeIn>
      </PageShell>
    </main>
  );
}
