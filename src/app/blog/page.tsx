import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { DotPattern } from "@/components/decorative/DotPattern";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { blogPosts } from "@/lib/blog";
import {
  BLOG_PAGE_HERO_IMAGE,
  aboutImageSrc,
  getBlogCoverImage,
} from "@/lib/about-images";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dil, konuşma, yutma ve ses sağlığı hakkında bilgilendirici yazılar.",
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <main className="pb-24 lg:pb-32">
      <PageHero
        kicker="Blog"
        title="Yazılar ve notlar"
        description="Ailelere ve yetişkin danışanlara yönelik kısa, anlaşılır içerikler. Tıbbi teşhis yerine geçmez; şüphe halinde uzman görüşü alın."
        backdropImageSrc={aboutImageSrc(BLOG_PAGE_HERO_IMAGE)}
      />

      <PageShell width="full" className="relative mt-14 sm:mt-20 lg:mt-24">
        <DotPattern className="opacity-[0.15]" />
        <div className="relative z-10 grid gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:gap-x-10">
          {sorted.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line/30 glass card-soft">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-cream-muted/50"
                >
                  <Image
                    src={aboutImageSrc(getBlogCoverImage(post.slug))}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </Link>
                <div className="relative flex flex-1 flex-col p-8 lg:p-9">
                  <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-sage/[0.12] lg:right-8 lg:top-8">
                    <FileText className="h-full w-full" strokeWidth={1.25} aria-hidden />
                  </div>
                  <div className="relative flex flex-wrap items-baseline justify-between gap-2 border-b border-line/60 pb-4">
                    <time
                      dateTime={post.date}
                      className="text-sm font-medium tabular-nums text-sage"
                    >
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted/80">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="mt-5 font-serif text-xl font-semibold leading-snug tracking-tight text-ink transition group-hover:text-sage sm:text-[1.35rem]">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-line/50 pt-5">
                    <span className="text-xs text-ink-muted/80">
                      ~{post.readMinutes} dk okuma
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-sage transition hover:text-sage-dark"
                    >
                      Devamını oku →
                    </Link>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </PageShell>
    </main>
  );
}
