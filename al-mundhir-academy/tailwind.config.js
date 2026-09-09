/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F3E6',
          200: '#F1E3C4',
          300: '#E5CE97',
          400: '#D6B565',
          500: '#C59B27',
          600: '#B0861B',
          700: '#8C6514',
          800: '#684913',
          900: '#4B3410',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        quran: ['Amiri', 'serif'],
      }
    },
  },
  plugins: [],
};
