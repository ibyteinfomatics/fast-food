/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {
    loader: "imgix",
    //domains: ['http://fastfoodadmin.ibyteworkshop.com','http://fastfood.ibyteworkshop.com'],
    path: ["http://fastfood.ibyteworkshop.com"],
  },
  env: {
    baseApiUrl: "http://fast-food.localhost",
  },
};
