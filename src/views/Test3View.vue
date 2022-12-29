<script setup lang="ts">
import { inject, ref } from "vue";
const axios: any = inject("axios");

const query = ref("");
const result = ref("");
const isLoading = ref(false);
const isError = ref(false);

const callApi = async () => {
  isLoading.value = true;
  isError.value = false;
  const urlWithQuery = `https://api.thecatapi.com/v1/images/search?breed_ids=${query.value}`;

  try {
    const response = await axios.get(urlWithQuery);
    result.value = response.data[0].url;
  } catch (err) {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div>
    <p v-if="isError" style="color: red">
      Oops! Something went wrong. Please try again.
    </p>
    <input v-model="query" type="text" placeholder="Cat Image" />
    <button @click="callApi">Search</button>
    <p v-if="isLoading">Loading...</p>
    <div v-else-if="result">
      <img :src="result" alt="Cat Image" width="300" />
    </div>
  </div>
</template>

<style scoped></style>
