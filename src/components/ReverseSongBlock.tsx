import Image from 'next/image';
import React from 'react';

const ReverseSongBlock = (
	songTitle: string,
	description: string,
	imageLink: string,
) => {
	return (
		<div className="flex">
			<div>
				<h4 className="text-lg font-bold">{songTitle}</h4>
				<p className="mt-1">{description}</p>
			</div>
			<div className="ml-4 flex-shrink-0">
				<Image src={imageLink} className="w-32 h-32" />
			</div>
		</div>
	);
};

export default ReverseSongBlock;
