/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
}




module.exports = {
  images: {
    domains: ['https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars'],
  },
};

module.exports = nextConfig
