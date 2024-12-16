/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname:
          'ndi-website-17-07-2023-storage-4b404e2160703-staging.s3.ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/public/**'
      }
    ],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
