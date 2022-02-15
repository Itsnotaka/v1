import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {GiSpiderWeb} from 'react-icons/gi';

const Page404 = () => (
	<>
		<Head>
			<title>404 - Daniel Fu</title>
		</Head>
		<div className="py-16 px-4 min-h-full sm:py-24 sm:px-6 md:grid md:place-items-center lg:px-8">
			<div className="mx-auto max-w-max">
				<main className="sm:flex">
					<p className="text-4xl font-extrabold text-white sm:text-5xl">
							404 :(
					</p>
					<div className="sm:ml-6">
						<div className="sm:pl-6 sm:border-l sm:border-gray-200">
							<h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-violet-400 sm:text-5xl">
									Uh oh, looks like we couldn't find what you were looking for!
							</h1>
							<p className="mt-1 text-base text-gray-300">
									Please check the link and try again.
							</p>
						</div>
						<div className="grid gap-8 justify-start items-start pt-10">
							<div className="group relative">
								<div
									className={`absolute -inset-0.5 bg-gradient-to-r  rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 ${'from-white to-gray-500 group-hover:from-pink-600 group-hover:to-blue-600'} group-hover:duration-2000 animate-tilt`}
								></div>
								<button className="flex relative items-center py-4 px-7 leading-none bg-black rounded-lg divide-x divide-gray-600">
									<span className="flex items-center space-x-5">
										{/* eslint-disable-next-line new-cap */}
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
				</main>
			</div>
		</div>
	</>
);

export default Page404;
