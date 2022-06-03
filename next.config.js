/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "http://fastfood.ibyteworkshop.com",
  },
};

module.exports = {
  env: {
    baseApiUrl: "http://fastfoodadmin.ibyteworkshop.com",
  },
  images: {
    domains: ["fastfoodadmin.ibyteworkshop.com"],
  },
  nextConfig,
};
