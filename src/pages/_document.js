import { Html, Head, Main, NextScript } from "next/document";
import ReactGA from "react-ga4";

export default function Document() {
	ReactGA.initialize("G-9GVWNZZZ6H");

	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
