import React from 'react';

const files = [
	{
		title: 'You',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616d00001e020d378c4756c4fc34b7d3eeaf',
		preview_url:
			'https://p.scdn.co/mp3-preview/d51060d2602318745fab4eae63da9856e11c472b?cid=774b29d4f13844c495f206cafdad9c86',
	},
	{
		title: 'Through The Night',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616d00001e02582ef1f9cf429f07ee914a89',
	},
	{
		title: 'Blue',
		author: 'Keshi',
		source: 'https://i.scdn.co/image/ab67616d00001e027941a79c3108cedb1667b68d',
	},
	{
		title: '倒流時間',
		author: 'G.E.M',
		source: 'https://i.scdn.co/image/ab67616d00001e02b29eba5b7f461cb84cb14c1b',
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
