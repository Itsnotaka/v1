import Header from '../components/_Header';
import Typist from 'react-typist';

import {ListItem} from '../components/ListItems';
import {
	SiAmazonaws,
	SiGit,
	SiGo,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiPostgresql,
	SiReact,
	SiStyledcomponents as SiStyledComponents,
	SiTailwindcss,
	SiTypescript,
	SiWebpack,
	SiYarn,
} from 'react-icons/si';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {useLanyard, Data as LanyardData} from 'use-lanyard';
import RoadMap from '../components/home/RoadMap';
import GradientBar from '../components/home/GradientBar';
import Head from 'next/head';

const age = new Date().getUTCFullYear() - 2003;
interface Props {
	lanyard: LanyardData;
}
export default function Home(props: Props) {
	const {data: lanyard} = useLanyard('365733917090906113', {
		fallbackData: props.lanyard,
	});

	return (
		<>
			<Head>
				<title>Home - Daniel Fu</title>
			</Head>
			<Header />
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="mx-auto max-w-3xl">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3"></div>
						<h1 className="font-mit text-4xl font-bold">
							Hello, I am Daniel 👋
						</h1>
						<Typist className="relative top-2 text-lg font-medium underline">
							Be passionate about your life, be interested in everything
							surrounding you.
						</Typist>
						<GradientBar />
						<p className="text-lg text-left opacity-80 hover:opacity-100">
							Alright let's do this one last time. My name is Min Chun Fu. I am
							an ordinary {age} year old student. I was not bitten by a
							radioactive spider and I am pretty sure you know the rest. My
							favorite quote is "think about why obvious questions are obvious,
							that makes you understand how to solve complex problems"
						</p>
						<h1 className="font-mit text-2xl font-medium text-left">
							My Tech Stack 💻
						</h1>
						<ul className="grid grid-cols-3 gap-4 text-left sm:grid-cols-4">
							<ListItem icon={SiPostgresql} text="Postgres" />
							<ListItem icon={SiReact} text="React.js" />
							<ListItem icon={SiNodeDotJs} text="Node.js" />
							<ListItem icon={SiTypescript} text="TypeScript" />
							<ListItem icon={SiGo} text="Golang" />
							<ListItem icon={SiAmazonaws} text="AWS" />
							<ListItem icon={SiNextDotJs} text="Next.js" />
							<ListItem icon={SiWebpack} text="Webpack" />
							<ListItem icon={SiYarn} text="Yarn" />
							<ListItem icon={SiTailwindcss} text="Tailwind CSS" />
							<ListItem icon={SiGit} text="Git" />
							<ListItem icon={SiStyledComponents} text="Styled Components" />
						</ul>

						<h1 className="font-mit text-2xl font-medium text-left">
							How Did I End Up Here? 🤔
						</h1>
						<RoadMap />
						<h1 className="pt-10 pb-10 font-mit text-sm font-medium">
							© 2021 Min Chun Fu. All rights reserved.
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
