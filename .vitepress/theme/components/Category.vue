<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { initCategory } from '../functions'

const { theme } = useData()
const data = computed(() => initCategory(theme.value.posts))
</script>

<template>
  <div v-for="(posts, key) in data" :key="key">
    <div class="category">
      {{ key }}
    </div>
    <a v-for="(article, index) in posts" :key="index" :href="withBase(article.regularPath)" class="posts">
      <div class="post-container">
        <div class="post-dot" />
        {{ article.frontMatter.title }}
      </div>
      <div class="date">{{ article.frontMatter.date }}</div>
    </a>
  </div>
</template>

<style scoped>
.category {
  padding: 14px 0 8px 0;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: var(--date-font-family), serif;
}
</style>
