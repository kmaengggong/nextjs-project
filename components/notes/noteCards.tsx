"use client";

import { Notes } from "@/app/lib/definitions";
import { formatDateLong } from "@/app/utils/time";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "@/components/notes/pagination";
import NoteCardSkeleton from "./noteCardSkeleton";

const PAGE_SIZE = 5;

export default function NoteCards() {
	const router = useRouter();
	const [notes, setNotes] = useState<Notes[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await fetch(
					`/api/notes?page=${currentPage}&limit=${PAGE_SIZE}`
				);
				if (res.ok) {
					const json = await res.json();
					setNotes(json.notes);
					setTotalCount(json.totalCount);
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
	}, [currentPage]);

	const totalPages = Math.ceil(totalCount / PAGE_SIZE);

	return (
		<div className="space-y-4">
			<div className="overflow-hidden border rounded-lg border-mygo-dark-color bg-white/20 backdrop-blur-lg text-gray-800">
				{loading ? (
					<NoteCardSkeleton />
				) : (
					<div className="divide-y divide-mygo-dark-color">
						{notes.map((note) => (
							<div key={note.notes_id} className="px-6 py-4">
								<div className="flex justify-between items-center mb-2 cursor-pointer">
									<a
										onClick={() => router.push(`notes/${note.notes_id}`)}
										className="text-md font-semibold hover:underline hove1r:decoration-mygo-dark-color hover:text-mygo-dark-color decoration-2"
									>
										{note.title}
									</a>
								</div>
								<p className="line-clamp-3 text-sm mb-4">{note.content}</p>
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
						))}
					</div>
				)}
			</div>

			{!loading && totalPages > 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			)}
		</div>
	);
}
