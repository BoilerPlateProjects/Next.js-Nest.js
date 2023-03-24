const backendPort = process.env.BACKEND_PORT || 3500;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  async rewrites() {
    return [
      {
        source: "/api/v:version(\\d+)/:path*",
        destination: `http://localhost:${backendPort}/api/v:version/:path*` // Proxy to Backend
      }
    ];
  }
};

module.exports = nextConfig;
