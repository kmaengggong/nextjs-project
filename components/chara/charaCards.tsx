"use client";

import { CharaDetail } from "@/app/lib/definitions";
import { useEffect, useRef, useState } from "react";
import CharaCard from "./charaCard";
import TestCard from "../temp/testCard";
import CharaCardSkeleton from "./charaCardSkeleton";

export default function CharaCards() {
	const [charas, setCharas] = useState<CharaDetail[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState<number | null>(null);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/chara`);
				if (res.ok) {
					const json = await res.json();
					const filter = json.filter(
						(chara: CharaDetail) => chara.band_name === "MyGO!!!!!"
					);
					setCharas(filter);
				} else {
					alert("Failed to fetch charas");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const threshold = window.innerHeight / 2;

	// 		for (let i = 0; i < cardRefs.current.length; i++) {
	// 			const card = cardRefs.current[i];
	// 			if (card) {
	// 				const rect = card.getBoundingClientRect();
	// 				if (rect.top <= threshold && rect.bottom >= threshold) {
	// 					if (currentIndex !== i) {
	// 						setCurrentIndex(i);
	// 						card.scrollIntoView({ behavior: "smooth", block: "center" });
	// 					}
	// 					break;
	// 				}
	// 			}
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, [currentIndex]);

	// useEffect(() => {
	// 	let timeoutId: ReturnType<typeof setTimeout>;

	// 	const handleScroll = () => {
	// 		if (timeoutId) clearTimeout(timeoutId);

	// 		timeoutId = setTimeout(() => {
	// 			const threshold = window.innerHeight / 2;
	// 			for (let i = 0; i < cardRefs.current.length; i++) {
	// 				const card = cardRefs.current[i];
	// 				if (card) {
	// 					const rect = card.getBoundingClientRect();
	// 					if (rect.top <= threshold && rect.bottom >= threshold) {
	// 						if (currentIndex !== i) {
	// 							setCurrentIndex(i);
	// 							card.scrollIntoView({ behavior: "smooth", block: "center" });
	// 						}
	// 						break;
	// 					}
	// 				}
	// 			}
	// 		}, 100); // 100ms 뒤에 한 번만 실행
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		clearTimeout(timeoutId);
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, [currentIndex]);

	return (
		<>
			{loading ? (
				<CharaCardSkeleton />
			) : (
				<div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-hidden scrollbar-hide">
					{charas.map((chara, index) => (
						<div className="snap-center h-screen" key={chara.chara_id}>
						<CharaCard
							chara={chara}
							key={chara.chara_id}
							ref={(el: HTMLDivElement | null): void => {
								cardRefs.current[index] = el;
							}}
						/>
						</div>
					))}
					<div className="h-[20vh] shrink-0" />
				</div>
			)}
		</>
	);
}
