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
  // Enhance JavaScript optimization
  experimental: {
    optimizeCss: true, // Keep this since we installed critters
  },
  // Compiler options for better optimization
  compiler: {
    // Remove console.log calls in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize only in production
    if (!dev && !isServer) {
      // Reduce bundle size by setting proper browser targets
      config.optimization = {
        ...config.optimization,
        // Optimize for modern browsers
        moduleIds: 'deterministic',
        // Aggressive code splitting
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\]node_modules[\\]/,
              name(module) {
                // Get the package name
                const packageName = module.context.match(/[\\]node_modules[\\](.+?)([\\/]|$)/)[1];
                // Return a clean package name for better chunking
                return `npm.${packageName.replace('@', '')}`;
              },
            },
          },
        },
      };
    }
    return config;
  },
  // i18n configuration removed as it's not supported in App Router
  // See: https://nextjs.org/docs/app/building-your-application/routing/internationalization
}

module.exports = nextConfig
