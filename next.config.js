/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  // images: {
  //     domains: ['asset.cloudinary.com','res.cloudinary.com'],
  //   },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
}

module.exports = nextConfig
