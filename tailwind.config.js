const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],

  
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c0d9f7",
        
"secondary": "#dffca1",
        
"accent": "#88d651",
        
"neutral": "#1F2138",
        
"base-100": "#F8F6F8",
        
"info": "#43A6DF",
        
"success": "#29B380",
        
"warning": "#6d28d9",
        
"error": "#EE1153",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}


//theme: {
//  extend: {
//    backgroundImage: {
//      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//      'gradient-conic':
//        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//    },
//  },
//},