import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 
        'custom-gray': '#f5f5f5',
        'custom-search': '#cccccc'

       },
       spacing: {
        '240': '240px',
      },
    },
  },
  plugins: [],
};
export default config;
