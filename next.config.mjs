/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { hostname: "kabariya.pk" },
      { protocol: "http", hostname: "res.cloudinary.com" },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
