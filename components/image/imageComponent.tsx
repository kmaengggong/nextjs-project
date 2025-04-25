"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./imageModal";

interface ImageComponentProps {
	src: string;
	aspect?: string;
}

export default function ImageComponent({ src, aspect }: ImageComponentProps) {
	const aspectStyle = aspect ? { aspectRatio: aspect } : undefined;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div
				key={src}
				className="w-full h-full relative"
				style={aspectStyle}
				onClick={() => setIsOpen(true)}
			>
				<Image
					src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/chara/${src}`}
					alt={src}
					fill
					className="object-cover"
					priority
				/>
			</div>

			{isOpen && <ImageModal src={src} onClose={() => setIsOpen(false)} />}
		</>
	);
}
