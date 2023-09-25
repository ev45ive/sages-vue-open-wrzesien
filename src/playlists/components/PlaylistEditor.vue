<template>
  <div>
    <pre>{{ playlist }}</pre>
    <pre>{{ draft }}</pre>

    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="playlistName" class="form-label">Name</label>

        <input
          type="text"
          class="form-control"
          id="playlistName"
          v-model="draft.name"
        />

        <div class="form-text text-muted float-end">
          {{ draft.name.length }} / 100
        </div>
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="playlistPublic"
          v-model="draft.public"
        />
        <label class="form-check-label" for="playlistPublic">Public</label>
      </div>
      <div class="mb-3">
        <label for="playlistDescription" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="playlistDescription"
          rows="3"
          v-model="draft.description"
        ></textarea>
      </div>

      <button class="btn btn-danger" @click="$emit('cancel')">Cancel</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Playlist } from "../../common/model/Playlist";

const { playlist } = defineProps<{
  playlist?: Playlist;
}>();

const draft = ref<Playlist>(
  playlist
    ? { ...playlist }
    : {
        id: "",
        name: "",
        description: "",
        public: false,
      }
);

// TODO: Watch - create draft from current playlist

const $emit = defineEmits<{
  (e: "cancel"): void;
  (e: "save", p: Playlist): void;
}>();

const submit = () => {
  $emit("save", {
    ...playlist,
    ...draft.value,
  });
};
</script>

<style scoped></style>
