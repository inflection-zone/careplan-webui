const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    
		extend: {},
		backgroundImage: {
		  'back-ground': 
		  "linear-gradient(to bottom, white 0%, white 53%, #6a1eb1 10%, #6a1eb1 10%)",
		  },
	  },

	plugins: [require("daisyui")],
};

module.exports = config;
