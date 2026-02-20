/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mirus-mix-demo',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
