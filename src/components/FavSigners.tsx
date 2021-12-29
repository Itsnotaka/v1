import React from 'react';

const files = [
	{
		title: '',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616d00001e020d378c4756c4fc34b7d3eeaf',
	},
	{
		title: '',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616d00001e020d378c4756c4fc34b7d3eeaf',
	},
	{
		title: '',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616d00001e020d378c4756c4fc34b7d3eeaf',
	},
	{
		title: '',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616d00001e020d378c4756c4fc34b7d3eeaf',
	},
];

const FavSingers = () => {
	return (
		<ul
			role="list"
			className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
		>
			{files.map(file => (
				<li key={file.source} className="relative">
					<div className="group block w-full aspect-w-10 aspect-h-10 shadow-lg rounded-md focus-within:ring-2 focus-within:ring-offset-2 overflow-hidden">
						<img
							src={file.source}
							alt=""
							className="object-cover pointer-events-none transition-all duration-500 group-hover:scale-150"
						/>
					</div>
					<p className="opacity-70 mt-2 block text-sm font-medium text-white truncate pointer-events-none">
						{file.author}
					</p>
					<p className="opacity-70 mt-2 block text-sm font-medium text-white truncate pointer-events-none h-20">
						{file.title}
					</p>
				</li>
			))}
		</ul>
	);
};

export default FavSingers;
