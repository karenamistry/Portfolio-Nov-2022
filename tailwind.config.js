/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Albert Sans", "sans-serif"],
    },
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      screens: { sm: { max: "640px" } },
    },
  },
  plugins: [],
};
