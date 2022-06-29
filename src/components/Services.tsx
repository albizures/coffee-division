import clsx from 'clsx';
import Image from 'next/image';
import { icons, Leaf3, ServicesImg } from '../assets';
import { useAnimateOnScreen, useScroll } from '../hooks';
import { useContent } from '../state';
import { RightArrowIcon } from './Icons';

export function Services() {
	const { services } = useContent();

	const onMoveServices = useScroll('.services', '.services-item');

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
			<div className="bg-hunt">
				<div className="max-w-xl mx-auto px-6">
					<div
						ref={appearOnMount}
						className="mx-auto w-3/5 anima z-0"
					>
						<div className="transform -translate-y-5">
							<Image src={ServicesImg} layout="responsive" />
						</div>
					</div>
					<h2 className="text-6xl text-center font-serif text-extra-white transform -mt-10 z-10">
						{services.title}
					</h2>
					<div className="bg-caraway text-extra-white text-center p-4 mt-5">
						<p className="text-sm lg:text-base">
							<span className="font-semibold">
								{services.description1.part1}
							</span>{' '}
							{services.description1.part2}
						</p>
					</div>
					<div className="bg-caraway text-extra-white text-center p-4 mt-5">
						<p className="text-sm lg:text-base">
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
				</div>
				<div className="max-w-5xl mx-auto">
					<div className="relative">
						<div
							className={clsx(
								'services',
								'divide-crisp px-4 flex flex-grow overflow-x-auto divide-x mt-9 pb-40',
								'lg:(flex-row divide-x mx-0 pb-32)',
							)}
						>
							{services.whatMakesUsDifferent.items.map(
								(item, index) => {
									return (
										<div
											className={clsx(
												'services-item',
												'flex-1 text-center p-3 min-w-44 lg:w-auto',
												{
													'lg:-mb-16': index === 0,
												},
											)}
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
						<div className="absolute pointer-events-none inset-x-0 bottom-15 flex justify-center items-start lg:hidden">
							<button
								className="pointer-events-auto"
								onClick={onMoveServices}
							>
								<RightArrowIcon className="h-10 w-10 lg:(h-16 w-16) stroke-crisp" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-crisp overflow-hidden">
				<div className="max-w-5xl mx-auto pt-18 lg:pt-32 relative">
					<div
						ref={swingOnMount}
						className="absolute -top-40 lg:-top-30 left-0"
					>
						<Image
							className="scale-50 origin-left transform md:scale-100"
							src={Leaf3}
						/>
					</div>
					<h2 ref={appearOnMount} className="text-center text-hunt">
						<span className="text-center font-semibold">
							{services.ourProccess.upperTitle}
						</span>
						<span className="text-center text-6xl lg:text-8xl font-serif block -mt-4">
							{services.ourProccess.title}
						</span>
					</h2>
					<div className="flex flex-col mt-10 lg:mt-16 mx-4 pb-18 divide-y divide-komorebi lg:(flex-row divide-x divide-y-0 mx-0 pb-32)">
						{services.ourProccess.items.map((item, index) => {
							return (
								<div
									className={
										'flex-1 flex items-center lg:flex-col text-center p-3'
									}
									key={index}
								>
									<Image
										src={icons[item.icon]}
										className="mx-auto "
									/>
									<p className="text-liquorice text-center ml-3 lg:(m-1 ml-0)">
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
