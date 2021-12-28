import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../components/Header';
import Typist from 'react-typist';

let age = new Date().getUTCFullYear() - 2003;
const Home: NextPage = () => {
	return (
		<>
			<Header />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="max-w-2xl mx-auto">
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
							an ordinary ${age} year old student.
							I was not bitten by a radioactive spider.

						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
