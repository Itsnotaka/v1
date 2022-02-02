import {AiOutlineBgColors} from 'react-icons/ai';
import {CgLinear} from 'react-icons/cg';
import {DiMongodb} from 'react-icons/di';
import {FaBookOpen} from 'react-icons/fa';
import {GrProductHunt} from 'react-icons/gr';
import {MdSignalCellularAlt} from 'react-icons/md';
import {
	SiGithub,
	SiTailwindcss,
	SiApple,
	SiMacos,
	SiReact,
	SiHackerrank,
	SiDevdotto,
	SiJavascript,
} from 'react-icons/si';
import {VscSymbolColor, VscDiff} from 'react-icons/vsc';
import {ListItem} from '../ListItems';

const Goto = () => {
	return (
		<>
			<ListItem
				icon={SiTailwindcss}
				text="Tailwind UI"
				link="https://tailwindui.com/"
			/>
			<ListItem
				icon={SiTailwindcss}
				text="Radix UI - (Used by Vercel)"
				link="https://www.radix-ui.com/"
			/>
			<ListItem
				icon={SiTailwindcss}
				text="Flowbite Tailwind Component"
				link="https://flowbite.com/#components"
			/>
			<ListItem
				icon={SiTailwindcss}
				text="25 Places For Free Tailwind Components"
				link="https://dev.to/cruip/25-places-where-you-can-get-free-tailwind-css-components-47lm"
			/>
			<ListItem
				icon={VscSymbolColor}
				text="Carbon"
				link="https://carbon.now.sh/"
			/>
			<ListItem
				icon={SiGithub}
				text="Discord Image Downloader"
				link="https://github.com/Seklfreak/discord-image-downloader-go"
			/>
			<ListItem 
				icon={CgLinear} 
				text="Linear" 
				link="https://linear.app/" 
			/>
			<ListItem
				icon={SiDevdotto}
				text="Free For Dev"
				link="https://free-for.dev/"
			/>
			<ListItem icon={SiJavascript} text="Tauri" link="https://tauri.studio/" />

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
				text="Proxy man"
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
		</>
	);
};

export default Goto;
