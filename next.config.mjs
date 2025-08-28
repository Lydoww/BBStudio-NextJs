/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    qualities: [25, 50, 75, 85, 100],
  },
};

export default nextConfig;
