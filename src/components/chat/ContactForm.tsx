/* eslint-disable new-cap */
import {useState} from 'react';
import {BsCheckLg} from 'react-icons/bs';
import {GiSpiderWeb} from 'react-icons/gi';
import {BiRightArrow} from 'react-icons/bi';
import toast from 'react-hot-toast';
import {fetcher} from '../../util/fetcher';
import {APIResponse} from 'nextkit';

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	return (
		<>
			<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-opacity-10 py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
									.then(async () => {
										setSubmitted(true);
									})
									.catch(() => null);
							}}
						>
							<div>
								<label
									htmlFor="email"
									className="block text-left text-sm font-medium text-white"
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
										className="block w-full appearance-none rounded-md border py-2 px-3 font-mit text-base font-medium shadow-sm focus:border-teal-300 focus:outline-none"
									/>
								</div>
							</div>
							<label
								htmlFor="email"
								className="block text-left text-sm font-medium text-white"
							>
								What would you like to say to me?
							</label>
							<textarea
								rows={4}
								name="comment"
								id="comment"
								className="block w-full rounded-md border-gray-300 font-mit text-base font-medium text-black shadow-sm focus:border-teal-300"
								defaultValue={''}
							/>

							<div className="grid items-start justify-center gap-8">
								<div className="group relative">
									<div
										className={`absolute -inset-0.5 rounded-lg  bg-gradient-to-r opacity-75 blur transition duration-1000 group-hover:opacity-100 ${
											submitted
												? 'animate-pulse bg-emerald-300'
												: 'from-white to-gray-500 group-hover:from-pink-600 group-hover:to-blue-600'
										} animate-tilt group-hover:duration-2000`}
									></div>
									<button className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black py-4 px-7 leading-none">
										<span className="flex items-center space-x-5">
											{submitted
												? ''
												: GiSpiderWeb({className: 'w-6 h-6 teal-200'})}
											<span
												className={`pr-6 font-medium ${
													submitted
														? 'animate-pulse text-emerald-300'
														: 'text-gray-100 duration-1000 group-hover:text-pink-600'
												}`}
											>
												{submitted
													? 'Successfully Submitted'
													: 'Ready To Submit?'}
											</span>
										</span>
										<span
											className={`pl-6 ${
												submitted
													? 'animate-pulse text-emerald-300'
													: 'text-gray-100 transition duration-1000 group-hover:text-indigo-400'
											}`}
										>
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
