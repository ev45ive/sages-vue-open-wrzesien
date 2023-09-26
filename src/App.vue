<script setup lang="ts">
import { ref } from "vue";
import PlaylistsView from "./playlists/containers/PlaylistsView.vue";

const title = "MusicApp";
const isOpen = ref(false);
</script>

<template>
  <div>
    {{ isOpen }}
    <!-- .container>.row>.col -->
    <div class="container" v-once>
      <div class="row">
        <div class="col">
          <h1 class="display-3" @click="isOpen = !isOpen">{{ title }}</h1>
          <PlaylistsView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
