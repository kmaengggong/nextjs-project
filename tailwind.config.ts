import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",

				"mygo-color": "#77BBDD",
				"mygo-dark-color": "#3377AA",
				"mygo-darker-color": "#002233", 
				"tomori-color": "#77BBDD",
				"anon-color": "#FF8899",
				"rana-color": "#77DD77",
				"soyo-color": "#FFDD88",
				"taki-color": "#7777AA",

				"mujica-color": "#BB9955",
				"uika-color": "#BB9955",
				"mutsumi-color": "#779977",
				"umiri-color": "#335566",
				"nyamu-color": "#AA4477",
				"sakiko-color": "#7799CC",
			},
			fontFamily: {
				bang: ["Softsoul Bold"],
			},
			screens: {
				xs: "400px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [
		require("tailwind-scrollbar-hide"),
		plugin(function ({ addUtilities }) {
			addUtilities({
				".backface-hidden": {
					backfaceVisibility: "hidden",
				},
			});
		}),
	],
} satisfies Config;
