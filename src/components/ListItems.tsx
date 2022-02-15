import type {IconType} from 'react-icons';

export function ListItem({
	text,
	icon,
	link,
	css,
}: {
	text: string;
	icon: IconType;
	link?: string;
	css?: string;
}) {
	return (
		<a
			href={link}
			target="_blank"
			className={`flex space-x-2 text-white opacity-60 hover:opacity-100 ${css}`}
			rel="noreferrer"
		>
			<span>{icon({className: 'h-6 w-6'})}</span>
			<p className="text-base">{text}</p>
		</a>
	);
}
