"use client";

import { Guest } from "@/app/lib/definitions";
import { hexToRGBA } from "@/app/utils/color";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GuestCardSkeleton from "./guestCardSkeleton";
import GuestModal from "./guestModal";

export default function GuestCards() {
	const [guests, setGuests] = useState<Guest[]>([]);
	const [loading, setLoading] = useState(true);
	const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

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
		<>
			<div className="columns-3 gap-2 max-sm:columns-2">
				{loading ? (
					<GuestCardSkeleton />
				) : (
					guests.map((guest) => (
						<motion.div
							layoutId={`guest-${guest.guest_id}`}
							key={guest.guest_id}
							className="mb-2 break-inside-avoid px-6 py-4 border rounded-lg border-mygo-dark-color backdrop-blur-lg text-gray-800 cursor-pointer"
							style={{ backgroundColor: hexToRGBA(guest.color, 0.5) }}
							onClick={() => setSelectedGuest(guest)}
						>
							<p className="text-sm break-words mb-4">{guest.content}</p>
							<p className="text-sm font-semibold text-right">
								- {guest.temp_name}
							</p>
						</motion.div>
					))
				)}
			</div>

			<AnimatePresence>
				{selectedGuest && (
					<GuestModal
						guest={selectedGuest}
						onClose={() => setSelectedGuest(null)}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
