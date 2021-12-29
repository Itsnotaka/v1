import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../components/Header';
import Typist from 'react-typist';

import {ListItem} from '../components/ListItems';
import {
	SiAmazonaws,
	SiGit,
	SiGithub,
	SiGo,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiPostgresql,
	SiReact,
	SiStyledcomponents as SiStyledComponents,
	SiTailwindcss,
	SiTwitter,
	SiTypescript,
	SiWebpack,
	SiYarn,
} from 'react-icons/si';

let age = new Date().getUTCFullYear() - 2003;
const Home: NextPage = () => {
	return (
		<>
			<Header />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="max-w-3xl mx-auto">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3"></div>
						<h1 className="font-mit font-bold text-4xl">
							Hello, I am daniel 👋
						</h1>
						<Typist className="relative text-lg font-medium top-2 underline">
							Be passionate about your life, be interested in everything
							surrounding you.
						</Typist>
						<p className=" text-left opacity-80 hover:opacity-100">
							Alright let's do this one last time. My name is Min Chun Fu. I am
							an ordinary {age} year old student. I was not bitten by a
							radioactive spider and I am pretty sure you know the rest. My
							favorite quote is "think about why obvious questions are obvious,
							that makes you understand how to solve complex problems"
						</p>
						<h1 className="font-mit text-left font-medium text-2xl">
							My Tech Stack 💻
						</h1>
						<p className="opacity-80">
							
						</p>
						<ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
							<ListItem icon={SiPostgresql} text="Postgres" link='https://www.postgresql.org/'/>
							<ListItem icon={SiReact} text="React.js" />
							<ListItem icon={SiNodeDotJs} text="Node.js" />
							<ListItem icon={SiTypescript} text="TypeScript" />
							<ListItem icon={SiGo} text="Golang" />
							<ListItem icon={SiAmazonaws} text="AWS" />
							<ListItem icon={SiNextDotJs} text="Next.js" />
							<ListItem icon={SiWebpack} text="Webpack" />

							<ListItem icon={SiYarn} text="Yarn" />
							<ListItem icon={SiTailwindcss} text="TailwindCSS" />
							<ListItem icon={SiGit} text="Git" />
							<ListItem icon={SiStyledComponents} text="styled-components" />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
