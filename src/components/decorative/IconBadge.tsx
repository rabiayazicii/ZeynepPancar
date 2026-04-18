import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

/** Yumuşak, krem zemine uyumlu renkli rozetler */
export type IconAccent =
  | "sage"
  | "emerald"
  | "ocean"
  | "amber"
  | "coral"
  | "violet"
  | "rose";

const accentStyles: Record<IconAccent, { box: string }> = {
  sage: {
    box: "from-sage/30 to-sage/10 text-sage-dark ring-1 ring-sage/35",
  },
  emerald: {
    box: "from-emerald-300/55 to-emerald-100/35 text-emerald-900 ring-1 ring-emerald-400/35",
  },
  ocean: {
    box: "from-sky-300/55 to-cyan-100/35 text-sky-900 ring-1 ring-sky-400/35",
  },
  amber: {
    box: "from-amber-200/80 to-amber-50/50 text-amber-950 ring-1 ring-amber-300/45",
  },
  coral: {
    box: "from-orange-200/75 to-orange-50/45 text-orange-900 ring-1 ring-orange-300/40",
  },
  violet: {
    box: "from-violet-200/65 to-violet-100/35 text-violet-900 ring-1 ring-violet-300/40",
  },
  rose: {
    box: "from-rose-200/70 to-rose-50/40 text-rose-900 ring-1 ring-rose-300/40",
  },
};

type Props = {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md";
  accent?: IconAccent;
};

export function IconBadge({
  icon: Icon,
  className,
  size = "md",
  accent = "sage",
}: Props) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const iconSize = size === "sm" ? 18 : 22;
  const styles = accentStyles[accent];

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-inner shadow-white/30",
        styles.box,
        box,
        className,
      )}
    >
      <Icon size={iconSize} strokeWidth={1.65} aria-hidden className="opacity-95" />
    </div>
  );
}
