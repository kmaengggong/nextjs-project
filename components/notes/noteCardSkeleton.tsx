export default function NoteCardSkeleton() {
	return (
		<div className="divide-y divide-mygo-dark-color animate-pulse">
			<div className="px-6 py-4">
				<div className="h-4 bg-gray-200/40 rounded w-2/3 mt-1 mb-4"></div>
				<div className="h-3 bg-gray-200/40 rounded w-full mb-6"></div>
				<div className="h-3 bg-gray-200/40 rounded w-1/3 mb-1"></div>
			</div>
		</div>
	);
}
