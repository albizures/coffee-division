import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	characteristicsImages,
	WhiteLogoImg,
	coffeeImages,
	processesImages,
	Leaf2,
	Leaf1,
} from '../assets';
import { contentItem, useContent } from '../state';
import { BeanIcon } from './Icons';
import clsx from 'clsx';
import { Field } from './Field';
import { useAnimateOnScreen } from '../hooks';
import { mailto } from '../contact';

function scrollToTop() {
	setTimeout(() => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}, 100);
}

interface BackProps {
	children: React.ReactNode;
	onBack: (index: null) => void;
}

function Back(props: BackProps) {
	const { onBack, children } = props;
	return (
		<div className="text-center pb-20 md:(text-left)">
			<button
				className="underline text-white"
				onClick={() => onBack(null)}
			>
				{children}
			</button>
		</div>
	);
}

interface TitleProps {
	children: React.ReactNode;
}
function Title(props: TitleProps) {
	const { children } = props;
	return (
		<h1 className="mt-8 text-4xl text-white font-serif">
			{children}
		</h1>
	);
}

interface CardProps {
	onSelect: (index: number) => void;
	index: number;
	background: StaticImageData;
	title: string;
	description: string;
}

function Card(props: CardProps) {
	const { index, onSelect, background, description, title } = props;
	const appearOnMount = useAnimateOnScreen({
		animate: 'animate-back-in-up',
		duration: 'animate-duration-1000',
		init: 'anim-appear',
	});
	return (
		<div
			onClick={() => onSelect(index)}
			ref={appearOnMount}
			className={clsx(
				'flex md:(flex-col flex-1 max-w-60) cursor-pointer mt-10 even:children:bg-caraway odd:children:bg-foothills',
				{
					'md:animate-delay-50': index === 1,
					'md:animate-delay-100': index === 2,
					'md:animate-delay-150': index === 3,
				},
			)}
		>
			<div
				className="flex-1 bg-cover bg-center md:(relative)"
				style={{
					backgroundImage: `url(${background.src})`,
				}}
			>
				<p className="bg-pumpkin py-6 px-3 text-white text-sm hidden md:(block opacity-0 hover:opacity-100)">
					<span className="bg-pumpkin absolute inset-0"></span>
					<span className="relative">{description}</span>
				</p>
			</div>
			<div className="flex-1 flex flex-col items-center md:(h-20 flex-grow-0 border-t-4 border-hunt)">
				<h5 className="flex-1 py-3 text-white font-serif text-xl text-center">
					{title}
				</h5>
				<p className="bg-pumpkin py-6 px-3 text-white text-sm md:(hidden)">
					{description}
				</p>
			</div>
		</div>
	);
}

interface DividerProps {
	isActive: unknown;
}

function Divider(props: DividerProps) {
	const { isActive } = props;
	return (
		<span
			className={clsx('flex-1 border-t ', {
				'border-pumpkin': !isActive,
				'border-lemon': isActive,
			})}
		/>
	);
}
interface BeanProps {
	isActive: unknown;
}

function Bean(props: BeanProps) {
	const { isActive } = props;
	return (
		<BeanIcon
			className={clsx('w-4 h-4 md:(w-7 h-7)', {
				'text-pumpkin': !isActive,
				'text-lemon': isActive,
			})}
		/>
	);
}

