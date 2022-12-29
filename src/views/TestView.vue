<script setup lang="ts">
import { ref } from "vue";

/// Template Ref:
/// !!! Constant 'myParag' is a wrapper object and it's property called 'value' contains either NULL or a reference to our <p></p> HTML element. !!!
/// We can use 'myParag.value' to append new template elements or to add a CSS class to it, etc (inside the 'handleClick' function or lifecycle hook).
const myParag = ref<HTMLParagraphElement | null>(null);
console.log(myParag.value); // NULL

const name = ref("Mario");
const age = ref(30);

const handleClick = () => {
  /// If we tried these 2 lines to execute outside this function (inside the <script>) then 'myParag.value' would be NULL.
  /// So in order to not be NULL but to hold a reference to an <p> DOM element, we need to execute these 2 lines...
  /// ...inside a onMounted lifecycle hook or inside a click/submit/etc handleEvent.
  if (myParag.value != null) {
    myParag.value.classList.add("test");
    // myParag.value.textContent = "Hello ninjas.";
  }

  console.log(myParag);
  console.log(myParag.value); // our <p> DOM element
  console.log(myParag.value?.innerText);
};
</script>

<template>
  <!---->
  <!-- Outside the setup() we don't have to write 'name.value' to get our 'Mario' string. We just write 'name' -->
  <!---->
  <div class="home">
    <h1>This is an home page</h1>
    <p ref="myParag">Hi, my name's {{ name }} and I'm {{ age }} years old.</p>
    <input v-model="name" type="text" />
    <button @click="handleClick">Change name</button>
    <button @click="age++">Increment age</button>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
