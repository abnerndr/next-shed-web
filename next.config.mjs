/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    base_url: process.env.API_URL,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // output: "export",
  // distDir: 'out',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: { unoptimized: true },
};

export default nextConfig;
