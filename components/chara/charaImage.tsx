import Image from "next/image";

interface CharaImageProps {
	src: string;
}

const CharaImage = (props: CharaImageProps) => {
	return (
		<div className="aspect-[2/3] w-full h-full overflow-hidden relative">
			<Image
				src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/chara/${props.src}`}
				alt={props.src}
				fill
				className="object-cover"
			/>
		</div>
	);
};

export default CharaImage;
