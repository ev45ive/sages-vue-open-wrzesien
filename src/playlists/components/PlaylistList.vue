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
    <p class="text-center text-muted" v-if="!playlists.length">No playlists</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Playlist } from "../../common/model/Playlist";
const playlists = ref<Playlist[]>([]);
const selectedId = ref("234");

const select = (id: string) => {
  selectedId.value = id;
};

// function a(id: string | number) {
//   if (typeof id === "string") {
//     id.toLocaleLowerCase();
//   } else if (typeof id === "number") {
//     id.toExponential();
//   } else {
//     id // never
//     throw new Error('Not supported ID type!')
//   }
// }
</script>

<style scoped></style>
