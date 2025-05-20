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
  // i18n configuration removed as it's not supported in App Router
  // See: https://nextjs.org/docs/app/building-your-application/routing/internationalization
}

module.exports = nextConfig
