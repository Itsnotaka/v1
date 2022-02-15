import Image from 'next/image';
import React from 'react';
const files = [
	{
		title: '螢火',
		author: 'G.E.M',
		source: 'https://i.scdn.co/image/ab67616d00001e02a86c7932c5072d2221907af1',
	},
	{
		title: 'Graduation',
		author: 'benny blanco & Juice WRLD',
		source: 'https://i.scdn.co/image/ab67616d00001e029e714501730245ec76623000',
	},
	{
		title: 'Lemon',
		author: 'Kenshi Yonezu',
		source: 'https://i.scdn.co/image/ab67616d00001e02ae8ab64f32bde85afa89779d',
	},
	{
		title: 'Through The Night',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616d00001e02582ef1f9cf429f07ee914a89',
	},
	{
		title: '有些',
		author: '顏人中',
		source: 'https://i.scdn.co/image/ab67616d00001e02c17714a11ba7db7fda4787fe',
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
	{
		title: 'You',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616d00001e020d378c4756c4fc34b7d3eeaf',
	},
];

const FavSongs = () => (
	<ul
		role="list"
		className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
	>
		{files.map(file => (
			<li key={file.source} className="relative">
				<button className="group block overflow-hidden w-full rounded-md focus-within:ring-2 focus-within:ring-offset-2 shadow-lg aspect-w-10 aspect-h-10">
					<a className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 pointer-events-none">
						{<Image src={file.source} alt="" height={640} width={640} />}
					</a>
				</button>
				<p className="block mt-2 text-sm font-medium text-white truncate opacity-70 pointer-events-none">
					{file.author}
				</p>
				<p className="block mt-2 h-20 text-sm font-medium text-white truncate opacity-70 pointer-events-none">
					{file.title}
				</p>
			</li>
		))}
	</ul>
);

export default FavSongs;
