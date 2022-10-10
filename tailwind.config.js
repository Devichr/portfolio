/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#937DC2',
        secondary: '#C689C6',
        third: '#E8A0BF',
        fourth: '#FCC5C0',
        insta: '#E4405F',
        whatsapp: '#25D366',
        twitter:'#1DA1F2',
        telegram: '#26A5E4',
        linked: '#0A66C2',
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
