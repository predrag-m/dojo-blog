<script setup lang="ts">
import { ref } from "vue";
import type Post from "@/types/Post";
import PostList from "@/components/PostList.vue";

const posts = ref<Post[]>([]);
const errorMessage = ref<null | string>(null); // ? do i need to explicitly type a union?
const isLoading = ref(false);

// fetch the data from local3000 - activate the json-server first (see explanation iside 'data' folder)
// setTimeout is here only for demonstration purposes - remove the line above the "try{}" and line after the 'finally{}'
const load = async () => {
  isLoading.value = true;
  setTimeout(async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) throw new Error("ERROR: no data available");
      posts.value = await data.json(); // data.json is async - it returns a promise
    } catch (err: any) {
      errorMessage.value = err.message;
      // console.log(errorMessage.value);
    } finally {
      isLoading.value = false;
    }
  }, 1500);
};

load(); // temp
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
