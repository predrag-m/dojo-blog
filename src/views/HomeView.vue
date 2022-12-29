<script setup lang="ts">
import { ref } from "vue";
import type Post from "@/types/Post";
import PostList from "@/components/PostList.vue";

const posts = ref<Post[]>([
  {
    title: "Welcome to the blog",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolores rem corrupti debitis maiores dolorum quaerat perspiciatis, nulla odit. Dicta tempore recusandae error, laboriosam suscipit deserunt ex dolorem id, iste cumque placeat eligendi veniam aut voluptatem hic. Perferendis harum totam ex sapiente quam? Culpa at unde totam reiciendis sed sunt officiis impedit nisi, sint magnam, reprehenderit sit, quo numquam pariatur non commodi? Ea ipsum eos aspernatur quisquam in, quae et porro nostrum laboriosam repudiandae recusandae soluta laudantium earum ad. Cupiditate molestias quod totam odio animi veritatis aliquam ipsum asperiores tempora velit? Explicabo dolore recusandae sequi vel autem nulla! Dicta, at.",
    id: 1,
  },
  {
    title: "Top 5 CSS tips",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolores rem corrupti debitis maiores dolorum quaerat perspiciatis, nulla odit. Dicta tempore recusandae error, laboriosam suscipit deserunt ex dolorem id, iste cumque placeat eligendi veniam aut voluptatem hic. Perferendis harum totam ex sapiente quam? Culpa at unde totam reiciendis sed sunt officiis impedit nisi, sint magnam, reprehenderit sit, quo numquam pariatur non commodi? Ea ipsum eos aspernatur quisquam in, quae et porro nostrum laboriosam repudiandae recusandae soluta laudantium earum ad. Cupiditate molestias quod totam odio animi veritatis aliquam ipsum asperiores tempora velit? Explicabo dolore recusandae sequi vel autem nulla! Dicta, at.",
    id: 2,
  },
]);
</script>

<template>
  <div class="home">
    <h1>This is an home page</h1>
    <post-list :posts="posts" />
  </div>
</template>

<style scoped>
/* @media (min-width: 1024px) {} */
</style>
