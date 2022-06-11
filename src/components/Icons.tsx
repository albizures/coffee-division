interface IconProps {
	className?: string;
	width?: string;
	height?: string;
}

interface CircleIconProps extends IconProps {
	pathClassName: string;
}

export function InstagramIcon(props: CircleIconProps) {
	const { pathClassName, ...more } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 20 20"
			{...more}
		>
			<g transform="translate(-1208 -40)">
				<circle
					cx="10"
					cy="10"
					r="10"
					transform="translate(1208 40)"
					fill="currentColor"
				/>
				<path
					d="M6,5.16A3.076,3.076,0,1,0,9.072,8.236,3.071,3.071,0,0,0,6,5.16Zm0,5.076a2,2,0,1,1,2-2,2,2,0,0,1-2,2Zm3.919-5.2A.717.717,0,1,1,9.2,4.317.716.716,0,0,1,9.915,5.035Zm2.037.728a3.551,3.551,0,0,0-.969-2.514A3.574,3.574,0,0,0,8.47,2.28c-.991-.056-3.959-.056-4.95,0a3.569,3.569,0,0,0-2.514.966A3.562,3.562,0,0,0,.037,5.76c-.056.991-.056,3.959,0,4.95a3.551,3.551,0,0,0,.969,2.514,3.578,3.578,0,0,0,2.514.969c.991.056,3.959.056,4.95,0a3.551,3.551,0,0,0,2.514-.969,3.574,3.574,0,0,0,.969-2.514c.056-.991.056-3.957,0-4.947Zm-1.28,6.01a2.025,2.025,0,0,1-1.14,1.14A13.222,13.222,0,0,1,6,13.154a13.325,13.325,0,0,1-3.536-.241,2.025,2.025,0,0,1-1.14-1.14,13.222,13.222,0,0,1-.241-3.536A13.325,13.325,0,0,1,1.319,4.7,2.025,2.025,0,0,1,2.46,3.56,13.222,13.222,0,0,1,6,3.319a13.325,13.325,0,0,1,3.536.241,2.025,2.025,0,0,1,1.14,1.14,13.222,13.222,0,0,1,.241,3.536A13.214,13.214,0,0,1,10.673,11.773Z"
					transform="translate(1212.005 41.762)"
					className={pathClassName}
				/>
			</g>
		</svg>
	);
}

export function FacebookIcon(props: CircleIconProps) {
	const { pathClassName, ...more } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="19.879"
			viewBox="0 0 20 19.879"
			{...more}
		>
			<path
				d="M20.563,10.563A10,10,0,1,0,9,20.442V13.453H6.46V10.563H9v-2.2a3.528,3.528,0,0,1,3.777-3.89,15.39,15.39,0,0,1,2.239.2v2.46H13.754a1.445,1.445,0,0,0-1.629,1.562v1.877H14.9l-.444,2.891h-2.33v6.988A10,10,0,0,0,20.563,10.563Z"
				transform="translate(-0.563 -0.563)"
				fill="currentColor"
			/>
		</svg>
	);
}

export function LinkedinIcon(props: CircleIconProps) {
	const { pathClassName, ...more } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 20 20"
			{...more}
		>
			<g transform="translate(-1267 -40)">
				<circle
					cx="10"
					cy="10"
					r="10"
					transform="translate(1267 40)"
					fill="currentColor"
				/>
				<path
					d="M2.285,10.208H.169V3.393H2.285ZM1.226,2.463A1.231,1.231,0,1,1,2.451,1.226,1.236,1.236,0,0,1,1.226,2.463ZM10.2,10.208H8.093V6.89c0-.791-.016-1.8-1.1-1.8-1.1,0-1.269.859-1.269,1.747v3.374H3.61V3.393H5.64v.93h.03a2.224,2.224,0,0,1,2-1.1c2.142,0,2.535,1.41,2.535,3.242v3.743Z"
					transform="translate(1272 44.999)"
					className={pathClassName}
				/>
			</g>
		</svg>
	);
}

export function RightArrowIcon(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			viewBox="0 0 68 68"
			{...props}
		>
			<g transform="translate(-1.5 -1.5)">
				<path
					id="Path_1308"
					data-name="Path 1308"
					d="M68,35.5A32.5,32.5,0,1,1,35.5,3,32.5,32.5,0,0,1,68,35.5Z"
					transform="translate(0 0)"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="3"
				/>
				<path
					id="Path_1309"
					data-name="Path 1309"
					d="M18,38,31,25,18,12"
					transform="translate(17.5 10.5)"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="3"
				/>
				<path
					id="Path_1310"
					data-name="Path 1310"
					d="M12,18H38"
					transform="translate(10.5 17.5)"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="3"
				/>
			</g>
		</svg>
	);
}

