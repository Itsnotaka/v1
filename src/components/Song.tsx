import React, {useEffect, useState} from 'react';
import {useLanyard} from 'use-lanyard';
import {SiSpotify} from 'react-icons/si';

export const DISCORD_ID = '365733917090906113';

const Song = () => {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			setDateState(new Date());
		}, 30000);
	}, []);

	const {data: user} = useLanyard(DISCORD_ID);

	const c =
		'font-medium text-mit text-right float-right inline-flex select-none text-lg items-center space-x-2 no-underline text-Slate-300 opacity-70 hover:opacity-100 py-4';

	if (!user || !user.spotify) {
		return (
			<p className={c}>
				<span>Not playing anything</span>
				<span>
					<SiSpotify />
				</span>
				<span>{dateState.toLocaleString()}</span>
			</p>
		);
	}

	return (
		<a
			target="_blank"
			rel="noreferrer"
			className={c}
			href={`https://open.spotify.com/track/${user.spotify.track_id}`}
		>
			<span>
				Listening to {user.spotify.song} by {user.spotify.artist}
			</span>
			<span>
				<SiSpotify />
			</span>
			<span>{dateState.toLocaleString()}</span>
		</a>
	);
};

export default Song;
