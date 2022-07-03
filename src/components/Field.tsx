interface FieldProps {
	label: string;
	name: string;
	type?: 'text' | 'email';
	required?: boolean;
}

export function Field(props: FieldProps) {
	const { label, name, type = 'text', required } = props;
	return (
		<label className="block py-3 border-b border-komorebi">
			<span className="sr-only">{label}</span>
			<input
				className="bg-transparent p-2 w-full"
				type={type}
				name={name}
				required={required}
				placeholder={label}
			/>
		</label>
	);
}
