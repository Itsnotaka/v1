import {GiSpiderWeb} from 'react-icons/gi';

const GradientBar = () => {
	return (
		<>
			<div className="px-2 py-8">
				<div className="grid gap-8 items-start justify-center">
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-white to-gray-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:from-pink-600 group-hover:to-blue-600 group-hover:duration-2000 animate-tilt"></div>
						<div className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
							<span className="flex items-center space-x-5">
								{GiSpiderWeb({className: 'w-6 h-6 teal-200'})}
								<span className="pr-6 text-gray-100 group-hover:text-pink-600 duration-1000">
									With great power comes great responsibility
								</span>
							</span>
							<span className="pl-6 text-gray-100 group-hover:text-blue-600 transition duration-1000">
								Peter Parker
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GradientBar;
