import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cap generated widths at 2048px: full-bleed banners were requesting
    // 3840px files on high-DPR screens, far more than they need.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
};

export default nextConfig;
