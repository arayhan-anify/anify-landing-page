/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "selector",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				base: colors.stone,
				primary: {
					50: "#FFEDEC",
					100: "#FFDEDC",
					200: "#FFB7B4",
					300: "#FF928C",
					400: "#FF6255",
					500: "#ED3000",
					DEFAULT: "#ED3000",
					600: "#BC2301",
					700: "#901900",
					800: "#670F00",
					900: "#3E0500",
					950: "#2A0300",
				},
			},
			borderColor: {
				default: colors.stone["300"],
			},
			fontFamily: {
				display: ["var(--font-display)"],
				body: ["var(--font-body)"],
				button: ["var(--font-button)"],
			},
			keyframes: {
				slideDown: {
					from: { height: "0px" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				slideUp: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0px" },
				},
			},
			animation: {
				slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
				slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
			},
		},
	},
	plugins: [],
};
