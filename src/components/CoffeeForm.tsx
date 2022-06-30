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
						<h1 className="mt-13 text-4xl text-white font-serif">
							{form.characteristics.title}
						</h1>
						<div className="pb-20">
							{form.characteristics.items.map((item, index) => {
								return (
									<div
										onClick={() => onSelectCharacteristics(index)}
										key={index}
										className="flex cursor-pointer mt-10 space-x-1 even:children:bg-caraway odd:children:bg-foothills"
									>
										<div className="flex-1">
											<div className="-mt-5">
												<Image
													src={characteristicsImages[item.image]}
												/>
											</div>
										</div>
										<div className="flex-1 flex items-center">
											<h5 className="flex-1 text-white font-serif text-2xl text-center">
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
						<h1 className="mt-13 text-4xl text-white font-serif">
							{form.regions.title}
						</h1>
						<div className="pb-10">
							{regions.map((item, index) => {
								return (
									<div
										onClick={() => onSelectRegion(index)}
										key={index}
										className="flex cursor-pointer mt-10 even:children:bg-caraway odd:children:bg-foothills"
									>
										<div
											className="flex-1 bg-cover bg-center"
											style={{
												backgroundImage: `url(${
													coffeeImages[item.background].src
												})`,
											}}
										></div>
										<div className="flex-1 flex flex-col items-center">
											<h5 className="flex-1 py-3 text-white font-serif text-xl text-center">
												{item.title}
											</h5>
											<p className="bg-pumpkin py-6 px-3 text-white text-sm">
												{item.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
						<div className="text-center pb-20">
							<button
								className="underline text-white"
								onClick={() => onSelectCharacteristics(null)}
							>
								{form.back}
							</button>
						</div>
					</>
				)}
				{region && !process && (
					<>
						<h1 className="mt-13 text-4xl text-white font-serif">
							{form.processes.title}
						</h1>
						<div className="pb-10">
							{form.processes.items.map((item, index) => {
								return (
									<div
										onClick={() => onSelectProcess(index)}
										key={index}
										className="flex cursor-pointer mt-10 even:children:bg-caraway odd:children:bg-foothills"
									>
										<div
											className="flex-1 bg-cover bg-center"
											style={{
												backgroundImage: `url(${
													processesImages[item.image].src
												})`,
											}}
										></div>
										<div className="flex-1 flex flex-col items-center">
											<h5 className="flex-1 py-3 text-white font-serif text-xl text-center">
												{item.title}
											</h5>
											<p className="bg-pumpkin py-6 px-3 text-white text-sm">
												{item.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
						<div className="text-center pb-20">
							<button
								className="underline text-white"
								onClick={() => onSelectRegion(null)}
							>
								{form.back}
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
