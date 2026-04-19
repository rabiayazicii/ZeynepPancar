import { cn } from "@/lib/cn";

/** Krem / açık zemin ikincil link — pastel dolgu + hafif 3D */
export const softRoundLink3d =
  "rounded-full border border-sage/22 bg-gradient-to-b from-white/75 via-cream-muted/85 to-sage/[0.08] shadow-[0_4px_0_0_rgba(77,99,88,0.14),0_10px_26px_-12px_rgba(18,22,20,0.08)] transition hover:-translate-y-px hover:border-sage/32 hover:from-cream-muted hover:to-sage/[0.12] hover:shadow-[0_5px_0_0_rgba(77,99,88,0.18),0_12px_30px_-12px_rgba(18,22,20,0.1)] active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(77,99,88,0.14)]";

/** Sarı (highlight) birincil CTA — basmalı gölge + hover/active */
export const highlightCta3d = cn(
  "!shadow-[0_5px_0_0_rgba(77,99,88,0.34),0_14px_36px_-12px_rgba(18,22,20,0.16)] !transition-[transform,box-shadow]",
  "hover:!-translate-y-0.5 hover:!shadow-[0_6px_0_0_rgba(77,99,88,0.4),0_18px_40px_-12px_rgba(18,22,20,0.18)]",
  "active:!translate-y-0.5 active:!shadow-[0_2px_0_0_rgba(77,99,88,0.34)]",
);
