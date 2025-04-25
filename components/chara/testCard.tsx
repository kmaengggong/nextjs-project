export default function TestCard() {
	return (
		<div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
			<div className="flex">
				<div className="w-1/3 p-4">
					<img
						src="https://via.placeholder.com/150"
						alt="Image"
						className="w-full h-auto rounded-lg object-cover"
					/>
				</div>

				<div className="w-2/3 p-4">
					<h2 className="text-xl font-semibold text-gray-800">카드 제목</h2>
					<p className="text-gray-600 mt-2">
						여기에는 긴 글 내용이 들어갑니다. 이 글 내용은 길어지면 카드의
						높이가 자동으로 늘어납니다. 텍스트가 더 길어지면 카드의 높이도 같이
						늘어납니다.
						여기에는 긴 글 내용이 들어갑니다. 이 글 내용은 길어지면 카드의
						높이가 자동으로 늘어납니다. 텍스트가 더 길어지면 카드의 높이도 같이
						늘어납니다.
						여기에는 긴 글 내용이 들어갑니다. 이 글 내용은 길어지면 카드의
						높이가 자동으로 늘어납니다. 텍스트가 더 길어지면 카드의 높이도 같이
						늘어납니다.
						여기에는 긴 글 내용이 들어갑니다. 이 글 내용은 길어지면 카드의
						높이가 자동으로 늘어납니다. 텍스트가 더 길어지면 카드의 높이도 같이
						늘어납니다.
					</p>
					<a href="#" className="text-blue-500 mt-4 inline-block">
						자세히 보기
					</a>
				</div>
			</div>
		</div>
	);
}
