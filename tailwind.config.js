/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            50: '#EEF2FF',
            100: '#E0E7FF',
            200: '#C7D2FE',
            300: '#A5B4FC',
            600: '#9333EA',
            700: '#7E22CE',
            800: '#6B21A8',
          },
        },
        fontFamily: {
          sora: ['Sora', 'sans-serif'],
          'dm-sans': ['"DM Sans"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }