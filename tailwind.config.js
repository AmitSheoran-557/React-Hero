/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../public/assets/image/webp/hero-sec-bg.webp')"
      },
      colors: {
        "blue": "#003459",
        "gray": "#7F8A8E",
        "skyBlue": "#00A8E8",
        "lightSkyBlue": "#eaf9fff0",
        "deep-blue": "#00171F",
        "Prussian-Blue": "#003459",
      }
    },
  },
  plugins: [],
};
