<template>
  <div>
    <!-- 
        for(let index in items)
        for(let item of items)
         
        v-for="playlist of playlists"
        v-for="playlist, index) of playlists"

        <div v-for="(value, key, index) of playlist">
          {{ index }} {{ key }}:{{ value }}
        </div>
    -->

    <div class="list-group">
      <button
        v-for="(playlist, index) of playlists"
        type="button"
        class="list-group-item list-group-item-action"
      >
        {{ index + 1 }}. {{ playlist.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const playlists = ref([
  {
    id: "123",
    name: "Playlist 123",
    public: true,
    description: "Best playlist",
  },
  {
    id: "234",
    name: "Playlist 234",
    public: false,
    description: "Awesome playlist",
  },
  {
    id: "345",
    name: "Playlist 345",
    public: true,
    description: "Cool playlist",
  },
]);
</script>

<style scoped></style>
