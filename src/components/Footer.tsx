import Image from 'next/image';
import { Logo2Img, Logo3Img, Logo4Img } from '../assets';
import { useContent } from '../state';
import { icons } from './Icons';

export function Footer() {
	const { footer, navbar } = useContent();

	return (
		<div className="bg-komorebi">
			<div className="max-w-sm lg:max-w-5xl mx-auto px-6 flex flex-col lg:flex-row justify-between mx-auto py-8">
				<div className="space-x-5 max-w-xs text-center">
					<span className="inline-block">
						<Image src={Logo2Img} />
					</span>
					<span className="inline-block">
						<Image src={Logo3Img} />
					</span>
					<span className="inline-block">
						<Image src={Logo4Img} />
					</span>
				</div>
				<div className="flex flex-col lg:flex-row text-center">
					<p className="text-sm text-garland lg:pr-4 mt-4 lg:mt-0">
						{footer.terms}
					</p>
					<div className="space-x-4 mt-4 lg:mt-0">
						{navbar.socialMedia.map((icon, index) => {
							const Icon = icons[icon.icon];
							return (
								<a
									className="w-5 h-5 lg:(w-7 h-7 ) relative inline-block opacity-70"
									key={index}
									href={icon.href}
								>
									<Icon
										height="100%"
										width="100%"
										className="inset-0 absolute text-garland"
										pathClassName="fill-komorebi"
									/>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
