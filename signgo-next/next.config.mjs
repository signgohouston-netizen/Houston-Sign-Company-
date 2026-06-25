/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — deploy the `out/` folder to any host (Netlify, Vercel,
  // GitHub Pages, cPanel, etc.). Run `npm run build` to generate it.
  output: 'export',
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  trailingSlash: true,
};

export default nextConfig;
