import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hanya aktif saat development (next dev)
  ...(process.env.NODE_ENV === "development" && {
    allowedDevOrigins: ["10.29.132.225"],
  }),

  // Optimasi gambar untuk production
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Aktifkan kompresi gzip/brotli
  compress: true,
};

export default nextConfig;
