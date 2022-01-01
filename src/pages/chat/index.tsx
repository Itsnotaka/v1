import Head from 'next/head';
import Typist from 'react-typist';
import ContactForm from '../../components/ContactForm';
import Header from '../../components/_Header';

const Chat = () => {
	return (
		<>
			<Head>
				<title>Chat - Daniel Fu</title>
			</Head>
			<Header />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="max-w-3xl mx-auto">
					<div className="space-y-4 text-center">
						<div className="flex space-x-3"></div>
						<Typist className="font-mit font-bold text-4xl">
							Let's Chat...💬
						</Typist>
						<h3 className="text-lg font-bold">Feel free to ask me anything!</h3>
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	);
};

export default Chat;
