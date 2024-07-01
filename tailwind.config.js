/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'jomolhari': ['Jomolhari', 'serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
        'josefin-slab': ['Josefin Slab', 'serif'], // Add this line
      },
      colors: {
        'bg-main': '#eff1f5',
        'text-main': '#4c4f69',
        'peach': '#fe640b',
      },
    },
  },
  plugins: [],
}

