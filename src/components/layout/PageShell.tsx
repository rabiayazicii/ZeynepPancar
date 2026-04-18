import { cn } from "@/lib/cn";

const widths = {
  full: "max-w-6xl",
  wide: "max-w-5xl",
  content: "max-w-4xl",
  reading: "max-w-[42rem]",
  prose: "max-w-[40rem]",
} as const;

type WidthKey = keyof typeof widths;

type Props = {
  children: React.ReactNode;
  className?: string;
  /** İçerik sütunu genişliği */
  width?: WidthKey;
};

/**
 * Yatay padding + merkez hizalı max-width. Tüm iç sayfalarda tutarlı sınır.
 */
export function PageShell({ children, className, width = "full" }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        widths[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
