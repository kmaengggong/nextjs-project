import { motion, useAnimationControls } from "framer-motion";

export default function HighlightArrow() {
	return (
		<motion.div
			initial={{ y: 30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="absolute bottom-[70px] right-[25px] text-white text-3xl pointer-events-none"
		>
			↑
		</motion.div>
	);
}
