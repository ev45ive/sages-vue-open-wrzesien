<template>
  <div>
    <div class="row row-cols-1 row-cols-sm-4 g-0">
      <div class="col" v-for="album of albums" :key="album.id">
        <AlbumCard :album="album" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Album } from "../../common/model/Album";
import AlbumCard from "./AlbumCard.vue";

defineProps<{
  albums: Album[];
}>();
</script>

<style scoped></style>
