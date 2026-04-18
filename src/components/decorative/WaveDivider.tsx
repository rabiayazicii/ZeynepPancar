import { cn } from "@/lib/cn";

type Props = {
  /** Tailwind fill — örn. fill-surface/95 */
  className?: string;
};

/** Bölümler arası yumuşak dalga geçişi */
export function WaveDivider({ className }: Props) {
  return (
    <div
      className={cn(
        "relative -mt-px h-14 w-full overflow-hidden leading-none text-surface/95",
        className,
      )}
      aria-hidden
    >
      <svg
        className="absolute bottom-0 left-1/2 min-w-[1200px] -translate-x-1/2"
        viewBox="0 0 1440 56"
        fill="currentColor"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "3.5rem" }}
      >
        <path d="M0,28 C240,8 480,48 720,28 C960,8 1200,48 1440,28 L1440,56 L0,56 Z" />
      </svg>
    </div>
  );
}
