/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from 'react';
import {Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/solid';
import {IoCopy} from 'react-icons/io5';
import {VscClose} from 'react-icons/vsc';

export default function NotificationCard() {
	const [show, setShow] = useState(true);

	return (
		<>
			{/* Global notification live region, render this permanently at the end of the document */}
			<div
				aria-live="assertive"
				className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
			>
				<div className="w-full flex flex-col items-center space-y-4 sm:items-end">
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
						<div className="max-w-sm w-full bg-near-black shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
							<div className="p-4">
								<div className="flex items-center">
									<div className="w-0 flex-1 flex justify-between">
										<span>{IoCopy({className: ' text-teal-300 '})}</span>
										<p className="w-0 flex-1 text-sm font-medium text-white opacity-90">
											Text Copied To Clipboard
										</p>
									</div>
									<div className="ml-4 flex-shrink-0 flex">
										<button
											className="bg-near-black rounded-md inline-flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200"
											onClick={() => {
												setShow(false);
											}}
										>
											<span>{VscClose({className: 'text-teal-300'})}</span>
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
