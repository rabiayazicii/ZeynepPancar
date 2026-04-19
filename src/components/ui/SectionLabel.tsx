import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Ortalanmış başlık (çizgi iki yanda) */
  center?: boolean;
};

export function SectionLabel({ children, className, center }: Props) {
  if (center) {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-3 text-center",
          className,
        )}
      >
        <span className="h-px w-7 shrink-0 bg-rule/72" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {children}
        </span>
        <span className="h-px w-7 shrink-0 bg-rule/72" aria-hidden />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-8 shrink-0 bg-rule/78" aria-hidden />
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        {children}
      </span>
    </div>
  );
}
