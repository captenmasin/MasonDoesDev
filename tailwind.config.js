/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.php"],
  theme: {
    extend: {
		fontFamily: {
			heading: ['Instrument Serif', 'serif'],
			body: ['Inter', 'sans-serif'],
		},
	    colors: {
			primary: {
				DEFAULT: '#3300FF',
			}
	    }
    },
  },
  plugins: [],
}

