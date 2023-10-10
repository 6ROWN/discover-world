/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		domains: ["maps.googleapis.com", "apis.google.com/"],
	},
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
