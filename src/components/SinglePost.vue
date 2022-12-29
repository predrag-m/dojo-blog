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
  return props.post.body.substring(0, 100) + "...."; // returns first 100 characters of the string
});
</script>

<template>
  <div class="post"></div>
  <h3>{{ post.title }}</h3>
  <p>{{ postBodySnippet }}</p>
</template>

<style scoped></style>
