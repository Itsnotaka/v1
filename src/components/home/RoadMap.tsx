import {
	SiGo,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiReact,
	SiTypescript,
} from 'react-icons/si';

const timeline = [
	{
		id: 1,
		content: 'Started learning',
		target: 'Node.js',
		href: '/',
		date: 'May 01',
		datetime: '2020-05-01',
		icon: SiNodeDotJs,
		iconBackground: 'bg-near-black',
	},
	{
		id: 2,
		content: 'Started using',
		target: 'Typescript',
		href: '/',
		date: 'May 30',
		datetime: '2020-05-30',
		icon: SiTypescript,
		iconBackground: 'bg-near-black',
	},
	{
		id: 3,
		content: 'Begin learning',
		target: 'React.js',
		href: '/',
		date: 'July 28',
		datetime: '2020-07-28',
		icon: SiReact,
		iconBackground: 'bg-near-black',
	},
	{
		id: 4,
		content: 'Advanced to',
		target: 'Next.js',
		href: '/',
		date: 'Aug 01',
		datetime: '2020-08-01',
		icon: SiNextDotJs,
		iconBackground: 'bg-near-black',
	},
	{
		id: 5,
		content: 'Started learning',
		target: 'GO',
		href: '/',
		date: 'Nov 30',
		datetime: '2020-11-30',
		icon: SiGo,
		iconBackground: 'bg-near-black',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const RoadMap = () => (
	<div className="flow-root">
		<ul role="list" className="-mb-8">
			{timeline.map((event, eventIdx) => (
				<li key={event.id}>
					<div className="relative pb-8">
						{/* eslint-disable-next-line no-negated-condition */}
						{eventIdx !== timeline.length - 1 ? (
							<span
								className="absolute top-4 left-4 -ml-px w-0.5 h-full bg-gray-200"
								aria-hidden="true"
							/>
						) : null}
						<div className="flex relative space-x-3">
							<div>
								<span
									className={classNames(
										event.iconBackground,
										'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-transparent',
									)}
								>
									<event.icon
										className="w-5 h-5 text-white"
										aria-hidden="true"
									/>
								</span>
							</div>
							<div className="flex flex-1 justify-between pt-1.5 space-x-4 min-w-0">
								<div>
									<pre className="text-sm text-gray-500">
										{event.content}{" "}
										<a
											// Href={event.href}
											className="font-medium text-teal-200"
										>
											{event.target}
										</a>
									</pre>
								</div>
								<div className="text-sm text-right text-gray-500 whitespace-nowrap">
									<time dateTime={event.datetime}>{event.date}</time>
								</div>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	</div>
);

export default RoadMap;
