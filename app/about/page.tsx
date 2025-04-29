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
				<TypingText texts={texts} speed={50} />
			</div>
		</div>
	);
}
