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
        primary: '#0F4C81', // Dark Blue - melambangkan kedalaman pemikiran dan teknologi
        secondary: '#FFD700', // Gold - melambangkan kesuksesan dan pencapaian
        third: '#4B0082', // Indigo - melambangkan kebijaksanaan dan kreativitas
        fourth: '#A9A9A9', // Dark Gray - melambangkan ketelitian dan ketekunan
        insta: '#E1306C', // Tetap sesuai dengan warna Instagram
        whatsapp: '#25D366', // Tetap sesuai dengan warna WhatsApp
        twitter:'#1DA1F2', // Tetap sesuai dengan warna Twitter
        telegram: '#0088CC', // Biru Tua - Tetap sesuai dengan warna Telegram
        linked: '#0A66C2', // Tetap sesuai dengan warna LinkedIn
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
