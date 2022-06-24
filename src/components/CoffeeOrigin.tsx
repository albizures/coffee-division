import Image from 'next/image';
import clsx from 'clsx';
import { useContent } from '../state';
import { originImages } from '../assets';
import styles from './CoffeeOrigin.module.css';
import { useAnimateOnScreen } from '../hooks';

interface RowProps {
	title: string;
	description: string;
	image: string;
	type: 'odd' | 'even';
}

function Row(props: RowProps) {
	const appearLeftOnMount = useAnimateOnScreen(
		'animate-back-in-left',
		'animate-duration-1000',
	);
	const appearRightOnMount = useAnimateOnScreen(
		'animate-back-in-right',
		'animate-duration-1000',
	);

	const { title, description, image, type } = props;
	const isEven = type === 'even';
	const isOdd = !isEven;
	const content = (
		<div
			ref={isOdd ? appearLeftOnMount : appearRightOnMount}
			className={clsx(
				'anim-appear',
				'flex-1 hidden md:flex flex-col justify-center',
				{
					'pl-34 ml-20 text-left': isOdd,
					'pr-34 mr-20 text-right': isEven,
				},
			)}
		>
			<h3 className="text-hunt text-4xl font-serif">{title}</h3>
			<p className="text-liquorice mt-2">{description}</p>
		</div>
	);

	return (
		<div className="flex flex-col md:flex-row">
			<div className="flex-1 md:hidden">{content}</div>
			{isEven && content}
			<div
				className={clsx(
					'flex-1 flex justify-center transform',
					styles.timeline,
					{
						'translate-x-27': isOdd,
						'-translate-x-27': isEven,
						[`border-r-red border-r-1 ${styles.timeline_right}`]:
							isOdd,

						[`border-l-red border-l-1 ${styles.timeline_left}`]:
							isEven,
					},
				)}
			>
				<div
					className={clsx('max-w-96  max-h-60 transform', {
						'translate-x-10': isOdd,
						'-translate-x-10': isEven,
					})}
				>
					<div
						className="anim-appear"
						ref={isEven ? appearLeftOnMount : appearRightOnMount}
					>
						<Image src={originImages[image]} />
					</div>
				</div>
			</div>
			{isOdd && content}
		</div>
	);
}

export function CoffeeOrigin() {
	const { coffeeOrigin } = useContent();
	const swingOnMount = useAnimateOnScreen(
		'animate-swing',
		'animate-duration-3000',
	);

	return (
		<div className="bg-crisp">
			<div className="max-w-4xl pt-12 pb-24 mx-auto px-6">
				<h1 className="text-center text-hunt">
					<span className="font-serif text-6xl">
						{coffeeOrigin.upperTitle}
					</span>
					<span className="font-serif text-8xl block">
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
