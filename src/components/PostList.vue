<script setup lang="ts">
import { defineProps, type PropType } from "vue";
import type Post from "@/types/Post";
import SinglePost from "@/components/SinglePost.vue";

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
      <single-post :post="post" />
    </div>
  </div>
</template>

<style scoped></style>
