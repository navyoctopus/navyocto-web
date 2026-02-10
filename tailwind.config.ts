import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f0f7',
          100: '#dddde8',
          200: '#b8b8d0',
          300: '#9494b8',
          400: '#70709e',
          500: '#545480',
          600: '#424268',
          700: '#333356',
          800: '#282848',
          900: '#1f1f3c',
          950: '#141428',
        },
        primary: {
          50: '#fff5f8',
          100: '#ffecf2',
          200: '#ffd9e6',
          300: '#ffb8d1',
          400: '#ff8fb7',
          500: '#ff79ad',
          600: '#ff69a9',
          700: '#e84e93',
          800: '#c4407b',
          900: '#a33866',
          950: '#5f1c39',
        },
        accent: {
          50: '#f2fafa',
          100: '#dff3f4',
          200: '#c2e8ea',
          300: '#96d6d9',
          400: '#82c3c6',
          500: '#5aabaf',
          600: '#468d91',
          700: '#3b7477',
          800: '#355e61',
          900: '#2f5052',
          950: '#1a3234',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
} satisfies Partial<Config>
