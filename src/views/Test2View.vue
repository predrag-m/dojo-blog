<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";

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

/// WatchHook:
/// Preferable method - because it is easier for other programmers to see what variavles are being watched
/// Every time the 'search' reactive constant changes, our anon function will be triggered
const stopWatch = watch(search, () => {
  console.log("watch function ran.");
});

/// WatchEffect:
/// This arrow func runs 1 time initially - when the setup function first time runs WHILE watch( param, ()=>{}) doesn't do that
/// WatchEffect watches any and every reactive constant that is inside the anon arrow functions body
const stopWatchEffect = watchEffect(() => {
  console.log("watchEffect function ran.");
});

/// Both watch() and watchEffect() are returning a function, which we are storing in constants 'stopWatch' and 'stopWatchEffect'
const handleStopWatching = () => {
  stopWatch();
  stopWatchEffect();
};

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
  <button @click="handleStopWatching">Stop Watching</button>
</template>

<style scoped></style>
