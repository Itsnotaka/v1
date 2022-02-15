/* eslint-disable new-cap */
import {GiSpiderWeb} from 'react-icons/gi';

const GradientBar = () => (
	<>
		<div className="py-8 px-2">
			<div className="grid items-start justify-center gap-8">
				<div className="group relative">
					<div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-white to-gray-500 opacity-75 blur transition duration-1000 group-hover:from-pink-600 group-hover:to-blue-600 group-hover:opacity-100 group-hover:duration-2000"></div>
					<div className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black py-4 px-7 leading-none">
						<span className="flex items-center space-x-5">
							{GiSpiderWeb({className: 'w-6 h-6 teal-200'})}
							<span className="pr-6 text-gray-100 duration-1000 group-hover:text-pink-600">
								With great power comes great responsibility
							</span>
						</span>
						<span className="pl-6 text-gray-100 transition duration-1000 group-hover:text-blue-600">
							Peter Parker
						</span>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default GradientBar;