export function LeafIcon(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			viewBox="-20 -25 110 110"
			{...props}
		>
			<g transform="translate(0 0)" clipPath="url(#clip-path)">
				<path
					d="M23.32,25.68c3.446,1.614,4.61,6.418,2.6,10.729s-6.433,6.5-9.879,4.883-4.61-6.418-2.6-10.729S19.874,24.067,23.32,25.68Z"
					transform="translate(6.723 13.575)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<path
					d="M29.44,28.183c-3.625,1.15-5.4,5.756-3.96,10.287s5.542,7.271,9.166,6.121,5.4-5.756,3.959-10.287S33.065,27.033,29.44,28.183Z"
					transform="translate(13.484 15.071)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<path
					d="M38.635,35.051c2.744.884,5.577.4,7.311-1.5C48.5,30.74,47.7,25.9,44.175,22.734s-8.456-3.454-11.008-.647a6.317,6.317,0,0,0-1.306,5.734"
					transform="translate(17.096 10.881)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<path
					d="M37.395,23.767s-7.751-5.717-13.552-6.72"
					transform="translate(12.87 9.202)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<path
					d="M19.511,30.053s3.357-9.694,6.669-13.006"
					transform="translate(10.532 9.202)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<path
					d="M39.545,42.574C31.846,11.778,7.207,1,7.207,1"
					transform="translate(3.89 0.54)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<path
					d="M24.194,8.624C25.4,3.535,30.8-.069,38.2,1.679,48.25,4.053,56.126,15.641,56.126,15.641S43.9,22.481,33.845,20.107c-4.625-1.092-7.67-3.512-9.008-6.416"
					transform="translate(13.059 0.665)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<path
					d="M16.286,4.7C11.746,10.166,7.72,18.736,7.207,29.987"
					transform="translate(3.89 2.538)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<path
					d="M16.7,8.843c7.522-3.286,20.2-4.379,28.415-.176"
					transform="translate(9.015 3.199)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
				<path
					d="M13.625,11.475C9.239,10.812,4.68,13.617,2.31,19.859c-3.665,9.656,1.521,22.672,1.521,22.672s12.517-6.3,16.181-15.954c2.054-5.412,1.163-9.984-1.537-12.677"
					transform="translate(0.54 6.143)"
					fill="none"
					stroke="#eef0ea"
					strokeLinecap="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
}

export function Plus(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			{...props}
		>
			<g transform="translate(-2 -2)">
				<path
					d="M33,18A15,15,0,1,1,18,3,15,15,0,0,1,33,18Z"
					fill="none"
					stroke="#bec4b4"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<path
					d="M18,12V24"
					fill="none"
					stroke="#bec4b4"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<path
					d="M12,18H24"
					fill="none"
					stroke="#bec4b4"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
}

export function PhoneIcon(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="20.706"
			viewBox="0 0 32 20.706"
			{...props}
		>
			<defs>
				<clipPath id="clip-path">
					<rect
						id="Rectangle_67"
						width="32"
						height="20.706"
						fill="none"
					/>
				</clipPath>
			</defs>
			<g
				id="Group_96"
				transform="translate(0 0)"
				clipPath="url(#clip-path)"
			>
				<path
					id="Path_550"
					d="M15.758,20.706,2.675,14.565a4.652,4.652,0,0,1,0-8.423L15.758,0,29.046,5.831a4.938,4.938,0,0,1,0,9.043Z"
					transform="translate(0 0)"
					fill="#d3c29e"
				/>
				<path
					id="Path_551"
					d="M15.031,5.942a1.037,1.037,0,0,1,.466.2c.019.016.039.032.057.049.382.382.766.762,1.145,1.146a.8.8,0,0,1,.132,1,.71.71,0,0,1-.378.31.836.836,0,0,0-.516.461.71.71,0,0,0-.033.478,2.811,2.811,0,0,0,.635,1.115,3.858,3.858,0,0,0,1.208.96,1.075,1.075,0,0,0,.628.149.763.763,0,0,0,.65-.475.877.877,0,0,1,.355-.465.783.783,0,0,1,.928.081c.233.212.451.441.674.664.2.2.414.4.6.618a.817.817,0,0,1,.035.995,1.4,1.4,0,0,1-.144.171c-.223.227-.454.447-.674.678a1.188,1.188,0,0,1-.852.368,2.811,2.811,0,0,1-1.025-.176,6.911,6.911,0,0,1-1.8-.963,11.749,11.749,0,0,1-2.435-2.342,7.471,7.471,0,0,1-1.227-2.163,2.866,2.866,0,0,1-.179-1.075,1.177,1.177,0,0,1,.365-.837q.3-.288.593-.593a1.028,1.028,0,0,1,.607-.359Z"
					transform="translate(-1.525 -0.682)"
					fill="#fff"
				/>
			</g>
		</svg>
	);
}

