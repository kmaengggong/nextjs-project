import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "yblcwegomkujscjsvunf.supabase.co", 
			}
		]
	}
};

export default nextConfig;
