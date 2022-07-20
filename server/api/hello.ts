import { Article } from "types/article"

export default defineEventHandler (async (e) => {
  const result = await $fetch<Article[]>('https://zenn-api.netlify.app/.netlify/functions/trendTech')
  return result
})