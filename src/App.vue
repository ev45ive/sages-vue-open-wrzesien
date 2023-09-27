<script setup lang="ts">
import { onMounted, ref } from "vue";
import { checkLogin, login } from "./common/services/Auth";
import { useQueryProvider } from "vue-query";
import { isAxiosError } from "axios";
import FetchingIndicator from "./components/FetchingIndicator.vue";
import PlaylistsView from "./playlists/containers/PlaylistsView.vue";
import AlbumSearchView from "./search/containers/AlbumSearchView.vue";
const title = "MusicApp";
const isOpen = ref(false);

// Global useQuery cache!
useQueryProvider({
  defaultOptions: {
    queries: {
      staleTime: 3000,
      retry(failureCount: number, error: Error) {
        if (failureCount >= 3) return false;
        if (isAxiosError(error.cause) && error.cause.response?.status == 500)
          return true;
        return false;
      },
    },
  },
});

const currentView = PlaylistsView;
// const currentView = AlbumSearchView

onMounted(() => checkLogin());
</script>

<template>
  <div>
    <div class="container" v-once>
      <FetchingIndicator />
      <div class="row">
        <div class="col">
          <button class="btn btn-dark float-end" @click="login">Login</button>
          <h1 class="display-3" @click="isOpen = !isOpen">{{ title }}</h1>

          <KeepAlive> <component :is="currentView" v-bind="{}" v-on="{}" />
          </KeepAlive>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
