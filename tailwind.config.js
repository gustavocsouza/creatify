/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        glowPink: [
          "0 0px 5px rgba(191,44, 125, 0.2)",
          "0 0px 20px rgba(191,44, 125, 0.5)",
        ],
        glowBlue: [
          "0 0px 5px rgba(3,136, 166, 0.2)",
          "0 0px 20px rgba(3,136, 166, 0.5)",
        ],
        glowPurple: [
          "0 0px 5px rgba(104,55,142, 0.2)",
          "0 0px 20px rgba(104,55,142, 0.5)",
        ],
        glowDarkPurple: [
          "0 0px 5px rgba(82,43,111, 0.2)",
          "0 0px 20px rgba(82,43,111, 0.5)",
        ],
      },
      blur: {
        xs: '1px',
      },
      fontFamily: {
        'spectral': ['Spectral', 'serif']
      },
    },
  },
  plugins: [],
}

