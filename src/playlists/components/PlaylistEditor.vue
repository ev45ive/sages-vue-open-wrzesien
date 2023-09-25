<template>
  <div>
    <pre>{{ playlist }}</pre>

    <form>
      <div class="mb-3">
        <label for="playlistName" class="form-label">Name</label>

        <input
          type="text"
          class="form-control"
          id="playlistName"
          v-model="playlist.name"
        />

        <div class="form-text text-muted float-end">
          {{ playlist.name.length }} / 100
        </div>
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="playlistPublic"
          v-model="playlist.public"
        />
        <label class="form-check-label" for="playlistPublic">Public</label>
      </div>
      <div class="mb-3">
        <label for="playlistDescription" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="playlistDescription"
          rows="3"
          v-model="playlist.description"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { Playlist } from '../../common/model/Playlist';


defineProps<{
  playlist: Playlist;
}>();

</script>

<style scoped></style>
