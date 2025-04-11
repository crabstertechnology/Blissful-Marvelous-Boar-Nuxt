export default {
  target: 'static', // Required for static site generation compatible with Netlify
  css: ['~/style.css'], // Global CSS inclusion
  plugins: ['~/plugins/lottie-vue-player.client.js'], // Client-side plugin for Lottie animations
}
