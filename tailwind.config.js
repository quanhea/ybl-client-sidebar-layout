/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          decor: {
            'light-gray': '#F4F7FF',
            'light-orange': '#FFF4E2',
            primary: '#FF7246',
          },
          lm: {
            white: '#FFFFFF'
          }
        },
        text: {
          lm: {
            link: '#FF541F',
            heading: '#2E3853',
            note: '#919AB0',
            subtitle: '#546284',
            body: '#212A3F',
          },
          dm: {
            heading: '#FFFFFF'
          }
        },
        border: {
          lm: {
            'highlight-1': '#FF6838',
            main: '#EAEDF5',
          }
        }
      }
    },
  },
  plugins: [],
}
