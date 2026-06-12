/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages static export
  output: 'export',
  
  // GitHub Pages deployment (adjust basePath if repo is not root domain)
  // For username.github.io/4kwallpaper, use basePath: '/4kwallpaper'
  basePath: '/4kwallpaper',
  assetPrefix: '/4kwallpaper/',
  
  images: {
    // Disable Next.js Image Optimization for static export
    // (GitHub Pages cannot run Node.js server)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  reactStrictMode: true,
  
  // Suppress warnings about problematic static generation
  experimental: {
    isrMemoryCacheSize: 0,
  },
}

module.exports = nextConfig
