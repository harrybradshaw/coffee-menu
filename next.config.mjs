/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
            hmrRefreshes: true,
        },
    },
    experimental: {
        staleTimes: {
            dynamic: 30,
            static: 300,
        },
    },
};

export default nextConfig;
