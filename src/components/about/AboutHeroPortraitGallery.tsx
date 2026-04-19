import Image from "next/image";
import { PhotoFrame } from "@/components/media/PhotoFrame";
import { ABOUT_PORTRAIT_FILE, aboutImageSrc } from "@/lib/about-images";

/**
 * Hakkımda hero: ana portre (tek görsel).
 */
export function AboutHeroPortraitGallery() {
  return (
    <div className="mx-auto flex w-full min-w-0 max-w-full flex-col items-center">
      <PhotoFrame
        title="Zeynep Pancar"
        showFigcaption={false}
        aspect="portrait"
        variant="gallery"
        className="card-soft mx-auto w-full max-w-[min(100%,20rem)] shadow-[0_32px_80px_-28px_rgba(95,122,108,0.28)] sm:max-w-[min(100%,24rem)] lg:max-w-[min(100%,28rem)] xl:max-w-[min(100%,32rem)]"
      >
        <div className="relative aspect-[3/4] min-h-[min(48vh,18rem)] w-full min-w-0 max-w-full bg-gradient-to-br from-cream-muted/60 to-cream-muted/30 sm:min-h-[min(50vh,24rem)] lg:min-h-[min(58vh,34rem)] xl:min-h-[min(62vh,38rem)]">
          <Image
            src={aboutImageSrc(ABOUT_PORTRAIT_FILE)}
            alt="Zeynep Pancar — portre"
            fill
            priority
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, min(34rem, 40vw)"
            className="object-cover"
          />
        </div>
      </PhotoFrame>
    </div>
  );
}
