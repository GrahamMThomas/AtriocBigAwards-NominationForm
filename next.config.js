/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                'protocol': 'https',
                'hostname': 'static-cdn.jtvnw.net',
                "pathname": "/jtv_user_pictures/*"
            }
        ]
    }
}

module.exports = nextConfig
