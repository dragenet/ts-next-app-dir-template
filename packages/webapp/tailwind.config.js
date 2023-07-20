/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        brand: {
          primary: '#a1f4b7',
          secondary: '#098e69',
          accent: '#b5fcab',
          neutral: '#1b1a28',
          'base-100': '#eff1f5',
          info: '#84a2f5',
          success: '#2adfa9',
          warning: '#fbb956',
          error: '#e5302a',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
