/** @type {import('next').NextConfig} */
import "dotenv/config";

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
