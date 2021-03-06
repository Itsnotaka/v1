import Image from 'next/image';
import React from 'react';

const files = [
	{
		title: '',
		author: 'IU',
		source: 'https://i.scdn.co/image/ab67616100005174006ff3c0136a71bfb9928d34',
	},
	{
		title: '',
		author: 'G.E.M',
		source: 'https://i.scdn.co/image/ab67616100005174a2f44146517d33b2cf01f1ea',
	},
	{
		title: '',
		author: 'Keshi',
		source: 'https://i.scdn.co/image/ab67616100005174d969cf117d0b0d4424bebdc5',
	},
	{
		title: '',
		author: 'Kenshi Yonezu ',
		source: 'https://i.scdn.co/image/ab676161000051745b4225f4c907007170809d8a',
	},
	{
		title: '',
		author: '顏人中',
		source: 'https://i.scdn.co/image/ab67616d00001e02c17714a11ba7db7fda4787fe',
	},
	{
		title: '',
		author: 'Juice WRLD',
		source: 'https://i.scdn.co/image/ab676161000051741908e1a8b79abf71d5598944',
	},
	{
		title: '',
		author: 'Justin Bieber',
		source: 'https://i.scdn.co/image/ab676161000051748ae7f2aaa9817a704a87ea36',
	},
	{
		title: '',
		author: 'Lauv',
		source: 'https://i.scdn.co/image/ab67616d00001e025355919e31efac9b14c45c49',
	},
];

const FavSingers = () => (
	<ul
		role="list"
		className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
	>
		{files.map(file => (
			<li key={file.source} className="relative">
				<button className="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-md shadow-lg focus-within:ring-2 focus-within:ring-offset-2">
					<a className="pointer-events-none object-cover grayscale-[30%] transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0">
						<Image src={file.source} alt="" height={640} width={640} />
					</a>
				</button>
				<p className="pointer-events-none mt-2 block truncate text-sm font-medium text-white opacity-70">
					{file.author}
				</p>
				<p className="pointer-events-none mt-2 block h-20 truncate text-sm font-medium text-white opacity-70">
					{file.title}
				</p>
			</li>
		))}
	</ul>
);

export default FavSingers;
