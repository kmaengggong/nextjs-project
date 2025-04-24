"use client";

import { Notes } from "@/app/lib/definitions";
import { formatDateLong } from "@/app/utils/time";
import { useEffect, useState } from "react";
import NoteCardDetailSkeleton from "./noteCardDetailSkeleton";

export default function NoteCardDetail({ id }: { id: string }) {
	const [note, setNote] = useState<Notes | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/notes/${id}`);
				if (res.ok) {
					const json = await res.json();
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
				<NoteCardDetailSkeleton />
			) : (
				<div className="divide-y divide-mygo-dark-color">
					{note && (
						<div key={note.notes_id} className="px-6 py-4 min-h-[80vh]">
							<div className="flex flex-row justify-between">
								<p className="text-sm text-gray-600">
									{formatDateLong(note.updated_at)}
								</p>
								<a
									href="#"
									className="text-sm font-semibold text-mygo-dark-color decoration-2"
								>
									일반
								</a>
							</div>

							<div className="flex justify-between items-center mb-2">
								<p className="text-lg sm:text-xl font-bold">{note.title}</p>
							</div>

							<hr className="mb-1 border-gray-800" />

							<a
								href={
									note.origin_url.startsWith("http")
										? note.origin_url
										: `https://${note.origin_url}`
								}
								className="block text-sm text-mygo-dark-color mb-6 text-right"
								target="_blank"
								rel="noopener noreferrer"
							>
								{note.origin_url}
							</a>

							<p className="text-sm mb-4">{note.content}</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
