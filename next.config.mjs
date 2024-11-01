/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'i.ibb.co' },
      { hostname: 'd9aloqs890lqz.cloudfront.net' },
      { hostname: 'media.giphy.com' },
      { hostname: 'example.com' },
      { hostname: 'i.giphy.com' },
      { hostname: 'giphy.com' },
    ],
  },
}

export default nextConfig
