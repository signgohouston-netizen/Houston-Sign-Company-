/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server mode (Vercel). Pages are still statically pre-rendered where possible;
  // the /api/chat route runs as a serverless function so the AI assistant can
  // call Claude securely (the API key stays on the server, never in the browser).
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  trailingSlash: true,
};

export default nextConfig;
