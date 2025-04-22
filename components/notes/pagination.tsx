"use client";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const goToPage = (page: number) => {
		if (page < 1 || page > totalPages) return;
		onPageChange(page);
	};

	const renderPageButtons = () => {
		const base = Math.floor((currentPage - 1) / 5) * 5;
		const buttons = [];
		for (let i = 1; i <= 5; i++) {
			const pageNum = base + i;
			if (pageNum > totalPages) break;
			buttons.push(
				<button
					key={pageNum}
					onClick={() => goToPage(pageNum)}
					className={`w-8 h-8 flex items-center justify-center border rounded-md text-sm ${
						currentPage === pageNum
							? "bg-mygo-dark-color text-white border-mygo-dark-color"
							: "border-mygo-dark-color text-mygo-dark-color hover:bg-mygo-dark-color/10"
					}`}
				>
					{pageNum}
				</button>
			);
		}
		return buttons;
	};

	return (
		<div className="flex justify-center gap-2 mt-4 flex-wrap text-sm">
			<button
				onClick={() => goToPage(1)}
				disabled={currentPage === 1}
				className="w-7 h-8 flex items-center justify-center border rounded-md border-mygo-dark-color text-mygo-dark-color hover:bg-mygo-dark-color/10 disabled:text-gray-400"
			>
				«
			</button>
			<button
				onClick={() => goToPage(currentPage - 1)}
				disabled={currentPage === 1}
				className="w-7 h-8 flex items-center justify-center border rounded-md border-mygo-dark-color text-mygo-dark-color hover:bg-mygo-dark-color/10 disabled:text-gray-400"
			>
				‹
			</button>
			{renderPageButtons()}
			<button
				onClick={() => goToPage(currentPage + 1)}
				disabled={currentPage >= totalPages}
				className="w-7 h-8 flex items-center justify-center border rounded-md border-mygo-dark-color text-mygo-dark-color hover:bg-mygo-dark-color/10 disabled:text-gray-400"
			>
				›
			</button>
			<button
				onClick={() => goToPage(totalPages)}
				disabled={currentPage >= totalPages}
				className="w-7 h-8 flex items-center justify-center border rounded-md border-mygo-dark-color text-mygo-dark-color hover:bg-mygo-dark-color/10 disabled:text-gray-400"
			>
				»
			</button>
		</div>
	);
}
