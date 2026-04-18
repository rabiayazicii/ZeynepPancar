import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        variant === "primary" ? "btn-primary" : "btn-secondary",
        className,
      )}
    >
      {children}
    </Link>
  );
}
