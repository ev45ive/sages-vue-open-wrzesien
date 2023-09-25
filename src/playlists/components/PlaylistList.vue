<template>
  <div>
    <div class="list-group">
      <!-- :class="["list-group-item list-group-item-action",{ active: playlist.id === selectedId }]" -->
      <button
        v-for="(playlist, index) of playlists"
        :key="playlist.id"
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: playlist.id === selectedId }"
        @click="select(playlist.id)"
      >
        {{ index + 1 }}. {{ playlist.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { mockPlaylists } from "./mockPlaylists";

const playlists = ref(mockPlaylists);
const selectedId = ref("234");

const select = (id: string) => {
  selectedId.value = id;
};
</script>

<style scoped></style>
