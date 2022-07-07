/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  // i18n: {
  //   localeDetection: false,
  // },
  images: {
    loader: "imgix",
    //domains: ['http://fastfoodadmin.ibyteworkshop.com','http://fastfood.ibyteworkshop.com'],
    path: ["http://fastfood.ibyteworkshop.com"],
  },
  
  env: {
    baseApiUrl: "http://fastfoodadmin.ibyteworkshop.com",
  },
  
};
