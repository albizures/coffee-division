import React from 'react';
import Image from 'next/image';
import { WhiteLogoImg } from '../assets';

export function CoffeeForm() {
	return (
		<div className="bg-hunt">
			<div className="max-w-5xl mx-auto px-6">
				<Image src={WhiteLogoImg} />
			</div>
		</div>
	);
}
