/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'amura.ai',
                port: '',
                pathname: '/wp-content/uploads/2023/02/**',
            },
        //     {
        //         protocol: 'https',
        //         hostname: 'voltuswave.com',
        //         port: '',
        //         pathname: '/wp-content/uploads/2020/11/**',
        //     },
        ],
    },
};

export default nextConfig;
