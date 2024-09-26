/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "960px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        pulp: ["Pulp Display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
