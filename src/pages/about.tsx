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
		<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
			{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
			<div className="mx-auto max-w-3xl">
				<div className="space-y-4 text-left">
					<div className="flex space-x-3"></div>
					<Typist className="font-mit text-4xl font-bold" cursor={{hideWhenDone: true}}>About</Typist>
					<h3 className="pb-2 mt-4 text-xl font-bold tracking-widest border-b border-gray-300 dark:border-gray-700">
							A short overview of me
					</h3>
					<div className="text-white transition-all text-opacity-40 hover:text-opacity-100">
						<Image
							alt="A day in Hong Kong with my friends"
							src={Banner}
							width={1000}
							height={500}
							placeholder="blur"
							className="block object-cover rounded-lg border-2 border-white"
						/>
						<div className="text-left text-white transition-all text-opacity-50 hover:text-opacity-100">
							<span className="text-sm not-sr-only">
									A day in Hong Kong with my friends
							</span>
						</div>
					</div>
					<p className="relative text-lg text-left opacity-80 not-sr-only">
							I am just an ordinary neighbourhood student who is into Economics
							and Computer Science. Oh yeah, I listen to a wide variety of
							musics as well.
						<br />
							In fact, according to Spotify, I spent 46,992 minutes listening
							music.
					</p>
					<span>
						<h1 className="relative top-2 font-mit text-2xl font-bold text-center not-sr-only">
								Some Of My Favorite Songs
						</h1>
					</span>

					<FavSongs />

					<span>
						<h1 className="relative top-2 font-mit text-2xl font-bold text-center not-sr-only">
								Some Of My Favorite Singers
						</h1>
					</span>
					<FavSingers />
					<h1 className="pt-10 pb-10 font-mit text-sm font-medium text-center">
							© 2021 Min Chun Fu. All rights reserved.
					</h1>
				</div>
			</div>
		</div>
	</>
);

export default about;
