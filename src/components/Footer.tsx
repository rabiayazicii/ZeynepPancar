import Image from "next/image";
import Link from "next/link";
import { SITE_LOGO_SRC } from "@/lib/about-images";
import {
  ADDRESS_LINES,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WORKING_HOURS,
} from "@/lib/contact-info";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="brand-rule" />
      </div>
      <div className="border-t border-rule/30 glass-band">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src={SITE_LOGO_SRC}
                alt=""
                width={160}
                height={48}
                className="h-10 w-auto shrink-0 sm:h-11"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-base font-light tracking-tight text-ink group-hover:text-sage sm:text-lg">
                  Zeynep Pancar
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-sage-dark/95 sm:text-[10px]">
                  DKT & Fizyoterapist
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Bütüncül yaklaşım ve bilimsel yöntemlerle, her yaşta dil, konuşma, yutma ve hareket gelişimini destekliyorum.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
              Hızlı bağlantılar
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  className="text-ink-muted transition-colors hover:text-sage"
                  href="/hizmetler"
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  className="text-ink-muted transition-colors hover:text-sage"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-ink-muted transition-colors hover:text-sage"
                  href="/iletisim"
                >
                  Randevu
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
              İletişim
            </p>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-ink-muted">
              <p>
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a href={EMAIL_HREF} className="break-all transition-colors hover:text-sage">
                  {EMAIL_DISPLAY}
                </a>
              </p>
              <p>
                <a href={PHONE_HREF} className="tabular-nums transition-colors hover:text-sage">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <ul className="space-y-1">
                {WORKING_HOURS.map((w) => (
                  <li key={w.days}>
                    <span className="text-ink">{w.days}:</span>{" "}
                    <span className="tabular-nums">{w.hours}</span>
                  </li>
                ))}
              </ul>
            </address>
          </div>
        </div>
        <div className="border-t border-rule/22 py-6 text-center text-xs text-ink-muted/75">
          © {new Date().getFullYear()} Zeynep Pancar. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
