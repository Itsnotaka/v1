import Head from 'next/head';
import React from 'react';
import Typist from 'react-typist';
import Card from '../components/setup/Card';
import Header from '../components/_Header';

const hardware = [
	{
		product: `Macbook Pro`,
		type: 'Laptop',
		description: '13-inch, 256GB SSD, 8 GB RAM, Apple M1 chip',
		href: 'https://www.apple.com/macbook-pro/',
	},
	{
		product: 'Apple Mouse',
		type: 'Mouse',
		description: 'White Colorway',
		href: 'https://www.apple.com/shop/product/MK2E3AM',
	},
	{
		product: 'Apple Keyboard',
		type: 'Keyboard',
		description: 'White Colorway, with Touch ID, M1 Edition',
		href: 'https://www.apple.com/shop/product/MK293LL',
	},
	{
		product: 'RΛZΞR Huntsman',
		type: 'Keyboard',
		description: 'Mercury/White Colorway, Optic Key Switches',
		href: 'https://www.razer.com/razer-optical-switch',
	},
	{
		product: 'Logitech MX Master 3',
		type: 'Mouse',
		description: 'Gray Colorway, MacOS Edition',
		href: 'https://www.logitech.com/en-us/mx/mx-for-mac.html',
	},
];

const software = [
	{
		product: 'Chrome',
		type: 'Web Browser',
		href: 'https://www.google.com/chrome/',
	},
	{product: 'Figma', type: 'Design Software', href: 'https://www.figma.com/'},
	{product: 'Hyper', type: 'Terminal', href: 'https://hyper.is/'},
	{
		product: 'GoLand',
		type: 'Golang IDE',
		href: 'https://www.jetbrains.com/goland/',
	},
	{
		product: 'CLion',
		type: 'C++ IDE',
		href: 'https://www.jetbrains.com/clion/',
	},
	{
		product: 'VSCode',
		type: 'Text Editor',
		href: 'https://code.visualstudio.com/',
	},
];
const Setup = () => (
	<>
		<Head>
			<title>Setup - Daniel Fu</title>
		</Head>
		<Header />
		<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
			{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
			<div className="mx-auto max-w-3xl">
				<div className="space-y-4 text-left">
					<div className="flex space-x-3"></div>
					<Typist cursor={{hideWhenDone: true}} className="font-mit text-4xl font-bold">Setup</Typist>
					<span className="mt-4 text-xl font-bold tracking-widest ">
							An overview of my setup
					</span>
					<h3 className="pb-2 mt-4 text-xl font-bold tracking-widest border-b border-gray-300 dark:border-gray-700">
							HARDWARE
					</h3>
					<div className="grid gap-2 my-2">
						{hardware.map(item => (
							<Card
								key={item.product}
								{...item}
							/>
						))}
					</div>
					<h3 className="pb-2 mt-4 text-xl font-bold tracking-widest border-b border-gray-300 dark:border-gray-700">
							SOFTWARE
					</h3>
					<div className="grid gap-2 my-2 sm:grid-cols-2 md:grid-cols-4">
						{software.map(item => (
							<Card key={item.product} {...item} />
						))}
					</div>
					<h1 className="pt-10 pb-10 font-mit text-sm font-medium text-center">
							© 2021 Min Chun Fu. All rights reserved.
					</h1>
				</div>
			</div>
		</div>
	</>
);

export default Setup;
