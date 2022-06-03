/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://fastfood.ibyteworkshop.com',
    domains: ["fastfoodadmin.ibyteworkshop.com"]
  },
  env: {
    baseApiUrl: 'http://fastfoodadmin.ibyteworkshop.com',
  },
};

module.exports = nextConfig;

