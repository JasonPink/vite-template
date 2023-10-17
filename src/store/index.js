import { ref } from "vue";
import { defineStore } from "pinia";

const useUserStore = defineStore("user", () => {
  const userInfo = ref({
    name: "ym",
  });

  return {
    userInfo,
  };
});
export default useUserStore;
