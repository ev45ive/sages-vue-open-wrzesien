<script setup lang="ts">
import { onMounted } from "vue";
import { checkLogin } from "./common/services/Auth";
import { useQueryProvider } from "vue-query";
import { isAxiosError } from "axios";
import FetchingIndicator from "./components/FetchingIndicator.vue";
import NavBar from "./components/NavBar.vue";

// Global useQuery cache!
useQueryProvider({
  defaultOptions: {
    queries: {
      // staleTime: 3000,
      retry(failureCount: number, error: Error) {
        if (failureCount >= 3) return false;
        if (isAxiosError(error.cause) && error.cause.response?.status == 500)
          return true;
        return false;
      },
    },
  },
});

onMounted(() => checkLogin());
</script>

<template>
  <div>
    <NavBar />
    <div class="container" v-once>
      <FetchingIndicator />
      <div class="row">
        <div class="col">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
