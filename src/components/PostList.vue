<script setup lang="ts">
import { defineProps, type PropType } from "vue";
import type Post from "@/types/Post";

const props = defineProps({
  posts: {
    required: true,
    type: Array as PropType<Post[]>,
  },
});
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
    </div>
  </div>
</template>

<style scoped></style>
