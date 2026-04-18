/** Hafif nokta ızgarası — arka plan süsü */
export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
      style={{
        opacity: 0.45,
        backgroundImage:
          "radial-gradient(color-mix(in srgb, var(--brand) 18%, transparent) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
  );
}
