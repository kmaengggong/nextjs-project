"use client";

import { Guest } from "@/app/lib/definitions";
import { hexToRGBA } from "@/app/utils/color";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface GuestModalProps {
	guest: Guest | null;
	onClose: () => void;
}

export default function GuestModal({ guest, onClose }: GuestModalProps) {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [onClose]);

	return (
		<AnimatePresence>
			{guest && (
				<motion.div
					key="modal"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.div
						layoutId={`guest-${guest.guest_id}`}
						className="relative w-full mx-4 px-6 py-4 border-4 border-mygo-dark-color rounded-lg"
						style={{ backgroundColor: hexToRGBA(guest.color, 0.9) }}
						onClick={(e) => e.stopPropagation()}
					>
						<p className="text-base text-gray-800 whitespace-pre-wrap mb-6">
							{guest.content}
						</p>
						<p className="text-sm font-semibold text-right text-gray-700">
							- {guest.temp_name}
						</p>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
