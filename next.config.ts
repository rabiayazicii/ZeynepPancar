import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    /** Tarayıcıya AVIF/WebP ile daha küçük dosya */
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    /** Üretilen varyantların CDN/tarayıcı önbelleği (saniye) */
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [75, 80],
  },
};

export default nextConfig;
