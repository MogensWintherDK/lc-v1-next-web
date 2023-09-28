/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './posts/**/*.md',
    './components/**/*.{js,ts,jsx,tsx}',
    './libs/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /grid-cols-./,
      variants: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    }
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'light': '#fafafa',
      'dark': '#3c3c3a',
      'demo': '#1f7a8c',
      'alert': '#ffca78',
      'theme': '#e95420',
      'theme-g-0': '#f5f5ed',
      'theme-g-1': '#f5f5ed',
      'theme-g-2': '#e8e8e1',
      'theme-g-3': '#8a8a86',
      'theme-g-4': '#4a4a48',
      'theme-g-5': '#333331',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
      '3xl': '1536px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.8rem',
      '4xl': '2.0rem',
      '5xl': '2.5rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'prose',
    })
  ],
}
