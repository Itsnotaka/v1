import type {IconType} from 'react-icons';

export function ListItem({
	text,
	icon,
	link,
}: {
	text: string;
	icon: IconType;
	link?: string;
}) {
	return (
		<a href={link} className="flex space-x-2 opacity-60 text-white hover:opacity-100">
			<span>{icon({className: 'h-6 w-6'})}</span>
			<pre>{text}</pre>
		</a>
	);
}
