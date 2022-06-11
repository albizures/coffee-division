import clsx from 'clsx';
import Image from 'next/image';
import { icons, ServicesImg } from '../assets';
import { useContent } from '../state';

export function Services() {
	const { services } = useContent();

	return (
		<>
			<div className="bg-hunt">
				<div className="max-w-xl mx-6">
					<div className="mx-auto w-3/5 transform -translate-y-5 z-0">
						<Image src={ServicesImg} layout="responsive" />
					</div>
					<h2 className="text-6xl text-center font-serif text-extra-white transform -mt-10 z-10">
						{services.title}
					</h2>
					<div className="bg-caraway text-extra-white text-center p-4 mt-5">
						<p className="text-sm md:text-base">
							<span className="font-semibold">
								{services.description1.part1}
							</span>{' '}
							{services.description1.part2}
						</p>
					</div>
					<div className="bg-caraway text-extra-white text-center p-4 mt-5">
						<p className="text-sm md:text-base">
							<span className="font-semibold">
								{services.description2.part1}
							</span>{' '}
							{services.description2.part2}
						</p>
					</div>
				</div>
				<div className="max-w-5xl mx-auto">
					<h5 className="mt-16 font-semibold text-extra-white text-center">
						{services.whatMakesUsDifferent.title}
					</h5>
					<div className="divide-crisp mx-4 flex flex-col mt-9 pb-18 divide-y md:(flex-row divide-x divide-y-0 mx-0 pb-32)">
						{services.whatMakesUsDifferent.items.map(
							(item, index) => {
								return (
									<div
										className={clsx('flex-1 text-center p-3', {
											'md:-mb-16': index === 0,
										})}
										key={index}
									>
										<Image
											src={icons[item.icon]}
											className="mx-auto"
										/>
										<p className="text-crisp text-center">
											{item.description}
										</p>
									</div>
								);
							},
						)}
					</div>
				</div>
			</div>
			<div className="bg-crisp">
				<div className="max-w-5xl mx-auto pt-18 md:pt-32">
					<h2 className="text-center text-hunt">
						<span className="text-center font-semibold">
							{services.ourProccess.upperTitle}
						</span>
						<span className="text-center text-6xl md:text-8xl font-serif block -mt-4">
							{services.ourProccess.title}
						</span>
					</h2>
					<div className="flex flex-col mt-10 md:mt-16 mx-4 pb-18 divide-y divide-komorebi md:(flex-row divide-x divide-y-0 mx-0 pb-32)">
						{services.ourProccess.items.map((item, index) => {
							return (
								<div
									className={
										'flex-1 flex items-center md:flex-col text-center p-3'
									}
									key={index}
								>
									<Image
										src={icons[item.icon]}
										className="mx-auto "
									/>
									<p className="text-liquorice text-center ml-3 md:(m-1 ml-0)">
										{item.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