export function CoffeeForm() {
	const { form, ourCoffees, contact } = useContent();
	const [characteristicIndex, setCharacteristicIndex] =
		React.useState(null);
	const [regionIndex, setRegionIndex] = React.useState(null);
	const [processIndex, setProcessIndex] = React.useState(null);
	const characteristic =
		form.characteristics.items[characteristicIndex];
	const regions = characteristic
		? ourCoffees.items.filter(({ background }) => {
				return characteristic.regions.some(({ name }) => {
					return background === name;
				});
		  })
		: [];
	const region = regions[regionIndex];
	const process = form.processes.items[processIndex];

	const swingOnMount = useAnimateOnScreen({
		animate: 'animate-swing',
		duration: 'animate-duration-3000',
		threshold: 0.2,
	});

	const appearOnMount = useAnimateOnScreen({
		animate: 'animate-back-in-up',
		duration: 'animate-duration-1000',
		init: 'anim-appear',
	});

	function onSelectCharacteristics(index: number | null) {
		setCharacteristicIndex(index);
		scrollToTop();
	}

	function onSelectRegion(index: number | null) {
		setRegionIndex(index);
		scrollToTop();
	}

	function onSelectProcess(index: number | null) {
		setProcessIndex(index);
		scrollToTop();
	}

	function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const name = form.name as unknown as HTMLInputElement;
		const email = form.email as HTMLInputElement;
		const phone = form.phone as HTMLInputElement;
		const message = form.message as HTMLInputElement;

		mailto({
			to: contact.email,
			name: (name as unknown as HTMLInputElement).value,
			email: email.value,
			phone: phone.value,
			message: message.value,
			extra: {
				characteristic: characteristic.title,
				region: region.title,
				process: process.title,
			},
		});

		name.value = '';
		email.value = '';
		phone.value = '';
		message.value = '';
	}

	return (
		<div className="min-h-screen flex flex-col bg-hunt justify-center relative overflow-hidden">
			<div className="transform scale-50 md:scale-100 absolute origin-left -top-40 md:-top-20">
				<div ref={swingOnMount} className="">
					<Image src={Leaf2} />
				</div>
			</div>
			<div
				ref={swingOnMount}
				className="hidden md:block absolute -right-40 -bottom-40"
			>
				<Image src={Leaf1} />
			</div>
			<div className="w-full">
				<div className="max-w-5xl mx-auto px-6 text-center pt-8">
					<div className="max-h-15 max-w-64 mx-auto">
						<Link href="/">
							<a>
								<Image layout="responsive" src={WhiteLogoImg} />
							</a>
						</Link>
					</div>
					<div className="flex space-x-2 items-center mt-8 max-w-[260px] md:max-w-[496px] mx-auto">
						<Bean isActive={true} />
						<Divider isActive={characteristic} />
						<Bean isActive={characteristic} />
						<Divider isActive={region} />
						<Bean isActive={region} />
						<Divider isActive={process} />
						<Bean isActive={process} />
					</div>
					<div className="flex space-x-2 min-h-1 uppercase font-semibold text-[0.639rem] max-w-xs md:(text-xs max-w-[608px]) mt-3 justify-between mx-auto text-white">
						<span className="flex-1">
							{characteristic && characteristic.title}
						</span>
						<span className="flex-1">{region && region.title}</span>
						<span className="flex-1">{process && process.title}</span>
						<span className="flex-1">{process && form.done}</span>
					</div>
					{!characteristic && (
						<>
							<Title>{form.characteristics.title}</Title>
							<div className="pb-20 relative z-10 md:(flex space-x-4 mt-6 justify-center)">
								{form.characteristics.items.map((item, index) => {
									return (
										<div
											ref={appearOnMount}
											onClick={() => onSelectCharacteristics(index)}
											key={index}
											className={clsx(
												'flex cursor-pointer mt-10 space-x-1 even:children:bg-caraway odd:children:bg-foothills',
												'md:(flex-col space-x-0 space-y-1)',
												{
													'md:animate-delay-50': index === 1,
													'md:animate-delay-100': index === 2,
													'md:animate-delay-150': index === 3,
												},
											)}
										>
											<div className="flex-1">
												<div className="-mt-5">
													<Image
														src={characteristicsImages[item.image]}
													/>
												</div>
											</div>
											<div className="flex-1 flex items-center">
												<h5 className="flex-1 text-white font-serif text-2xl text-center py-4">
													{item.title}
												</h5>
											</div>
										</div>
									);
								})}
							</div>
						</>
					)}
					{characteristic && !region && (
						<>
							<Title>{form.regions.title}</Title>
							<div className="pb-10 relative z-10 md:(flex space-x-4 mt-6 justify-center)">
								{regions.map((item, index) => {
									return (
										<Card
											key={index}
											title={item.title}
											description={item.description}
											onSelect={onSelectRegion}
											index={index}
											background={coffeeImages[item.background]}
										/>
									);
								})}
							</div>
							<Back onBack={onSelectCharacteristics}>
								{form.back}
							</Back>
						</>
					)}
					{region && !process && (
						<>
							<Title>{form.processes.title}</Title>
							<div className="pb-10 relative z-10 md:(flex space-x-4 mt-6 justify-center)">
								{form.processes.items.map((item, index) => {
									return (
										<Card
											key={index}
											title={item.title}
											description={item.description}
											onSelect={onSelectProcess}
											index={index}
											background={processesImages[item.image]}
										/>
									);
								})}
							</div>
							<Back onBack={onSelectRegion}>{form.back}</Back>
						</>
					)}
					{process && (
						<>
							<Title>{form.contact.title}</Title>
							<p className="text-white mt-4">
								{form.contact.description}
							</p>
							<form
								onSubmit={onSubmit}
								className="text-white pt-4 pb-10 relative z-10 md:(grid grid-cols-2 gap-10 justify-center)"
							>
								<Field name="name" label={contact.form.name} />
								<Field
									name="email"
									type="email"
									label={contact.form.email}
								/>
								<Field name="phone" label={contact.form.phone} />
								<Field name="country" label={contact.form.country} />
								<label className="py-3 mt-5 block md:col-span-full">
									<span className="sr-only">
										{contact.form.message}
									</span>
									<textarea
										className="w-full bg-transparent mt-3 border border-komorebi p-2"
										name="message"
										rows={5}
										placeholder={contact.form.message}
									/>
								</label>
								<div className="flex flex-col md:(flex-row col-span-full) justify-between">
									<button className="bg-lemon py-4 px-9 font-semibold text-hunt mt-6 md:hidden mb-10">
										{contact.form.send}
									</button>
									<button
										className="underline text-white"
										onClick={(event) => {
											event.preventDefault();
											onSelectProcess(null);
										}}
									>
										{form.back}
									</button>
									<button className="bg-lemon py-4 px-9 font-semibold text-hunt mt-6 hidden md:inline-block">
										{contact.form.send}
									</button>
								</div>
							</form>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
