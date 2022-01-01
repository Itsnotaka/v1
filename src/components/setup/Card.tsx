import Link from '../Link';

export default function Card({
	href,
	product,
	type,
	description,
}: {
	href: string;
	product: string;
	type: string;
	description?: string;
}) {
	return (
		<>
			<Link href={href}>
				<p className="text-lg font-medium">{product}</p>
				<p className="mt-1 text-sm text-gray-500">{type}</p>
				<p className="mt-1 text-gray-700 dark:text-gray-300">{description}</p>
			</Link>
		</>
	);
}
