import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Solifi-inspired Primary Green
        brand: {
          DEFAULT: "#74bc1f",
          dark: "#5da612",
          light: "#dcfce7",
        },
        // Deep Enterprise Navy (Secondary)
        navy: {
          900: "#0f172a", // Slate 900
          800: "#1e293b", // Slate 800
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

export default config
