import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link rel="icon" href="favicon.svg"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Work+Sans:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="overflow-x-hidden">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
