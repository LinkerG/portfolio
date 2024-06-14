// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lav': {
          '50': '#fef1fa',
          '100': '#fee5f8',
          '200': '#feccf1',
          '300': '#ff94e2',
          '400': '#fe68d2',
          '500': '#f83cbc',
          '600': '#e81a9c',
          '700': '#ca0c7e',
          '800': '#a70d68',
          '900': '#8b1058',
          '950': '#550232',
        },
      },
    },
  },
  plugins: [],
}
