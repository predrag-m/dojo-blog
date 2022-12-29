import { ref } from "vue";
import type Post from "@/types/Post";

const getPosts = () => {
  const posts = ref<Post[]>([]);
  const errorMessage = ref<null | string>(null); // ? do i need to explicitly type a union?
  const isLoading = ref(false);

  // fetch data from local3000 - activate the json-server first (see explanation inside the 'data' folder)
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
      } finally {
        isLoading.value = false;
      }
    }, 1500);
  };

  return { posts, errorMessage, isLoading, load };
};

export default getPosts;
