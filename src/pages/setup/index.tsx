import Head from 'next/head';
import React from 'react';
import Header from '../../components/_Header';
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
                        <h1 className="font-mit font-bold text-4xl">
							Setup
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Setup;
