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
  webpack: (config, { dev }) => {
    // Disable webpack disk caching in development to permanently fix Windows file system locking & cache corruption
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
