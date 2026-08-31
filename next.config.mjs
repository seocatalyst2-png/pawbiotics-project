/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog/early-neurological-symptoms-in-dogs',
        destination: '/blog/neurological-symptoms-in-dogs',
        permanent: true,
      },
      {
        source: '/blog/home-remedies-for-dogs-with-itchy-skin',
        destination: '/blog/home-remedy-for-a-dog-with-itchy-skin',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
