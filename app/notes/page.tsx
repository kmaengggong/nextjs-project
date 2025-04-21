"use client";

import { useEffect } from "react";

export default function NotesPage() {
	useEffect(() => {
		const lang = localStorage.getItem("lang") ?? "EN";
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/chara?lang=${lang}`, { method: "GET" });
				if (res.ok) {
					const json = await res.json();
					console.log(json);
				} else {
					alert("Failed to fetch guest");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};
		fetchData();
		const fetchData2 = async () => {
			try {
				const res = await fetch(`/api/guest`, { method: "GET" });
				if (res.ok) {
					const json = await res.json();
					console.log(json);
				} else {
					alert("Failed to fetch guest");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};
		fetchData2();
		const fetchData3 = async () => {
			try {
				const res = await fetch(`/api/notes`, { method: "GET" });
				if (res.ok) {
					const json = await res.json();
					console.log(json);
				} else {
					alert("Failed to fetch guest");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};
		fetchData3();
		const fetchData4 = async () => {
			try {
				const res = await fetch(`/api/stats?lang=${lang}`, { method: "GET" });
				if (res.ok) {
					const json = await res.json();
					console.log(json);
				} else {
					alert("Failed to fetch guest");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			}
		};
		fetchData4();
	}, []);

	return (
		<div className="relative min-h-screen px-4 py-20 bg-white">
			<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-mygo-color to-white pointer-events-none"></div>

			<div className="relative"></div>
		</div>
	);
}
