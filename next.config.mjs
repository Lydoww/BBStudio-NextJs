/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',

    qualities: [25, 50, 75, 85, 100],
  },

  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
