<script setup lang="ts">
import { computed, ref } from "vue";

const search = ref("");
const names = ref([
  "Mario",
  "Yoshi",
  "Luigi",
  "Toad",
  "Bowser",
  "Koopa",
  "Peach",
]);
/// name.includes(search.value) returns TRUE | FALSE    /// If true, that name will remain in the array /// If false, it will be filtered out.
const matchingNames = computed(() =>
  names.value.filter((name) =>
    name.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>

<template>
  <div>
    <h1>Test 2 - Computed Values</h1>
    <input v-model="search" type="text" />
    <p>Search Term - {{ search }}</p>
    <div v-for="(name, index) in matchingNames" :key="index">{{ name }}</div>
  </div>
</template>

<style scoped></style>
