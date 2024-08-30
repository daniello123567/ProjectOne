import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {

      sm: '576px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',

      daddy: '447px', // Add your custom screen size here

    },
    gridTemplateColumns:{
      auto:"repeat(auto-fit, minmax(50%, 1fr))",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
