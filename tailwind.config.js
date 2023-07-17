/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    height: {
      screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
    },
    screens: {
      sm: "750px",
      md: "100px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  plugins: [],
};
