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
			<div className="left-32 top-14 relative">
				<h1 className="text-sm outline-4 outline-offset-2 font-bold text-teal-300">
					Current time is{' '}
					{dateState.toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</h1>
				<h1 className="text-4xl font-medium font-mit">
					My File Storage Space 🤩
				</h1>
			</div>
		</>
	);
};

export default Home;
