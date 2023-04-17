/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
		swcMinify: true,
		fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
	},
	images: {
		domains: ['avatars.githubusercontent.com'],
	},
}

module.exports = nextConfig
