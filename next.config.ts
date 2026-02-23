import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['healthen-images.s3.us-east-1.amazonaws.com'],
  }
};

export default nextConfig;
