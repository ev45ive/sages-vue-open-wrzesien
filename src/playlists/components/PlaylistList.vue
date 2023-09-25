<template>
  <div>
    <div class="list-group">
      <button
        v-for="(playlist, index) of playlists" :key="playlist.id"
        type="button"
        class="list-group-item list-group-item-action"
      >
        {{ index + 1 }}. {{ playlist.name }}
        <input/>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const playlists = ref([
  {
    id: "123",
    name: "Playlist A",
    public: true,
    description: "Best playlist",
  },
  {
    id: "234",
    name: "Playlist B",
    public: false,
    description: "Awesome playlist",
  },
  {
    id: "345",
    name: "Playlist C",
    public: true,
    description: "Cool playlist",
  },
]);


setInterval(()=>{
    playlists.value.push(playlists.value.shift()!)
},1000)

</script>

<style scoped></style>
