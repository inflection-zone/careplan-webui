/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  
	  extend: {
		boxShadow: {
			'bottom-right': '6px 6px 6px -2px rgba(0, 0 ,0 ,0.45)',
		  }
	  },
	  backgroundImage: {
		'back-ground': 
		"linear-gradient(to bottom, white 0%, white 53%, #7165E3 10%, #7165E3 10%)",
		},
	},
	
	plugins: [require("daisyui")],
  }
  