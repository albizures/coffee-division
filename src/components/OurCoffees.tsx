import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { coffeeImages } from '../assets';
import { useAnimateOnScreen } from '../hooks';
import { useContent } from '../state';
import { RightArrowIcon } from './Icons';

export function OurCoffees() {
	const { ourCoffees } = useContent();
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const current = ourCoffees.items[currentIndex];

	function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setCurrentIndex(Number(event.target.value));
	}

	const appearOnMount = useAnimateOnScreen({
		animate: 'animate-back-in-up',
		duration: 'animate-duration-1000',
		init: 'anim-appear',
	});

	function onMoreInfo(event: React.MouseEvent<HTMLAnchorElement>) {
		event.preventDefault();
		const link = event.currentTarget;

		const { hash: id } = new URL(link.href);

		const target = document.querySelector(id);

		target.scrollIntoView({
			behavior: 'smooth',
		});
	}

	return (
		<div id="our-coffees" className="flex flex-col lg:flex-row">
			<div className="flex-1 py-20 px-6 text-extra-white relative bg-caraway">
				<div className="max-w-lg m-auto">
					<h2 ref={appearOnMount} className="text-center">
						<span className="font-semibold uppercase leading-5 tracking-widest">
							{ourCoffees.upperTitle}
						</span>
						<span className="font-serif text-8xl block">
							{ourCoffees.title}
						</span>
					</h2>
					<p className="my-10">{ourCoffees.description}</p>
					<ul className="hidden lg:block">
						{ourCoffees.items.map((item, index) => {
							return (
								<li
									key={index}
									className={clsx(
										'mb-5 stroke-extra-white hover:(stroke-lemon text-lemon underline)',
										{
											'stroke-lemon text-lemon underline':
												currentIndex === index,
										},
									)}
								>
									<button
										onClick={() => setCurrentIndex(index)}
										className={clsx({
											underline: currentIndex === index,
										})}
									>
										<RightArrowIcon className="h-8 w-8 inline-block mr-5" />
										{item.title}
									</button>
								</li>
							);
						})}
					</ul>
					<div
						ref={appearOnMount}
						className="inline-block bg-white py-3 w-full relative text-caraway text-center lg:hidden"
					>
						<select
							onChange={onChange}
							value={currentIndex}
							className="absolute inset-0 opacity-0"
						>
							{ourCoffees.items.map((item, index) => {
								return (
									<option key={index} value={index}>
										{item.title}
									</option>
								);
							})}
						</select>
						<span className="uppercase font-sans font-semibold">
							{current.title}
						</span>
						<span className="absolute inset-y-3 right-8 rotate-45 transform border-caraway border-t-transparent border-l-transparent w-4 h-4 z-20 border-4" />
					</div>
				</div>
			</div>
			<div className="flex-1 flex px-6 relative items-center justify-center flex-col">
				{Object.keys(coffeeImages).map((key) => {
					return (
						<Image
							key={key}
							src={coffeeImages[key]}
							layout="fill"
							objectFit="cover"
							className={clsx(
								'absolute inset-0 transition-opacity duration-100',
								{
									'opacity-0': current.background !== key,
								},
							)}
						/>
					);
				})}
				<div className="absolute bg-hunt bg-opacity-50 inset-0" />
				<div className="max-w-lg px-6 py-32 z-10 text-center">
					<h3
						ref={appearOnMount}
						className="text-extra-white text-5xl md:text-6xl font-serif"
					>
						{current.title}
					</h3>
					<p
						ref={appearOnMount}
						className="text-extra-white mt-8 text-center"
					>
						{current.description}
					</p>
					<div ref={appearOnMount} className="mt-9">
						<Link href="#contact">
							<a
								onClick={onMoreInfo}
								className="bg-rutherford text-white stroke-white py-4 px-7 uppercase leading-5 tracking-widest"
							>
								{ourCoffees.moreInfoHere}
								<RightArrowIcon className="h-7 w-7 inline-block ml-2 align-bottom" />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
