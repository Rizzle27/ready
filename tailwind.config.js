/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      cranberry: "#DF437E",
      starDust: "#9B9B9B",
      iron: "#D7D7D7",
      white: "#FFF"
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    extend: {
      boxShadow: {
        cardShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
