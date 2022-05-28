import merge from 'lodash.merge';
import { GetStaticProps } from 'next';
import content from '../../content/content.json';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MeetUs } from '../components/MeetUs';
import { OurCoffees } from '../components/OurCoffees';
import { Services } from '../components/Services';
import { Team } from '../components/Team';

export default function Index() {
	return (
		<>
			<Header />
			<Hero />
			<MeetUs />
			<Services />
			<OurCoffees />
			<Team />
			<Contact />
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
