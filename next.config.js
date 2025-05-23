/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during build for Vercel deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'veltron.in',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  // CSS optimization with critters
  experimental: {
    optimizeCss: true, // Keep this since we installed critters
  },
  // Stable Turbopack configuration
  turbopack: {
    // Turbopack specific configurations
    resolveAlias: {
      // Add any module aliases if needed
    },
  },
  // Compiler options for better optimization
  compiler: {
    // Remove console.log calls in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // i18n configuration removed as it's not supported in App Router
  // See: https://nextjs.org/docs/app/building-your-application/routing/internationalization
}

module.exports = nextConfig
