/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: this skips ESLint during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;