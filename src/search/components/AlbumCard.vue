<template>
  <div
    class="card"
    @click="push({ name: 'AlbumDetails', params: { albumId: album.id } })"
  >
    <img :src="album.images[0].url" class="card-img-top" :alt="album.name" />
    <div class="card-body">
      <h5 class="card-title">{{ album.name }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Album } from "../../common/model/Album";
import { useRouter } from "vue-router";

const { push } = useRouter();

defineProps<{
  album: Album;
}>();
</script>

<style scoped></style>
