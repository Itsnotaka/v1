import type {NextPage} from 'next';
import {useState} from 'react';
import Header from '../components/_Header';
import {ListItem} from '../components/ListItems';
import {IoCopy} from 'react-icons/io5';
import NotificationCard from '../components/storage/NotificationCard';
import Head from 'next/head';
import Typist from 'react-typist';
import Goto from '../components/storage/Goto';
import Readings from '../components/storage/Reading';
import CryptoReading from '../components/storage/CryptoReading';

const Home: NextPage = () => {
	const [showNotification, setShowNotification] = useState(false);

	return (
		<>
			<Head>
				<title>Storage - Daniel Fu</title>
			</Head>
			<Header />
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="mx-auto max-w-3xl">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3"></div>
						<Typist
							cursor={{hideWhenDone: true}}
							className="font-mit text-4xl font-bold text-left"
						>
							Storage Space
						</Typist>
						<h3 className="pb-2 mt-4 text-xl font-bold tracking-widest text-left border-b border-gray-300 dark:border-gray-700">
							A cool storage place where I store import links and articles to
							read
						</h3>
						<h1 className="text-xl font-bold text-left ">Important Commands</h1>
						<h3 className="text-lg font-bold text-left ">Undo Git Init</h3>
						<ul className="grid grid-cols-3 gap-4 text-left sm:grid-cols-4"></ul>
						<button
							onClick={() => {
								// eslint-disable-next-line @typescript-eslint/no-floating-promises
								navigator.clipboard.writeText('rm -rf .git');
								setShowNotification(true);
								setTimeout(() => {
									setShowNotification(false);
								}, 10000);
							}}
						>
							{showNotification ? <NotificationCard /> : <></>}
							<ListItem icon={IoCopy} text="rm -rf .git" css="font-semibold" />
						</button>
						<h3 className="text-lg font-bold text-left ">
							Install TypeScript Globally
						</h3>
						<button
							onClick={() => {
								navigator.clipboard.writeText('yarn global add typescript');
								setShowNotification(true);
								setTimeout(() => {
									setShowNotification(false);
								}, 10000);
							}}
						>
							{showNotification ? <NotificationCard /> : <></>}
							<ListItem
								icon={IoCopy}
								text="yarn global add typescript"
								css="font-semibold"
							/>
						</button>
						<h1 className="text-lg font-bold text-left ">Go to...</h1>
						<ul className="grid grid-cols-3 gap-4 gap-y-4 text-left sm:grid-cols-4">
							<Goto />
						</ul>
						<h1 className="text-lg font-bold text-left ">Readings</h1>
						<ul className="grid grid-cols-3 gap-4 gap-y-4 text-left sm:grid-cols-4">
							<Readings />
						</ul>
						<h1 className="text-lg font-bold text-left">
							Stock/Crypto Markets
						</h1>
						<ul className="grid relative grid-cols-3 gap-4 pb-32 text-left sm:grid-cols-4">
							<CryptoReading />
						</ul>
						<h1 className="pt-10 pb-10 font-mit text-sm font-medium text-center">
							© 2021 Min Chun Fu. All rights reserved.
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
