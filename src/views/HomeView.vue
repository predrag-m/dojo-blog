<script setup lang="ts">
import { ref } from "vue";

const myParag = ref<HTMLParagraphElement | null>(null);
console.log(myParag.value); // NULL

const name = ref("Mario");
const age = ref(30);

const handleClick = () => {
  if (myParag.value != null) {
    myParag.value.classList.add("test");
  }

  console.log(myParag);
  console.log(myParag.value); // our <p> DOM element
  console.log(myParag.value?.innerText);
};
</script>

<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p ref="myParag">Hi, my name's {{ name }} and I'm {{ age }} years old.</p>
    <button @click="handleClick">Change name</button>
    <input v-model="name" type="text" />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
