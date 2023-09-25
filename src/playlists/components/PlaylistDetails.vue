<template>
  <div v-if="playlist">
    <dl :id="'playlist_' + playlist.id" :title="playlist.name">
      <dt>Name</dt>
      <dd>{{ playlist.name }}</dd>

      <dt>Public</dt>
      <dd :class="{ isPublic: playlist.public, isPrivate: !playlist.public }">
        {{ playlist.public ? "Yes" : "No" }}
      </dd>

      <dt>Description</dt>
      <dd>{{ playlist.description }}</dd>
    </dl>

    <button class="btn btn-primary" @click="$emit('edit', playlist.id)">
      Edit
    </button>
  </div>
  <p v-else class="alert alert-info">No playlist selected</p>
</template>

<script lang="ts" setup>
import { Playlist } from "../../common/model/Playlist";

defineProps<{
  playlist?: Playlist;
}>();

defineEmits<{
  (e: "edit", id: Playlist["id"]): void;
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
