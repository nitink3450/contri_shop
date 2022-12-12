/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['media.cnn.com', 'static.independent.co.uk', 'imagez.tmz.com'],
  },
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
};
