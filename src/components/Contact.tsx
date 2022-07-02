import Image from 'next/image';
import { ContactImg } from '../assets';
import { useAnimateOnScreen } from '../hooks';
import { useContent } from '../state';
import { Field } from './Field';
import { AddressIcon, EmailIcon, PhoneIcon } from './Icons';

export function Contact() {
	const { contact } = useContent();

	const appearOnMount = useAnimateOnScreen({
		animate: 'animate-back-in-up',
		duration: 'animate-duration-1000',
		init: 'anim-appear',
	});

	return (
		<div className="bg-crisp py-14">
			<div className="text-center hidden lg:block">
				<h2
					ref={appearOnMount}
					className="text-6xl mx-auto font-serif text-hunt"
				>
					{contact.title}
				</h2>
				<p className="text-liquorice mt-6">{contact.description}</p>
			</div>

			<div className="max-w-5xl px-6 flex flex-col lg:flex-row lg:mt-14 mx-auto">
				<div className="lg:w-1/2">
					<div className="max-w-sm mx-auto lg:max-w-[100%]">
						<div ref={appearOnMount}>
							<Image src={ContactImg} />
						</div>
						<div className="text-center lg:hidden block mt-5">
							<h2 className="text-4xl mx-auto font-serif text-hunt">
								{contact.title}
							</h2>
							<p className="text-liquorice mt-6">
								{contact.description}
							</p>
						</div>
					</div>
					<div className="mt-14 hidden lg:block ">
						<div className="children:inline-block mb-5">
							<span className="leading-12">
								<PhoneIcon className="inline-block w-8 h-5 mr-1" />{' '}
								{contact.phone}
							</span>
							<span>
								<EmailIcon className="inline-block w-8 h-5 mr-1" />{' '}
								{contact.email}
							</span>
						</div>
						<span className="flex">
							<AddressIcon className="inline-block w-11 h-8 mr-3" />{' '}
							{contact.address}
						</span>
					</div>
				</div>
				<div className="lg:w-1/2 mt-8 lg:mt-0 lg:px-8">
					<form>
						<Field name="name" label={contact.form.name} />
						<Field
							name="email"
							type="email"
							label={contact.form.email}
						/>
						<Field name="phone" label={contact.form.phone} />
						<label className="py-3 mt-5 block">
							<span className="sr-only">{contact.form.message}</span>
							<textarea
								className="w-full bg-transparent mt-3 border border-komorebi p-2"
								name="message"
								rows={5}
								placeholder={contact.form.message}
							/>
						</label>
						<button className="bg-hunt py-4 px-9 text-white mt-6 w-full lg:w-auto">
							{contact.form.send}
						</button>
					</form>
				</div>
				<div className="lg:hidden space-y-5 mt-10">
					<div>
						<PhoneIcon className="inline-block w-8 h-5 mr-1" />{' '}
						{contact.phone}
					</div>
					<div>
						<EmailIcon className="inline-block w-8 h-5 mr-1" />{' '}
						{contact.email}
					</div>
					<div className="flex">
						<AddressIcon className="w-13 h-8 mr-3" />{' '}
						{contact.address}
					</div>
				</div>
			</div>
		</div>
	);
}
