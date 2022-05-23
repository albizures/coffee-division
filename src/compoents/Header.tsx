import Image from 'next/image';
import clsx from 'clsx';
import { LogoImg } from '../assets';
import { icons } from '../compoents/Icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContent } from '../state';

interface LanguageProps {
	href: string;
	locale: string;
	children: React.ReactNode;
}

function Language(props: LanguageProps) {
	const routers = useRouter();
	const { href, locale, children } = props;

	return (
		<Link href={href} locale={locale}>
			<a
				className={clsx('text-flintstone text-sm', {
					'text-hunt font-semibold': routers.locale === locale,
				})}
			>
				{children}
			</a>
		</Link>
	);
}

export function Header() {
	const { navbar } = useContent();
	return (
		<div className="shadow-sm">
			<header className="max-w-4xl mx-auto py-4 hidden md:flex">
				<div className="h-12 w-48">
					<Image src={LogoImg} layout="responsive" />
				</div>
				<nav className="self-center flex flex-1 mx-6">
					<ul className="flex justify-between content-center text-liquorice text-sm w-full">
						{navbar.items.map((items) => {
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
				<div className="flex content-center space-x-3 items-center">
					{navbar.socialMedia.map((icon, index) => {
						const Icon = icons[icon.icon];
						return (
							<a
								className="w-5 h-5 relative"
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
					<div>
						<Language href="/" locale="en">
							Eng
						</Language>
						<span className="text-flintstone inline-block mx-1">
							|
						</span>
						<Language href="/" locale="es">
							Esp
						</Language>
					</div>
				</div>
			</header>
		</div>
	);
}
