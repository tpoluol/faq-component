/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        KumbhSans: ['Kumbh Sans'],
      },
      colors: {
        Softviolet: 'hsl(273, 75%, 66%)',
        Softblue: 'hsl(240, 73%, 65%)',
        Darkgrayishblue: 'hsl(240, 6%, 50%)',
      },
    },
  },
  plugins: [],
};
