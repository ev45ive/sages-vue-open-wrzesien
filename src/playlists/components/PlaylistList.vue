<template>
  <div>
    <div class="list-group">
      <button
        v-for="(playlist, index) of playlists"
        :key="playlist.id"
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: playlist.id === selectedId }"
        @click="select(playlist.id)"
        @keyup.enter="select(playlist.id)"
        @keyup.delete="$emit('remove', playlist.id)"
      >
        <span>{{ index + 1 }}. {{ playlist.name }}</span>
        <span class="close float-end" @click.stop="$emit('remove', playlist.id)"
          >&times;</span
        >
      </button>
    </div>
    <p class="text-center text-muted" v-if="!playlists.length">No playlists</p>
  </div>
</template>

<script lang="ts" setup>
import { Playlist } from "../../common/model/Playlist";

defineProps<{
  playlists: Playlist[];
  selectedId?: Playlist["id"];
}>();

const $emit = defineEmits<{
  (e: "select", payload: string): void;
  (e: "remove", payload: Playlist["id"]): void;
}>();

const select = (id: string) => {
  $emit("select", id);
};
</script>

<style scoped></style>
