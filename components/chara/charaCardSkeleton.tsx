export default function CharaCardSkeleton() {
	return (
		<div className="mb-2 h-[80vh] px-4 py-3 border rounded-lg border-mygo-dark-color bg-white/20 backdrop-blur-lg animate-pulse">
			<div className="absolute inset-0 mx-4 my-3 grid grid-cols-5 0">
				<div className="w-full col-span-2 bg-gray-200/40 rounded"></div>
				<div className="w-full col-span-3 ml-4">
					<div className="flex flex-col">
						<div className="h-5 bg-gray-200/40 rounded w-1/2 mt-1 mb-4"></div>
						<div className="h-4 bg-gray-200/40 rounded w-[95%] mb-3"></div>
						<div className="h-4 bg-gray-200/40 rounded w-1/2"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
