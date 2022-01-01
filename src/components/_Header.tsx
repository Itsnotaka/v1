/* This example requires Tailwind CSS v2.0+ */
import {Transition} from '@headlessui/react';
import Link from 'next/link';
import {useState, Fragment} from 'react';
import {useTimeoutFn} from 'react-use';
import Song from './Song';

const navigation = [
	{name: `#`, href: '/'},
	{name: `About`, href: '/about'},
	{name: `Storage`, href: '/storage'},
	{name: `Setup`, href: '/setup'},
	{name: `Chat`, href: '/chat'},
];

const Header = () => {
	const [isShowing, setIsShowing] = useState(true);
	const [, , resetIsShowing] = useTimeoutFn(() => {
		setIsShowing(true);
	}, 500);

	return (
		<header className="max-h-auto">
			<nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
				<div className="flex justify-between items-center py-6 w-full border-b border-near-black lg:border-none">
					<div className="flex items-center ">
						{/* <span className="sr-only">Workflow</span> */}
						<button
							onClick={() => {
								setIsShowing(false);
								resetIsShowing();
							}}
						>
							<Transition
								as={Fragment}
								show={isShowing}
								enter="transform transition duration-[400ms]"
								enterFrom="opacity-0 rotate-[-120deg] scale-50"
								enterTo="opacity-100 rotate-0 scale-100"
								leave="transform duration-200 transition ease-in-out"
								leaveFrom="opacity-100 rotate-0 scale-100 "
								leaveTo="opacity-0 scale-95 "
							>
								<img
									className="w-auto h-10 rounded-xl opacity-50 hover:opacity-100"
									src="https://cdn.discordapp.com/attachments/711900255456591892/925362074773749760/Untitled_1.png"
									alt=""
								/>
							</Transition>
						</button>

						<div
							className={`font-medium hidden ml-10 space-x-8 lg:block underline decoration-teal-300/80 hover:decoration-white duration-300`}
						>
							{/* className="opacity-50 hover:opacity-100 text-base font-mit font-bold text-white hover:text-indigo-50 */}

							{navigation.map(link => (
								<Link key={link.name} href={link.href}>
									{link.name}
								</Link>
							))}
						</div>
					</div>
					<div className="ml-10 space-x-4 opacity-50 hover:opacity-100">
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
				<div className="flex flex-wrap justify-center py-4 space-x-6 underline decoration-teal-300/80 hover:decoration-white duration-300 lg:hidden">
					{/* className="text-base font-mit font-bold text-white hover:text-indigo-50" */}
					{navigation.map(link => (
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
