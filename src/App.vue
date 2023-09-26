<script setup lang="ts">
import { onMounted, ref } from "vue";
import AlbumSearchView from "./search/containers/AlbumSearchView.vue";
import { checkLogin, login } from "./common/services/Auth";
import { useQueryProvider } from "vue-query";
import { isAxiosError } from "axios";

const title = "MusicApp";
const isOpen = ref(false);

// Global useQuery cache!
useQueryProvider({
  defaultOptions: {
    queries: {
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
    <div class="container" v-once>
      <div class="row">
        <div class="col">
          <button class="btn btn-dark float-end" @click="login">Login</button>
          <h1 class="display-3" @click="isOpen = !isOpen">{{ title }}</h1>

          <AlbumSearchView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
