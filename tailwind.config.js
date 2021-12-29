module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'near-black': '#060606',
			},
			fontFamily: {
				mit: 'Helvetica Neue',
			},
			backgroundImage: {
				starlight:
					"url('https://images.unsplash.com/photo-1639852656724-827b82462231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80')",
			},
			transitionDuration: {
				'2000': '2000ms',
			}
		},
	},
	plugins: [
		// ...
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
};
