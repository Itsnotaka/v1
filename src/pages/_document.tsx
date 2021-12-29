import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class AkaDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link
						rel="icon"
						type="image/png"
						href="https://cdn.discordapp.com/attachments/715825678821621831/909135240134525018/me_400x400.png"
					/>
					<meta name="theme-color" content="#b17bff" />
					<meta
						name="description"
						content="Min Chun Fu, a full-stack developer from Taiwan"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
			</Html>
		);
	}
}
