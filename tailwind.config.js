/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.vue',
    './components/*.vue',
    './layouts/*.vue',
    './pages/**/*.vue',
    './pages/*.vue',
    './app/**/*.vue',],
  theme: {
    fontSize: {
      '3xs': '0.5rem',
      '2xs': '0.6rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    extend: {},
  },
  plugins: [],
}

