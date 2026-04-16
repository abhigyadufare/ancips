/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ancips2027.com',
        pathname: '/assets/**',
      },
    ],
  },
}

module.exports = nextConfig
