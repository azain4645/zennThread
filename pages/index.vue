<script setup lang="ts">
  import { Article } from "types/article"

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
    const response = await $fetch('/api/hello')
    state.value.articles = response
  }

  onMounted(() => {
    getZennArticles()
  })
</script>

<template>
  <p v-if="state.articles.length === 0">
      'loading...'
  </p>

  <v-table v-else>
    <thead>
      <tr>
        <th class="text-left">
          タイトル
        </th>
        <th class="text-left">
          いいね数
        </th>
        <th class="text-left">
          掲載日
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in state.articles"
        :key="item.title"
      >
        <td>{{ item.title }}</td>
        <td>{{ item.likedCount }}</td>
        <td>{{ item.publishedAt }}</td>
      </tr>
    </tbody>
  </v-table>
</template>