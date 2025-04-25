export default function GuestCardSkeleton() {
	return (
		<div className="mb-2 break-inside-avoid px-4 py-3 border rounded-lg border-mygo-dark-color bg-white/20 backdrop-blur-lg animate-pulse">
			<div className="h-3 bg-gray-200/40 rounded w-full mt-1 mb-6"></div>
			<div className="h-3 bg-gray-200/40 rounded w-1/2 ml-auto mb-1"></div>
		</div>
	);
}
