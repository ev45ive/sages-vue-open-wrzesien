<script setup lang="ts">
import { onMounted, ref } from "vue";
import AlbumSearchView from "./search/containers/AlbumSearchView.vue";
import { checkLogin, login } from "./common/services/Auth";
import { useQueryProvider } from "vue-query";

const title = "MusicApp";
const isOpen = ref(false);

useQueryProvider(); // Global useQuery cache!

onMounted(() => checkLogin());
</script>

<template>
  <div>
    {{ isOpen }}
    <!-- .container>.row>.col -->
    <div class="container" v-once>
      <div class="row">
        <div class="col">
          <button class="btn btn-dark float-end" @click="login">Login</button>
          <h1 class="display-3" @click="isOpen = !isOpen">{{ title }}</h1>
          <!-- <PlaylistsView /> -->

          <AlbumSearchView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
