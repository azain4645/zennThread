<script setup lang="ts">

  type Article = {
    title: string
    linkedCount: number
    publichedAt: string
  }

  type State = {
    articles: Article[]
  }

  const headers = [
    { text: '記事名', value: 'title' },
    { text: 'いいね数', value: 'likedCount' },
    { text: '公開日時', value: 'publishedAt' },
  ]

  const state = ref<State>({
    articles: [],
  })

  const getZennArticles = async () => {
    const { data: response } = await useFetch(`https://zenn-api.netlify.app/.netlify/functions/trendTech`)
    console.log(response.value)
    
    state.value.articles = response
  }

  onMounted(() => {
    getZennArticles()
  })
</script>

<template>
  test
  <!-- <v-data-table 
    :headers="headers"
    :items="state.value.articles"
    :items-per-page="5"  
    class="elevation-1"
  >
  </v-data-table> -->
</template>