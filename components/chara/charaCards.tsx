"use client";

import { CharaDetail } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import CharaCard from "./charaCard";

export default function CharaCards() {
	const [charas, setCharas] = useState<CharaDetail[]>([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/chara`);
				if (res.ok) {
					const json = await res.json();
					const filter = json.filter((chara: CharaDetail) => chara.band_name === "MyGO!!!!!");
					setCharas(filter);
					console.log(filter);
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

	return (
		<>
			{loading ? (
				<>로딩</>
			) : (
				charas.map((chara) => 
					<CharaCard chara={chara}/>
				)
			)}
		</>
	);
}
