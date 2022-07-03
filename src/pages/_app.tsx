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
			<Head>
				<title>Industrais Noviembre, S.A. | Coffee Division</title>
			</Head>
			<Component {...pageProps} />
		</TakeRoot>
	);
}

export default App;
