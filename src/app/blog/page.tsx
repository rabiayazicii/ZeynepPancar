import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        backdropClear
      />

      <PageShell width="full" className="relative mt-14 sm:mt-20 lg:mt-24">
        <DotPattern className="opacity-[0.15]" />
        <div className="relative z-10 grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:gap-x-10">
          {sorted.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <article className="card-lift h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex min-h-[22rem] w-full flex-col justify-end overflow-hidden rounded-[1.75rem] border-2 border-highlight/35 shadow-[0_24px_56px_-32px_rgba(18,22,20,0.35)] ring-1 ring-black/10 sm:min-h-[24rem] lg:min-h-[26rem]"
                >
                  <Image
                    src={aboutImageSrc(getBlogCoverImage(post.slug))}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/82 via-black/45 to-black/10"
                    aria-hidden
                  />
                  <div className="relative z-10 flex flex-col p-6 sm:p-8 lg:p-9">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-highlight">
                      <span className="rounded-full border border-highlight/50 bg-black/35 px-2.5 py-0.5 backdrop-blur-sm">
                        {post.category}
                      </span>
                      <time dateTime={post.date} className="text-cream-muted/95">
                        {new Date(post.date).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                      <span className="inline-flex items-center gap-1 normal-case tracking-normal text-cream-muted/85">
                        ~{post.readMinutes} dk
                      </span>
                    </div>
                    <h2 className="mt-4 font-serif text-xl font-semibold leading-snug tracking-tight text-cream-muted sm:text-2xl sm:leading-snug">
                      <span className="[text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
                        {post.title}
                      </span>
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-cream-muted/88 sm:text-[15px] sm:leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-highlight transition group-hover:gap-3">
                      Devamını oku
                      <ArrowRight
                        className="h-4 w-4 shrink-0"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </PageShell>
    </main>
  );
}
