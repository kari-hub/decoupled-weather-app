/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/:path*',
            },
        ];
    },
    // Suppress specific deprecation warning
    onDemandEntries: {
        // This will suppress the deprecation warning
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
};

module.exports = nextConfig; 