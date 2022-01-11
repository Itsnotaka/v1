import { BsMedium } from "react-icons/bs";
import { DiMitlicence } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript, SiLoop, SiGithub, SiYoutube, SiMongodb, SiTypescript, SiStackoverflow, SiBitcoin } from "react-icons/si";
import { VscDebugBreakpointLog, VscRegex } from "react-icons/vsc";
import { ListItem } from "../ListItems";

const Readings = () => {
	return (
		<>
			<ListItem
				icon={IoLogoCss3}
				text="Grid Graphics Example"
				link="https://gridbyexample.com/examples/"
			/>
			<ListItem
				icon={DiMitlicence}
				text="MIT Typescript Course"
				link="https://web.mit.edu/6.031/www/fa21"
			/>
			<ListItem
				icon={SiJavascript}
				text="Javascript Design Pattern"
				link="https://www.thisdot.co/blog/clean-up-your-code-with-design-patterns-in-javascript"
			/>
			<ListItem
				icon={SiJavascript}
				text="How Javascript Works"
				link="https://blog.devgenius.io/how-javascript-works-behind-the-scenes-88c546173f32"
			/>
			<ListItem
				icon={SiLoop}
				text="Concurrency and multi-thread"
				link="https://blog.devgenius.io/concurrency-multi-threading-multi-processing-asynchronous-programming-and-event-loop-1b8df9fa6c20"
			/>
			<ListItem
				icon={BsMedium}
				text="Backend and REST API"
				link="https://medium.com/techloop/an-introduction-to-backend-development-and-rest-apis-b1a1a978821f"
			/>
			<ListItem
				icon={SiGithub}
				text="Footlocker Bot Code"
				link="https://github.com/ceodavee/footlocker.js"
			/>
			<ListItem
				icon={SiYoutube}
				text="CP - Steps and Mistakes"
				link="https://www.youtube.com/watch?v=bVKHRtafgPc"
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
				text="Typescript Deep Dive"
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
		</>
	);
};

export default Readings;
