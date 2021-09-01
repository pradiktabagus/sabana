module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: { min: "320px", max: "480px" },
      sm: { min: "481x", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
  },
  variants: {
    extend: {},
  },
  plugin: [],
  prefix: "tw_",
};
