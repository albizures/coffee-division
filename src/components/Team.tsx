import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import {
	Leaf1,
	teamPhotos,
	ThumbsUp,
	urlTeamPhotos,
} from '../assets';
import { useAnimateOnScreen } from '../hooks';
import { useContent } from '../state';
import { Plus } from './Icons';
import styles from './Team.module.css';

interface ListItemProps {
	items: {
		name: string;
		title: string;
		description: string;
		picture: string;
		shortDescription: string;
	}[];
	type?: 'dark' | 'light';
}

function List(props: ListItemProps) {
	const { items, type = 'light' } = props;
	const detailsRef = React.useRef<HTMLDivElement>();
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const current = items[currentIndex];

	function resetScroll() {
		if (detailsRef.current) {
			detailsRef.current.scrollTo({
				behavior: 'smooth',
				top: 0,
			});
		}
	}

	const appearOnMount = useAnimateOnScreen({
		animate: 'animate-back-in-up',
		duration: 'animate-duration-1000',
		init: 'anim-appear',
	});

	return (
		<div className="flex mt-11 max-w-xl4">
			<div
				className={clsx('flex flex-col md:(gap-1 grid)', {
					'md:(grid-cols-3 grid-rows-3)': items.length > 6,
					'md:(grid-cols-2 grid-rows-1)': items.length === 2,
				})}
			>
				{items.map((item, index) => {
					return (
						<div
							key={index}
							ref={appearOnMount}
							className={clsx(
								'mb-5 overflow-hidden grid grid-cols-3 md:(mr-5 block)',
								{
									'md:animate-delay-50': index === 1 || index === 3,
									'md:animate-delay-100': index === 2 || index === 4,
									'md:animate-delay-150': index === 3 || index === 5,
								},
							)}
						>
							<div className="relative text-[0]">
								<Image src={teamPhotos[item.picture]} />
								<button
									onClick={() => {
										resetScroll();
										setTimeout(() => {
											setCurrentIndex(index);
										}, 200);
									}}
									className={clsx(
										`hidden absolute inset-0 w-full opacity-0 md:flex justify-center bg-opacity-20 bg-hunt items-center hover:(opacity-100)`,
										styles['team-hover'],
										{
											'opacity-100': currentIndex === index,
										},
									)}
								>
									<Plus className="z-20" />
								</button>
							</div>
							<div className="col-span-2 ml-4 md:hidden flex flex-col">
								<h4 className="font-semibold font-sans text-sm">
									{item.name}
								</h4>
								<h5 className="mt-2 font-sans text-sm">
									{item.title}
								</h5>
								<p className="mt-2 font-sans text-sm">
									{item.shortDescription}
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div
				ref={appearOnMount}
				className="hidden md:flex pl-5 border-l-crip border-l-1"
			>
				<div
					className={clsx(
						`relative before:pointer-events-none z-10 `,
						styles['team-gradient'],
						{
							[styles['dark']]: type === 'dark',
						},
					)}
				>
					<div className="opacity-0 mx-24">
						<Image src={teamPhotos[current.picture]} />
					</div>

					<div
						ref={detailsRef}
						className="absolute overflow-y-auto inset-0 pr-4"
					>
						{items.length > 3 && (
							<Image src={teamPhotos[current.picture]} />
						)}
						<h4 className="text-xl font-semibold">{current.name}</h4>
						<h5 className="mt-2">{current.title}</h5>
						<p className="max-w-xs mt-2 mb-20">
							{current.description.split('\n').map((part, index) => {
								return (
									<React.Fragment key={index}>
										{part}
										<br />
										<br />
									</React.Fragment>
								);
							})}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export function Team() {
	const { team } = useContent();

	const swingOnMount = useAnimateOnScreen({
		animate: 'animate-swing',
		duration: 'animate-duration-3000',
	});

	const appearOnMount = useAnimateOnScreen({
		animate: 'animate-back-in-up',
		duration: 'animate-duration-1000',
		init: 'anim-appear',
	});

	return (
		<>
			<div id="team" className="bg-hunt text-crisp py-24 relative">
				<div
					ref={swingOnMount}
					className="absolute -right-50 xl:-right-40 -top-40"
				>
					<Image
						src={Leaf1}
						className="scale-45 origin-center transform xl:scale-100"
					/>
				</div>
				<div className="max-w-5xl px-6 mx-auto overflow-hidden">
					<h2 ref={appearOnMount} className="text-center">
						<span className="block font-semibold uppercase leading-5 tracking-widest">
							{team.upperTitle}
						</span>
						<span className="block font-serif text-8xl">
							{team.title}
						</span>
					</h2>

					<List items={team.items} />
				</div>
			</div>
			<div className="bg-hunty text-crisp py-20 lg:py-24 overflow-hidden">
				<div className="max-w-5xl px-6 mx-auto overflow-hidden">
					<div
						ref={appearOnMount}
						className="flex-1 text-center mt-8 lg:mb-14"
					>
						<Image src={ThumbsUp} />
						<h3 className="font-serif text-6xl">
							{team.tasters.title}
						</h3>
						<p className="mt-4">{team.tasters.description}</p>
					</div>
					<List items={team.tasters.items} type="dark" />
				</div>
			</div>
		</>
	);
}
