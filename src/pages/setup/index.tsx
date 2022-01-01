import Head from 'next/head';
import React from 'react';
import Card from '../../components/setup/Card';
import Header from '../../components/_Header';

const hardware = [
	{
		product: 'Macbook Pro',
		type: 'Laptop',
		description: '16 in, 1TB SSD, 16 GB RAM, Intel i9, AMD Radeon 5500M',
		href: 'https://www.apple.com/macbook-pro/',
	},
	{
		product: 'ZSA Moonlander',
		type: 'Keyboard',
		description:
			'White Colorway, Kailh Silver (Linear) Keyswitches, ePBT "Less, but better" Keycaps',
		href: 'https://www.zsa.io/moonlander/',
	},
	{
		product: 'KBD67 Lite',
		type: 'Keyboard',
		description:
			'White Colorway, Zilent (Tactile) Keyswitches, GMK "Dots" Keycaps',
		href: 'https://kbdfans.com/products/kbd67lite',
	},
	{
		product: 'Glorious GMMK Pro',
		type: 'Keyboard',
		description:
			'White Colorway, Tealios V2 (Linear) Keyswitches, GMK "Taro" Keycaps',
		href: 'https://www.pcgamingrace.com/products/glorious-gmmk-pro-75-barebone-white',
	},
	{
		product: 'Glorious Model O',
		type: 'Mouse',
		description: 'Matte White Colorway, Wireless Edition',
		href: 'https://www.pcgamingrace.com/products/glorious-model-o-wireless-matte-white',
	},
	{
		product: 'Logi MX Keys',
		type: 'Mouse',
		description: 'Gray Colorway, MacOS Edition',
		href: 'https://www.logitech.com/en-us/mx/mx-for-mac.html',
	},
	{
		product: 'Logi MX Master 3',
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
	{
		product: 'GitKraken',
		type: 'Git Client',
		href: 'https://www.gitkraken.com/',
	},
	{product: 'iTerm 2', type: 'Terminal', href: 'https://iterm2.com/'},
	{
		product: 'WebStorm',
		type: 'JavaScript IDE',
		href: 'https://www.jetbrains.com/webstorm/',
	},
	{
		product: 'GoLand',
		type: 'Golang IDE',
		href: 'https://www.jetbrains.com/goland/',
	},
	{
		product: 'PyCharm',
		type: 'Python IDE',
		href: 'https://www.jetbrains.com/pycharm/',
	},
	{
		product: 'VSCode',
		type: 'Text Editor',
		href: 'https://code.visualstudio.com/',
	},
];
const Setup = () => {
	return (
		<>
			<Head>
				<title>Home - Daniel Fu</title>
			</Head>
			<Header />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="max-w-3xl mx-auto">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3"></div>
						<h1 className="font-mit font-bold text-4xl">Setup</h1>
						<h3 className="pb-2 mt-4 text-xl font-bold tracking-widest border-b border-gray-300 dark:border-gray-700">
							HARDWARE
						</h3>
						<div className="grid my-2 gap-2">
							{hardware.map(item => (
								<Card key={item.product} {...item} />
							))}
						</div>
						<h3 className="pb-2 mt-4 text-xl font-bold tracking-widest border-b border-gray-300 dark:border-gray-700">
							SOFTWARE
						</h3>
						<div className="grid sm:grid-cols-2 md:grid-cols-4 my-2 gap-2">
							{software.map(item => (
								<Card key={item.product} {...item} />
							))}
						</div>
						<h1 className="pt-10 pb-10 font-mit font-medium text-sm">
							© 2021 Min Chun Fu. All rights reserved.
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Setup;
