import Image from 'next/image';
import merge from 'lodash.merge';
import { GetStaticProps } from 'next';
import { LogoImg } from '../assets';
import content from '../../content/content.json';
import { useContent } from '../state';

export default function Index() {
	const content = useContent();
	return (
		<>
			<div className="shadow-sm">
				<header className="flex max-w-3xl mx-auto py-4">
					<div className="h-12 w-48">
						<Image src={LogoImg} layout="responsive" />
					</div>
					<nav className="self-center flex flex-1 mx-4">
						<ul className="flex justify-between content-center text-liquorice text-sm w-full">
							{content.navbar.items.map((items) => {
								return (
									<li key={items.href}>
										<a className="hover:underline" href={items.href}>
											{items.label}
										</a>
									</li>
								);
							})}
						</ul>
					</nav>
					<div className="flex content-center">
						<div className="self-center">icons</div>
					</div>
				</header>
			</div>
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
