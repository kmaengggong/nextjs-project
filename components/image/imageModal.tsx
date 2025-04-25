"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

interface ImageModalProps {
	src: string | null;
	onClose: () => void;
}

export default function ImageModal({ src, onClose }: ImageModalProps) {
	return (
		<motion.div
			key="modal"
			className="w-full h-full z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
			onClick={onClose}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				layoutId={`image-${src}`}
				className="max-w-4xl w-full h-full "
				onClick={(e) => e.stopPropagation()}
			>
				<Image
					src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/chara/${src}`}
					alt={src || 'alt'}
					fill
					className="object-contain"
					priority
					onClick={onClose}
				/>
			</motion.div>
		</motion.div>
	);
}
