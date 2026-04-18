import Image from "next/image";
import { PhotoFrame } from "@/components/media/PhotoFrame";
import { ABOUT_PORTRAIT_FILE, aboutImageSrc } from "@/lib/about-images";

/**
 * Hakkımda hero: ana portre (tek görsel).
 */
export function AboutHeroPortraitGallery() {
  return (
    <div className="flex w-full max-w-full flex-col items-stretch lg:max-w-none lg:items-end">
      <PhotoFrame
        title="Zeynep Pancar"
        caption="Zeynep Pancar"
        aspect="portrait"
        variant="gallery"
        className="card-soft w-full max-w-[min(100%,22rem)] shadow-[0_32px_80px_-28px_rgba(95,122,108,0.28)] sm:max-w-[26rem] lg:ml-auto lg:max-w-[min(100%,30rem)] xl:max-w-[34rem]"
      >
        <div className="relative aspect-[3/4] min-h-[min(52vh,20rem)] w-full bg-gradient-to-br from-cream-muted/60 to-cream-muted/30 sm:min-h-[24rem] lg:min-h-[min(58vh,34rem)] xl:min-h-[min(62vh,38rem)]">
          <Image
            src={aboutImageSrc(ABOUT_PORTRAIT_FILE)}
            alt="Zeynep Pancar — portre"
            fill
            priority
            sizes="(max-width: 1024px) 85vw, min(34rem, 40vw)"
            className="object-cover"
          />
        </div>
      </PhotoFrame>
    </div>
  );
}
