/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/ttt-tin/blogposts/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
