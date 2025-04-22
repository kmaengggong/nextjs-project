"use client";

import { Guest } from "@/app/lib/definitions";
import { formatDateTime } from "@/app/utils/time";
import { useEffect, useState } from "react";

export default function GuestCards() {
	const [guests, setGuests] = useState<Guest[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/guest`);
				if (res.ok) {
					const json = await res.json();
					setGuests(json);
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
		<div className="space-y-4">
			{loading ? (
				<div />
			) : (
				<div className="columns-3 gap-2 max-sm:columns-2">
					{guests.map((guest) => (
						<div
							key={guest.guest_id}
							className="px-6 py-4 border rounded-lg border-mygo-dark-color bg-white/20 backdrop-blur-lg text-gray-800"
						>
							{/* <div className="flex justify-between items-center mb-2">
									<p
										className="text-md font-semibold"
									>
										{guest.}
									</p>
								</div> */}
							<p className="line-clamp-3 text-sm mb-4">{guest.content}</p>
							<div className="text-sm text-gray-500">
								<a
									href="#"
									className="text-md font-semibold text-mygo-dark-color decoration-2"
								>
									일반
								</a>{" "}
								| <span>{formatDateTime(guest.updated_at)}</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
