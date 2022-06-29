import Image from 'next/image';
import clsx from 'clsx';
import { useContent } from '../state';
import { originImages, Leaf3 } from '../assets';
import styles from './CoffeeOrigin.module.css';
import { useAnimateOnScreen } from '../hooks';

interface RowProps {
	title: string;
	description: string;
	image: string;
	type: 'odd' | 'even';
}

function Row(props: RowProps) {
	const appearOnMount = useAnimateOnScreen({
		animate: 'animate-back-in-up',
		duration: 'animate-duration-1000',
		init: 'anim-appear',
	});
	const appearLeftOnMount = useAnimateOnScreen({
		animate: 'animate-back-in-left',
		duration: 'animate-duration-1000',
		init: 'anim-appear',
	});
	const appearRightOnMount = useAnimateOnScreen({
		animate: 'animate-back-in-right',
		duration: 'animate-duration-1000',
		init: 'anim-appear',
	});

	const { title, description, image, type } = props;
	const isEven = type === 'even';
	const isOdd = !isEven;
	const content = (
		<div
			ref={isOdd ? appearLeftOnMount : appearRightOnMount}
			className={clsx('flex-1 md:flex flex-col justify-center', {
				'pl-10 lg:pl-34 ml-10 lg:ml-20 text-left': isOdd,
				'pr-10 lg:pr-34 mr-10 lg:mr-20 text-right': isEven,
			})}
		>
			<h3 className="text-hunt text-4xl font-serif">{title}</h3>
			<p className="text-liquorice mt-2">{description}</p>
		</div>
	);

	return (
		<>
			<div className="flex flex-col md:hidden text-center items-center">
				<div className="mt-15 max-w-80" ref={appearOnMount}>
					<Image src={originImages[image]} />
				</div>
				<h3
					ref={appearOnMount}
					className="text-hunt text-4xl font-serif mt-3"
				>
					{title}
				</h3>
				<p ref={appearOnMount} className="text-liquorice mt-2">
					{description}
				</p>
			</div>
			<div className="hidden md:flex">
				{isEven && content}
				<div
					className={clsx(
						'flex-1 flex justify-center transform items-center max-w-96',
						styles.timeline,
						{
							'translate-x-10 lg:translate-x-27': isOdd,
							'-translate-x-10 lg:-translate-x-27': isEven,
							[`border-r-red border-r-1 ${styles.timeline_right}`]:
								isOdd,

							[`border-l-red border-l-1 ${styles.timeline_left}`]:
								isEven,
						},
					)}
				>
					<div
						className={clsx('max-h-60 transform', {
							'translate-x-5 lg:translate-x-10': isOdd,
							'-translate-x-5 lg:-translate-x-10': isEven,
						})}
					>
						<div
							ref={isEven ? appearLeftOnMount : appearRightOnMount}
						>
							<Image src={originImages[image]} />
						</div>
					</div>
				</div>
				{isOdd && content}
			</div>
		</>
	);
}

export function CoffeeOrigin() {
	const { coffeeOrigin } = useContent();
	const swingOnMount = useAnimateOnScreen({
		animate: 'animate-swing',
		duration: 'animate-duration-3000',
		threshold: 0.2,
	});

	return (
		<div className="bg-crisp relative overflow-hidden">
			<div
				ref={swingOnMount}
				className="absolute transition ease-in-out -right-30 -top-30 xl:(-right-40 -top-10)"
			>
				<Image src={Leaf3} />
			</div>
			<div
				ref={swingOnMount}
				className="absolute transition ease-in-out -left-40 top-1/2 xl:(-left-30)"
			>
				<Image
					src={Leaf3}
					className="transform rotate-130 -translate-x-5 scale-95 rotate"
				/>
			</div>

			<div className="md:max-w-4xl sm:max-w-xl pt-12 pb-24 mx-auto px-6">
				<h1 className="text-center text-hunt">
					<span className="font-serif text-4xl md:text-6xl">
						{coffeeOrigin.upperTitle}
					</span>
					<span className="font-serif text-6xl md:text-8xl block">
						{coffeeOrigin.title}
					</span>
				</h1>
				<div className="mt-14">
					{coffeeOrigin.items.map((item, index) => {
						return (
							<Row
								type={index % 2 === 0 ? 'even' : 'odd'}
								key={index}
								{...item}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
