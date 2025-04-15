/​**​ @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  async redirects() {
    // 仅在生产环境启用重定向
    if (process.env.VERCEL_ENV === 'production') {
      return [
        {
          source: '/:path*',
          destination: 'https://www.periodhub.health/:path*',
          permanent: true // 301 永久重定向
        }
      ]
    }
    return []
  }
}

module.exports = nextConfig;