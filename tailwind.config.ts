import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-gotham)'],
      },
      dropShadow: {
        'default': '0px 1px 2px 0px rgba(45, 54, 66, 0.07), 0px 2px 4px 0px rgba(45, 54, 66, 0.07);',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFA100",
        secondary: "#056FFF",
        gray: {
          100: '#B8BABD',
          200: '#F6F6F6',
          300: '#5A5E65'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
