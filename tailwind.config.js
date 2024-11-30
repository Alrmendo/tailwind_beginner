/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        35: "35px",
        100: "100px",
      },
      colors: {
        gray33: "#333",
        orangefa: "#ffa400",
      },
    },
  },
  plugins: [
    {
      tailwindcss: { config: "./tailwind.config.js" },
      autoprefixer: {},
    },
  ],
};