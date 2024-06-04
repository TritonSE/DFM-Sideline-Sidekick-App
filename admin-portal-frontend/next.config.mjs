/** @type {import('next').NextConfig} */
import "dotenv/config";

const nextConfig = {
  env: {
    API_URL: "https://sideline-sidekick-app.web.app/api/",
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
