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
				<img src={props.imageLink} className='w-64 h-64' />
			</div>
		</div>
	);
};

export default ReverseSongBlock;
