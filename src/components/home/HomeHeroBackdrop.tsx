"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

const SLIDE_INTERVAL_MS = 6000;
/** Yatay kaydırma ile slayt değişimi — px; dikey kaydırmadan ayırt etmek için */
const SWIPE_MIN_DX = 50;
const SWIPE_MAX_VERTICAL_RATIO = 1.25;

export type HomeHeroBackdropSlide = {
  id: string;
  src: string;
  label: string;
};

type Props = {
  slides: HomeHeroBackdropSlide[];
  children: React.ReactNode;
};

export function HomeHeroBackdrop({ slides, children }: Props) {
  const [index, setIndex] = useState(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const clearTouchStart = useCallback(() => {
    touchStartRef.current = null;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStartRef.current;
      touchStartRef.current = null;
      if (slides.length < 2 || !start || e.changedTouches.length !== 1) return;
      const end = e.changedTouches[0];
      const dx = end.clientX - start.x;
      const dy = end.clientY - start.y;
      if (Math.abs(dx) < SWIPE_MIN_DX) return;
      if (Math.abs(dy) * SWIPE_MAX_VERTICAL_RATIO > Math.abs(dx)) return;
      if (dx < 0) {
        setIndex((n) => (n + 1) % slides.length);
      } else {
        setIndex((n) => (n - 1 + slides.length) % slides.length);
      }
    },
    [slides.length],
  );

  const prevSlide = useCallback(() => {
    setIndex((n) => (n - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setIndex((n) => (n + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((n) => (n + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <header
      className="relative isolate min-h-[100vh] overflow-hidden border-b border-rule/15"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={clearTouchStart}
    >
      {/* Arka plan: tam ekran fotoğraflar, çapraz geçiş */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1400ms] ease-out",
              i === index ? "z-[1] opacity-100" : "z-0 opacity-0",
            )}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* İçerik — sol başlangıç hizalaması */}
      <div className="relative z-[3] flex min-h-[100svh] w-full flex-col justify-end items-start pb-24 pt-[calc(var(--header-h)+1.5rem)] text-left px-4 sm:px-8">
        {children}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-[4] flex items-center justify-between px-2 sm:px-6 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/20 text-white/90 backdrop-blur-md transition-all hover:bg-black/40 hover:text-white hover:scale-105 active:scale-95"
          aria-label="Önceki Görsel"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/20 text-white/90 backdrop-blur-md transition-all hover:bg-black/40 hover:text-white hover:scale-105 active:scale-95"
          aria-label="Sonraki Görsel"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
        </button>
      </div>

      {/* Slayt göstergesi — mobilde sol alta, masaüstünde ortada */}
      <div
        className="absolute bottom-4 left-3 z-[3] flex translate-x-0 gap-2 sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2"
        role="tablist"
        aria-label="Hero görselleri"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={slide.label}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === index
                ? "w-8 bg-cream-muted"
                : "w-2 bg-cream-muted/40 hover:bg-cream-muted/70",
            )}
          />
        ))}
      </div>
    </header>
  );
}
