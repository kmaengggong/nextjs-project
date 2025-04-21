import { headers } from "next/headers";

export async function getClientIP(): Promise<string> {
	const forwardedFor = (await headers()).get("x-forwarded-for");
	if (!forwardedFor) return "Unknown";

	const rawIP = forwardedFor.split(",")[0].trim();

	if (rawIP.startsWith("::ffff:")) {
		return rawIP.replace("::ffff:", "");
	}

	return rawIP;
};
