/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/not-started',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
