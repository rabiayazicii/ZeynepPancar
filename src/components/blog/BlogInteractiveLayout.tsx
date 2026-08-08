"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost } from "@/lib/blog";
import { getBlogCoverImage, aboutImageSrc } from "@/lib/about-images";
import { Calendar, Clock, X } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/cn";
import { PageShell } from "@/components/layout/PageShell";

const SOFT_COLORS = [
  { border: "border-[#d4edda]/60", bg: "bg-[#EEF5F0]/60", text: "text-[#4a8c61]", hoverBg: "hover:bg-[#d4edda]/40" },
  { border: "border-[#edcfca]/60", bg: "bg-[#FAF3F2]/60", text: "text-[#8c5a4a]", hoverBg: "hover:bg-[#FAF3F2]" },
  { border: "border-[#c8dcee]/60", bg: "bg-[#F0F5FA]/60", text: "text-[#4a6b8c]", hoverBg: "hover:bg-[#c8dcee]/40" },
  { border: "border-[#e8dcc8]/60", bg: "bg-[#FAF7F3]/60", text: "text-[#8c7a4a]", hoverBg: "hover:bg-[#e8dcc8]/40" },
];

export function BlogInteractiveLayout({ posts }: { posts: BlogPost[] }) {
  const [activeSlug, setActiveSlug] = useState<string>(posts[0]?.slug || "");
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (slug: string) => {
    setActiveSlug(slug);
    if (window.innerWidth < 1024 && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const handleClose = () => {
    if (window.innerWidth < 1024 && listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activePost = posts.find((p) => p.slug === activeSlug) || posts[0];

  return (
    <PageShell width="full" className="mt-8 sm:mt-12 lg:mt-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
        
        {/* Left Column: List of Blog Posts */}
        <aside ref={listRef} className="lg:col-span-5 xl:col-span-4 scroll-mt-24">
          <div className="flex flex-col gap-5">
            {posts.map((post, i) => {
              const color = SOFT_COLORS[i % SOFT_COLORS.length];
              const isActive = activeSlug === post.slug;
              
              return (
                <motion.button
                  key={post.slug}
                  onClick={() => handleCardClick(post.slug)}
                  className={cn(
                    "group relative w-full text-left rounded-3xl p-5 transition-all duration-300",
                    isActive ? "bg-white shadow-sm border border-line/45" : "bg-transparent border border-transparent hover:bg-black/[0.03]"
                  )}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={cn("text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border bg-white/50", color.text, color.border)}>
                      {post.category}
                    </span>
                    <span className="text-[11px] font-medium text-ink-muted flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readMinutes} dk
                    </span>
                  </div>
                  <h3 className={cn(
                    "font-serif text-lg font-bold leading-snug mb-2 transition-colors",
                    isActive ? color.text : "text-ink group-hover:text-ink/80"
                  )}>
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-muted line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  {isActive && (
                    <motion.div layoutId="active-indicator" className={cn("absolute -left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-r-full", color.bg.replace('/60', ''))} />
                  )}
                </motion.button>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Selected Post Content */}
        <div ref={contentRef} className="lg:col-span-7 xl:col-span-8 scroll-mt-24">
          <div className="lg:sticky lg:top-24 rounded-[3rem] border border-sage/12 bg-white/60 p-6 sm:p-10 shadow-[0_20px_50px_rgba(95,122,108,0.04)] glass relative">
            
            {/* Mobile Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-ink hover:bg-black/10 lg:hidden transition"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Cover Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-sage/15 shadow-sm">
                  <Image
                    src={aboutImageSrc(getBlogCoverImage(activeSlug))}
                    alt={activePost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Header Info */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-sage" />
                    {new Date(activePost.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-sage" />
                    {activePost.readMinutes} dakika okuma süresi
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {activePost.title}
                </h2>

                {/* Content */}
                <div className="space-y-6">
                  {activePost.content.map((paragraph, i) => (
                    <FadeIn key={i} delay={i * 0.05}>
                      {i === 0 ? (
                        <p className="text-[16px] leading-[1.8] text-ink font-medium first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-sage first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                          {paragraph}
                        </p>
                      ) : (
                        <p className="text-[15px] leading-[1.8] text-ink-muted">
                          {paragraph}
                        </p>
                      )}
                    </FadeIn>
                  ))}
                </div>

                {/* CtaBanner removed as requested */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </PageShell>
  );
}
