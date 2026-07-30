import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The design circulated as loose .html files before it was a site.
      // Anyone who bookmarked or shared those should land somewhere real.
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/healthcare-systems.html",
        destination: "/health-systems",
        permanent: true,
      },
      {
        source: "/healthcare-systems",
        destination: "/health-systems",
        permanent: true,
      },
      {
        source: "/community-care-partner.html",
        destination: "/community-care-partner",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
