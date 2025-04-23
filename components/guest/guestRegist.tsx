"use client";

import { CharaWithTrans } from "@/app/lib/definitions";
import { hexToRGBA } from "@/app/utils/color";
import { useEffect, useState } from "react";

export default function GuestRegist() {
	const [charas, setCharas] = useState<CharaWithTrans[] | null>(null);
	const [selectedCharaId, setSelectedCharaId] = useState<string | null>(null);
	const [focused, setFocused] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/chara`);
				if (res.ok) {
					const json = await res.json();
					setCharas(json);
					setSelectedCharaId(json[0]?.chara_id || null);
				} else {
					alert("Failed to fetch chara");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};
		fetchData();
	}, []);

	const selectedChara = charas?.find(
		(chara) => chara.chara_id === selectedCharaId
	);

	return (
		<div className="fixed bottom-[16px] left-1/2 -translate-x-1/2 z-50 w-full px-3">
			<div className="grid grid-cols-12 gap-2 items-end">
				{/* ID input */}
				<div className="col-span-2">
					<input
						className="w-full h-[36px] px-2 text-sm rounded-md border border-mygo-dark-color text-gray-800 placeholder-gray-400"
						placeholder="ID"
						type="text"
					/>

					{/* Select appears BELOW input when focused */}
					{focused && (
						<select
							className="mt-1 w-full h-[32px] rounded-md border border-mygo-dark-color bg-white/90 text-sm pl-1 pr-2"
							value={selectedCharaId || ""}
							onChange={(e) => setSelectedCharaId(e.target.value)}
						>
							{charas &&
								charas.map((chara) => (
									<option key={chara.chara_id} value={chara.chara_id}>
										{chara.first_name}
									</option>
								))}
						</select>
					)}
				</div>

				{/* Content input */}
				<div className="col-span-8 flex flex-col">
					<textarea
						className="w-full px-4 py-2 text-sm text-gray-800 placeholder-gray-400 rounded-md border border-mygo-dark-color shadow-sm resize-none transition-all duration-200"
						style={{
							height: focused ? "96px" : "36px",
							backgroundColor: hexToRGBA(selectedChara?.color || "white", 0.9),
							overflow: "hidden",
						}}
						placeholder="메시지를 입력하세요"
						onFocus={() => setFocused(true)}
						onBlur={() => setFocused(false)}
						rows={1}
					/>

					{/* 아래 공간을 유도해주는 빈 영역 (선택적으로) */}
					{focused && <div className="h-1" />}
				</div>

				{/* Submit button */}
				<div className="col-span-2">
					<button className="h-[36px] w-full bg-mygo-dark-color/90 text-white rounded-md">
						추가
					</button>
				</div>
			</div>
		</div>

		// <div className="fixed w-full px-3 bottom-[16px] left-1/2 -translate-x-1/2 z-50">
		// 	<div className="grid grid-cols-12 gap-2 items-end">
		// 		{/* ID Input */}
		// 		<input
		// 			className="col-span-2 h-[36px] px-2 text-sm rounded-md border border-mygo-dark-color text-gray-800 placeholder-gray-400"
		// 			placeholder="ID"
		// 			type="text"
		// 		/>

		// 		{/* Content Input */}
		// 		<textarea
		// 			className="col-span-8 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 rounded-md border border-mygo-dark-color shadow-sm resize-none transition-all duration-200"
		// 			style={{
		// 				height: focused ? "96px" : "36px",
		// 				backgroundColor: hexToRGBA(selectedChara?.color || "white", 0.9),
		// 			}}
		// 			placeholder="메시지를 입력하세요"
		// 			onFocus={() => setFocused(true)}
		// 			onBlur={() => setFocused(false)}
		// 		/>

		// 		{/* Submit Button */}
		// 		<button className="col-span-2 h-[36px] bg-mygo-dark-color/90 text-white rounded-md">
		// 			추가
		// 		</button>
		// 	</div>

		// 	{/* Select under ID input */}
		// 	<div className="mt-1 w-[calc((100%/12)*2-0.5rem)]">
		// 		<select
		// 			className="w-full h-[32px] rounded-md border border-mygo-dark-color bg-white/90 text-sm pl-1 pr-2"
		// 			value={selectedCharaId || ""}
		// 			onChange={(e) => setSelectedCharaId(e.target.value)}
		// 		>
		// 			{charas &&
		// 				charas.map((chara) => (
		// 					<option key={chara.chara_id} value={chara.chara_id}>
		// 						{chara.first_name}
		// 					</option>
		// 				))}
		// 		</select>
		// 	</div>
		// </div>

		// <div className="fixed grid grid-cols-12 gap-2 w-full h-[32px] px-3 bottom-[16px] left-1/2 -translate-x-1/2 z-50">
		// 	<select
		// 		className="col-span-3 h-full rounded-md border border-mygo-dark-color bg-white/90 text-sm pl-1 pr-2"
		// 		value={selectedCharaId || ""}
		// 		onChange={(e) => setSelectedCharaId(e.target.value)}
		// 	>
		// 		{charas &&
		// 			charas.map((chara) => (
		// 				<option key={chara.chara_id} value={chara.chara_id}>
		// 					{chara.first_name}
		// 				</option>
		// 			))}
		// 	</select>
		// 	<input
		// 		className="w-full h-[36px] col-span-7 px-4 py-2 text-gray-800 placeholder-gray-400 rounded-md border border-mygo-dark-color shadow-sm focus:outline-none focus:ring-2 focus:ring-mygo-dark-color transition duration-200"
		// 		style={{
		// 			backgroundColor: hexToRGBA(selectedChara?.color || "white", 0.9),
		// 		}}
		// 		type="text"
		// 	/>
		// 	<button className="col-span-2 bg-mygo-dark-color/90 text-white rounded-md">
		// 		추가
		// 	</button>
		// </div>
	);
}
