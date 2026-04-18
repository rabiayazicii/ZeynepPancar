"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PhotoFrame } from "@/components/media/PhotoFrame";
import { aboutImageSrc } from "@/lib/about-images";
import { cn } from "@/lib/cn";

type FrameAspect = "video" | "square" | "portrait" | "wide";

const imageAspectClass: Record<FrameAspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export type CarouselSlide = {
  id: string;
  title: string;
  caption?: string;
  hint?: string;
  variant?: "gallery" | "polaroid";
  aspect?: FrameAspect;
  /** `public/zp-gorseller/` altındaki dosya adı */
  imageFile?: string;
  /** İlk slayt LCP için */
  priority?: boolean;
};

type Props = {
  slides: CarouselSlide[];
  className?: string;
  /** Otomatik kaydırma (ms) — 0 = kapalı */
  autoplayMs?: number;
};

export function PhotoCarousel({ slides, className, autoplayMs = 0 }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || autoplayMs <= 0) return;
    const id = setInterval(() => emblaApi.scrollNext(), autoplayMs);
    return () => clearInterval(id);
  }, [emblaApi, autoplayMs]);

  if (slides.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div
        className="overflow-hidden rounded-[1.25rem] [-webkit-tap-highlight-color:transparent]"
        ref={emblaRef}
      >
        <div className="flex touch-pan-x">
          {slides.map((s) => (
            <div
              key={s.id}
              className="min-w-0 shrink-0 grow-0 basis-full pl-0 pr-0 sm:px-1 md:px-3"
            >
              <PhotoFrame
                title={s.title}
                caption={s.caption}
                hint={s.imageFile ? undefined : s.hint}
                variant={s.variant ?? "gallery"}
                aspect={s.aspect ?? "video"}
              >
                {s.imageFile ? (
                  <div
                    className={cn(
                      "relative w-full bg-cream-muted/40",
                      imageAspectClass[s.aspect ?? "video"],
                    )}
                  >
                    <Image
                      src={aboutImageSrc(s.imageFile)}
                      alt={s.caption ?? s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                      priority={s.priority}
                    />
                  </div>
                ) : null}
              </PhotoFrame>
            </div>
          ))}
        </div>
      </div>
      {slides.length > 1 && (
        <>
          <div className="mt-4 flex justify-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === selected ? "w-6 bg-sage" : "w-2 bg-line hover:bg-sage/40",
                )}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Slayt ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
