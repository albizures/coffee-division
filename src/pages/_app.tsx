import 'windi.css';
import { TakeRoot } from 'react-take';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	return (
		<TakeRoot
			store={{
				content: pageProps.content,
			}}
		>
			<Component {...pageProps} />
		</TakeRoot>
	);
}

export default App;
