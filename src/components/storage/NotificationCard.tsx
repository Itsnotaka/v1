/* eslint-disable new-cap */
/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from 'react';
import {Transition} from '@headlessui/react';
import {IoCopy} from 'react-icons/io5';
import {VscClose} from 'react-icons/vsc';

export default function NotificationCard() {
	const [show, setShow] = useState(true);

	return (
		<>
			{/* Global notification live region, render this permanently at the end of the document */}
			<div
				aria-live="assertive"
				className="pointer-events-none fixed inset-0 flex items-end py-6 px-4 sm:items-start sm:p-6"
			>
				<div className="flex w-full flex-col items-center space-y-4 sm:items-end">
					{/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
					<Transition
						show={show}
						as={Fragment}
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-near-black shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="p-4">
								<div className="flex items-center">
									<div className="flex w-0 flex-1 justify-between">
										<span>{IoCopy({className: 'text-emerald-300'})}</span>
										<p className="w-0 flex-1 text-sm font-medium text-white opacity-90">
											Text Copied To Clipboard
										</p>
									</div>
									<div className="ml-4 flex shrink-0">
										<button
											className="inline-flex rounded-md bg-near-black focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2"
											onClick={() => {
												setShow(false);
											}}
										>
											<span>{VscClose({className: 'text-emerald-300'})}</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</>
	);
}
