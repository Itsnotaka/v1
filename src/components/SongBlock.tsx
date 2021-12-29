import Image from 'next/image';
import React from 'react';

const SongBlock = (props: {
	songTitle: string;
	description: string;
	imageLink: string;
}) => {
	return (
		<div className="sm:flex">
			<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
				<Image src={props.imageLink} sizes="32" />
			</div>
			<div>
				<h4 className="text-lg font-bold">{props.songTitle}</h4>
				<p className="mt-1">{props.description}</p>
			</div>
		</div>
	);
};
export default SongBlock;
