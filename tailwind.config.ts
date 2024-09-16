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

      daddy: '447px',

    },

    extend: {
      keyframes:{
        fadeIn:{
          '0%': { opacity: '0.7' },
          '100%': { opacity: '1' },
        }
      },
      animation:{
        fadeIn:"fadeIn 0.9s ease-in-out"
      },
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
