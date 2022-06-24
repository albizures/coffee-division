import merge from 'lodash.merge';
import { GetStaticProps } from 'next';
import content from '../../content/content.json';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OurCoffees } from '../components/OurCoffees';
import { CoffeeOrigin } from '../components/CoffeeOrigin';

export default function Index() {
	return (
		<>
			<Header />
			<CoffeeOrigin />
			<OurCoffees />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps = (context) => {
	return {
		props: {
			content: merge(
				content[context.defaultLocale],
				content[context.locale],
			),
		},
	};
};
