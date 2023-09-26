/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ydkt.data.ekwclass.com'
      },
    ]
  },
}

module.exports = nextConfig
