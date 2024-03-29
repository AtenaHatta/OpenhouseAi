/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            's3-ca-central-1.amazonaws.com',
            'www.bwalk.com',
            'www.brookfieldresidential.com',
            'media-cdn.tripadvisor.com',
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'calgary.newinfills.ca',
            },
        ],
    },
}
module.exports = nextConfig