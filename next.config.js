/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}




module.exports = {
  images: {
    domains: ['https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars'],
  },
  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig
