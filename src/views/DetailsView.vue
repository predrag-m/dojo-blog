<script setup lang="ts">
import { defineProps } from "vue";
import getPost from "@/composables/getPost";

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

const { post, errorMessage, isLoading, load } = getPost(props.id);
load();
</script>

<template>
  <div class="details">
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  /* color: #444; */
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
