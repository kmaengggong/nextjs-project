"use client";

import { CharaDetail } from "@/app/lib/definitions";
import { hexToRGBA } from "@/app/utils/color";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type GuestRegistProps = {
	onSuccess?: () => void;
};

export default function GuestRegist({ onSuccess }: GuestRegistProps) {
	const [charas, setCharas] = useState<CharaDetail[] | null>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [charaId, setCharaId] = useState<string | null>(null);
	const [tempName, setTempName] = useState("");
	const [content, setContent] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/chara`);
				if (res.ok) {
					const json = await res.json();
					setCharas(json);
					setCharaId(json[0]?.chara_id || null);
				} else {
					alert("Failed to fetch chara");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};
		fetchData();
	}, []);

	const selectedChara = charas?.find((chara) => chara.chara_id === charaId);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!charaId || !content.trim() || !tempName.trim()) {
			alert("모든 항목을 입력해주세요.");
			return;
		}

		try {
			const res = await fetch(`/api/guest`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					chara_id: charaId,
					temp_name: tempName,
					content: content,
				}),
			});

			if (res.ok) {
				setTempName("");
				setContent("");
				setIsOpen(false);
				onSuccess?.();
			} else {
				alert("등록에 실패했습니다.");
			}
		} catch (error) {
			console.error("Fetch error: ", error);
		}
	};

	return (
		<>
			<motion.button
				layoutId="guestRegist"
				className="fixed bottom-6 right-6 z-40 w-14 h-14 flex items-center justify-center rounded-full bg-mygo-color text-white shadow-lg hover:bg-mygo-dark-color border border-mygo-dark-color"
				onClick={() => setIsOpen(true)}
			>
				<img
					src="/icons/pencil.svg"
					alt="pencil"
					className="w-6 h-6 filter invert"
				/>
			</motion.button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							layoutId="guestRegist"
							className="relative w-full mx-4 px-4 py-3 border-mygo-dark-color rounded-lg text-gray-800 text-sm sm:text-base"
							style={{
								backgroundColor: hexToRGBA(
									selectedChara?.color || "white",
									0.9
								),
							}}
							onClick={(e) => e.stopPropagation()}
						>
							<form className="space-y-3" onSubmit={handleSubmit}>
								<div className="relative">
									<textarea
										placeholder="메시지를 입력하세요"
										rows={5}
										value={content}
										onChange={(e) => {
											if (e.target.value.length <= 200) {
												setContent(e.target.value);
											}
										}}
										className="w-full px-3 py-2 rounded-md border border-mygo-dark-color placeholder-gray-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-mygo-dark-color backdrop-blur"
										maxLength={200}
									/>
									{/* 글자 수 표시 */}
									<p className="absolute bottom-3 right-6 text-sm text-gray-400">
										{content.length}/200
									</p>
								</div>

								<div className="flex gap-2">
									<input
										type="text"
										placeholder="ID"
										value={tempName}
										onChange={(e) => setTempName(e.target.value)}
										className="w-1/2 px-3 py-2 rounded-md border border-mygo-dark-color placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-mygo-dark-color"
									/>
									<select
										className="w-1/2 px-2 py-2 rounded-md border border-mygo-dark-color text-sm"
										value={charaId || ""}
										onChange={(e) => setCharaId(e.target.value)}
									>
										{charas?.map((chara) => (
											<option key={chara.chara_id} value={chara.chara_id}>
												{chara.first_name}
											</option>
										))}
									</select>
								</div>

								<button
									type="submit"
									className="w-full py-2 border border-mygo-darker-color rounded-md bg-mygo-color text-white hover:bg-mygo-dark-color transition"
								>
									등록
								</button>
							</form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
