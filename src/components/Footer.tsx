import Image from 'next/image';
import { Logo2Img, Logo3Img, Logo4Img } from '../assets';
import { useContent } from '../state';
import { icons } from './Icons';

export function Footer() {
	const { footer, navbar } = useContent();

	return (
		<div className="bg-komorebi">
			<div className="max-w-5xl flex justify-between mx-auto py-8">
				<div className="space-x-5">
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
				<div className="flex space-x-4">
					<p className="text-sm text-garland pr-4">{footer.terms}</p>
					{navbar.socialMedia.map((icon, index) => {
						const Icon = icons[icon.icon];
						return (
							<a
								className="w-5 h-5 relative inline-block opacity-70"
								key={index}
								href={icon.href}
							>
								<Icon
									height="100%"
									width="100%"
									className="inset-0 absolute"
								/>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
