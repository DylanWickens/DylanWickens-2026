import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Include native asset widths so srcset does not jump 2048 → 3840 (3840 WebP was ~1400px for this PNG).
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2800, 3840],
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
