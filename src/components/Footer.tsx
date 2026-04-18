import Image from "next/image";
import Link from "next/link";
import { SITE_LOGO_SRC } from "@/lib/about-images";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="brand-rule" />
      </div>
      <div className="border-t border-line/30 glass-band">
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
                <span className="font-serif text-lg font-semibold tracking-tight text-ink group-hover:text-sage">
                  Zeynep Pancar
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-sage/90 sm:text-[11px]">
                  Dil ve Konuşma Terapisti
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Her yaşta iletişim becerilerini desteklemek için bilimsel yöntemler ve
              sıcak bir terapi ortamı sunuyorum.
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
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              E-posta ve telefon bilgileri iletişim sayfasında yer almaktadır.
            </p>
          </div>
        </div>
        <div className="border-t border-line/25 py-6 text-center text-xs text-ink-muted/75">
          © {new Date().getFullYear()} Zeynep Pancar. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
