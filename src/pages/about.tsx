import React from 'react';
import Typist from 'react-typist';
import Header from '../components/_Header';
import Image from 'next/image';
import Banner from '../../public/banner.jpg';
import FavSongs from '../components/about/FavSongs';
import FavSingers from '../components/about/FavSigners';
import Head from 'next/head';

const about = () => (
	<>
		<Head>
			<title>About - Daniel Fu</title>
		</Head>
		<Header />
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
			<div className="mx-auto max-w-3xl">
				<div className="space-y-4 text-left">
					<div className="flex space-x-3"></div>
					<Typist
						className="font-mit text-4xl font-bold"
						cursor={{hideWhenDone: true}}
					>
						About
					</Typist>
					<h3 className="mt-4 border-b border-gray-300 pb-2 text-xl font-bold tracking-widest dark:border-gray-700">
						A short overview of me
					</h3>
					<div className="text-white text-opacity-40 transition-all hover:text-opacity-100">
						<Image
							alt="A day in Hong Kong with my friends"
							src={Banner}
							width={1000}
							height={500}
							placeholder="blur"
							className="block rounded-lg border-2 border-white object-cover"
						/>
						<div className="text-left text-white text-opacity-50 transition-all hover:text-opacity-100">
							<span className="not-sr-only text-sm">
								A day in Hong Kong with my friends
							</span>
						</div>
					</div>
					<p className="not-sr-only relative text-left text-lg opacity-80">
						I am just an ordinary neighbourhood student who is into Economics
						and Computer Science. Oh yeah, I listen to a wide variety of musics
						as well.
						<br />
						In fact, according to Spotify, I spent 46,992 minutes listening
						music.
					</p>
					<span>
						<h1 className="not-sr-only relative top-2 text-center font-mit text-2xl font-bold">
							Some Of My Favorite Songs
						</h1>
					</span>

					<FavSongs />

					<span>
						<h1 className="not-sr-only relative top-2 text-center font-mit text-2xl font-bold">
							Some Of My Favorite Singers
						</h1>
					</span>
					<FavSingers />
					<h1 className="pt-10 pb-10 text-center font-mit text-sm font-medium">
						© 2021 Min Chun Fu. All rights reserved.
					</h1>
				</div>
			</div>
		</div>
	</>
);

export default about;
