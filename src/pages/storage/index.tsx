import type {NextPage} from 'next';
import {useEffect, useState} from 'react';
import Header from '../../components/Header';

const Home: NextPage = () => {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => setDateState(new Date()), 30000);
	}, []);
	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="max-w-3xl mx-auto">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3">
							<h1 className="font-mit font-normal text-4xl">
								Storage Space
							</h1>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
