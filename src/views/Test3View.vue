<script setup lang="ts">
import { inject } from "vue";
import { fetchImageAPI } from "@/composables/fetchImageAPI";
const axios: any = inject("axios");

/// Cat API - "sibe", "abys"
const catAPI = async (query: string): Promise<string> => {
  const urlWithQuery = `https://api.thecatapi.com/v1/images/search?breed_ids=${query}`;
  const response = await axios.get(urlWithQuery);
  return response.data[0].url;
};
const { query, result, isLoading, isError, fetchImage } = fetchImageAPI(catAPI);

/// Anime API - "bleach", "one piece"
// const animeAPI = async (query: string): Promise<string> => {
//   const urlWithQuery = `https://kitsu.io/api/edge/anime?filter[text]=${query}`;
//   const response = await axios.get(urlWithQuery);
//   return response.data.data[0].attributes.posterImage.original;
// };
// const { query, result, isLoading, isError, fetchImage } =
//   fetchImageAPI(animeAPI);

/// Rick & Morty API - "rick", "morty"
// const charactersQuery = `
// query Characters($name: String!) {
//     characters(filter: {name: $name}) {
//         results {
//             name
//             image
//         }
//     }
// }
// `;
// const rickAndMortyAPI = async (query: string): Promise<string> => {
//   const url = `https://rickandmortyapi.com/graphql`;
//   const body = {
//     query: charactersQuery,
//     variables: {
//       name: query,
//     },
//   };
//   const response = await axios.post(url, body);
//   // console.log(response.data.data.characters.results[0].image); // temp
//   return response.data.data.characters.results[0].image;
// };
// const { query, result, isLoading, isError, fetchImage } =
//   fetchImageAPI(rickAndMortyAPI);
</script>

<template>
  <div>
    <p v-if="isError" style="color: red">
      Oops! Something went wrong. Please try again.
    </p>
    <input v-model="query" type="text" />
    <button @click="fetchImage">Search</button>
    <p v-if="isLoading">Loading...</p>
    <div v-else-if="result">
      <img :src="result" alt="Some Random Image" width="300" />
    </div>
  </div>
</template>

<style scoped></style>
