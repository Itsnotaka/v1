import Image from 'next/image';
import React from 'react';

const SongBlock = (songTitle: string, description: string, ImageLink: string) => {
	return (
		<div className="sm:flex">
			<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
				<Image src={ImageLink} className="w-32 h-32" />
			</div>
			<div>
				<h4 className="text-lg font-bold">{songTitle}</h4>
				<p className="mt-1">{description}</p>
			</div>
		</div>
	);
};
export default SongBlock;
