import Head from 'next/head';
import Link from 'next/link';
import {GiSpiderWeb} from 'react-icons/gi';

const Offline = () => (
	<>
		<Head>
			<title>Error - Daniel Fu</title>
		</Head>
		<div className="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
			<div className="max-w-max mx-auto">
				<main className="sm:flex">
					<span className="text-4xl font-extrabold text-white sm:text-5xl">
						Offline
					</span>
					<div className="relative sm:ml-6 justify-center">
						<div className="sm:border-l sm:border-gray-200 sm:pl-6">
							<h1 className="text-4xl max-w-xl font-extrabold text-violet-400 tracking-tight sm:text-5xl">
								Uh oh, looks like your internet just disconnected
							</h1>
							<p className="mt-1 text-base text-gray-300">
								Click the button to go back to the home page.
							</p>
							<div className="grid gap-8 items-start justify-start pt-10">
								<div className="relative group">
									<div
										className={`absolute -inset-0.5 bg-gradient-to-r  rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 ${'from-white to-gray-500 group-hover:from-pink-600 group-hover:to-blue-600'} group-hover:duration-2000 animate-tilt`}
									></div>
									<button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
										<span className="flex items-center space-x-5">
											{GiSpiderWeb({className: 'w-6 h-6 teal-200'})}
											<span
												className={`pr-6 font-medium ${'text-gray-100 group-hover:text-pink-600 duration-1000'}`}
											>
												<Link href="/">Return Home</Link>
											</span>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	</>
);

export default Offline;
