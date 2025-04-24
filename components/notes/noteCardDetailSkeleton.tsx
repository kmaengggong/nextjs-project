export default function NoteCardDetailSkeleton() {
	return (
		<div className="divide-y divide-mygo-dark-color animate-pulse">
			<div className="px-6 py-4">
				<div className="flex justify-between mt-1 mb-2">
					<div className="h-4 bg-gray-200/40 rounded w-1/3"></div>
					<div className="h-4 bg-gray-200/40 rounded w-1/5"></div>
				</div>
				<div className="h-5 bg-gray-200/40 rounded w-full mb-4"></div>
				<div className="h-3 bg-gray-200/40 rounded w-1/3 mb-7 ml-auto"></div>
				<div className="h-3 bg-gray-200/40 rounded w-full mb-3"></div>
				<div className="h-3 bg-gray-200/40 rounded w-full mb-3"></div>
				<div className="h-3 bg-gray-200/40 rounded w-1/3 mb-3"></div>
			</div>
		</div>
	);
}
