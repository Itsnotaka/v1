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
				className="flex fixed inset-0 items-end py-6 px-4 pointer-events-none sm:items-start sm:p-6"
			>
				<div className="flex flex-col items-center space-y-4 w-full sm:items-end">
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
						<div className="overflow-hidden w-full max-w-sm bg-near-black rounded-lg ring-1 ring-black shadow-lg pointer-events-auto ring-opacity-5">
							<div className="p-4">
								<div className="flex items-center">
									<div className="flex flex-1 justify-between w-0">
										<span>{IoCopy({className: 'text-emerald-300'})}</span>
										<p className="flex-1 w-0 text-sm font-medium text-white opacity-90">
											Text Copied To Clipboard
										</p>
									</div>
									<div className="flex shrink-0 ml-4">
										<button
											className="inline-flex bg-near-black rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2"
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
