/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    base_url: process.env.API_URL,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  output: "export",
};

export default nextConfig;
