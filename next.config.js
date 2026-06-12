/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/4kwallpaper',
  assetPrefix: '/4kwallpaper/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
