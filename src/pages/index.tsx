import merge from 'lodash.merge';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import content from '../../content/content.json';
import { Header } from '../compoents/Header';
import { useContent } from '../state';
import { Hero } from '../compoents/Hero';

export default function Index() {
	const content = useContent();

	return (
		<>
			<Header />
			<Hero />
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
