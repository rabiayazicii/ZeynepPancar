"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PageShell } from "@/components/layout/PageShell";
import { ContactMapEmbed } from "./ContactMapEmbed";

const fieldClass =
  "mt-2 w-full rounded-xl border border-sage/20 bg-cream-muted/40 px-4 py-3 text-ink outline-none transition placeholder:text-ink-muted/50 focus:border-sage/45 focus:bg-cream-muted/65 focus:ring-2 focus:ring-sage/15";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell width="full" className="mt-14 sm:mt-20 lg:mt-24">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-14 xl:gap-x-14">
        <div className="space-y-8 lg:col-span-5">
          <FadeIn>
            <div className="rounded-2xl border border-line/25 bg-gradient-to-br from-cream-muted/50 via-cream/30 to-sage/[0.06] p-6 shadow-sm ring-1 ring-sage/10 sm:p-7">
              <p className="text-sm font-medium text-sage/95">
                💬 Hızlı iletişim
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted sm:text-sm">
                Aşağıdaki bilgiler örnektir; canlıya alırken kendi numara ve adresinizle
                güncelleyebilirsiniz.
              </p>
              <ul className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-muted">
                <li className="flex gap-3">
                  <span className="text-lg leading-none" aria-hidden>
                    📞
                  </span>
                  <span>
                    <strong className="font-semibold text-ink">Telefon</strong>
                    <br />
                    <span className="mt-1 inline-block rounded-lg border border-sage/15 bg-cream-muted/40 px-2.5 py-1 text-[0.95em] tabular-nums">
                      +90 532 100 20 24
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg leading-none" aria-hidden>
                    📧
                  </span>
                  <span>
                    <strong className="font-semibold text-ink">E-posta</strong>
                    <br />
                    <span className="mt-1 inline-block rounded-lg border border-sage/15 bg-cream-muted/40 px-2.5 py-1 text-[0.95em]">
                      merhaba@zeyneppancar.ornek
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg leading-none" aria-hidden>
                    📍
                  </span>
                  <span>
                    <strong className="font-semibold text-ink">Adres</strong>
                    <br />
                    <span className="mt-1 block text-pretty">
                      Örnek Mah. Terapi Sok. No: 7 Kat: 2
                      <br />
                      Şişli / İstanbul
                    </span>
                  </span>
                </li>
                <li className="flex gap-3 border-t border-line/20 pt-5">
                  <span className="text-lg leading-none" aria-hidden>
                    🕐
                  </span>
                  <span>
                    <strong className="font-semibold text-ink">Çalışma saatleri</strong>
                    <br />
                    <span className="mt-1 block text-pretty">
                      Hafta içi 09:00–18:00 · Cumartesi 10:00–14:00
                      <br />
                      <span className="text-sm text-ink-muted/90">
                        (Pazar ve resmi tatillerde kapalı — örnek metin ✨)
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:pl-2 xl:pl-6">
          <FadeIn delay={0.08}>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line/30 glass p-8 shadow-[0_10px_40px_-14px_rgba(95,122,108,0.14)] ring-1 ring-sage/10 sm:p-10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-sage/[0.06] blur-3xl"
                aria-hidden
              />
              {sent ? (
                <p className="relative font-medium leading-relaxed text-sage">
                  ✉️ Teşekkürler — mesajınız alındı. (Demo: gerçek gönderim için form
                  entegrasyonu gerekir.)
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative space-y-6"
                >
                  <p className="text-sm text-ink-muted">
                    📝 Randevu veya sorunuzu aşağıdan iletebilirsiniz.
                  </p>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-ink"
                    >
                      Ad Soyad
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className={fieldClass}
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ink"
                    >
                      E-posta
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={fieldClass}
                      placeholder="ornek@mail.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="topic"
                      className="block text-sm font-medium text-ink"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-ink"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={`${fieldClass} resize-y`}
                      placeholder="Kısaca durumunuzu veya sorunuzu yazın"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Gönder ✨
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      <ContactMapEmbed />
    </PageShell>
  );
}
