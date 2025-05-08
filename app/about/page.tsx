import TypingText from "@/components/home/typingText";

export default function AboutPage() {
	const texts = [
		"This is a fan site for 『Bang Dream! MyGO!!!!!』",
		"To fully enjoy it, I recommend turning off mute and listening to the sound.",
		"Then Let's It's MyGO!!!!!",
	];

	return (
		<div className="relative min-h-screen px-4 py-20 bg-white">
			<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-mygo-color to-white pointer-events-none"></div>
			<div className="relative">
				{/* <TypingText texts={texts} speed={50} /> */}
				<div className="w-full max-w-[422px] [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
					<div className="p-5">
						<div className="flex justify-between items-center">
							<div>
								<div className="flex space-x-2 items-center mb-0.5">
									<div className="text-2xl font-bold text-slate-200 mb-1">
										17,479
									</div>
									<div className="text-xs font-medium text-emerald-500">
										+48%
									</div>
								</div>
								<div className="text-sm font-medium text-slate-500">
									Monthly visits
								</div>
							</div>
							<button className="w-8 h-8 flex justify-center items-center text-slate-500 hover:text-slate-400">
								<span className="sr-only">Open menu</span>
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="4"
									fill="none"
								>
									<path d="M8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
								</svg>
							</button>
						</div>
					</div>
					<div className="px-5">
						<img
							className="group-hover:opacity-0 transition-opacity duration-500"
							src="./card-01.png"
							width="380"
							height="173"
							alt="Card image 01"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
