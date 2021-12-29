/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link';
import icon from '../../public/sad.png';
import {Song} from './Song';

const navigation = [
	{name: '#', href: '#'},
	{name: 'About', href: 'about'},
];

const Header = () => {
	return (
		<header className="bg-near-black">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="w-full py-6 flex items-center justify-between border-b border-near-black lg:border-none">
					<div className="flex items-center">
						{/* <span className="sr-only">Workflow</span> */}
						<img
							className="opacity-50 hover:opacity-100 h-10 w-auto rounded-xl"
							src="https://cdn.discordapp.com/attachments/711900255456591892/925362074773749760/Untitled_1.png"
							alt=""
						/>
						<div className="hidden ml-10 space-x-8 lg:block">
							{/*className="opacity-50 hover:opacity-100 text-base font-mit font-bold text-white hover:text-indigo-50*/}
							{navigation.map(link => (
								<Link key={link.name} href={link.href}>
									{link.name}
								</Link>
							))}
						</div>
					</div>
					<div className="opacity-50 hover:opacity-100 ml-10 space-x-4">
						<Song />
					</div>
					{/* <div className="ml-10 space-x-4">
                <a
                href="#"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Sign up
              </a> 
            </div> */}
				</div>
				<div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
					{/* className="text-base font-mit font-bold text-white hover:text-indigo-50" */}
					{navigation.map (link => (
						<Link key={link.name} href={link.href}>
							{link.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Header;
