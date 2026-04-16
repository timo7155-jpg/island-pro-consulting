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
          DEFAULT: '#F0B429',
          light:   '#F5C842',
          dark:    '#C8920A',
        },
        navy: {
          DEFAULT: '#0D1126',
          mid:     '#161B38',
          light:   '#1E2547',
        },
        purple: {
          DEFAULT: '#8B2FE8',
          mid:     '#A035F5',
          light:   '#C040F0',
          faint:   '#8B2FE810',
        },
        cream: '#F8F7FF',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #8B2FE8 0%, #C040F0 100%)',
        'gold-gradient':   'linear-gradient(135deg, #F0B429 0%, #F5C842 100%)',
      },
      boxShadow: {
        gold:   '0 4px 24px 0 rgba(240,180,41,0.30)',
        purple: '0 4px 24px 0 rgba(139,47,232,0.35)',
        card:   '0 2px 20px 0 rgba(13,17,38,0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
