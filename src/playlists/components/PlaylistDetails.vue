<template>
  <div>
    <dl v-bind:id="'playlist_' + playlist.id" :title="playlist.name">
      <dt>Name</dt>
      <dd>{{ playlist.name }}</dd>

      <dt>Public</dt>
      <dd :class="{ isPublic: playlist.public, isPrivate: !playlist.public }">
        {{ playlist.public ? "Yes" : "No" }}
      </dd>

      <dt>Description</dt>
      <dd>{{ playlist.description }}</dd>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import { Playlist } from "../../common/model/Playlist";

defineProps<{
  playlist: Playlist;
}>();


</script>

<style scoped>
.isPublic {
  color: red;
}
.isPrivate {
  color: green;
}
</style>
