"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoFrame } from "@/components/media/PhotoFrame";
import { ABOUT_PORTRAIT_FILE, aboutImageSrc } from "@/lib/about-images";
import { cn } from "@/lib/cn";

// Slayt görselleri (İlk olarak varsayılan görsel, ardından kullanıcının eklediği portreler)
const portraitSlides = [
  "anasayfazeynosu.jpg",
  "baloncuk.jpg",
  "IMG_6899.jpeg",
];

const CYCLE_INTERVAL_MS = 5000;

/**
 * Hakkımda hero: Çoklu portre slayt gösterisi (otomatik geçiş + oklar + noktalar)
 */
export function AboutHeroPortraitGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((n) => (n + 1) % portraitSlides.length);
    }, CYCLE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((n) => (n - 1 + portraitSlides.length) % portraitSlides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((n) => (n + 1) % portraitSlides.length);
  };

  return (
    <div
      className="mx-auto flex w-full min-w-0 max-w-full flex-col items-center"
    >
      <PhotoFrame
        title="Zeynep Pancar"
        showFigcaption={false}
        aspect="portrait"
        variant="gallery"
        className="card-soft mx-auto w-full max-w-[min(100%,20rem)] shadow-[0_32px_80px_-28px_rgba(95,122,108,0.28)] sm:max-w-[min(100%,24rem)] lg:max-w-[min(100%,28rem)] xl:max-w-[min(100%,32rem)] group"
      >
        <div className="relative aspect-[3/4] min-h-[min(48vh,18rem)] w-full min-w-0 max-w-full bg-gradient-to-br from-cream-muted/60 to-cream-muted/30 sm:min-h-[min(50vh,24rem)] lg:min-h-[min(58vh,34rem)] xl:min-h-[min(62vh,38rem)] overflow-hidden">
          {/* Görsellerin Çapraz Geçişi */}
          {portraitSlides.map((slide, i) => (
            <div
              key={slide}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                i === index ? "opacity-100 z-10" : "opacity-0 z-0",
              )}
            >
              <Image
                src={aboutImageSrc(slide)}
                alt={`Zeynep Pancar — portre ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, min(34rem, 40vw)"
                className="object-cover"
              />
            </div>
          ))}

          {/* Sol / Sağ Ok Tuşları — Hover'da belirir */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-cream-muted backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300 hover:bg-black/60 focus:opacity-100"
            aria-label="Önceki fotoğraf"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-cream-muted backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300 hover:bg-black/60 focus:opacity-100"
            aria-label="Sonraki fotoğraf"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Gösterge Noktaları */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2"
            role="tablist"
            aria-label="Portre fotoğrafları göstergesi"
          >
            {portraitSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Fotoğraf ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-cream" : "w-1.5 bg-cream/45 hover:bg-cream/75",
                )}
              />
            ))}
          </div>
        </div>
      </PhotoFrame>
    </div>
  );
}

