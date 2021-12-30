import {GiSpiderWeb} from 'react-icons/gi';

const GradientBar = () => {
	return (
		<>
			<div className="px-2 py-8">
				<div className="grid gap-8 items-start justify-center">
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-white to-gray-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:from-pink-600 group-hover:to-purple-600 group-hover:duration-2000 animate-tilt"></div>
						<button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
							<span className="flex items-center space-x-5">
								{GiSpiderWeb({className: 'teal-200'})}
								<span className="pr-6 text-gray-100 group-hover:text-pink-600 duration-1000">
									With great power comes great responsibility
								</span>
							</span>
							<span className="pl-6 text-gray-100 group-hover:text-indigo-400 transition duration-1000">
								Perter Parker
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default GradientBar;
