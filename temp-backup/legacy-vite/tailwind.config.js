/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "hsl(250 80% 60%)",
        secondary: "hsl(280 70% 60%)",
        accent: "hsl(220 90% 50%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        'liquid-glass': 'linear-gradient(to bottom right, color-mix(in oklab, var(--primary) 10%, transparent), transparent 50%, color-mix(in oklab, var(--primary) 15%, transparent))',
      }
    },
  },
  plugins: [],
}
