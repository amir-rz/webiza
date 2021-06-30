module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#1A1A1C",
      secondary: "#fff",
    },
    screens: {
      mobile1: "360px",
      mobile2: "375px",
      mobile3: "425px",
      tablet1: "768px",
      tablet2: "1024px",
      laptop1: "1366px",
      laptop2: "1920px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
