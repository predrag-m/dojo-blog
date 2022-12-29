<script setup lang="ts">
import type Post from "@/types/Post";
import { computed, defineProps, type PropType } from "vue";

const props = defineProps({
  post: {
    required: true,
    type: Object as PropType<Post>,
  },
});

const postBodySnippet = computed(() => {
  return props.post.body.substring(0, 100) + "....";
});
</script>

<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ postBodySnippet }}</p>
    <span v-for="(tag, index) in post.tags" :key="index"> #{{ tag }}</span>
  </div>
</template>

<style scoped></style>
