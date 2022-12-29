<script setup lang="ts">
// import { ref } from "vue";
// import type Post from "@/types/Post";
import PostList from "@/components/PostList.vue";
import getPosts from "@/composables/getPosts";

// destructuring
const { posts, errorMessage, isLoading, load } = getPosts();
load();
</script>

<template>
  <div class="home">
    <h1>This is an home page</h1>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="posts.length">
      <post-list :posts="posts" />
    </div>
  </div>
</template>

<style scoped>
/* @media (min-width: 1024px) {} */
</style>
