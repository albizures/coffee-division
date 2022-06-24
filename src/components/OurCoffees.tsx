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

	const appearOnMount = useAnimateOnScreen(
		'animate-back-in-up',
		'animate-duration-1000',
		'anim-appear',
	);

	return (
		<div className="flex flex-col lg:flex-row">
			<div className="flex-1 py-20 px-6 text-extra-white relative bg-caraway">
				<div className="max-w-lg m-auto">
					<h2 ref={appearOnMount} className="text-center">
						<span className="font-semibold">
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
			<div
				ref={appearOnMount}
				className="flex-1 flex relative items-center justify-center flex-col"
			>
				<Image
					src={coffeeImages[current.background]}
					layout="fill"
					objectFit="cover"
					className="absolute inset-0"
				/>
				<div className="absolute bg-hunt bg-opacity-50 inset-0" />
				<div className="max-w-lg max-auto px-6 py-32 z-10 text-center">
					<h3 className="text-extra-white text-6xl font-serif">
						{current.title}
					</h3>
					<p className="text-extra-white mt-8 text-center">
						{current.description}
					</p>
					<div className="mt-9">
						<Link href="/">
							<a className="bg-rutherford text-white stroke-white py-4 px-7">
								SOLICITA MÁS INFO
								<RightArrowIcon className="h-7 w-7 inline-block ml-2 align-bottom" />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
