/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Lowercase 'brand' is more idiomatic for Tailwind
        // brand: ['Inter', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        
        // If you want 'Inter' to be the default for EVERYTHING:
        // sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};