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
} from "@/lib/about-images";
import { BlogInteractiveLayout } from "@/components/blog/BlogInteractiveLayout";

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

      <BlogInteractiveLayout posts={sorted} />
    </main>
  );
}
