import merge from 'lodash.merge';
import { GetStaticProps } from 'next';
import content from '../../content/content.json';
import { Contact } from '../compoents/Contact';
import { Header } from '../compoents/Header';
import { Hero } from '../compoents/Hero';
import { MeetUs } from '../compoents/MeetUs';
import { OurCoffees } from '../compoents/OurCoffees';
import { Services } from '../compoents/Services';
import { Team } from '../compoents/Team';

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
