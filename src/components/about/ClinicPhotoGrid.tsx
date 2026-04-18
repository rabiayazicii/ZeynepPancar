import Image from "next/image";
import { cn } from "@/lib/cn";
import { aboutGalleryFiles, aboutImageSrc } from "@/lib/about-images";

type Props = {
  className?: string;
};

/**
 * Klinikten kareler — `aboutGalleryFiles` ile aynı ızgara (Hakkımda / Hizmetler).
 */
export function ClinicPhotoGrid({ className }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-2.5 sm:gap-3",
        className,
      )}
    >
      {aboutGalleryFiles.map((file) => (
        <div
          key={file}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl"
        >
          <Image
            src={aboutImageSrc(file)}
            alt=""
            fill
            sizes="(max-width: 1024px) 45vw, 18vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ))}
    </div>
  );
}
