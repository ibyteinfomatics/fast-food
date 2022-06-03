/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      loader: 'imgix',
      path: 'http://fastfood.ibyteworkshop.com',
    },
  trailingSlash: true,
}

module.exports = nextConfig

