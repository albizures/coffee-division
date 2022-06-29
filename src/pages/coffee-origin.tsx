import Image from 'next/image';
import merge from 'lodash.merge';
import { GetStaticProps } from 'next';
import content from '../../content/content.json';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { OurCoffees } from '../components/OurCoffees';
import { CoffeeOrigin } from '../components/CoffeeOrigin';
import { useAnimateOnScreen } from '../hooks';
import { Leaf3 } from '../assets';

export default function Index() {
	const swingOnMount = useAnimateOnScreen({
		animate: 'animate-swing',
		duration: 'animate-duration-3000',
		threshold: 0.2,
	});
	return (
		<>
			<Header />
			<CoffeeOrigin />
			<div className="relative">
				<OurCoffees />
				<div
					ref={swingOnMount}
					className="absolute transition ease-in-out -right-40 -top-20 xl:(-right-30 -top-20)"
				>
					<Image src={Leaf3} className="transform xl:scale-100" />
				</div>
			</div>
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
