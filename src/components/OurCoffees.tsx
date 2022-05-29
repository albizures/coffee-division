import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { coffeeImages } from '../assets';
import { useContent } from '../state';
import { RightArrowIcon } from './Icons';

export function OurCoffees() {
	const { ourCoffees } = useContent();
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const current = ourCoffees.items[currentIndex];

	return (
		<div className="relative">
			<div className="flex absolute inset-0">
				<div className="flex-1 bg-caraway"></div>
				<div className="flex-1 relative">
					<Image
						src={coffeeImages[current.background]}
						layout="fill"
						objectFit="cover"
						className="absolute inset-0"
					/>
					<div className="absolute bg-hunt bg-opacity-40 inset-0" />
				</div>
			</div>

			<div className="flex max-w-5xl mx-auto relative -m-2">
				<div className="flex-1 px-8 py-20 text-extra-white">
					<h2 className="text-center">
						<span className="font-semibold">
							{ourCoffees.upperTitle}
						</span>
						<span className="font-serif text-8xl block">
							{ourCoffees.title}
						</span>
					</h2>
					<p className="my-10">{ourCoffees.description}</p>
					<ul>
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
				</div>
				<div className="flex-1 flex items-center justify-center flex-col px-8">
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
