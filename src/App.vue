<script setup lang="ts">
import { onMounted, provide } from "vue";
import { checkLogin, login, logout } from "./common/services/Auth";
import { useQueryProvider } from "vue-query";
import { isAxiosError } from "axios";
import FetchingIndicator from "./components/FetchingIndicator.vue";
import NavBar from "./components/NavBar.vue";
import { useUser } from "./common/composables/useAlbumSearch";
import UserProvider from "./components/UserProvider.vue";
import Counter from "./components/Counter.vue";

// // Global useQuery cache!
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
</script>

<template>
  <div>
    <!-- <QueryClientProvider > -->
    <UserProvider>
      <FetchingIndicator />
      <NavBar />
      <div class="container" v-once>
        <div class="row">
          <div class="col">
            <RouterView />
          </div>
        </div>
        <Counter counterId="123" />
      </div>
    </UserProvider>
    <!-- </QueryClientProvider> -->
  </div>
</template>

<style scoped></style>
