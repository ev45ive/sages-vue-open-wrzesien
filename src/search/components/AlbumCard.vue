<template>
  <div class="card">
    <img :src="album.images[0].url" class="card-img-top" :alt="album.name" />
    <div class="card-body">
      <h5 class="card-title">{{ album.name }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Album } from "../../common/model/Album";

defineProps<{
  album: Album;
}>();
</script>

<style scoped></style>
