"use client";

import Image from "next/image";
import ImageModal from "../image/imageModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageComponentProps {
	src: string;
	aspect?: string;
}

export default function ImageComponent({ src, aspect = "1" }: ImageComponentProps) {
	return (
		<>
			<div
				key={src}
				className="w-full h-full overflow-hidden relative"
				style={{ aspectRatio: aspect }}
			>
				<Image
					src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/chara/${src}`}
					alt={src}
					fill
					className="object-cover"
					priority
				/>
			</div>
		</>
	);
}
