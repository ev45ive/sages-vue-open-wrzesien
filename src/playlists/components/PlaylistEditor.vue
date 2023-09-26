d
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
          ref="playlistNameRef"
          v-model="draft.name"
        />
        {{ focused && "focused!" }}
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
import { ref, defineProps, defineEmits } from "vue";
import { Playlist } from "../../common/model/Playlist";
import { useFocus } from "../../common/composables/useFocus";
import { useDraftFrom } from "../../common/composables/useDraftFrom";

const props = defineProps<{
  playlist?: Playlist;
}>();

const $emit = defineEmits<{
  (e: "cancel"): void;
  (e: "save", p: Playlist): void;
}>();

const playlistNameRef = ref<HTMLInputElement>();

const { focused } = useFocus(playlistNameRef, { initialValue: true });

const draft = useDraftFrom(() => props.playlist, {
  id: "",
  name: "",
  description: "",
  public: false,
});

const submit = () => $emit("save", draft.value);
</script>

<style scoped></style>
