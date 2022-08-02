import merge from 'lodash.merge';
import content from '../../content/content.json';
import { GetStaticProps } from 'next';
import { Footer } from '../components/Footer';
import { CoffeeForm } from '../components/CoffeeForm';

export default function Form() {
	return (
		<>
			<CoffeeForm />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps = (context) => {
	return {
		props: {
			content: merge(
				{},
				content[context.defaultLocale],
				content[context.locale],
			),
		},
	};
};
