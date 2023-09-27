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

          v-bind:a=" name.a "
          v-bind:b=" name.b "
          v-bind:c=" name.c "
          v-bind:d=" name.d "

          v-bind="{value: name.value, id:'test',class:'placki'}"
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
import { ref, defineProps, defineEmits, computed } from "vue";
import { Playlist } from "../../common/model/Playlist";
import { useFocus } from "../../common/composables/useFocus";
import { useDraftFrom } from "../../common/composables/useDraftFrom";
import { EMPTY_PLAYLIST } from "../../common/EMPTY_PLAYLIST";

const props = defineProps<{
  playlist?: Playlist;
}>();

const $emit = defineEmits<{
  (e: "cancel"): void;
  (e: "save", p: Playlist): void;
}>();

const playlistNameRef = ref<HTMLInputElement>();

const { focused } = useFocus(playlistNameRef, { initialValue: true });

import { useForm } from "vee-validate";

const { values: draft, defineInputBinds } = useForm({
  initialValues: props.playlist,
});

const name = defineInputBinds("name");

const submit = () => $emit("save", draft);
</script>

<style scoped></style>
