/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Albert Sans", "sans-serif"],
    },
    fontSize: {
      xs: "0.7825rem",
      small: "0.9rem",
      medium: "1.125rem",
      large: "1.5rem",
      xl: "2.125rem",
    },
    extend: {
      screens: { sm: { max: "640px" } },
      colors: {
        white: "#fff",
        100: "hsla(240, 50%, 98%, 1)",
        200: "hsla(248, 8%, 80%, 1)",
        300: "hsla(247, 8%, 56%, 1)",
        400: "hsla(215, 25%, 32%, 1)",
        500: "hsla(252, 60%, 11%, 1)",
        black: "#000",
        greyShadow: "hsla(240, 50%, 98%, 0.75)",
      },
    },
    variants: {
      display: ["responsive"],
    },
  },
  plugins: [],
};
