<template>
  <div>
    <div class="list-group">
      <button
        v-for="(playlist, index) of playlists"
        :key="playlist.id"
        type="button"
        class="list-group-item list-group-item-action active"
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
const selectedId = "234";

const select = (id: string) => {
  // TODO: change selection
};


</script>

<style scoped></style>
