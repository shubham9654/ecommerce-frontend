/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      ms: {
        "max": "640px"
        // => @media (mxn-width: 640px) { ... }
      }
    }
  },
  plugins: [],
}
