"use client";

import { CharaDetail } from "@/app/lib/definitions";
import { hexToRGBA } from "@/app/utils/color";
import { motion } from "motion/react";
import { useState, forwardRef } from "react";
import ImageComponent from "../image/imageComponent";

const CharaCard = forwardRef(function CharaCard(
	{ chara }: { chara: CharaDetail },
	ref: React.Ref<HTMLDivElement>
) {
	const [flip, setFlip] = useState(true);

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				ease: "easeInOut",
				duration: 1.5,
				y: { duration: 1 },
			}}
		>
			<motion.div
				ref={ref}
				animate={{ rotateY: flip ? 0 : 180 }}
				transition={{ duration: 0.7 }}
				className="relative h-[70vh] sm:h-[80vh] mb-2 px-4 py-3 border rounded-lg border-mygo-dark-color backdrop-blur-lg text-gray-800 text-sm"
				style={{ backgroundColor: hexToRGBA(chara.color, 0.5) }}
			>
				<motion.div
					transition={{ duration: 0.7 }}
					animate={{ rotateY: flip ? 0 : 180 }}
					className="absolute inset-0 mx-4 my-3 grid grid-cols-5 backface-hidden cursor-pointer"
				>
					<div className="w-full col-span-2 overflow-hidden">
						<ImageComponent src={chara.chara_image} />
					</div>
					<div
						className="w-full col-span-3 ml-4 justify-between overflow-hidden"
						onClick={() => setFlip((prev) => !prev)}
					>
						<div className="flex flex-col mr-4">
							<div className="text-gray-800 break-words">
								<p className="text-lg sm:text-xl font-semibold mb-2">
									{chara.first_name} {chara.last_name}
								</p>
								<p className="text-sm sm:text-base">{chara.description}</p>
							</div>
							<div>
								<a href="#" className="text-blue-500 mt-4 inline-block">
									자세히 보기
								</a>
								<a href="#" className="text-blue-500 mt-4 inline-block">
									자세히 보기
								</a>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ rotateY: 0 }}
					transition={{ duration: 0.7 }}
					animate={{ rotateY: flip ? 180 : 0 }}
					className="absolute inset-0 mx-4 my-3 grid grid-cols-5 backface-hidden cursor-pointer"
				>
					<div className="w-full col-span-2 scale-x-[-1] overflow-hidden">
						<ImageComponent src={chara.voice_image} aspect="2/3" />
					</div>
					<div
						className="w-full col-span-3 ml-4 flex flex-col justify-between scale-x-[-1] overflow-hidden"
						onClick={() => setFlip((prev) => !prev)}
					>
						<div className="text-gray-800 text-right break-words">
							<p className="text-lg sm:text-xl font-semibold mb-2">
								{chara.voice_name}
							</p>
							<p className="text-sm sm:text-base">{chara.voice_description}</p>
						</div>
						<div>{/* 링크 들어갈 자리 */}</div>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
});

export default CharaCard;
