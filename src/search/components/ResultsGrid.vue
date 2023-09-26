<template>
  <div>
    <div class="row row-cols-1 row-cols-sm-4 g-0">
      <div class="col" v-for="album of 5">
        <AlbumCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AlbumCard from "./AlbumCard.vue";
</script>

<style scoped></style>
