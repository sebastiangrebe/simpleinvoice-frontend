/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.maturestack.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    redirects: async () => {
        return [
            {
                source: '/:path*',
                has: [{ type: 'header', key: 'host', value: 'maturestack.com' }],
                destination: 'https://www.maturestack.com/:path*',
                permanent: true,
            },
        ];
    },
    async headers() { 
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=31536000; includeSubDomains; preload",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                ],
            },
        ];
    }
};

export default nextConfig;
