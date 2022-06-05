import Image from 'next/image';
import { ContactImg } from '../assets';
import { useContent } from '../state';
import { AddressIcon, EmailIcon, PhoneIcon } from './Icons';

interface FieldProps {
	label: string;
	name: string;
	type?: 'text' | 'email';
}

function Field(props: FieldProps) {
	const { label, name, type = 'text' } = props;
	return (
		<label className="block py-3 border-b border-komorebi">
			<span className="sr-only">{label}</span>
			<input
				className="bg-transparent p-2 w-full"
				type={type}
				name={name}
				placeholder={label}
			/>
		</label>
	);
}

export function Contact() {
	const { contact } = useContent();

	return (
		<div className="bg-crisp py-14">
			<div className="text-center">
				<h2 className="text-6xl mx-auto font-serif text-hunt">
					{contact.title}
				</h2>
				<p className="text-liquorice mt-6">{contact.description}</p>
			</div>
			<div className="max-w-5xl flex mt-14 mx-auto">
				<div className="w-1/2">
					<Image src={ContactImg} />
					<div className="mt-14">
						<div className="space-x-3 children:inline-block mb-5">
							<span>
								<PhoneIcon className="inline-block w-8 h-5 mr-1" />{' '}
								{contact.phone}
							</span>
							<span>
								<EmailIcon className="inline-block w-8 h-5 mr-1" />{' '}
								{contact.email}
							</span>
						</div>
						<span>
							<AddressIcon className="inline-block w-8 h-5 mr-1" />{' '}
							{contact.address}
						</span>
					</div>
				</div>
				<div className="w-1/2 px-8">
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
							></textarea>
						</label>
						<button className="bg-hunt py-4 px-9 text-white mt-6">
							{contact.form.send}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
