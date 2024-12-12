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
        "lightBlack": "#00000014",
        "deepBlue": "#00171F",
        "darkTeal": "#00171F",
        "prussianBlue": "#003459",
      },
      boxShadow: {
        'customOne': '0px 0px 13.9px 0px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
