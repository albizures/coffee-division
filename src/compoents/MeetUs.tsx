import Image from 'next/image';
import clsx from 'clsx';
import {
	MeetUs1Img,
	MiniGuateImg,
	WorldMapImg,
	MissionVisionImg,
	history,
} from '../assets';
import { useContent } from '../state';
import { LeafIcon, RightArrowIcon } from './Icons';

export function MeetUs() {
	const { meetUs } = useContent();

	return (
		<>
			<div className="bg-crisp">
				<div className="max-w-4xl mx-auto relative pt-12 pb-14">
					<h2 className="text-center font-serif text-hunt mb-8">
						<span className="text-6xl block">
							{meetUs.title.part1}
						</span>
						<span className="text-8xl	block">
							{meetUs.title.part2}
						</span>
					</h2>
					<Image src={WorldMapImg} />
					<p className="mt-14 max-w-2xl text-center mx-auto">
						{meetUs.description.part1}{' '}
						<span className="font-bold">
							{meetUs.description.part2}
						</span>
					</p>
					<div className="mt-12 mb-12 border-rutherford border-t-1" />
					<div className="flex">
						<div className="flex-1 relative">
							<Image src={MeetUs1Img} />
							<span className="rounded-full absolute -right-3 top-1/2 bg-hunt shadow-2xl shadow-black inline-block h-24 w-25">
								<LeafIcon className="h-24 w-25" />
							</span>
						</div>
						<p className="flex-1 self-center px-10">
							{meetUs.description2.part1}{' '}
							<span className="font-bold">
								{meetUs.description2.part2}
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="bg-caraway">
				<a className="max-w-4xl flex block mx-auto justify-center items-center py-6 cursor-pointer">
					<Image src={MiniGuateImg} height="60" width="45" />
					<p className="mx-4 text-center text-extra-white">
						CONOCE EL ORIGEN DE NUESTRO CAFÉ
					</p>
					<RightArrowIcon className="h-8 w-8 stroke-extra-white" />
				</a>
			</div>
			<div className="py-14 bg-hunt">
				<div className="max-w-4xl flex mx-auto items-center">
					<div className="flex-1">
						<h3 className="font-serif text-6xl text-extra-white text-center">
							{meetUs.mission.title}
						</h3>
						<p className="text-extra-white text-center mt-3">
							{meetUs.mission.description}
						</p>
					</div>
					<div className="mx-4 flex-1">
						<Image src={MissionVisionImg} />
					</div>
					<div className="flex-1">
						<h3 className="font-serif text-6xl text-extra-white text-center">
							{meetUs.vision.title}
						</h3>
						<p className="text-extra-white text-center mt-3">
							{meetUs.vision.description}
						</p>
					</div>
				</div>
			</div>
			<div className="py-32 bg-crisp text-hunt">
				<p className="text-center font-semibold">
					{meetUs.ourHistory.upperTitle}
				</p>
				<h2 className="text-center text-6xl font-serif">
					{meetUs.ourHistory.title}
				</h2>

				<div className="flex overflow-x-auto ml-50 mt-10">
					{meetUs.ourHistory.items.map((item, index) => {
						const asset = history[item.image];
						return (
							<div
								className={clsx('w-60 mr-16', {
									'mt-6': index % 2 === 0,
									'flex justify-center flex-col': !asset,
								})}
								key={index}
							>
								{asset && (
									<Image src={asset} width="270" height="208" />
								)}
								<h3 className="text-4xl font-serif mt-5">
									{item.title}
								</h3>
								<p className="mt-2">{item.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
