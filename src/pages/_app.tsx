import 'windi.css';
import Head from 'next/head';
import { defaulStore, TakeRoot } from 'react-take';
import { contentItem } from '../state';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	if (!pageProps.content) {
		console.error(
			'Missing content, you most probally forgot to use staticPropsWithContent in your route',
		);
	} else {
		defaulStore.setValue(contentItem, pageProps.content);
	}

	return (
		<>
			<Head>
				<title>Industrais Noviembre, S.A. | Coffee Division</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default App;
