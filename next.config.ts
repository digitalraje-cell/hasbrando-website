import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      { source: '/services', destination: '/solutions', permanent: true },
      { source: '/services/:path*', destination: '/solutions/:path*', permanent: true },
      { source: '/portfolio', destination: '/work', permanent: true },
      { source: '/case-studies', destination: '/work', permanent: true },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
