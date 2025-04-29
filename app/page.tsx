"use client";

import ScrollTracker from "@/components/temp/scrollTracker";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./rain.css";
import TypingText from "@/components/home/typingText";

const makeItRain = () => {
	const rainFront = document.querySelector(".rain.front-row");
	const rainBack = document.querySelector(".rain.back-row");

	if (rainFront && rainBack) {
		rainFront.innerHTML = "";
		rainBack.innerHTML = "";

		let increment = 0;
		let drops = "";
		let backDrops = "";

		while (increment < 100) {
			const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
			const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
			increment += randoFiver;

			drops += `
				<div class="drop" style="left: ${increment}%; bottom: ${
				randoFiver + randoFiver - 1 + 100
			}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
					<div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
					<div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
				</div>
			`;
			backDrops += `
				<div class="drop" style="right: ${increment}%; bottom: ${
				randoFiver + randoFiver - 1 + 100
			}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
					<div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
					<div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
				</div>
			`;
		}

		rainFront.innerHTML = drops;
		rainBack.innerHTML = backDrops;
	}
};

export default function HomePage() {
	const texts = [
		"This is a fan site for\n『Bang Dream!\nIt's MyGO!!!!!』",
		"To fully enjoy it,\nI recommend turning off mute and listening to the sound.",
	];
	const texts2 = ["Then,", "Let's MyGO!!!!!"];

	const [soundOn, setSoundOn] = useState(true);
	const { scrollYProgress } = useScroll();
	const [buttonHighlight, setButtonHighlight] = useState(false);
	const [showSecondText, setShowSecondText] = useState(false);
	const [hydrated, setHydrated] = useState(false); // 버튼 초기에 안보이도록

	const rainOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
	const buttonOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
	const letterOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
	const pepeOpacity = useTransform(scrollYProgress, [1.5, 3], [0, 1]);

	useEffect(() => {
		makeItRain();
	}, []);

	// useEffect(() => {
	// 	const unsubscribe = buttonOpacity.onChange((v: number) => {
	// 		setButtonOpacityValue(v);
	// 	});

	// 	return () => {
	// 		unsubscribe();
	// 	};
	// }, [buttonOpacity]);

	useEffect(() => {
		setHydrated(true);
		const visitedBefore = localStorage.getItem("visited");

		if (visitedBefore) {
			window.scrollTo(0, window.innerHeight * 4);
		} else {
			// 첫 방문 시 방문 기록 저장
			localStorage.setItem("visited", "true");
		}
	}, []);

	const handleFirstTypingDone = () => {
		setButtonHighlight(true);

		setTimeout(() => {
			setButtonHighlight(false);
			setShowSecondText(true);
		}, 2000);
	};

	return (
		<div className="h-[500vh] relative overflow-y-scroll scrollbar-hide">
			<motion.div className="rain-container" style={{ opacity: rainOpacity }}>
				<div className="rain front-row"></div>
				<div className="rain back-row"></div>
			</motion.div>

			{hydrated && (
				<motion.button
					onClick={() => setSoundOn(!soundOn)}
					style={{
						position: "fixed",
						bottom: "20px",
						right: "20px",
						width: "50px",
						height: "50px",
						borderRadius: "50%",
						border: buttonHighlight ? "2px solid #00FFFF" : "2px solid white",
						color: "white",
						background: "transparent",
						fontSize: "24px",
						cursor: "pointer",
						opacity: buttonOpacity,
						pointerEvents: buttonOpacity.get() > 0.1 ? "auto" : "none",
						transition: "all 0.5s ease-in-out",
					}}
				>
					{soundOn ? "🔊" : "🔇"}
				</motion.button>
			)}

			<ScrollTracker />

			<div className="h-[200vh] bg-gradient-to-b from-black to-[#004466]">
				<motion.div
					style={{ opacity: letterOpacity }}
					className="text-mygo-color px-4 py-3"
				>
					<TypingText
						texts={texts}
						speed={50}
						startDelay={0}
						onAllTextsDone={handleFirstTypingDone}
					/>
					{showSecondText && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="text-center pt-8"
						>
							<TypingText texts={texts2} speed={50} startDelay={0} />
						</motion.div>
					)}
				</motion.div>
			</div>

			<div className="h-[200vh] bg-gradient-to-b from-[#004466] to-mygo-color"></div>

			<div className="h-[100vh] bg-gradient-to-b from-mygo-color to-white"></div>
		</div>
	);
}
