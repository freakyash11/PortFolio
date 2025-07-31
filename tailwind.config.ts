import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-20': 'var(--primary-20)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        
        // Supporting colors - emphasizing yellow and green
        'yellow': 'var(--yellow)',
        'green': 'var(--green)',
        'blue': '#0077B5',
        'purple-light': 'var(--purple-light)',
        'orange-light': 'var(--orange-light)',
        'purple-dark': 'var(--purple-dark)',
        'orange-dark': 'var(--orange-dark)',
        'pink': 'var(--pink)',
        'blue-light': 'var(--blue-light)',
        
        // UI colors
        muted: 'var(--muted)',
        border: 'var(--border)',
        'card-bg': 'var(--card-bg)',
        'input-bg': 'var(--input-bg)',
        'yellow-light': 'var(--yellow-light)',
        'green-light': 'var(--green-light)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        poppins: ['var(--font-poppins)'],
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(to right bottom, var(--primary), #A45EFF)',
        'orange-gradient': 'linear-gradient(to right bottom, #FF5E00, var(--accent))',
        'yellow-gradient': 'linear-gradient(to right bottom, #FFBA49, var(--yellow))',
        'green-gradient': 'linear-gradient(to right bottom, #00B383, var(--green))',
        'pink-gradient': 'linear-gradient(to right bottom, #FF5757, var(--pink))',
        'blue-gradient': 'linear-gradient(to right bottom, #3DB9FF, var(--blue-light))',
      },
    },
  },
  plugins: [],
};

export default config; 