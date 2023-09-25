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
          :checked="playlist.public"
        />
        <label class="form-check-label" for="playlistPublic">Public</label>
      </div>
      <div class="mb-3">
        <label for="playlistDescription" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="playlistDescription"
          rows="3"
          :value="playlist.description"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      playlist: {
        id: "123",
        name: "Playlist 123",
        public: true,
        description: "Best playlist",
      },
    };
  },
});
</script>

<style scoped></style>
