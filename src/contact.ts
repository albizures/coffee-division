interface MailtoArgs {
	name: string;
	email: string;
	phone: string;
	message: string;
	to: string;
	country?: string;
	extra?: {
		characteristic: string;
		region: string;
		process: string;
	};
}

export function mailto(args: MailtoArgs) {
	const { name, email, phone, message, to, extra, country } = args;

	const url = [
		`mailto:${to}?`,
		`subject=Mensaje de ${name}&`,
		`body=Nombre: ${name}
	Correo: ${email}
	Telefono: ${phone}
	Mensaje: ${message}
`.replaceAll('\n', '%0D%0A'),
		country ? `País: ${country}` : '',
		extra
			? [
					`Caracteristica: ${extra.characteristic}`,
					`Region: ${extra.region}`,
					`Proceso: ${extra.process}`,
			  ].join('%0D%0A')
			: '',
	].join('');

	const link = document.createElement('a');

	link.href = url;
	document.body.append(link);
	link.click();

	setTimeout(() => {
		link.remove();
	}, 100);
}
