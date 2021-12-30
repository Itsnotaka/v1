import {useState} from 'react';
import {BsCheckLg} from 'react-icons/bs';
import {GiSpiderWeb} from 'react-icons/gi';
import {BiRightArrow} from 'react-icons/bi';
import toast from 'react-hot-toast';
import {fetcher} from '../util/fetcher';
import {APIResponse} from 'nextkit';

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	return (
		<>
			<div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className=" bg-opacity-10 py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form
							className="space-y-6"
							action="/api/form"
							method="POST"
							onSubmit={async event => {
								event.preventDefault();

								const values = Object.fromEntries(
									new FormData(event.target as HTMLFormElement).entries(),
								);
								const promise = fetcher<APIResponse<{sent: true}>>(
									'/api/form',
									{
										headers: {'Content-Type': 'application/json'},
										body: JSON.stringify(values),
										method: 'POST',
									},
								);

								await toast
									.promise(promise, {
										success: 'Success!',
										loading: 'Sending...',
										error: (error: Error) =>
											error?.message ?? 'Something went wrong...',
									})
									.then(async () => setSubmitted(true))
									.catch(() => null);
							}}
						>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-left text-white"
								>
									Email address
								</label>
								<div className="mt-1 text-black">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none text-base font-mit font-medium block w-full px-3 py-2 border focus:border-teal-300 rounded-md shadow-sm focus:outline-none"
									/>
								</div>
							</div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-left text-white"
							>
								What would you like to say to me?
							</label>
							<textarea
								rows={4}
								name="comment"
								id="comment"
								className="shadow-sm text-black focus:border-teal-300 block w-full text-base font-mit font-medium border-gray-300 rounded-md"
								defaultValue={''}
							/>

							<div className="grid gap-8 items-start justify-center">
								<div className="relative group">
									<div
										className={`absolute -inset-0.5 bg-gradient-to-r  rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 ${
											submitted
												? 'bg-emerald-300 animate-pulse'
												: 'from-white to-gray-500 group-hover:from-pink-600 group-hover:to-blue-600'
										} group-hover:duration-2000 animate-tilt`}
									></div>
									<button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
										<span className="flex items-center space-x-5">
											{submitted ? '' : GiSpiderWeb({className: 'w-6 h-6 teal-200'})}
											<span className={`pr-6 font-medium ${submitted? "text-emerald-300 animate-pulse" : "text-gray-100 group-hover:text-pink-600 duration-1000"}`}>
												{submitted
													? 'Successfully Submitted'
													: 'Ready To Submit?'}
											</span>
										</span>
										<span className={`pl-6 ${submitted? "text-emerald-300 animate-pulse" : "text-gray-100 group-hover:text-indigo-400 transition duration-1000"}`}>
											{submitted
												? BsCheckLg({className: 'teal-200'})
												: BiRightArrow({className: 'teal-200'})}
										</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
