/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/tasks/not-started',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
