import type {NextPage} from 'next';
import {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {ListItem} from '../../components/ListItems';
import {
	SiApple,
	SiGit,
	SiGithub,
	SiHackerrank,
	SiJavascript,
	SiMacos,
	SiMongodb,
	SiReact,
	SiStackoverflow,
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
import {DiMongodb, DiMitlicence} from 'react-icons/di';
import {MdSignalCellularAlt} from 'react-icons/md';
import {BsMedium} from 'react-icons/bs';
import {AiOutlineBgColors} from 'react-icons/ai';

const Home: NextPage = () => {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => setDateState(new Date()), 30000);
	}, []);
	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="max-w-3xl mx-auto">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3"></div>
						<h1 className="font-mit font-bold text-4xl">Storage Space</h1>
						<h1 className=" text-lg font-bold text-left ">
							Important Commands
						</h1>
						<h3 className=" text-lg font-bold text-left ">Undo Git Init</h3>
						<ListItem icon={SiGit} text="rm -rf .git" />
						<h1 className=" text-lg font-bold text-left ">Go to...</h1>
						<ul className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-left">
							<ListItem
								icon={SiGithub}
								text="Discord Image Downloader"
								link="https://github.com/Seklfreak/discord-image-downloader-go"
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
						<h1 className=" text-lg font-bold text-left ">Readings</h1>
						<ul className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-left">
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
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
