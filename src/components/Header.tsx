"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_LOGO_SRC } from "@/lib/about-images";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

function navLinkActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (open) {
        setNavHidden(false);
        lastScrollY.current = y;
        return;
      }
      if (y < 48) {
        setNavHidden(false);
      } else if (y > lastScrollY.current && y > 72) {
        setNavHidden(true);
      } else if (y < lastScrollY.current) {
        setNavHidden(false);
      }
      lastScrollY.current = y;
    };
    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-rule/28 bg-cream shadow-[0_1px_0_rgba(18,22,20,0.14)] transition-transform duration-300 ease-out will-change-transform ${
        navHidden ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3"
        >
          <Image
            src={SITE_LOGO_SRC}
            alt=""
            width={160}
            height={48}
            className="h-9 w-auto shrink-0 sm:h-10"
            priority
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-serif text-base font-semibold tracking-tight text-ink transition-colors group-hover:text-sage sm:text-xl">
              Zeynep Pancar
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-sage/90 sm:text-[11px]">
              Dil ve Konuşma Terapisti
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <nav className="flex items-center gap-0.5">
            {nav.map((item) => {
              const active = navLinkActive(item.href, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-sage after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:rounded-full after:bg-sage after:content-['']"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/iletisim"
            className="btn-primary-sm ml-3"
          >
            Randevu
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link href="/iletisim" className="btn-primary-sm">
            Randevu
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-rule/32 glass text-ink"
            aria-expanded={open}
            aria-label="Menüyü aç"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menü</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-rule/28 glass-strong md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {nav.map((item) => {
                const active = navLinkActive(item.href, pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`border-b-2 border-transparent px-1 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "border-sage text-sage"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
