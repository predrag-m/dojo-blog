import { ref } from "vue";
import type Post from "@/types/Post";

const getPost = (id: string) => {
  const post = ref<Post | null>(null);
  const errorMessage = ref<string | null>(null);
  const isLoading = ref(false);
  const load = async () => {
    isLoading.value = true;
    setTimeout(async () => {
      try {
        let data = await fetch("http://localhost:3000/posts/" + id);
        if (!data.ok) throw new Error("ERROR: that post does not exist");
        post.value = await data.json();
      } catch (err: any) {
        errorMessage.value = err.message;
      } finally {
        isLoading.value = false;
      }
    }, 1500);
  };

  return { post, errorMessage, isLoading, load };
};

export default getPost;
