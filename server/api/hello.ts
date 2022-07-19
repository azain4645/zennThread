export default defineEventHandler ((event) => {
  return $fetch('https://zenn-api.netlify.app/.netlify/functions/trendTech')
  // return 'hello'
})