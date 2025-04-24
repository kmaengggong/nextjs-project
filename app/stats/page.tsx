import LineChart from "@/components/stats/lineChart";

export default function StatsPage() {
	return (
		<div className="relative min-h-screen px-4 py-20 bg-white">
			<div className="absolute inset-0 h-[100vh] bg-gradient-to-b from-mygo-color to-white pointer-events-none"></div>
			<div className="relative">
				<LineChart />
			</div>
		</div>
	);
}
