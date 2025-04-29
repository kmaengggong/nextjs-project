"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
	texts: string[];
	speed?: number;
	startDelay?: number;
	onAllTextsDone?: () => void;
}

export default function TypingText({
	texts,
	speed = 100,
	startDelay = 0,
	onAllTextsDone,
}: TypingTextProps) {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [displayedTexts, setDisplayedTexts] = useState<React.ReactNode[]>([]);
	const [charIndex, setCharIndex] = useState(0);

	useEffect(() => {
		if (currentTextIndex >= texts.length) {
			if (onAllTextsDone) onAllTextsDone();
			return;
		}

		const currentText = texts[currentTextIndex];
		if (charIndex < currentText.length) {
			const timeout = setTimeout(() => {
				setDisplayedTexts((prev) => {
					const updated = [...prev];
					if (!updated[currentTextIndex]) updated[currentTextIndex] = "";
					updated[currentTextIndex] += currentText[charIndex];
					return updated;
				});
				setCharIndex((prev) => prev + 1);
			}, speed);
			return () => clearTimeout(timeout);
		} else {
			const timeout = setTimeout(() => {
				setCurrentTextIndex((prev) => prev + 1);
				setCharIndex(0);
			}, 500);
			return () => clearTimeout(timeout);
		}
	}, [charIndex, currentTextIndex, texts, speed, onAllTextsDone]);

	return (
		<div className="font-bang text-4xl italic whitespace-pre-wrap">
			{displayedTexts.map((text, idx) => (
				<motion.div
					key={idx}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="mb-8"
				>
					{text}
				</motion.div>
			))}
		</div>
	);
}
