type ImagePlaceholderProps = {
  label?: string;
  /** Alt satır metni (varsayılan: “Fotoğraf veya illüstrasyon eklenecek”) */
  hint?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  className?: string;
  /** Çerçeve (PhotoFrame) içinde: dış çerçeve ve kesikli border kaldırılır */
  frameless?: boolean;
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/** Dekoratif gradient + soyut şekiller; gerçek fotoğraf eklendiğinde değiştirilir */
export function ImagePlaceholder({
  label = "Görsel alanı",
  hint,
  aspect = "video",
  className = "",
  frameless = false,
}: ImagePlaceholderProps) {
  const hintText = hint ?? "Fotoğraf veya illüstrasyon eklenecek";
  return (
    <div
      className={`group relative flex flex-col items-center justify-center overflow-hidden bg-cream-muted/40 text-center transition duration-300 ${frameless ? "rounded-none border-0" : `rounded-2xl border-2 border-dashed border-line/90 hover:border-sage/35 hover:shadow-[0_12px_40px_-12px_rgba(95,122,108,0.2)]`} ${aspectClass[aspect]} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sage/[0.12] via-cream-muted/30 to-cream-deep/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-sage/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-sage/10 blur-2xl"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="phg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <circle cx="320" cy="60" r="90" fill="url(#phg)" />
        <circle cx="80" cy="220" r="70" fill="url(#phg)" />
        <ellipse cx="200" cy="140" rx="120" ry="40" fill="url(#phg)" opacity="0.6" />
      </svg>
      <div className="relative z-10 max-w-[95%] px-2 sm:px-4">
        <span className="text-xs font-medium leading-snug text-ink-muted/90 sm:text-sm">
          {label}
        </span>
        <span className="mt-1 block text-[11px] leading-snug text-ink-muted/55 sm:text-xs">
          {hintText}
        </span>
      </div>
    </div>
  );
}
