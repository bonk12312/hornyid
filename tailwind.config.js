/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00cc33',
        'terminal-green-light': '#00ff41',
        'terminal-green-dark': '#009926',
        'terminal-green-darker': '#006619',
      },
      boxShadow: {
        'glow': '0 0 5px currentColor',
        'glow-md': '0 0 10px currentColor',
        'glow-lg': '0 0 15px currentColor',
        'glow-xl': '0 0 20px currentColor',
      },
    },
  },
  plugins: [],
};
