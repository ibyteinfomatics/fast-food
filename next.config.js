/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
      loader: 'imgix',
      path: 'http://fastfood.ibyteworkshop.com',
    },
  trailingSlash: true,
}

module.exports = {
  env: {
    baseApiUrl: "http://fastfoodadmin.ibyteworkshop.com",
  },
  images: {
    domains: ["fastfoodadmin.ibyteworkshop.com"],
  },
};
