/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Ensure proper transpilation of client-side packages
  transpilePackages: ['framer-motion'],
  // Optimize bundle splitting and disable webpack cache
  webpack: (config, { dev, isServer }) => {
    // Always disable webpack cache to prevent ENOENT errors
    config.cache = false;
    
    // Improve module resolution
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      },
    };
    
    // Ensure proper handling of client-reference-manifest
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '.next/server/app': false,
      };
    }
    
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
            reuseExistingChunk: true
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true
          }
        }
      }
    };
    return config;
  }
};

module.exports = nextConfig;