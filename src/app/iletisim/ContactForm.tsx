"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageShell } from "@/components/layout/PageShell";
import { highlightCta3d } from "@/lib/highlight-cta-3d";
import { cn } from "@/lib/cn";
import { ContactMapEmbed } from "./ContactMapEmbed";

const PHONE_DISPLAY = "+90 532 100 20 24";
const PHONE_HREF = "tel:+905321002024";
const EMAIL_DISPLAY = "merhaba@zeyneppancar.ornek";
const EMAIL_HREF = `mailto:${EMAIL_DISPLAY}`;

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-8 bg-sage/40" aria-hidden />
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage/95">
        {children}
      </span>
    </div>
  );
}

const fieldClass = cn(
  "mt-2 w-full rounded-xl border border-sage/24 bg-cream-muted/75 px-3.5 py-2.5 text-[14px] text-ink outline-none transition sm:px-4 sm:py-3 sm:text-[15px]",
  "shadow-[inset_0_2px_4px_rgba(18,22,20,0.035)]",
  "placeholder:text-ink-muted/45",
  "focus:border-sage/50 focus:bg-cream-muted/90 focus:shadow-[inset_0_2px_4px_rgba(18,22,20,0.04),0_0_0_3px_rgba(95,122,108,0.12)]",
);

const shell3d = cn(
  "relative overflow-hidden rounded-[1.65rem]",
  "border border-sage/28 bg-gradient-to-b from-cream-muted/80 via-background/88 to-cream-muted/50",
  "shadow-[0_22px_56px_-28px_rgba(18,22,20,0.32),0_10px_28px_-14px_rgba(95,122,108,0.14),inset_0_1px_0_rgba(255,251,240,0.55)]",
);

const innerForm3d = cn(
  "relative overflow-hidden rounded-2xl border border-sage/22 bg-gradient-to-br from-cream-muted/70 via-background/92 to-cream-muted/55 p-3.5 sm:p-8",
  "shadow-[inset_0_1px_0_rgba(255,253,245,0.85),inset_0_-10px_28px_-14px_rgba(95,122,108,0.08),0_14px_36px_-22px_rgba(18,22,20,0.16)]",
);

