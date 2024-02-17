/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    base_url: process.env.API_URL,
  },
};

export default nextConfig;
