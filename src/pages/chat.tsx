import Head from 'next/head';
import Typist from 'react-typist';
import ContactForm from '../components/chat/ContactForm';
import Header from '../components/_Header';

const Chat = () => (
	<>
		<Head>
			<title>Chat - Daniel Fu</title>
		</Head>
		<Header />
		<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
			{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
			<div className="mx-auto max-w-3xl">
				<div className="space-y-4 text-center">
					<div className="flex space-x-3"></div>
					<Typist className="font-mit text-4xl font-bold" cursor={{hideWhenDone: true}}>
							Let's Chat...💬
					</Typist>
					<h3 className="text-lg font-bold">Feel free to ask me anything!</h3>
					<ContactForm />
					<h1 className="pt-10 pb-10 font-mit text-sm font-medium text-center">
							© 2021 Min Chun Fu. All rights reserved.
					</h1>
				</div>
			</div>
		</div>
	</>
);

export default Chat;
