import { motion } from "framer-motion";
import Image from "next/image";
import { createPortal } from "react-dom";

interface ImageModalProps {
	src: string | null;
	onClose: () => void;
}

export default function ImageModal({ src, onClose }: ImageModalProps) {
	
	return createPortal(
		<motion.div
			key="modal"
			className="fixed top-0 left-0 w-full h-full z-50 bg-black/50 backdrop-blur-sm"
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
					alt={src || "alt"}
					fill
					className="object-contain rounded-sm"
					priority
					onClick={onClose}
				/>
			</motion.div>
		</motion.div>,
		document.body
	);
}
