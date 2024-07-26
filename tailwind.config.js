/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFF',

        gray: {
          900: '#121214',
          800: '#202024',
          300: '#c4c4cc',
          100: '#e1e1e6',
        },

        green: {
          500: '#00875f',
          300: '#00b37e',
        }
      },

      backgroundImage: {
        product: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      },

      fontSize: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },

      maxWidth: {
        carousel: 'calc(1180px + (100vw - 1180px) / 2)'
      }
    },
  },
  plugins: [],
}

