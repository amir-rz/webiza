module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#000",
      secondary: "#fff",
    },
    screens: {
      mobile1: "360px",
      mobile2: "375px",
      mobile3: "425px",
      tablet1: "500px",
      tablet2: "768px",
      tablet3: "1024px",
      laptop1: "1366px",
      laptop2: "1920px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
