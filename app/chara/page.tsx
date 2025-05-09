import CharaCards from "@/components/chara/charaCards";

export default function CharaPage() {
	return (
		<div className="relative min-h-screen px-4 pt-20 bg-white">
			<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-mygo-color to-white pointer-events-none"></div>

			<div className="relative">
				<CharaCards />
			</div>
		</div>
	);
}
