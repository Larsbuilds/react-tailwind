const withNextIntl = require('next-intl/plugin')('./app/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  generateBuildId: async () => {
    return 'development-build'
  },
  // Optimize performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
    serverComponentsExternalPackages: ['framer-motion'],
  },
  // Reduce development logging
  logging: {
    level: 'error',
    fullUrl: false,
  },
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Prevent initial HTML flash
  poweredByHeader: false,
  // Enable compression
  compress: true,
  // Cache settings
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Optimize for LCP
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Optimize build output
  output: 'standalone',
  // Enable modern optimizations
  swcMinify: true,
  // Optimize for production
  productionBrowserSourceMaps: false,
}

module.exports = withNextIntl(nextConfig);