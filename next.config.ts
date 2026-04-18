import type { NextConfig } from "next";

/**
 * GitHub Pages için örnek build (repo kökünde yayın):
 *   BASE_PATH=/ZeynepPancar STATIC_EXPORT=true npm run build
 * Çıktı: `out/` klasörünü Pages köküne koyun.
 *
 * Yerel geliştirme: env vermeden `npm run dev` — basePath ve export kapalı.
 */
const staticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  ...(staticExport && { output: "export" as const }),
  ...(basePath ? { basePath } : {}),
  /** GitHub Pages’te klasör yönlendirmesi için sık kullanılır */
  ...(staticExport && { trailingSlash: true }),
  images: {
    /** `output: "export"` ile `next/image` için gerekli */
    unoptimized: staticExport,
  },
};

export default nextConfig;
