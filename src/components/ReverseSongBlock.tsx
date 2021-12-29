import Image from 'next/image';
import React from 'react';

const ReverseSongBlock = (props: {
	songTitle: string;
	description: string;
	imageLink: string;
}) => {
	return (
		<div className="flex">
			<div>
				<h4 className="text-lg font-bold">{props.songTitle}</h4>
				<p className="mt-1">{props.description}</p>
			</div>
			<div className="ml-4 flex-shrink-0">
				<Image src={props.imageLink} sizes="32" />
			</div>
		</div>
	);
};

export default ReverseSongBlock;
