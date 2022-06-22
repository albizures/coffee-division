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

export function Team() {
	const { team } = useContent();
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const current = team.items[currentIndex];

	const swingOnMount = useAnimateOnScreen(
		'animate-swing',
		'animate-duration-3000',
	);
	const appearOnMount = useAnimateOnScreen(
		'animate-back-in-up',
		'animate-duration-1000',
	);

	return (
		<>
			<div className="bg-hunt text-crisp py-24 relative overflow-hidden">
				<div
					ref={swingOnMount}
					className="absolute -right-50 xl:-right-40 -top-40"
				>
					<Image
						src={Leaf1}
						className="scale-75 transform xl:scale-100"
					/>
				</div>
				<div className="max-w-5xl px-6 mx-auto">
					<h2 ref={appearOnMount} className="text-center">
						<span className="block font-semibold">
							{team.upperTitle}
						</span>
						<span className="block font-serif text-8xl">
							{team.title}
						</span>
					</h2>
					<div className="flex flex-col md:flex-row mt-11 justify-center">
						<div className="flex flex-col md:(grid grid-cols-3 grid-rows-2)">
							{team.items.map((item, index) => {
								return (
									<div
										key={index}
										ref={appearOnMount}
										className="mb-5 overflow-hidden grid grid-cols-3 md:(mr-5 block)"
									>
										<div className="relative">
											<Image
												src={teamPhotos[item.picture]}
												width="220"
												height="250"
											/>
											<button
												onClick={() => setCurrentIndex(index)}
												className={clsx(
													`hidden absolute inset-0 w-full opacity-0 md:flex justify-center bg-opacity-20 bg-hunt items-center hover:(opacity-100)`,
													styles['team-hover'],
												)}
											>
												<Plus className="z-20" />
											</button>
										</div>
										<div className="col-span-2 ml-6 md:hidden">
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
								className={`relative before:pointer-events-none ${styles['team-gradient']}`}
							>
								<div
									key={currentIndex}
									className="overflow-y-scroll max-h-sm pb-14"
								>
									<h4 className="text-xl font-semibold">
										{current.name}
									</h4>
									<h5 className="mt-2">{current.title}</h5>
									<p className="max-w-xs mt-2">
										{current.description
											.split('\n')
											.map((part, index) => {
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
				</div>
			</div>
			<div className="bg-hunty text-crisp py-20 lg:py-24 overflow-hidden">
				<div className="flex flex-col items-center lg:flex-row max-w-5xl px-6 mx-auto">
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
					{team.tasters.items.map((taster, index) => {
						return (
							<div
								key={index}
								ref={appearOnMount}
								className="flex-1 max-w-sm flex flex-col mt-5 lg:(px-14 mt-0) text-center sibling:(border-t-2 border-t-komorebi lg:border-transparent lg:border-l-2 lg:border-l-komorebi)"
							>
								<div
									className={clsx(
										'bg-cover self-center bg-right-top mt-10 h-52 w-64 lg:(w-52 h-64 mt-0)',
									)}
									style={{
										backgroundImage: `url(${
											urlTeamPhotos[taster.picture]
										})`,
									}}
								/>
								<h4 className="font-semibold text-xl mt-5">
									{taster.title}
								</h4>
								<p>{taster.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
