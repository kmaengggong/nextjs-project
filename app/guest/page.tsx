import GuestCards from "@/components/guest/guestCards";
import GuestRegist from "@/components/guest/guestRegist";

export default async function GuestPage() {
	return (
		<div className="relative min-h-screen px-4 py-20 bg-white">
			<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-mygo-color to-white pointer-events-none"></div>

			<div className="relative">
				<GuestCards />
				<GuestRegist />
			</div>
		</div>
	);
}
