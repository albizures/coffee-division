import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { icons, CloseIcon, MenuIcon } from '../components/Icons';
import { useContent } from '../state';
import { Logo2Img, LogoImg } from '../assets';

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
				className={clsx(
					'text-extra-white md:text-flintstone text-sm',
					{
						'md:text-hunt font-semibold': routers.locale === locale,
					},
				)}
			>
				{children}
			</a>
		</Link>
	);
}

export function Header() {
	const { navbar } = useContent();
	const [menuStatus, setMenuStatus] = React.useState<
		'open' | 'close'
	>('close');

	React.useEffect(() => {
		document.body.style.overflow =
			menuStatus === 'open' ? 'hidden' : '';
	}, [menuStatus]);

	function onClickMenu() {
		setMenuStatus((current) =>
			current === 'open' ? 'close' : 'open',
		);
	}

	function onCloseMenu() {
		setMenuStatus('close');
	}

	return (
		<div className="shadow-sm">
			<header
				className={clsx('max-w-5xl mx-auto py-4 md:justify-center', {
					'bg-hunt fixed inset-0 z-30': menuStatus === 'open',
					flex: menuStatus === 'close',
				})}
			>
				<div
					className={clsx(
						'flex items-center justify-between w-full mx-6',
						'md:(mx-0 w-auto)',
						{
							hidden: menuStatus === 'open',
						},
					)}
				>
					<button className="md:hidden -mr-3" onClick={onClickMenu}>
						<MenuIcon />
					</button>
					<div className={clsx('h-12 w-48')}>
						<Image src={LogoImg} layout="responsive" />
					</div>
					<span className="md:hidden">{/* space */}</span>
				</div>

				<div
					className={clsx({
						hidden: menuStatus === 'close',
					})}
				>
					<div className="flex items-center justify-between w-full px-6">
						<span>{/* space */}</span>
						<div className={clsx('h-12 w-48')}>
							<Image src={Logo2Img} layout="responsive" />
						</div>
						<button className="md:hidden -ml-3" onClick={onClickMenu}>
							<CloseIcon className="text-extra-white text-2xl" />
						</button>
					</div>
				</div>

				<nav
					className={clsx(
						'self-center flex-1 mx-6 mt-14',
						'md:(flex mt-0)',
						{
							hidden: menuStatus === 'close',
						},
					)}
				>
					<ul
						className={clsx(
							'flex flex-col text-xl space-y-6 text-extra-white justify-between content-center text-sm w-full',
							'md:(flex-row flex-row text-liquorice text-sm space-y-0)',
						)}
					>
						{navbar.items.map((items) => {
							return (
								<li key={items.href}>
									<a
										className="hover:underline"
										onClick={onCloseMenu}
										href={items.href}
									>
										{items.label}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
				<div
					className={clsx(
						'flex absolute bottom-0 w-full p-6 content-center space-x-3 items-center justify-between',
						'md:(flex relative p-0 w-auto)',
						{
							hidden: menuStatus === 'close',
						},
					)}
				>
					<div className="flex space-x-2">
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
										className="inset-0 absolut text-extra-white md:text-hunt w-5 h-5"
										pathClassName="fill-hunt md:fill-white"
									/>
								</a>
							);
						})}
					</div>
					<div className="flex md:items-center">
						<Language href="/" locale="en">
							Eng
						</Language>
						<span className="text-extra-white md:text-flintstone inline-block mx-1">
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