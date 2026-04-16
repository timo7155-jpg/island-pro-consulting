import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E8C96A',
          dark:    '#9A7A2E',
        },
        navy: {
          DEFAULT: '#0D1B2A',
          mid:     '#1A2E44',
          light:   '#243D57',
        },
        cream: '#FAF8F3',
      },
      boxShadow: {
        gold: '0 4px 24px 0 rgba(201,168,76,0.25)',
        card: '0 2px 20px 0 rgba(13,27,42,0.08)',
      },
    },
  },
  plugins: [],
};
export default config;
