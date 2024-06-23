/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
         'nav': "url('/images/components/util/bg-sidebar-desktop.svg')"
      },
      fontFamily: {
         'body' : "Ubuntu"
      }
    },
  },
  plugins: [],
}

