import Image from 'next/image';
import Link from 'next/link';
import { RightArrowIcon } from '../components/Icons';
import { HeroCoverImg } from '../assets';
import { useContent } from '../state';

export function Hero() {
	const { hero } = useContent();
	return (
		<div className="relative pb-3">
			<Image
				src={HeroCoverImg}
				layout="fill"
				objectFit="cover"
				className="absolute inset-0"
			/>
			<div className="absolute inset-0 bg-pumpkin bg-opacity-70">
				{/* green filters */}
			</div>
			<div className="max-w-5xl px-6 mx-auto relative">
				<h1 className="text-center font-serif pt-20 pb-10 md:(pt-28 pb-14) text-extra-white">
					<span className="md:text-6xl text-4xl block">
						{hero.label.part1}
					</span>
					<span className="md:text-8xl text-6xl	block">
						{hero.label.part2}
					</span>
				</h1>
				<div className="text-center mb-20 md:mb-28">
					<Link href={hero.cta.href}>
						<a className="py-4 px-10 bg-rutherford text-white inline-block">
							<span className="align-middle">{hero.cta.label}</span>
							<RightArrowIcon className="ml-3 inline-block w-5 h-5 stroke-white" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
