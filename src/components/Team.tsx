import Image from 'next/image';
import React from 'react';
import { teamPhotos } from '../assets';
import { useContent } from '../state';
import { Plus } from './Icons';
import styles from './Team.module.css';

export function Team() {
	const { team } = useContent();
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const current = team.items[currentIndex];

	return (
		<div className="bg-hunt text-crisp py-24">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-center">
					<span className="block font-semibold">
						{team.upperTitle}
					</span>
					<span className="block font-serif text-8xl">
						{team.title}
					</span>
				</h2>
				<div className="flex mt-11 justify-center">
					<div>
						<div className="grid grid-cols-3 grid-rows-2">
							{team.items.map((item, index) => {
								return (
									<div
										key={index}
										className="mr-5 mb-5 relative overflow-hidden"
									>
										<Image
											src={teamPhotos[item.picture]}
											width="220"
											height="250"
										/>
										<button
											onClick={() => setCurrentIndex(index)}
											className={`absolute inset-0 w-full opacity-0 flex justify-center bg-opacity-20 bg-hunt items-center hover:(opacity-100) ${styles['team-hover']}`}
										>
											<Plus className="z-20" />
										</button>
									</div>
								);
							})}
						</div>
					</div>
					<div className="col-span-1 pl-5 border-l-crip border-l-1">
						<div
							className={`relative before:pointer-events-none ${styles['team-gradient']}`}
						>
							<div
								key={currentIndex}
								className="overflow-y-scroll max-h-lg pb-9"
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
	);
}
