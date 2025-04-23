"use client";

import { Notes } from "@/app/lib/definitions";
import { formatDateLong } from "@/app/utils/time";
import { useEffect, useState } from "react";

export default function NoteCardDetail({ id }: { id: string }) {
	const [note, setNote] = useState<Notes | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/notes/${id}`, { method: "GET" });
				if (res.ok) {
					const json = await res.json();
					console.log(json);
					setNote(json);
				} else {
					alert("Failed to fetch notes");
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
		<div className="overflow-hidden border rounded-lg border-mygo-dark-color bg-white/20 backdrop-blur-lg text-gray-800">
			{loading ? (
				<div className="divide-y divide-mygo-dark-color animate-pulse">
					<div className="px-6 py-4 space-y-3 min-h-[80vh]">
						<div className="h-4 bg-gray-200/40 rounded w-2/3"></div>
						<div className="h-3 bg-gray-200/40 rounded w-full"></div>
						<div className="h-3 bg-gray-200/40 rounded w-5/6"></div>
						<div className="h-3 bg-gray-200/40 rounded w-1/3 mt-3"></div>
					</div>
				</div>
			) : (
				<div className="divide-y divide-mygo-dark-color">
					{note && (
						<div key={note.notes_id} className="px-6 py-4 min-h-[80vh]">
							<div className="flex justify-between items-center mb-2">
								<p className="text-md font-semibold">{note.title}</p>
							</div>

							<p className="text-sm mb-4">{note.content}</p>

							<div className="text-sm text-gray-600">
								<a
									href="#"
									className="text-md font-semibold text-mygo-dark-color decoration-2"
								>
									일반
								</a>{" "}
								| <span>{formatDateLong(note.updated_at)}</span>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
