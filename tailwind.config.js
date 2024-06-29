/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
         'nav-desktop': "url('/images/components/util/bg-sidebar-desktop.svg')",
         'nav-mobile': "url('/images/components/util/bg-sidebar-mobile.svg')"
      },
      fontFamily: {
         'body' : "Ubuntu"
      }
    },
    screens: {
      md: '787px'
    }
  },
  plugins: [],
}

