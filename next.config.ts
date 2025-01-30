/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/MatthewsWongOfficial/portofolio-images-bucket/**",
      },
    ],
  },
};

module.exports = nextConfig;
