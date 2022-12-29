import { ref } from "vue";

/// update type of param 'customAPICall'
export function fetchImageAPI(
  customAPICall: (query: string) => Promise<string>
) {
  const query = ref("");
  const result = ref("");
  const isLoading = ref(false);
  const isError = ref(false);

  const fetchImage = async () => {
    isLoading.value = true;
    isError.value = false;
    try {
      result.value = await customAPICall(query.value);
    } catch (err) {
      isError.value = true;
      result.value = "";
    } finally {
      isLoading.value = false;
    }
  };

  return { query, result, isLoading, isError, fetchImage };
}
