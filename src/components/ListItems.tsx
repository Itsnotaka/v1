import type {IconType} from 'react-icons';

export function ListItem({
	text,
	icon,
	link,
	css
}: {
	text: string;
	icon: IconType;
	link?: string;
	css?:string
}) {
	return (
		<a href={link} target="_blank" className={`flex space-x-2 opacity-60 text-white hover:opacity-100 ${css}`}>
			<span>{icon({className: 'h-6 w-6'})}</span>
			<p className='text-base'>{text}</p>
		</a>
	);
}
