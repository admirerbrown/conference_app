/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
       "./src/**/*.{js,jsx,ts,tsx}",
       'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: { 'background': "url('/public/bg2.jpg')" }
    },
  },
    plugins: [require('flowbite/plugin')],
}

