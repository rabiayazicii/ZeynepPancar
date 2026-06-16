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
        large
          ? "grid w-full min-w-0 max-w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3"
          : "grid w-full min-w-0 max-w-full grid-cols-2 gap-2.5 sm:gap-3",
        className,
      )}
    >
      {aboutGalleryFiles.map((file, i) => {
        return (
          <div
            key={file}
            className="group relative aspect-[4/3] min-h-0 min-w-0 overflow-hidden ring-1 ring-sage/22 transition-all duration-500 hover:shadow-xl hover:ring-sage/38 hover:-translate-y-1 rounded-2xl"
          >
            <Image
              src={aboutImageSrc(file)}
              alt={`Çalışma ortamı — görsel ${i + 1}`}
              fill
              sizes={
                large
                  ? "(max-width: 768px) 50vw, 33vw"
                  : "(max-width: 1024px) 50vw, 25vw"
              }
              className="object-cover transition duration-700 group-hover:scale-[1.05]"
            />
          </div>
        );
      })}
    </div>
  );
}
