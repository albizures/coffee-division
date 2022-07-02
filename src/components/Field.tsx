interface FieldProps {
	label: string;
	name: string;
	type?: 'text' | 'email';
}

export function Field(props: FieldProps) {
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
