import React from 'react';
import Image from 'next/image';
import {
	characteristicsImages,
	WhiteLogoImg,
	coffeeImages,
	processesImages,
} from '../assets';
import { useContent } from '../state';

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
		<h1 className="mt-13 text-4xl text-white font-serif">
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
	return (
		<div
			onClick={() => onSelect(index)}
			key={index}
			className="flex md:(flex-col flex-1) cursor-pointer mt-10 even:children:bg-caraway odd:children:bg-foothills"
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

export function CoffeeForm() {
	const { form, ourCoffees } = useContent();
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

	return (
		<div className="bg-hunt">
			<div className="max-w-5xl mx-auto px-6 text-center pt-8">
				<div className="max-h-15 max-w-64 mx-auto">
					<Image layout="responsive" src={WhiteLogoImg} />
				</div>
				{!characteristic && (
					<>
						<Title>{form.characteristics.title}</Title>
						<div className="pb-20 md:(flex space-x-4 mt-6)">
							{form.characteristics.items.map((item, index) => {
								return (
									<div
										onClick={() => onSelectCharacteristics(index)}
										key={index}
										className="flex md:(flex-col space-x-0 space-y-1) cursor-pointer mt-10 space-x-1 even:children:bg-caraway odd:children:bg-foothills"
									>
										<div className="flex-1">
											<div className="-mt-5">
												<Image
													src={characteristicsImages[item.image]}
												/>
											</div>
										</div>
										<div className="flex-1 flex items-center">
											<h5 className="flex-1 text-white font-serif text-2xl text-center md:p">
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
						<div className="pb-10 md:(flex space-x-4 mt-6)">
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
						<Back onBack={onSelectCharacteristics}>{form.back}</Back>
					</>
				)}
				{region && !process && (
					<>
						<Title>{form.processes.title}</Title>
						<div className="pb-10 md:(flex space-x-4 mt-6)">
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
			</div>
		</div>
	);
}
