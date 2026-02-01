import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your Next.js config
  output: 'export', // This is required for GitHub Pages
  basePath: '/valentines', // Replace 'your-repo-name' with your actual GitHub repo name
  assetPrefix: 'https://mtsbytes.github.io/valentines/',
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js Image Optimization
  },
};

export default nextConfig;
