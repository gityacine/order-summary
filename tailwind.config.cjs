/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'redhat': ['Red Hat Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}
