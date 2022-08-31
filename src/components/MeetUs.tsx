import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import {
	MeetUs1Img,
	MiniGuateImg,
	WorldMapImg,
	MissionVisionImg,
	history,
	Leaf3,
	Leaf1,
} from '../assets';
import { useContent } from '../state';
import { LeafIcon, RightArrowIcon } from './Icons';
import { useAnimateOnScreen, useScroll } from '../hooks';

export function MeetUs() {
	const { meetUs } = useContent();

	const onMoveHistory = useScroll('.history', '.history-item');

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
			<div id="meet-us" className="bg-crisp relative overflow-hidden">
				<div
					ref={swingOnMount}
					className="absolute transition ease-in-out -right-50 xl:-right-40 top-1/2 xl:top-1/2"
				>
					<Image
						src={Leaf1}
						className="scale-50 origin-top transform xl:scale-100"
					/>
				</div>
				<div className="max-w-5xl px-6 mx-auto relative pt-12 pb-14 text-center overflow-hidden">
					<div
						ref={swingOnMount}
						className="absolute -top-40 -left-10 md:-top-30 lg:-top-30 md:left-0"
					>
						<Image
							className="scale-50 origin-left transform md:scale-100"
							src={Leaf3}
						/>
					</div>
					<h2
						ref={appearOnMount}
						className="text-center font-serif text-hunt mb-8"
					>
						<span className="md:text-6xl text-4xl block">
							{meetUs.title.part1}
						</span>
						<span className="md:text-8xl text-6xl	block">
							{meetUs.title.part2}
						</span>
					</h2>
					<div ref={appearOnMount}>
						<Image src={WorldMapImg} />
					</div>
					<p className="md:mt-14 mt-8 max-w-2xl text-sm md:text-base font-light text-center mx-auto">
						{meetUs.description.part1}{' '}
						<span className="font-bold">
							{meetUs.description.part2}
						</span>
					</p>
					<div className="mt-12 mb-12 border-rutherford border-t-1" />
					<div className="flex flex-col md:flex-row">
						<div ref={appearOnMount} className="flex-1 relative">
							<Image src={MeetUs1Img} />
							<span className="rounded-full absolute -right-3 top-1/2 bg-hunt shadow-2xl shadow-black inline-block h-14 w-14 md:(w-25 h-24)">
								<LeafIcon className="h-14 w-14 md:(w-25 h-24)" />
							</span>
						</div>
						<p className="flex-1 self-center mt-4 text-sm md:(px-10 mt-0 text-base) ">
							{meetUs.description2.part1}{' '}
							<span className="font-bold">
								{meetUs.description2.part2}
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="bg-caraway px-4">
				<Link href={meetUs.coffeeOrigin.href}>
					<a className="max-w-5xl px-6 mx-auto text-sm md:text-base flex block justify-center items-center py-6 cursor-pointer">
						<span className="animate-loop animate-heart-beat animate-duration-2000">
							<Image src={MiniGuateImg} height="60" width="45" />
						</span>
						<p className="mx-4 text-center text-extra-white">
							{meetUs.coffeeOrigin.label}
						</p>
						<RightArrowIcon className="h-8 w-8 stroke-extra-white" />
					</a>
				</Link>
			</div>
			{/* Mission and vision */}
			<div className="py-14 bg-hunt overflow-hidden">
				<div className="max-w-5xl px-4 flex flex-col md:flex-row mx-auto items-center">
					<div className="flex-1">
						<h3 className="font-serif text-6xl text-extra-white text-center">
							{meetUs.mission.title}
						</h3>
						<p className="text-extra-white text-center mt-3 text-sm md:text-base">
							{meetUs.mission.description}
						</p>
					</div>
					<div
						ref={appearOnMount}
						className="mx-4 my-2 md:my-0 flex-1"
					>
						<Image src={MissionVisionImg} />
					</div>
					<div className="flex-1">
						<h3 className="font-serif text-6xl text-extra-white text-center">
							{meetUs.vision.title}
						</h3>
						<p className="text-extra-white text-center mt-3 text-sm md:text-base">
							{meetUs.vision.description}
						</p>
					</div>
				</div>
			</div>
			<div className="pt-20 md:pt-32 bg-crisp text-hunt">
				<h2 className="text-center">
					<span className="text-center font-semibold">
						{meetUs.ourHistory.upperTitle}
					</span>
					<span className="text-center text-6xl font-serif block">
						{meetUs.ourHistory.title}
					</span>
				</h2>

				<div className="relative">
					<div className="flex history flex-grow overflow-x-auto pl-50 mt-10 pb-30 md:pb-32">
						{meetUs.ourHistory.items.map((item, index) => {
							const asset = history[item.image];
							return (
								<div
									className="min-w-60 mr-16 history-item"
									key={index}
								>
									<div
										ref={appearOnMount}
										className={clsx({
											'mt-6': index % 2 === 0,
											'flex justify-center flex-col': !asset,

											'md:animate-delay-50': index === 1,
											'md:animate-delay-100': index === 2,
											'md:animate-delay-150': index === 3,
											'md:animate-delay-200': index === 4,
										})}
									>
										{asset && (
											<Image src={asset} width="270" height="208" />
										)}
										<h3 className="text-4xl font-serif mt-5">
											{item.title}
										</h3>
										<p className="mt-2">{item.description}</p>
									</div>
								</div>
							);
						})}
					</div>
					<div className="absolute pointer-events-none inset-x-0 bottom-15 lg:(top-15 right-1/4) flex justify-center items-start">
						<button
							className="pointer-events-auto"
							onClick={onMoveHistory}
						>
							<RightArrowIcon className="h-10 w-10 lg:(h-16 w-16) stroke-hunt " />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
