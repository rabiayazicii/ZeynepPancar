import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center px-4 pb-20 pt-[calc(var(--header-h)+3rem)] text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
        404
      </p>
      <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 max-w-md text-ink-muted">
        Aradığınız adres taşınmış veya silinmiş olabilir.
      </p>
      <Link href="/" className="btn-primary mt-8 px-8">
        Ana sayfaya dön
      </Link>
    </main>
  );
}
