"use client";

import { CharaDetail } from "@/app/lib/definitions";
import { hexToRGBA } from "@/app/utils/color";
import { motion } from "motion/react";
import { useState } from "react";
import CharaImage from "./charaImage";

export default function CharaCard({chara}: {chara: CharaDetail}) {
	const [flipped, setFlipped] = useState(false);

	return (
		<div>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{
					ease: "easeInOut",
					duration: 1.5,
					y: { duration: 1 },
				}}
				key={chara.chara_id}
				className="flex mb-2 break-inside-avoid px-6 py-4 border rounded-lg border-mygo-dark-color backdrop-blur-lg text-gray-800 text-sm cursor-pointer"
				style={{ backgroundColor: hexToRGBA(chara.color, 0.5) }}
			>
				<div className="flex-[1]">
					<CharaImage src={chara.chara_image} />
				</div>
				<div className="ml-4 flex flex-col w-full justify-between flex-[2]">
					<div className="text-gray-800">
						<p className="text-lg sm:text-xl  font-semibold mb-2">
							{chara.first_name} {chara.last_name}
						</p>
						<p className="text-sm sm:text-base">{chara.description}</p>
					</div>
					<div>{/* 링크 들어갈 자리 */}</div>
				</div>
			</motion.div>
		</div>
	);
}
