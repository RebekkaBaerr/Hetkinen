/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Primary', 'pitch-sans-regular', 'sans-serif'],
        secondary: ['Secondary', 'pitch-sans-medium', 'sans-serif'],
        third: ['Third', 'DMSans_18pt-Regular', 'sans-serif'],
        fourth: ['Fourth', 'DMSans_18pt-Light', 'sans-serif']
      }
    },
  },
  plugins: [],
}