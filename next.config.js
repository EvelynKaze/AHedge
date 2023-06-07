/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: '',
//         hostname: 'https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars',
//         port: '',
//         pathname: '',
//       },
//     ],
//   },
// }
module.exports = {
  images: {
    domains: ['https://bpvsklhytoplnehaskcs.supabase.co/storage/v1/object/sign/avatars'],
  },
};

module.exports = nextConfig
