import 'windi.css';
import Head from 'next/head';
import { TakeRoot } from 'react-take';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	return (
		<TakeRoot
			store={{
				content: pageProps.content,
			}}
		>
			<Head key="fonts">
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Work+Sans:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</TakeRoot>
	);
}

export default App;
