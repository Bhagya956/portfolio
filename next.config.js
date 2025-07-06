/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // If you use basePath or assetPrefix, set them here for GitHub Pages
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/kumod1164.github.io/' : '',
};

module.exports = nextConfig; 