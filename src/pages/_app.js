import "@/styles/globals.css";
import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ReactGA from "react-ga4";

const display = Syne({
	subsets: ["latin"],
	variable: "--font-display",
});
const body = Inter({
	subsets: ["latin"],
	variable: "--font-body",
});
export default function App({ Component, pageProps }) {
	ReactGA.initialize("G-9GVWNZZZ6H");

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange
		>
			<main
				className={`${display.variable} ${body.variable} flex min-h-screen flex-col font-body text-base-600 dark:text-base-500 bg-base-50 dark:bg-base-950`}
			>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