const submitBase = cn(
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-sage/40 bg-highlight px-5 py-2.5 text-[13px] font-semibold text-ink sm:px-6 sm:py-3.5 sm:text-sm",
  "transition hover:border-sage hover:bg-cream-muted",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
);

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell
      width="full"
      className="mt-14 max-sm:px-2.5 sm:mt-20 lg:mt-24"
    >
      <FadeIn>
        <div
          className={cn(
            shell3d,
            "lg:grid lg:min-h-[28rem] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)]",
          )}
        >
          {/* Üst highlight — sarı değil, nötr/sage cam çizgisi */}
          <span
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sage/25 to-transparent sm:inset-x-10"
            aria-hidden
          />

          <aside
            className={cn(
              "relative border-rule/20 bg-gradient-to-b from-sage/[0.06] via-cream-muted/35 to-cream-muted/55 p-5 sm:p-8",
              "lg:border-r lg:border-t-0 lg:border-sage/20",
              "order-2 border-t border-sage/18 lg:order-1",
            )}
          >
            <span
              className="pointer-events-none absolute inset-y-8 left-0 w-px bg-gradient-to-b from-sage/45 via-sage/20 to-transparent sm:inset-y-10"
              aria-hidden
            />
            <div className="relative pl-4 sm:pl-5">
              <Kicker>Bilgiler</Kicker>
              <h2 className="mt-4 font-serif text-xl font-medium tracking-tight text-ink sm:text-[1.65rem]">
                Hızlı iletişim
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                Aşağıdaki bilgiler örnektir; yayına alırken kendi telefon ve adresinizle
                güncelleyebilirsiniz.
              </p>

              <ul className="mt-8 divide-y divide-sage/15">
                <li className="flex gap-4 pb-6">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-200/55 bg-gradient-to-br from-sky-50/70 to-sky-100/50 text-sky-600/85 shadow-[0_3px_10px_-5px_rgba(14,116,144,0.2)]"
                    aria-hidden
                  >
                    <span className="text-[1.05rem] leading-none opacity-90 drop-shadow-sm">
                      📞
                    </span>
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage/90">
                      Telefon
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="mt-2 inline-flex items-center gap-1.5 font-medium text-ink underline decoration-sage/35 underline-offset-4 transition hover:decoration-sage"
                    >
                      <span className="tabular-nums">{PHONE_DISPLAY}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-sage" aria-hidden />
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 py-6">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-200/55 bg-gradient-to-br from-violet-50/70 to-violet-100/50 text-violet-600/85 shadow-[0_3px_10px_-5px_rgba(109,40,217,0.18)]"
                    aria-hidden
                  >
                    <span className="text-[1.05rem] leading-none opacity-90 drop-shadow-sm">
                      ✉️
                    </span>
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage/90">
                      E-posta
                    </p>
                    <a
                      href={EMAIL_HREF}
                      className="mt-2 inline-flex items-center gap-1.5 break-all text-left font-medium text-ink underline decoration-sage/35 underline-offset-4 transition hover:decoration-sage"
                    >
                      {EMAIL_DISPLAY}
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-sage" aria-hidden />
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 py-6">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200/55 bg-gradient-to-br from-emerald-50/70 to-emerald-100/50 text-emerald-700/88 shadow-[0_3px_10px_-5px_rgba(5,150,105,0.18)]"
                    aria-hidden
                  >
                    <span className="text-[1.05rem] leading-none opacity-90 drop-shadow-sm">
                      📍
                    </span>
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage/90">
                      Adres
                    </p>
                    <p className="mt-2 text-pretty text-[15px] leading-relaxed text-ink-muted">
                      Örnek Mah. Terapi Sok. No: 7 Kat: 2
                      <br />
                      Şişli / İstanbul
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 pt-6">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-200/55 bg-gradient-to-br from-amber-50/70 to-amber-100/50 text-amber-800/88 shadow-[0_3px_10px_-5px_rgba(217,119,6,0.18)]"
                    aria-hidden
                  >
                    <span className="text-[1.05rem] leading-none opacity-90 drop-shadow-sm">
                      🕐
                    </span>
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage/90">
                      Çalışma saatleri
                    </p>
                    <p className="mt-2 text-pretty text-[15px] leading-relaxed text-ink-muted">
                      Hafta içi 09:00–18:00 · Cumartesi 10:00–14:00
                    </p>
                    <p className="mt-2 text-sm text-ink-muted/80">
                      Pazar ve resmi tatillerde kapalı (örnek metin).
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <div className="order-1 p-3.5 sm:p-8 lg:p-9 lg:pl-10">
            <div className={innerForm3d}>
              {sent ? (
                <div className="flex flex-col items-center py-8 text-center sm:py-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-200/80 bg-cream-muted/90 text-emerald-600 shadow-[0_6px_16px_-6px_rgba(5,150,105,0.3)]">
                    <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="mt-6 max-w-md font-serif text-lg font-medium text-ink sm:text-2xl">
                    Teşekkürler
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                    Mesajınız alındı. Bu form demo amaçlıdır; canlıya almak için e-posta
                    veya API entegrasyonu eklenebilir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <header className="border-b border-sage/15 pb-5">
                    <Kicker>Form</Kicker>
                    <h2 className="mt-4 font-serif text-xl font-medium tracking-tight text-ink sm:text-[1.65rem]">
                      Bize yazın
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                      Randevu talebi veya sorunuzu aşağıdan iletebilirsiniz.
                    </p>
                  </header>

                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
                    <div className="sm:col-span-1">
                      <label htmlFor="name" className="block text-sm font-medium text-ink">
                        Ad Soyad
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className={fieldClass}
                        placeholder="Adınız"
                        autoComplete="name"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="email" className="block text-sm font-medium text-ink">
                        E-posta
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={fieldClass}
                        placeholder="ornek@mail.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-ink">
                      Konu
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      className={fieldClass}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option value="randevu">Randevu talebi</option>
                      <option value="bilgi">Genel bilgi</option>
                      <option value="kurum">Kurum iş birliği</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={cn(fieldClass, "resize-y min-h-[8.5rem]")}
                      placeholder="Kısaca durumunuzu veya sorunuzu yazın"
                    />
                  </div>
                  <button type="submit" className={cn(submitBase, highlightCta3d)}>
                    <Send
                      className="h-4 w-4 shrink-0 text-sage-dark"
                      strokeWidth={2}
                      aria-hidden
                    />
                    Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </FadeIn>

      <ContactMapEmbed />
    </PageShell>
  );
}
