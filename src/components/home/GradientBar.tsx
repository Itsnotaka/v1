/* eslint-disable new-cap */
import {GiSpiderWeb} from 'react-icons/gi';

const GradientBar = () => (
	<>
		<div className="py-8 px-2">
			<div className="grid gap-8 justify-center items-start">
				<div className="group relative">
					<div className="absolute -inset-0.5 bg-gradient-to-r from-white group-hover:from-pink-600 to-gray-500 group-hover:to-blue-600 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-2000 animate-tilt"></div>
					<div className="flex relative items-center py-4 px-7 leading-none bg-black rounded-lg divide-x divide-gray-600">
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

export default GradientBar;
