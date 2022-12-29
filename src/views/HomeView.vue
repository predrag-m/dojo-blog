<script setup lang="ts">
import { ref } from "vue";
import type Post from "@/types/Post";
import PostList from "@/components/PostList.vue";

const posts = ref<Post[]>([
  { title: "Welcome to the blog", body: "Lorem Ipsum", id: 1 },
  { title: "Top 5 CSS tips", body: "Lorem Ipsum", id: 2 },
]);
</script>

<template>
  <div class="home">
    <h1>This is an home page</h1>
    <post-list :posts="posts"/>
  </div>
</template>

<style scoped>
/* @media (min-width: 1024px) {} */
</style>
