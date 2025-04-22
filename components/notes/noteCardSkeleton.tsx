export default function NoteCardSkeleton() {
	return (
		<div className="divide-y divide-mygo-dark-color animate-pulse">
			<div className="px-6 py-4 space-y-3">
				<div className="h-4 bg-gray-200/40 rounded w-2/3"></div>
				<div className="h-3 bg-gray-200/40 rounded w-full"></div>
				<div className="h-3 bg-gray-200/40 rounded w-5/6"></div>
				<div className="h-3 bg-gray-200/40 rounded w-1/3 mt-3"></div>
			</div>
		</div>
	);
}
