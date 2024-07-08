/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Rahul-Portfolio",
    assetPrefix: '/your-repo-name/',
    images: {
        unoptimized: true, // Disable Image Optimization for static export
    },
};

export default nextConfig;
