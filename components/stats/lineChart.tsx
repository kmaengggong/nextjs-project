"use client";

import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { StatsResult } from "@/app/lib/definitions";
import LineChartSkeleton from "./lineChartSkeleton";

const LineChart = () => {
	const [stats, setStats] = useState<StatsResult[] | null>(null);
	const [width, setWidth] = useState<number>(
		typeof window !== "undefined" ? window.innerWidth : 0
	);
	const [loading, setLoading] = useState(true);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const chartRef = useRef<Chart | null>(null);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/stats`);
				if (res.ok) {
					const json = await res.json();
					setStats(json);
				} else {
					alert("Failed to fetch stats");
				}
			} catch (error) {
				console.error("Fetch error: ", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		if (!stats || !canvasRef.current || stats.length === 0) return;

		const canvas = canvasRef.current;

		const drawChart = () => {
			if (!canvas) return;

			const ctx = canvas.getContext("2d")!;
			const isMobile = window.innerWidth < 768;
			const baseUnit = isMobile ? 38 : 42;
			const heightCSS = stats.length * baseUnit;

			canvas.height = heightCSS;
			canvas.style.height = `${heightCSS}px`;
			canvas.width = canvas.offsetWidth;

			if (chartRef.current) {
				chartRef.current.destroy();
			}

			const labels = stats.map((s) => s.chara_pair);
			const values = stats.map((s) => Number(s.stats_count));

			const data = {
				labels: labels,
				datasets: [
					{
						data: values,
						backgroundColor: stats.map((s, i) => {
							const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
							gradient.addColorStop(0, s.chara_a_color);
							gradient.addColorStop(1, s.chara_b_color);
							return gradient;
						}),
						borderColor: "rgba(0, 0, 0, 0)",
						borderWidth: 0,
						barPercentage: 0.7,
					},
				],
			};

			chartRef.current = new Chart(ctx, {
				type: "bar",
				data: data,
				options: {
					indexAxis: "y",
					plugins: {
						legend: {
							display: false,
						},
						datalabels: {
							display: true,
							align: "start",
							anchor: "end",
							color: "#555",
							font: {
								size: 14,
								weight: "bold" as const,
							},
							formatter: (value: number) => `${value}`,
							clip: true,
						},
					},
					scales: {
						x: {
							ticks: {
								callback: function (val) {
									return Number(val) % 1 === 0 ? val : "";
								},
								font: {
									size: 14,
								},
								color: "#555",
							},
						},
						y: {
							ticks: {
								font: {
									size: 14,
								},
								color: "#555",
							},
						},
					},
				},
				plugins: [ChartDataLabels],
			});
		};

		const raf = requestAnimationFrame(drawChart);
		return () => cancelAnimationFrame(raf);
	}, [stats, width]);

	return (
		<div className="border rounded-lg border-mygo-dark-color bg-white/20  backdrop-blur-lg px-2">
			{loading ? <LineChartSkeleton /> : <canvas ref={canvasRef} />}
		</div>
	);
};

export default LineChart;
