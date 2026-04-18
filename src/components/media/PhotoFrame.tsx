import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type Aspect = "video" | "square" | "portrait" | "wide";

type Props = {
  /** Çerçeve içi etiket (placeholder’da görünür) */
  title: string;
  /** Çerçevenin altındaki açıklama */
  caption?: string;
  /** İkinci satır ipucu */
  hint?: string;
  aspect?: Aspect;
  /** gallery: ince beyaz paspartu | polaroid: klasik polaroid alt şerit */
  variant?: "gallery" | "polaroid";
  className?: string;
  /** `next/image` veya özel içerik — yoksa placeholder */
  children?: ReactNode;
};

/**
 * Fotoğraf eklenecek çerçeve — `children` ile gerçek görsel, yoksa gradient placeholder.
 */
export function PhotoFrame({
  title,
  caption,
  hint,
  aspect = "portrait",
  variant = "gallery",
  className,
  children,
}: Props) {
  const inner =
    children ?? (
      <ImagePlaceholder
        label={title}
        hint={hint}
        aspect={aspect}
        frameless
        className="w-full min-h-0"
      />
    );

  if (variant === "polaroid") {
    return (
      <figure className={cn("mx-auto w-full max-w-md", className)}>
        <div className="rounded-sm bg-white p-2 pb-3 shadow-[0_12px_40px_-8px_rgba(42,50,47,0.18)] ring-1 ring-black/[0.06] sm:p-3 sm:pb-4">
          <div className="overflow-hidden rounded-[2px] bg-cream-muted/30">
            {inner}
          </div>
        </div>
        {(caption || title) && (
          <figcaption className="mt-2 text-center sm:mt-3">
            <span className="text-xs italic leading-snug text-ink-muted/90 sm:text-sm">
              {caption ?? title}
            </span>
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-[1.15rem] bg-gradient-to-br from-white/88 to-cream-muted/55 p-[2px] shadow-[0_20px_50px_-15px_rgba(95,122,108,0.22)] ring-1 ring-white/55",
          "ring-offset-2 ring-offset-cream/0",
        )}
      >
        <div className="overflow-hidden rounded-[0.95rem] ring-1 ring-sage/15">
          {inner}
        </div>
      </div>
      {(caption || title) && (
        <figcaption className="mt-2 max-w-full px-1 text-center text-[11px] leading-snug text-ink-muted/85 sm:mt-3 sm:px-0 sm:text-xs sm:text-[13px]">
          {caption ?? title}
        </figcaption>
      )}
    </figure>
  );
}
