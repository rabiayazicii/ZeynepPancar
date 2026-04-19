import Image from "next/image";
import { cn } from "@/lib/cn";
import { aboutGalleryFiles, aboutImageSrc } from "@/lib/about-images";

type Props = {
  className?: string;
  /** Daha yüksek hücreler ve boşluklar (Hakkımda vb.) */
  size?: "default" | "large";
};

/**
 * Klinikten kareler — `aboutGalleryFiles` ile aynı ızgara (Hakkımda / Hizmetler).
 */
export function ClinicPhotoGrid({ className, size = "default" }: Props) {
  const large = size === "large";

  return (
    <div
      className={cn(
        "grid w-full min-w-0 max-w-full grid-cols-2 gap-2.5 sm:gap-3",
        large && "gap-3.5 sm:gap-5 lg:gap-6",
        className,
      )}
    >
      {aboutGalleryFiles.map((file, i) => (
        <div
          key={file}
          className={cn(
            "group relative aspect-[4/3] min-h-0 min-w-0 overflow-hidden ring-1 ring-sage/22 transition-shadow duration-300 hover:shadow-lg hover:ring-sage/38",
            large
              ? // Mobilde min-height + aspect birlikte sütundan geniş min-içerik üretip taşırıyor; min-h yalnız md+
                "rounded-xl sm:rounded-2xl md:min-h-[13rem] lg:min-h-[17rem] xl:min-h-[20rem]"
              : "rounded-xl hover:shadow-md hover:ring-sage/32",
          )}
        >
          <Image
            src={aboutImageSrc(file)}
            alt={`Çalışma ortamı — görsel ${i + 1}`}
            fill
            sizes={
              large
                ? "(max-width: 768px) 42vw, (max-width: 1280px) 40vw, 38vw"
                : "(max-width: 1024px) 45vw, 18vw"
            }
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ))}
    </div>
  );
}
