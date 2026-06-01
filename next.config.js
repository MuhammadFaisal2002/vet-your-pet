/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.builder.io",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Disable webpack disk cache to prevent stale cache on Windows
      config.cache = false;

      if (isServer) {
        // PERMANENT FIX for "Cannot find module './948.js'" on Windows:
        // Next.js 14 dev server writes webpack-runtime.js referencing shared chunk
        // IDs (like 948.js) before those files are actually written to disk — a
        // Windows-specific race condition in async chunk compilation.
        // Disabling server-side splitChunks makes every page self-contained so
        // webpack-runtime.js never references a chunk that doesn't exist yet.
        config.optimization = {
          ...config.optimization,
          splitChunks: false,
          runtimeChunk: false,
        };
      }
    }
    return config;
  },
};

module.exports = nextConfig;

