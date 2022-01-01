import type {NextPage} from 'next';
import {useState} from 'react';
import Header from '../components/_Header';
import {ListItem} from '../components/ListItems';
import {
	SiApple,
	SiBitcoin,
	SiGithub,
	SiHackerrank,
	SiJavascript,
	SiMacos,
	SiMongodb,
	SiReact,
	SiStackoverflow,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';
import {
	VscSymbolColor,
	VscDiff,
	VscDebugBreakpointLog,
	VscRegex,
} from 'react-icons/vsc';
import {CgLinear} from 'react-icons/cg';
import {FaBookOpen} from 'react-icons/fa';
import {GrProductHunt} from 'react-icons/gr';
import {DiMongodb, DiMitlicence, DiJavascript} from 'react-icons/di';
import {MdSignalCellularAlt} from 'react-icons/md';
import {BsMedium} from 'react-icons/bs';
import {AiOutlineBgColors} from 'react-icons/ai';
import {RiStockFill} from 'react-icons/ri';
import {IoCopy} from 'react-icons/io5';
import NotificationCard from '../components/storage/NotificationCard';
import Head from 'next/head';

const Home: NextPage = () => {
	const [showNotification, setShowNotification] = useState(false);

	return (
		<>
			<Head>
				<title>Storage - Daniel Fu</title>
			</Head>
			<Header />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="max-w-3xl mx-auto">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3"></div>
						<h1 className="font-mit font-bold text-4xl text-left">
							Storage Space
						</h1>
						<h3 className=" text-left pb-2 mt-4 text-xl font-bold tracking-widest border-b border-gray-300 dark:border-gray-700">
							A cool storage place where I store import links and articles to
							read
						</h3>
						<h1 className="text-xl font-bold text-left ">Important Commands</h1>
						<h3 className="text-lg font-bold text-left ">Undo Git Init</h3>
						<ul className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-left"></ul>
						<button
							onClick={() => {
								navigator.clipboard.writeText('rm -rf .git');
								setShowNotification(true);
								setTimeout(() => setShowNotification(false), 10000);
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
								setTimeout(() => setShowNotification(false), 10000);
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
						<ul className="grid grid-cols-3 sm:grid-cols-4 gap-4 gap-y-4 text-left">
							<ListItem
								icon={SiGithub}
								text="Discord Image Downloader"
								link="https://github.com/Seklfreak/discord-image-downloader-go"
							/>
							<ListItem
								icon={SiTailwindcss}
								text="Tailwind UI"
								link="https://tailwindui.com/"
							/>
							<ListItem
								icon={SiTailwindcss}
								text="Postsrc Tailwind Component"
								link="https://postsrc.com/components"
							/>
							<ListItem
								icon={VscSymbolColor}
								text="Carbon"
								link="https://carbon.now.sh/"
							/>
							<ListItem
								icon={CgLinear}
								text="Linear"
								link="https://linear.app/"
							/>
							<ListItem
								icon={FaBookOpen}
								text="Learn X by doing Y"
								link="https://aquadzn.github.io/learn-x-by-doing-y/"
							/>

							<ListItem
								icon={VscDiff}
								text="Diff Checker"
								link="https://www.diffchecker.com/diff"
							/>
							<ListItem
								icon={GrProductHunt}
								text="Proxyman"
								link="https://proxyman.io/"
							/>
							<ListItem
								icon={DiMongodb}
								text="Humongous"
								link="https://www.humongous.io/"
							/>

							<ListItem
								icon={SiApple}
								text="Captive Apple"
								link="http://captive.apple.com/"
							/>

							<ListItem
								icon={MdSignalCellularAlt}
								text="Codex Proxy Admin Panel"
								link="https://billing-cryptedlabs.com/"
							/>

							<ListItem
								icon={AiOutlineBgColors}
								text="Color Hunt"
								link="https://colorhunt.co/"
							/>
							<ListItem
								icon={SiMacos}
								text="MacOS Wallpaper"
								link="https://dynamicwallpaper.club/gallery"
							/>
							<ListItem
								icon={SiReact}
								text="React Hotkeys Hook"
								link="https://www.npmjs.com/package/react-hotkeys-hook"
							/>
							<ListItem
								icon={SiHackerrank}
								text="Hacker Rank Contest List"
								link="https://www.hackerrank.com/contests"
							/>
						</ul>
						<h1 className="text-lg font-bold text-left ">Readings</h1>
						<ul className="grid grid-cols-3 sm:grid-cols-4 gap-4 gap-y-4 text-left">
							<ListItem
								icon={DiMitlicence}
								text="MIT Typscript Course"
								link="https://web.mit.edu/6.031/www/fa21"
							/>
							<ListItem
								icon={SiJavascript}
								text="Javascript Design Pattern"
								link="https://www.thisdot.co/blog/clean-up-your-code-with-design-patterns-in-javascript"
							/>
							<ListItem
								icon={BsMedium}
								text="Backend and REST API"
								link="https://medium.com/techloop/an-introduction-to-backend-development-and-rest-apis-b1a1a978821f"
							/>
							<ListItem
								icon={SiJavascript}
								text="Javascript Error Handling"
								link="https://javascript.plainenglish.io/javascript-errors-exceptions-handling-43ae983cbbb3"
							/>
							<ListItem
								icon={SiJavascript}
								text="2022 Javascript feature preview"
								link="https://p42.ai/blog/2021-12-31/es2022-preview-10-exciting-javascript-language-features-from-2021"
							/>
							<ListItem
								icon={VscDebugBreakpointLog}
								text="Nullptrs"
								link="https://nullpt.rs/"
							/>
							<ListItem
								icon={SiMongodb}
								text="MongoDB Guide"
								link="https://faun.pub/mongodb-com-50d2f3016c2b"
							/>
							<ListItem
								icon={SiTypescript}
								text="Typscript Deep Dive"
								link="https://basarat.gitbook.io/typescript/"
							/>
							<ListItem
								icon={SiStackoverflow}
								text="Preload.JS Electron Explanation"
								link="https://stackoverflow.com/questions/57807459/how-to-use-preload-js-properly-in-electron"
							/>
							<ListItem
								icon={VscRegex}
								text="Regex Match All Characters Between Strings"
								link="https://stackoverflow.com/questions/6109882/regex-match-all-characters-between-two-strings"
							/>
							<ListItem
								icon={SiBitcoin}
								text="Beginner Guide To Coin Base Pro"
								link="https://hackernoon.com/beginners-guide-to-coinbase-pro-an-exchange-of-coinbase-to-trade-btc-eth-and-ltc-72f04eee8092"
							/>
						</ul>
						<h1 className="text-lg font-bold text-left">
							Stock/Crypto Markets
						</h1>
						<ul className="pb-32 relative grid grid-cols-3 sm:grid-cols-4 gap-4 text-left">
							<ListItem
								icon={SiBitcoin}
								text="Coin Market Cap"
								link="https://coinmarketcap.com/watchlist/"
							/>
							<ListItem
								icon={SiBitcoin}
								text="Coin Base Pro"
								link="https://pro.coinbase.com/"
							/>
							<ListItem
								icon={SiBitcoin}
								text="Coin Base"
								link="https://coinbase.com/"
							/>
							<ListItem
								icon={RiStockFill}
								text="Trading View"
								link="https://www.tradingview.com/"
							/>
						</ul>
						<h1 className="pt-10 pb-10 font-mit font-medium text-center text-sm">
							© 2021 Min Chun Fu. All rights reserved.
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