export function EmailIcon(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="20.706"
			viewBox="0 0 32 20.706"
			{...props}
		>
			<defs>
				<clipPath id="clip-path">
					<rect width="32" height="20.706" fill="none" />
				</clipPath>
			</defs>
			<g transform="translate(6)">
				<g transform="translate(-6 0)" clipPath="url(#clip-path)">
					<path
						d="M15.758,20.706,2.675,14.565a4.652,4.652,0,0,1,0-8.423L15.758,0,29.046,5.831a4.938,4.938,0,0,1,0,9.043Z"
						transform="translate(0 0)"
						fill="#d3c29e"
					/>
					<path
						d="M11.961,10.248q.949.578,1.9,1.155,1.358.828,2.715,1.66a.621.621,0,0,0,.709,0q2.25-1.378,4.506-2.748l.117-.068v3.735a1.47,1.47,0,0,1-1.534,1.524q-3.18,0-6.361,0a5.682,5.682,0,0,1-.843-.032,1.435,1.435,0,0,1-1.189-1.21.308.308,0,0,0-.019-.052Z"
						transform="translate(-1.374 -1.177)"
						fill="#fff"
					/>
					<path
						d="M21.863,9.042a.722.722,0,0,1-.076.064l-1.978,1.209q-1.391.85-2.78,1.7a.133.133,0,0,1-.164,0q-2.377-1.451-4.755-2.9a.123.123,0,0,1-.067-.169,1.46,1.46,0,0,1,1.423-1.041q3.476-.005,6.952,0A1.45,1.45,0,0,1,21.84,8.96l.023.082"
						transform="translate(-1.382 -0.908)"
						fill="#fff"
					/>
				</g>
			</g>
		</svg>
	);
}

export function AddressIcon(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="20.706"
			viewBox="0 0 32 20.706"
			{...props}
		>
			<defs>
				<clipPath id="clip-path">
					<rect width="32" height="20.706" fill="none" />
				</clipPath>
			</defs>
			<g transform="translate(0 0)" clipPath="url(#clip-path)">
				<path
					d="M15.758,20.706,2.675,14.565a4.652,4.652,0,0,1,0-8.423L15.758,0,29.046,5.831a4.938,4.938,0,0,1,0,9.043Z"
					transform="translate(0 0)"
					fill="#d3c29e"
				/>
				<path
					d="M19.937,8.672a3.044,3.044,0,0,0-2.586-1.535h-.138a3.045,3.045,0,0,0-2.586,1.535,3.124,3.124,0,0,0-.041,3.085l2.224,4.071,0,.005a.541.541,0,0,0,.938,0l0-.005,2.224-4.071a3.124,3.124,0,0,0-.041-3.085M17.282,11.2a1.261,1.261,0,1,1,1.261-1.261A1.262,1.262,0,0,1,17.282,11.2"
					transform="translate(-1.631 -0.82)"
					fill="#fff"
				/>
			</g>
		</svg>
	);
}

export function MenuIcon(props: IconProps) {
	return (
		<svg
			stroke="currentColor"
			fill="none"
			strokeWidth="2"
			viewBox="0 0 24 24"
			strokeLinecap="round"
			strokeLinejoin="round"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<line x1="3" y1="12" x2="21" y2="12"></line>
			<line x1="3" y1="6" x2="21" y2="6"></line>
			<line x1="3" y1="18" x2="21" y2="18"></line>
		</svg>
	);
}

export function CloseIcon(props: IconProps) {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 512 512"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
		</svg>
	);
}

export const icons = {
	instagram: InstagramIcon,
	facebook: FacebookIcon,
	linkedin: LinkedinIcon,
};
