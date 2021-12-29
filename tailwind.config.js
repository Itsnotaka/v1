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
		},
	},
	plugins: [
		// ...
		require('@tailwindcss/forms'),
	],
};
